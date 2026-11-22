import "dotenv/config";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import express, { type NextFunction, type Request, type Response } from "express";
import multer from "multer";
import nodemailer from "nodemailer";

const PORT = Number(process.env.PORT) || 3000;
const IS_PROD = process.env.NODE_ENV === "production";
const ROOT_DIR = process.cwd();
const DATA_DIR = path.resolve(ROOT_DIR, "data");
const UPLOADS_DIR = path.resolve(DATA_DIR, "uploads");
const ENQUIRIES_FILE = path.resolve(DATA_DIR, "enquiries.json");

const DEFAULT_RECIPIENT = "teamshezino@gmail.com";
const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_MIME_EXTENSIONS: Record<string, string> = {
  "application/pdf": ".pdf",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
};

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: MAX_RESUME_BYTES,
    files: 1,
  },
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname || "").toLowerCase();
    const expectedExt = ALLOWED_MIME_EXTENSIONS[file.mimetype];
    if (!expectedExt || (ext && ![".pdf", ".doc", ".docx"].includes(ext))) {
      cb(new Error("Please upload a PDF, DOC, or DOCX file (max 5 MB)."));
      return;
    }
    cb(null, true);
  },
});

interface EnquiryRecord {
  id: string;
  createdAt: string;
  category: string;
  enquiryType: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  portfolioUrl: string;
  message: string;
  resumeFileName: string | null;
  storedResumePath: string | null;
  emailSent: boolean;
}

function stripHeaderBreaks(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function cleanText(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeHttpUrl(rawUrl: string): string | null {
  if (!rawUrl) return "";
  try {
    const parsed = new URL(rawUrl);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.toString();
    }
    return null;
  } catch {
    return null;
  }
}

async function saveEnquiryRecord(
  record: EnquiryRecord,
  resumeFile?: Express.Multer.File
): Promise<void> {
  await fs.mkdir(UPLOADS_DIR, { recursive: true });

  if (resumeFile && resumeFile.buffer.length > 0) {
    const ext = ALLOWED_MIME_EXTENSIONS[resumeFile.mimetype] || ".pdf";
    const safeFilename = `${record.id}${ext}`;
    const resolvedUploadPath = path.resolve(UPLOADS_DIR, safeFilename);
    if (resolvedUploadPath.startsWith(UPLOADS_DIR + path.sep)) {
      await fs.writeFile(resolvedUploadPath, resumeFile.buffer);
      record.storedResumePath = safeFilename;
    }
  }

  let existing: EnquiryRecord[] = [];
  try {
    const raw = await fs.readFile(ENQUIRIES_FILE, "utf8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      existing = parsed;
    }
  } catch {
    existing = [];
  }

  existing.push(record);
  await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(existing, null, 2), "utf8");
}

function normalizeSecret(raw: string | undefined, stripSpaces = false): string {
  if (!raw) return "";
  const cleaned = raw.trim().replace(/^["']|["']$/g, "").trim();
  return stripSpaces ? cleaned.replace(/\s+/g, "") : cleaned;
}

function createMailTransport() {
  const smtpHost = normalizeSecret(process.env.SMTP_HOST);
  const smtpPort = Number(normalizeSecret(process.env.SMTP_PORT)) || 587;
  const smtpUser = normalizeSecret(process.env.SMTP_USER);
  const smtpPass = normalizeSecret(process.env.SMTP_PASS);

  if (smtpHost && smtpUser && smtpPass) {
    return {
      senderAddress: smtpUser,
      transporter: nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      }),
    };
  }

  const gmailUser = normalizeSecret(process.env.GMAIL_USER, true);
  const gmailPass = normalizeSecret(process.env.GMAIL_APP_PASSWORD, true);
  if (gmailUser && gmailPass) {
    return {
      senderAddress: gmailUser,
      transporter: nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      }),
    };
  }

  return null;
}

