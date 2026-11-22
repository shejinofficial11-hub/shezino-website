import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  BriefcaseBusiness,
  Handshake,
  UsersRound,
} from "lucide-react";
import "./Opportunities.css";

const opportunities = [
  {
    Icon: CalendarDays,
    title: "Workshops",
    description:
      "Hands-on sessions to build practical skills and explore new technologies.",
    link: "/contact",
  },
  {
    Icon: BriefcaseBusiness,
    title: "Internship",
    description:
      "Gain real-world experience and work with our project teams.",
    link: "/contact",
  },
  {
    Icon: Handshake,
    title: "Collaboration",
    description:
      "Partner with us for research, innovation and co-creation.",
    link: "/contact",
  },
  {
    Icon: UsersRound,
    title: "Join Team",
    description:
      "Be a part of a growing team that builds real-world solutions.",
    link: "/contact",
  },
];

export default function Opportunities() {
  return (
    <div className="opp-page">
      <section className="opp-hero">
        <div className="opp-hero-content">
          <span className="opp-eyebrow">OPPORTUNITIES</span>

          <h1>
            Learn. Build. <span>Grow.</span>
          </h1>

          <p>
            At SHEZINO, we create opportunities for learners,
            creators and professionals to build their skills,
            gain real experience and grow together.
          </p>

          <Link to="/contact" className="opp-primary-btn">
            Explore Opportunities <span>↗</span>
          </Link>
        </div>

        <div className="opp-handwritten">
          Your Growth.
          <br />
          Our Priority.
          <span />
        </div>

        <div className="opp-hero-image">
          <div className="opp-image-shade" />
        </div>
      </section>

      <section className="opp-options">
        {opportunities.map(({ Icon, title, description, link }, index) => (
          <article
            className="opp-card"
            key={title}
            style={{ "--opp-delay": `${index * 100}ms` }}
          >
            <div className="opp-icon">
              <Icon aria-hidden="true" />
            </div>

            <h2>{title}</h2>

            <p>{description}</p>

            <Link to={link} className="opp-card-link">
              Explore <span>→</span>
            </Link>
          </article>
        ))}
      </section>

      <section className="opp-bottom-cta">
        <div className="opp-cta-copy">
          <h2>
            Opportunities don't just happen.
            <br />
            We create them.
          </h2>

          <p>
            Find your place, develop your skills and build something
            that matters with SHEZINO.
          </p>
        </div>

        <Link to="/contact" className="opp-cta-btn">
          Explore Opportunities <span>→</span>
        </Link>
      </section>
    </div>
  );
}