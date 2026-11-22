import crypto from "node:crypto";
import type { IncomingMessage, ServerResponse } from "node:http";
import path from "node:path";
import type { Request, Response } from "express";
import multer from "multer";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

type VercelRequest = IncomingMessage & {
  method?: string;
  body?: Record<string, unknown>;
  file?: Express.Multer.File;
};

type VercelResponse = ServerResponse & {
  status: (statusCode: number) => VercelResponse;
  json: (data: unknown) => VercelResponse;
};

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

function runMulter(req: VercelRequest, res: VercelResponse): Promise<void> {
  return new Promise((resolve, reject) => {
    upload.single("resume")(
      req as unknown as Request,
      res as unknown as Response,
      (err: unknown) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      }
    );
  });
}

function sendJson(res: VercelResponse, statusCode: number, payload: unknown) {
  if (typeof res.status === "function" && typeof res.json === "function") {
    res.status(statusCode).json(payload);
    return;
  }
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    sendJson(res, 405, { ok: false, error: "Method not allowed." });
    return;
  }

  try {
    await runMulter(req, res);
  } catch (uploadErr) {
    const message =
      uploadErr instanceof multer.MulterError &&
      uploadErr.code === "LIMIT_FILE_SIZE"
        ? "Your uploaded file must be smaller than 5 MB."
        : uploadErr instanceof Error
          ? uploadErr.message
          : "Invalid file upload.";
    sendJson(res, 400, { ok: false, error: message });
    return;
  }

  try {
    const body = (req.body || {}) as Record<string, unknown>;
    const name = cleanText(body.name, 100);
    const email = stripHeaderBreaks(cleanText(body.email, 254));
    const phone = cleanText(body.phone, 20);
    const organization = cleanText(body.organization, 140);
    const category = cleanText(body.category, 100) || "General Enquiry";
    const enquiryType = cleanText(body.enquiryType, 120) || category;
    const rawPortfolioUrl = cleanText(body.portfolioUrl, 300);
    const message = cleanText(body.message, 5000);

    if (name.length < 2) {
      sendJson(res, 400, {
        ok: false,
        error: "Please enter your full name (at least 2 characters).",
      });
      return;
    }

    if (!isValidEmail(email)) {
      sendJson(res, 400, {
        ok: false,
        error: "Please enter a valid email address.",
      });
      return;
    }

    if (message.length < 5) {
      sendJson(res, 400, {
        ok: false,
        error: "Please share a brief message about your requirement.",
      });
      return;
    }

    const sanitizedPortfolioUrl = sanitizeHttpUrl(rawPortfolioUrl);
    if (rawPortfolioUrl && sanitizedPortfolioUrl === null) {
      sendJson(res, 400, {
        ok: false,
        error: "Portfolio link must be a valid http or https URL.",
      });
      return;
    }

    const mailConfig = createMailTransport();
    if (!mailConfig) {
      console.warn("[contact-mail] Mail environment variables are not configured.");
      sendJson(res, 503, {
        ok: false,
        error:
          "Email delivery is currently unavailable. Please write directly to teamshezino@gmail.com.",
      });
      return;
    }

    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const resumeFile = req.file;
    const resumeFileName = resumeFile?.originalname
      ? path.basename(resumeFile.originalname)
      : null;

    const recipient =
      normalizeSecret(process.env.CONTACT_RECIPIENT_EMAIL) ||
      mailConfig.senderAddress ||
      DEFAULT_RECIPIENT;

    const safeSubjectType = stripHeaderBreaks(enquiryType || category);
    const safeSenderName = stripHeaderBreaks(name);
    const safeReplyTo = stripHeaderBreaks(email);

    const textLines = [
      `New SHEZINO Website Enquiry (${id})`,
      `Submitted: ${createdAt}`,
      "",
      `Category: ${category}`,
      `Enquiry Type: ${enquiryType}`,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      organization ? `Organization / Campus: ${organization}` : null,
      sanitizedPortfolioUrl ? `Portfolio / Link: ${sanitizedPortfolioUrl}` : null,
      resumeFileName ? `Attached Resume: ${resumeFileName}` : null,
      "",
      "Message:",
      message,
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

    const htmlRows: Array<[string, string]> = [
      ["Category", category],
      ["Enquiry Type", enquiryType],
      ["Name", name],
      ["Email", email],
    ];
    if (phone) htmlRows.push(["Phone", phone]);
    if (organization) htmlRows.push(["Organization", organization]);
    if (sanitizedPortfolioUrl) htmlRows.push(["Portfolio", sanitizedPortfolioUrl]);
    if (resumeFileName) htmlRows.push(["Resume", resumeFileName]);

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
        <div style="padding: 14px; border: 1px solid #d9e5f7; background: #f9fbff; white-space: pre-wrap;">${escapeHtml(message)}</div>
      </div>
    `;

    const attachments =
      resumeFile && resumeFile.buffer.length > 0
        ? [
            {
              filename: resumeFileName || "resume.pdf",
              content: resumeFile.buffer,
              contentType: resumeFile.mimetype,
            },
          ]
        : [];

    try {
      await mailConfig.transporter.sendMail({
        from: `"SHEZINO Website" <${mailConfig.senderAddress}>`,
        to: recipient,
        replyTo: safeReplyTo,
        subject: `[SHEZINO Enquiry] ${safeSubjectType} — ${safeSenderName}`,
        text: textLines,
        html: htmlBody,
        attachments,
      });
    } catch (mailError) {
      const msg = mailError instanceof Error ? mailError.message : "";
      if (msg.includes("534-5.7.9") || msg.includes("Application-specific password")) {
        console.warn(
          "[contact-mail] Gmail rejected login (534-5.7.9): GMAIL_APP_PASSWORD must be a 16-character Google App Password."
        );
      } else {
        console.warn("[contact-mail] SMTP email dispatch failed.");
      }
      sendJson(res, 502, {
        ok: false,
        error:
          "Unable to send your enquiry right now. Please write directly to teamshezino@gmail.com.",
      });
      return;
    }

    sendJson(res, 200, {
      ok: true,
      id,
      emailSent: true,
    });
  } catch {
    console.warn("[contact-mail] Unexpected error handling /api/contact.");
    sendJson(res, 500, {
      ok: false,
      error: "Unable to process your enquiry right now. Please try again shortly.",
    });
  }
}
