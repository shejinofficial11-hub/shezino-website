import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./Legal.css";

export default function Terms() {
  return (
    <div className="sz-legal-page">
      <section className="sz-legal-hero">
        <div className="sz-container">
          <span className="sz-eyebrow">Legal Documentation — Updated 2026</span>
          <h1>Terms of Use</h1>
          <p>
            General terms governing use of the SHEZINO website, capability
            outlines, engineering engagements, and SHEZINO Labs pilot platforms.
          </p>
        </div>
      </section>

      <section className="sz-legal-body">
        <div className="sz-container sz-legal-content">
          <article className="sz-legal-section">
            <h2>1. Website Information &amp; Service Scope</h2>
            <p>
              Service descriptions, capability summaries, and architecture
              examples published on this website are provided for general
              informational clarity. Exact engineering deliverables, milestones,
              support SLAs, and commercial pricing are established separately in
              mutually executed written agreements.
            </p>
          </article>

          <article className="sz-legal-section">
            <h2>2. SHEZINO Labs Platforms &amp; Pilots</h2>
            <p>
              Platforms developed within SHEZINO Labs — including{" "}
              <strong>SHEZINO Connect</strong>,{" "}
              <strong>SHEZINO Acadex</strong>,{" "}
              <strong>SHEZINO Vitalis</strong>, and{" "}
              <strong>SHEZINO Learnix</strong> — are currently in active
              engineering and early pilot stages. Institutional rollout terms,
              deployment schedules, and pilot access are arranged individually
              with partner organizations.
            </p>
          </article>

          <article className="sz-legal-section">
            <h2>3. Brand &amp; Intellectual Property</h2>
            <p>
              All SHEZINO trademarks, wordmarks, visual designs, written copy,
              and software architectures displayed across this domain are the
              property of SHEZINO (registered under MSME UDYAM-TN-02-0468670 and
              StartupTN STN98658) and may not be copied or redistributed for
              misrepresentation without prior written permission.
            </p>
          </article>

          <article className="sz-legal-section">
            <h2>4. External Links &amp; Limitation of Liability</h2>
            <p>
              This website contains links to external official profiles and
              partner platforms. SHEZINO is not responsible for the independent
              content or uptime of external third-party domains. To the fullest
              extent permitted by law, website materials are offered as-is.
            </p>
          </article>

          <article className="sz-legal-section">
            <h2>5. Governing Law &amp; Official Contact</h2>
            <p>
              These terms are governed by the laws of India, with jurisdiction
              in Chennai, Tamil Nadu. For formal agreements, MoUs, or legal
              notices, please contact{" "}
              <a href="mailto:teamshezino@gmail.com">teamshezino@gmail.com</a>.
            </p>
          </article>

          <div className="sz-legal-actions">
            <Link to="/" className="sz-legal-back">
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
            <Link to="/privacy" className="sz-legal-back">
              <span>Privacy &amp; Cookie Policy</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