async function sendEnquiryEmail(
  record: EnquiryRecord,
  resumeFile?: Express.Multer.File
): Promise<boolean> {
  const mailConfig = createMailTransport();
  if (!mailConfig) {
    return false;
  }

  const recipient =
    normalizeSecret(process.env.CONTACT_RECIPIENT_EMAIL) ||
    mailConfig.senderAddress ||
    DEFAULT_RECIPIENT;

  const safeSubjectType = stripHeaderBreaks(record.enquiryType || record.category);
  const safeSenderName = stripHeaderBreaks(record.name);
  const safeReplyTo = stripHeaderBreaks(record.email);

  const textLines = [
    `New SHEZINO Website Enquiry (${record.id})`,
    `Submitted: ${record.createdAt}`,
    "",
    `Category: ${record.category}`,
    `Enquiry Type: ${record.enquiryType}`,
    `Name: ${record.name}`,
    `Email: ${record.email}`,
    record.phone ? `Phone: ${record.phone}` : null,
    record.organization ? `Organization / Campus: ${record.organization}` : null,
    record.portfolioUrl ? `Portfolio / Link: ${record.portfolioUrl}` : null,
    record.resumeFileName ? `Attached Resume: ${record.resumeFileName}` : null,
    "",
    "Message:",
    record.message,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  const htmlRows: Array<[string, string]> = [
    ["Category", record.category],
    ["Enquiry Type", record.enquiryType],
    ["Name", record.name],
    ["Email", record.email],
  ];
  if (record.phone) htmlRows.push(["Phone", record.phone]);
  if (record.organization) htmlRows.push(["Organization", record.organization]);
  if (record.portfolioUrl) htmlRows.push(["Portfolio", record.portfolioUrl]);
  if (record.resumeFileName) htmlRows.push(["Resume", record.resumeFileName]);

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #0b1630; max-width: 640px;">
      <h2 style="color: #015eed; margin-bottom: 12px;">New SHEZINO Enquiry</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 18px;">
        ${htmlRows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 8px 10px; border: 1px solid #d9e5f7; font-weight: bold; width: 150px; background: #f5f9ff;">${escapeHtml(label)}</td>
            <td style="padding: 8px 10px; border: 1px solid #d9e5f7;">${escapeHtml(value)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <div style="padding: 14px; border: 1px solid #d9e5f7; background: #f9fbff; white-space: pre-wrap;">${escapeHtml(record.message)}</div>
    </div>
  `;

  const attachments =
    resumeFile && resumeFile.buffer.length > 0
      ? [
          {
            filename: path.basename(resumeFile.originalname || "resume.pdf"),
            content: resumeFile.buffer,
            contentType: resumeFile.mimetype,
          },
        ]
      : [];

  await mailConfig.transporter.sendMail({
    from: `"SHEZINO Website" <${mailConfig.senderAddress}>`,
    to: recipient,
    replyTo: safeReplyTo,
    subject: `[SHEZINO Enquiry] ${safeSubjectType} — ${safeSenderName}`,
    text: textLines,
    html: htmlBody,
    attachments,
  });

  return true;
}

async function startServer() {
  const app = express();
  app.disable("x-powered-by");

  app.post("/api/contact", (req: Request, res: Response) => {
    upload.single("resume")(req, res, async (uploadErr: unknown) => {
      if (uploadErr) {
        const message =
          uploadErr instanceof multer.MulterError &&
          uploadErr.code === "LIMIT_FILE_SIZE"
            ? "Your uploaded file must be smaller than 5 MB."
            : uploadErr instanceof Error
              ? uploadErr.message
              : "Invalid file upload.";
        res.status(400).json({ ok: false, error: message });
        return;
      }

      try {
        const body = req.body as Record<string, unknown>;
        const name = cleanText(body.name, 100);
        const email = stripHeaderBreaks(cleanText(body.email, 254));
        const phone = cleanText(body.phone, 20);
        const organization = cleanText(body.organization, 140);
        const category = cleanText(body.category, 100) || "General Enquiry";
        const enquiryType = cleanText(body.enquiryType, 120) || category;
        const rawPortfolioUrl = cleanText(body.portfolioUrl, 300);
        const message = cleanText(body.message, 5000);

        if (name.length < 2) {
          res.status(400).json({
            ok: false,
            error: "Please enter your full name (at least 2 characters).",
          });
          return;
        }

        if (!isValidEmail(email)) {
          res.status(400).json({
            ok: false,
            error: "Please enter a valid email address.",
          });
          return;
        }

        if (message.length < 5) {
          res.status(400).json({
            ok: false,
            error: "Please share a brief message about your requirement.",
          });
          return;
        }

        const sanitizedPortfolioUrl = sanitizeHttpUrl(rawPortfolioUrl);
        if (rawPortfolioUrl && sanitizedPortfolioUrl === null) {
          res.status(400).json({
            ok: false,
            error: "Portfolio link must be a valid http or https URL.",
          });
          return;
        }

        const record: EnquiryRecord = {
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          category,
          enquiryType,
          name,
          email,
          phone,
          organization,
          portfolioUrl: sanitizedPortfolioUrl || "",
          message,
          resumeFileName: req.file?.originalname
            ? path.basename(req.file.originalname)
            : null,
          storedResumePath: null,
          emailSent: false,
        };

        try {
          record.emailSent = await sendEnquiryEmail(record, req.file);
        } catch (mailError) {
          const msg = mailError instanceof Error ? mailError.message : "";
          if (msg.includes("534-5.7.9") || msg.includes("Application-specific password")) {
            console.warn(
              "[contact-mail] Gmail rejected login (534-5.7.9): GMAIL_APP_PASSWORD must be a 16-character Google App Password generated with 2-Step Verification enabled."
            );
          } else {
            console.warn(
              "[contact-mail] Email notification could not be dispatched; enquiry saved locally."
            );
          }
          record.emailSent = false;
        }

        await saveEnquiryRecord(record, req.file);

        res.status(200).json({
          ok: true,
          id: record.id,
          emailSent: record.emailSent,
        });
      } catch (err) {
        console.error("Error handling /api/contact submission:", err);
        res.status(500).json({
          ok: false,
          error: "Unable to process your enquiry right now. Please try again shortly.",
        });
      }
    });
  });

  if (!IS_PROD) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(ROOT_DIR, "dist");
    app.use(express.static(distDir));
    app.use((_req: Request, res: Response, _next: NextFunction) => {
      res.sendFile(path.join(distDir, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SHEZINO server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
