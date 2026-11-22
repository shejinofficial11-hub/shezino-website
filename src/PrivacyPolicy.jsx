import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./Legal.css";

export default function PrivacyPolicy() {
  return (
    <div className="sz-legal-page">
      <section className="sz-legal-hero">
        <div className="sz-container">
          <span className="sz-eyebrow">Legal Documentation — Updated 2026</span>
          <h1>Privacy &amp; Cookie Policy</h1>
          <p>
            How SHEZINO collects, protects, and responsibly handles information
            shared across our website, project enquiries, and recruitment pathways.
          </p>
        </div>
      </section>

      <section className="sz-legal-body">
        <div className="sz-container sz-legal-content">
          <article className="sz-legal-section">
            <h2>1. Information You Choose to Share</h2>
            <p>
              When you submit a project enquiry, institutional workshop or MoU
              request, SHEZINO Labs pilot form, or internship and career
              application, we collect only the details you directly enter — such
              as your name, email address, phone number, organization or campus
              name, project scope notes, and any portfolio links or resume
              documents you provide.
            </p>
          </article>

          <article className="sz-legal-section">
            <h2>2. How We Use Submitted Information</h2>
            <p>
              Submitted details are used strictly to evaluate project scope,
              coordinate discovery consultations, respond to institutional or
              business partnership proposals, schedule campus workshops, and
              review candidate applications. We never sell, rent, or distribute
              your personal contact records to third-party advertisers or data
              brokers.
            </p>
          </article>

          <article className="sz-legal-section">
            <h2>3. Confidentiality of Ideas &amp; Business Materials</h2>
            <p>
              Product ideas, operational workflows, institutional requirements,
              and technical briefs shared during early conversations are treated
              with strict professional confidentiality by our leadership and
              engineering team in Chennai, India. Formal non-disclosure
              agreements are available prior to detailed architecture review.
            </p>
          </article>

          <article id="cookies" className="sz-legal-section">
            <h2>4. Cookies &amp; Essential Browser Storage</h2>
            <p>
              SHEZINO does not run invasive third-party advertising trackers or
              cross-site profiling cookies. We use minimal essential browser
              storage only to maintain smooth navigation state and remember
              whether you have acknowledged our cookie notice. You may clear
              browser storage at any time via your browser settings.
            </p>
          </article>

          <article className="sz-legal-section">
            <h2>5. Data Access, Correction &amp; Removal</h2>
            <p>
              In accordance with applicable Indian data protection standards,
              you may request access to, correction of, or permanent deletion of
              any contact details or resume previously shared with SHEZINO by
              writing to{" "}
              <a href="mailto:teamshezino@gmail.com">teamshezino@gmail.com</a>{" "}
              or calling <a href="tel:+918122070765">+91 81220 70765</a>.
            </p>
          </article>

          <div className="sz-legal-actions">
            <Link to="/" className="sz-legal-back">
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
            <Link to="/terms" className="sz-legal-back">
              <span>View Terms of Use</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
