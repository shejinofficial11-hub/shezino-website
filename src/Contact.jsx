import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  Copy,
  Mail,
  MapPin,
  Paperclip,
  Phone,
  X,
} from "lucide-react";
import {
  ENQUIRY_CATEGORIES,
  resolveEnquiryFromParams,
} from "./data/enquiryCatalog";
import contactAvatarImg from "./assets/images/contact_youth_builder_v2_1794945541786.jpg";
import "./Contact.css";

const CONTACT_EMAIL = "teamshezino@gmail.com";
const CONTACT_PHONE = "+91 81220 70765";
const WHATSAPP_URL = "https://wa.me/918122070765";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    handle: "@shezinohq",
    url: "https://www.instagram.com/shezinohq?exln=MWZhYXU0cnpxYjN1ZA==",
  },
  {
    name: "LinkedIn",
    handle: "SHEZINO",
    url: "https://www.linkedin.com/company/shezinohq/home/?viewAsMember=true",
  },
  {
    name: "YouTube",
    handle: "@shezino-07",
    url: "https://youtube.com/@shezino-07?si=QzpqRrmd-11mUoyu",
  },
];

const AVATAR_POSES = {
  idle: { y: 0, rotate: 0, scale: 1 },
  engaged: { y: -4, rotate: -1.8, scale: 1.03 },
  typing: { y: -5, rotate: 1.8, scale: 1.04 },
  success: { y: -8, rotate: -2.4, scale: 1.06 },
};

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialResolution = resolveEnquiryFromParams(
    searchParams.get("category"),
    searchParams.get("topic"),
    searchParams.get("subject")
  );

  const [categoryId, setCategoryId] = useState(initialResolution.category);
  const [enquiryTopic, setEnquiryTopic] = useState(initialResolution.topic);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);
  const [copiedKey, setCopiedKey] = useState("");
  const [resumeFileName, setResumeFileName] = useState("");
  const [avatarPose, setAvatarPose] = useState("idle");
  const [avatarFailed, setAvatarFailed] = useState(false);

  const resumeInputRef = useRef(null);

  useEffect(() => {
    const resolved = resolveEnquiryFromParams(
      searchParams.get("category"),
      searchParams.get("topic"),
      searchParams.get("subject")
    );
    setCategoryId(resolved.category);
    setEnquiryTopic(resolved.topic);
  }, [searchParams]);

  const handleCopy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(""), 2000);
    } catch {
      setCopiedKey("");
    }
  };

  const activeCategory =
    ENQUIRY_CATEGORIES.find((item) => item.id === categoryId) ||
    ENQUIRY_CATEGORIES[0];

  const isCareersCategory = activeCategory.id === "careers";

  const currentPose =
    status.type === "success"
      ? AVATAR_POSES.success
      : AVATAR_POSES[avatarPose] || AVATAR_POSES.idle;

  const handleCategorySwitch = (nextId) => {
    const matched =
      ENQUIRY_CATEGORIES.find((item) => item.id === nextId) ||
      ENQUIRY_CATEGORIES[0];
    setCategoryId(matched.id);
    setEnquiryTopic(matched.topics[0]);
    setStatus({ type: "", message: "" });
    setAvatarPose("engaged");
  };

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];
    setResumeFileName(file ? file.name : "");
    setAvatarPose("engaged");
  };

  const clearResumeFile = () => {
    if (resumeInputRef.current) {
      resumeInputRef.current.value = "";
    }
    setResumeFileName("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const resume = formData.get("resume");
    const senderName = String(formData.get("name") || "").trim();

    if (resume instanceof File && resume.size > 0) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(resume.type)) {
        setStatus({
          type: "error",
          message: "Please upload a PDF, DOC, or DOCX file.",
        });
        return;
      }

      if (resume.size > 5 * 1024 * 1024) {
        setStatus({
          type: "error",
          message: "Your uploaded file must be smaller than 5 MB.",
        });
        return;
      }
    }

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.ok) {
        setStatus({
          type: "error",
          message:
            payload?.error ||
            "Unable to submit your enquiry right now. Please check your details and try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: `Thank you for reaching out to SHEZINO${
          senderName ? `, ${senderName}` : ""
        }. Your enquiry has been received. Our team will review the details and get in touch with you.`,
      });
      form.reset();
      setResumeFileName("");
      setAvatarPose("idle");
    } catch {
      setStatus({
        type: "error",
        message:
          "Network error while sending your enquiry. Please check your connection and try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="sz-contact">
      {/* 01. CLEAN COMPACT OBSIDIAN EDITORIAL BANNER */}
      <section className="sz-contact-hero">
        <div className="sz-contact-hero-grid" aria-hidden="true" />
        <div className="sz-contact-hero-glow" aria-hidden="true" />

        <div className="sz-contact-hero-inner">
          <span className="sz-eyebrow sz-contact-eyebrow">
            Let&apos;s Connect
          </span>

          <h1>
            Every Great Collaboration Starts With{" "}
            <span className="sz-contact-highlight">a Conversation.</span>
          </h1>

          <p className="sz-contact-hero-lead">
            Have a project in mind, a challenge to solve, or an idea worth
            exploring? Connect with SHEZINO to discuss technology solutions,
            product enquiries, business opportunities, or potential
            collaborations.
          </p>
        </div>
      </section>

      {/* 02. STICKY CONTACT CHANNELS + ADAPTIVE FORM WITH 21YO AVATAR — PURE WHITE */}
      <section className="sz-contact-white-band" id="enquiry-form">
        <div className="sz-container sz-contact-split">
          <aside className="sz-contact-info-col">
            <span className="sz-eyebrow">Get in Touch With Us</span>
            <h2>We&apos;re Just a Conversation Away.</h2>
            <p className="sz-contact-info-intro">
              Whether you&apos;re looking to build something, explore an
              opportunity, or simply learn more about SHEZINO, our team is
              ready to connect.
            </p>

            <div className="sz-contact-channel-list">
              <div className="sz-contact-channel-row">
                <div className="sz-contact-channel-icon">
                  <Mail size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3>Email</h3>
                  <div className="sz-channel-value-bar">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="sz-contact-channel-link"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    <button
                      type="button"
                      className="sz-inline-action-btn"
                      onClick={() => handleCopy("email", CONTACT_EMAIL)}
                      aria-label="Copy official email address"
                    >
                      {copiedKey === "email" ? (
                        <>
                          <Check size={12} aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p>
                    For business enquiries, project discussions, partnerships,
                    and general communication.
                  </p>
                </div>
              </div>

              <div className="sz-contact-channel-row">
                <div className="sz-contact-channel-icon">
                  <Phone size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3>Phone &amp; WhatsApp</h3>
                  <div className="sz-channel-value-bar">
                    <a
                      href="tel:+918122070765"
                      className="sz-contact-channel-link"
                    >
                      {CONTACT_PHONE}
                    </a>
                    <button
                      type="button"
                      className="sz-inline-action-btn"
                      onClick={() => handleCopy("phone", CONTACT_PHONE)}
                      aria-label="Copy phone number"
                    >
                      {copiedKey === "phone" ? (
                        <>
                          <Check size={12} aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sz-inline-action-btn"
                    >
                      <span>WhatsApp</span>
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </a>
                  </div>
                  <p>
                    Direct calls or WhatsApp messages for quick scheduling and
                    project coordination.
                  </p>
                </div>
              </div>

              <div className="sz-contact-channel-row">
                <div className="sz-contact-channel-icon">
                  <MapPin size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3>Location</h3>
                  <strong className="sz-contact-location-label">
                    Chennai, Tamil Nadu, India.
                  </strong>
                  <p>
                    Our foundation and operations are based in Chennai, with a
                    vision to connect and collaborate beyond geographical
                    boundaries.
                  </p>
                </div>
              </div>
            </div>

            <div className="sz-contact-social-panel">
              <span className="sz-contact-social-title">Connect With Us</span>
              <div className="sz-contact-social-grid">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sz-contact-social-link"
                  >
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.handle}</span>
                    </div>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="sz-contact-trust-box">
              <div className="sz-contact-trust-head">
                <BadgeCheck size={16} aria-hidden="true" />
                <span>Verified Registrations</span>
              </div>
              <div className="sz-contact-trust-ids">
                <div>
                  <span>MSME</span>
                  <strong>UDYAM-TN-02-0468670</strong>
                </div>
                <div>
                  <span>StartupTN</span>
                  <strong>STN98658</strong>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: ADAPTIVE UNIFIED ENQUIRY FORM + ZERO-BOX 21YO AVATAR */}
          <div className="sz-contact-form-panel">
            <div className="sz-contact-form-top">
              <div className="sz-contact-form-head">
                <span className="sz-eyebrow">Tell Us What You Have in Mind</span>
                <h2>Let&apos;s Discuss Your Next Move.</h2>
                <p>
                  Share a few details about your requirements, ideas, or
                  interests. Our team will review your enquiry and get back to
                  you.
                </p>
              </div>

              {!avatarFailed && (
                <motion.div
                  className="sz-form-avatar-figure"
                  animate={{
                    y: currentPose.y,
                    rotate: currentPose.rotate,
                    scale: currentPose.scale,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 18,
                  }}
                >
                  <img
                    src={contactAvatarImg}
                    alt="Friendly 21-year-old SHEZINO builder wearing a black blazer with a SHEZINO chest badge welcoming your enquiry"
                    draggable="false"
                    referrerPolicy="no-referrer"
                    onError={() => setAvatarFailed(true)}
                  />
                </motion.div>
              )}
            </div>

            <div
              className="sz-contact-cat-tabs"
              role="tablist"
              aria-label="Enquiry category"
            >
              {ENQUIRY_CATEGORIES.map((cat) => {
                const isSelected = cat.id === categoryId;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`sz-contact-cat-tab${
                      isSelected ? " is-active" : ""
                    }`}
                    onClick={() => handleCategorySwitch(cat.id)}
                  >
                    {cat.shortLabel}
                  </button>
                );
              })}
            </div>

            <p className="sz-contact-cat-brief">{activeCategory.summary}</p>

            <form
              className="sz-contact-form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              onBlur={() => setAvatarPose("idle")}
            >
              <input type="hidden" name="category" value={activeCategory.label} />

              <div className="sz-contact-form-row">
                <div className="sz-contact-field">
                  <label htmlFor="sz-name">Full Name *</label>
                  <input
                    id="sz-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    minLength={2}
                    maxLength={100}
                    required
                    onFocus={() => setAvatarPose("engaged")}
                  />
                </div>

                <div className="sz-contact-field">
                  <label htmlFor="sz-email">Email Address *</label>
                  <input
                    id="sz-email"
                    name="email"
                    type="email"
                    placeholder="you@organization.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                    onFocus={() => setAvatarPose("engaged")}
                  />
                </div>
              </div>

              <div className="sz-contact-form-row">
                <div className="sz-contact-field">
                  <label htmlFor="sz-phone">Phone Number (Optional)</label>
                  <input
                    id="sz-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    autoComplete="tel"
                    pattern="[+]?[0-9 ()-]{7,20}"
                    maxLength={20}
                    onFocus={() => setAvatarPose("engaged")}
                  />
                </div>

                <div className="sz-contact-field">
                  <label htmlFor="sz-org">{activeCategory.orgLabel}</label>
                  <input
                    id="sz-org"
                    name="organization"
                    type="text"
                    placeholder={activeCategory.orgPlaceholder}
                    maxLength={140}
                    onFocus={() => setAvatarPose("engaged")}
                  />
                </div>
              </div>

              <div className="sz-contact-field">
                <label htmlFor="sz-topic">Enquiry Type *</label>
                <div className="sz-select-wrap">
                  <select
                    id="sz-topic"
                    name="enquiryType"
                    value={enquiryTopic}
                    onFocus={() => setAvatarPose("engaged")}
                    onChange={(e) => {
                      setEnquiryTopic(e.target.value);
                      setAvatarPose("engaged");
                    }}
                    required
                  >
                    {activeCategory.topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="sz-select-chevron"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {isCareersCategory && (
                <div className="sz-contact-form-row">
                  <div className="sz-contact-field">
                    <label htmlFor="sz-portfolio">
                      Portfolio / GitHub / LinkedIn (Optional)
                    </label>
                    <input
                      id="sz-portfolio"
                      name="portfolioUrl"
                      type="url"
                      placeholder="https://github.com/username"
                      maxLength={300}
                      onFocus={() => setAvatarPose("engaged")}
                    />
                  </div>

                  <div className="sz-contact-field">
                    <label htmlFor="sz-resume">
                      Resume / CV (Optional, PDF or DOCX)
                    </label>
                    <div className="sz-file-picker">
                      <input
                        ref={resumeInputRef}
                        id="sz-resume"
                        name="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="sz-file-input-hidden"
                        onFocus={() => setAvatarPose("engaged")}
                        onChange={handleResumeChange}
                      />
                      <label htmlFor="sz-resume" className="sz-file-trigger">
                        <Paperclip size={15} aria-hidden="true" />
                        <span className="sz-file-name">
                          {resumeFileName || "Attach PDF or DOCX (max 5 MB)"}
                        </span>
                      </label>
                      {resumeFileName && (
                        <button
                          type="button"
                          className="sz-file-clear"
                          onClick={clearResumeFile}
                          aria-label="Remove attached file"
                        >
                          <X size={14} aria-hidden="true" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="sz-contact-field">
                <label htmlFor="sz-message">
                  Tell Us About Your Requirement *
                </label>
                <textarea
                  id="sz-message"
                  name="message"
                  rows={5}
                  placeholder="Share your goals, timeline, background, or collaboration proposal..."
                  minLength={5}
                  maxLength={5000}
                  required
                  onFocus={() => setAvatarPose("typing")}
                />
              </div>

              <div className="sz-contact-submit-row">
                <button
                  className="sz-contact-submit"
                  type="submit"
                  disabled={sending}
                >
                  <span>{sending ? "Sending Enquiry..." : "Send Enquiry"}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
                <p className="sz-contact-privacy">
                  Shared directly with our team for review.
                </p>
              </div>

              {status.message && (
                <div
                  className={`sz-contact-status ${
                    status.type === "error" ? "is-error" : "is-success"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  <div className="sz-contact-status-body">
                    {status.type === "success" && (
                      <CheckCircle2 size={18} aria-hidden="true" />
                    )}
                    <span>{status.message}</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}