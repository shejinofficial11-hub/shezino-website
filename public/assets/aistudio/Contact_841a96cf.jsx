import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const SOCIAL_LINKS = {
  instagram:
    "https://www.instagram.com/shezinohq?exln=MWZhYXU0cnpxYjN1ZA==",

  youtube:
    "https://youtube.com/@shezino-07?si=QzpqRrmd-11mUoyu",

  linkedin:
    "https://www.linkedin.com/",
};

const CONTACT_EMAIL = "teamshezino@gmail.com";

function SocialIcon({ type }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="4"
          fill="currentColor"
        />
        <path d="M10 9l5 3-5 3z" fill="#ffffff" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9.5h3.8v11H3.3zm6.1 0H13v1.5h.1a4.1 4.1 0 0 1 3.7-2c4 0 4.7 2.6 4.7 5.9v5.6h-3.8v-5c0-1.2 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8v5.1H9.4z"
        />
      </svg>
    );
  }

  return null;
}

function ContactIcon({ type }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (type === "email") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg {...common}>
        <path d="M7 3h3l2 5-2 1.5a15 15 0 0 0 4.5 4.5L16 12l5 2v3c0 1.1-.9 2-2 2C10.7 19 5 13.3 5 5c0-1.1.9-2 2-2Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const resume = formData.get("resume");

    if (!(resume instanceof File) || resume.size === 0) {
      setStatus("Please select your resume before submitting.");
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(resume.type)) {
      setStatus("Please upload a PDF, DOC or DOCX resume.");
      return;
    }

    if (resume.size > 5 * 1024 * 1024) {
      setStatus("Your resume must be smaller than 5 MB.");
      return;
    }

    try {
      setSending(true);
      setStatus("");

      // Your backend must implement this endpoint.
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus(
        "Thank you! Your details have been submitted successfully."
      );

      form.reset();
    } catch {
      setStatus(
        "We couldn't submit your details. Please try again or email us directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-container contact-hero-grid">
          <div className="contact-hero-content">
            <span className="contact-eyebrow">CONTACT US</span>

            <h1>
              Let's Build{" "}
              <span className="contact-gradient">Together.</span>
            </h1>

            <p className="contact-hero-description">
              Have a question, idea, or want to collaborate?
              We'd love to hear from you.
            </p>

            <a
              href="#contact-form"
              className="contact-primary-button"
            >
              Get In Touch <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div
            className="contact-hero-art"
            aria-label="Ideas, support and partnerships"
          >
            <div className="contact-art-orb contact-art-orb-one" />
            <div className="contact-art-orb contact-art-orb-two" />

            <div className="contact-art-copy">
              <span>Ideas.</span>
              <span>Support.</span>
              <span>Partnerships.</span>
              <i />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS AND FORM */}
      <section className="contact-main" id="contact-form">
        <div className="contact-container contact-layout">
          <aside className="contact-details">
            <span className="contact-eyebrow">LET'S CONNECT</span>

            <h2>Get in Touch</h2>

            <p className="contact-details-intro">
              Tell us what you're working on. Whether it's a
              project, a question, or an opportunity to
              collaborate, we'd love to hear from you.
            </p>

          <div className="contact-detail-item">
  <div className="contact-detail-icon">
    <ContactIcon type="email" />
  </div>

  <div>
    <h3>Email</h3>
    <a href="mailto:teamshezino@gmail.com">
      teamshezino@gmail.com
    </a>
  </div>
</div>

          <div className="contact-detail-item">
  <div className="contact-detail-icon">
    <ContactIcon type="phone" />
  </div>

  <div>
    <h3>Phone</h3>
    <a href="tel:+918122070765">
      +91 81220 70765
    </a>
  </div>
</div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <ContactIcon type="location" />
              </div>

              <div>
                <h3>Location</h3>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="contact-social-block">
              <h3>Follow Us</h3>

              <div className="contact-socials">
                <a
                  className="contact-social instagram"
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Instagram"
                  title="Instagram"
                >
                  <SocialIcon type="instagram" />
                </a>

                <a
                  className="contact-social youtube"
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit YouTube"
                  title="YouTube"
                >
                  <SocialIcon type="youtube" />
                </a>

                <a
                  className="contact-social linkedin"
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn"
                  title="LinkedIn"
                >
                  <SocialIcon type="linkedin" />
                </a>
              </div>
            </div>
          </aside>

          {/* CONTACT FORM */}
          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span className="contact-eyebrow">SEND A MESSAGE</span>

              <h2>Tell us about your idea.</h2>

              <p>
                Fill in your details and attach your resume
                if you're applying for an opportunity.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="contact-form-row">
                <div className="contact-form-field">
                  <label htmlFor="contact-name">
                    Your Name *
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    minLength={2}
                    maxLength={100}
                    required
                  />
                </div>

                <div className="contact-form-field">
                  <label htmlFor="contact-phone">
                    Phone Number *
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    autoComplete="tel"
                    pattern="[+]?[0-9 ()-]{7,20}"
                    maxLength={20}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-email">
                  Email Address *
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-subject">
                  Subject *
                </label>

                <select
                  id="contact-subject"
                  name="subject"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="Project Enquiry">
                    Project Enquiry
                  </option>
                  <option value="Web Development">
                    Web Development
                  </option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="Partnership">
                    Partnership
                  </option>
                  <option value="Career Enquiry">
                    Career Enquiry
                  </option>
                  <option value="Internship Application">
                    Internship Application
                  </option>
                  <option value="Workshop Enquiry">
                    Workshop Enquiry
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-message">
                  Your Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project, skills or enquiry..."
                  minLength={5}
                  maxLength={5000}
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-resume">
                  Resume / CV
                </label>

                <input
                  id="contact-resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  aria-describedby="contact-resume-help"
                />

                <small
                  id="contact-resume-help"
                  className="contact-upload-help"
                >
                  PDF, DOC or DOCX. Maximum file size: 5 MB.
                  Required for career and internship applications.
                </small>
              </div>

              <button
                className="contact-submit"
                type="submit"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
                <span aria-hidden="true">
                  {sending ? "…" : "↗"}
                </span>
              </button>

              {status && (
                <p
                  className="contact-form-note"
                  role="status"
                  aria-live="polite"
                >
                  {status}
                </p>
              )}

              <p className="contact-privacy-note">
                Your details will be used to respond to your enquiry.
                Please don't upload sensitive personal documents.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="contact-footer">
        <div className="contact-container">
          <div className="contact-footer-inner">
            <div className="contact-footer-brand-wrap">
              <Link to="/" className="contact-footer-brand">
                <img
                  src="/shezino-logo.png"
                  alt="SHEZINO"
                />
              </Link>

              <p className="contact-footer-tagline">
                BUILD. CONNECT. DELIVER.
              </p>
            </div>

            <nav
              className="contact-footer-nav"
              aria-label="Footer navigation"
            >
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/labs">Labs</Link>
              <Link to="/team">Team</Link>
              <Link to="/opportunities">Opportunities</Link>
              <Link to="/contact">Contact</Link>
            </nav>

            <a
              className="contact-footer-email"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              Let's Talk ↗
            </a>
          </div>

          <div className="contact-footer-bottom">
            <span>
              © {new Date().getFullYear()} SHEZINO.
              All rights reserved.
            </span>

            <div className="contact-footer-socials">
              {["instagram", "youtube", "linkedin"].map((type) => (
                <a
                  key={type}
                  href={SOCIAL_LINKS[type]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={type}
                >
                  <SocialIcon type={type} />
                </a>
              ))}
            </div>

            <span>Built with purpose.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}