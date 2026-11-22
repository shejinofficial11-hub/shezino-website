import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck, Mail, MapPin, Phone } from "lucide-react";
import "./Footer.css";

const SOCIAL_LINKS = [
  {
    name: "YouTube",
    url: "https://youtube.com/@shezino-07?si=QzpqRrmd-11mUoyu",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/shezinohq?exln=MWZhYXU0cnpxYjN1ZA==",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/shezinohq/home/?viewAsMember=true",
  },
];

export default function Footer() {
  return (
    <footer className="sz-footer">
      <div className="sz-footer-main">
        <div className="sz-container">
          <div className="sz-footer-grid">
            <div className="sz-footer-brand-col">
              <Link to="/" className="sz-footer-logo-wrap" aria-label="SHEZINO Home">
                <img src="/shezino-logo.png" alt="SHEZINO — Build. Connect. Deliver." />
              </Link>

              <div className="sz-footer-credentials" aria-label="Official registrations">
                <div className="sz-footer-cred-row">
                  <BadgeCheck size={16} aria-hidden="true" />
                  <span>
                    MSME Reg: <strong>UDYAM-TN-02-0468670</strong>
                  </span>
                </div>
                <div className="sz-footer-cred-row">
                  <BadgeCheck size={16} aria-hidden="true" />
                  <span>
                    StartupTN ID: <strong>STN98658</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className="sz-footer-col">
              <h3>Company</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/team">Our Team</Link>
                </li>
                <li>
                  <Link to="/opportunities">Opportunities</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="sz-footer-col">
              <h3>Solutions &amp; Labs</h3>
              <ul>
                <li>
                  <Link to="/services">Services Overview</Link>
                </li>
                <li>
                  <Link to="/labs">SHEZINO Labs</Link>
                </li>
                <li>
                  <Link to="/contact?category=technology&topic=Web%20Development">
                    Web &amp; Mobile Platforms
                  </Link>
                </li>
                <li>
                  <Link to="/contact?category=technology&topic=Custom%20Software%20%26%20Automation">
                    Custom Software &amp; Automation
                  </Link>
                </li>
                <li>
                  <Link to="/contact?category=partnerships&topic=MoU%20%26%20Institutional%20Partnership">
                    Institutional MoUs &amp; Pilots
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sz-footer-col">
              <h3>Get in Touch</h3>
              <ul className="sz-footer-contact-list">
                <li>
                  <Mail size={15} aria-hidden="true" />
                  <a href="mailto:teamshezino@gmail.com">
                    teamshezino@gmail.com
                  </a>
                </li>
                <li>
                  <Phone size={15} aria-hidden="true" />
                  <a href="tel:+918122070765">+91 81220 70765</a>
                </li>
                <li>
                  <MapPin size={15} aria-hidden="true" />
                  <span>Chennai, Tamil Nadu, India</span>
                </li>
              </ul>

              <Link
                to="/contact?category=technology&topic=Project%20%2F%20Technology%20Solutions"
                className="sz-footer-cta"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="sz-footer-bottom-band">
        <div className="sz-container">
          <div className="sz-footer-bottom">
            <div className="sz-footer-legal">
              <span>© 2026 SHEZINO. All rights reserved.</span>
              <nav className="sz-footer-legal-links" aria-label="Legal navigation">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/privacy#cookies">Cookie Notice</Link>
                <Link to="/terms">Terms of Use</Link>
              </nav>
            </div>

            <div className="sz-footer-socials">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
