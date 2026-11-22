import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  GraduationCap,
  Radio,
  ShieldCheck,
  Users,
} from "lucide-react";
import labsEngineersHeroImg from "./assets/images/labs_youth_engineers_hologram_1794917462085.jpg";
import LabsProductPreview from "./components/LabsProductPreview.jsx";
import "./Labs.css";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: "some" },
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
};

const labStandards = [
  {
    number: "01",
    title: "Grounded in Field Friction",
    description:
      "Every initiative begins by studying recurring operational gaps across campuses, medical outreach camps, and local communities.",
  },
  {
    number: "02",
    title: "Built for Everyday Teams",
    description:
      "We structure interfaces around role clarity, predictable speed, and clean workflows so everyday teams adopt them effortlessly.",
  },
  {
    number: "03",
    title: "Validated With Early Pilots",
    description:
      "Instead of shipping rigid software templates, our platforms mature steadily alongside real institutional partners and direct feedback.",
  },
];

const flagshipProducts = [
  {
    number: "01",
    id: "connect",
    title: "SHEZINO CONNECT",
    tagline: "Structured Assistance Through Verified Community Coordination.",
    sector: "Community Infrastructure",
    status: "Active Development — Pilot Access Open",
    description:
      "A trust-centered assistance platform connecting people who need reliable day-to-day support—from senior care errands to courier handovers—with identity-verified neighborhood helpers.",
    focusAreas: [
      "Location-aware request intake & rapid helper matching",
      "Identity screening & PIN-verified task handover logs",
      "Real-time status tracking from dispatch to completion",
      "Accountable community trust & safety workflows",
    ],
  },
  {
    number: "02",
    id: "acadex",
    title: "SHEZINO ACADEX",
    tagline: "Unified Institutional Operations for Modern Colleges.",
    sector: "Academic Infrastructure",
    status: "Active Development — Pilot Access Open",
    description:
      "An academic management environment bringing student admissions, attendance tracking, timetables, internal marks, and fee clearances into one synchronized campus portal.",
    focusAreas: [
      "Centralized student enrollment & academic lifecycle records",
      "Daily attendance capture & multi-department approval desks",
      "Timetable publishing, assessment marks & fee receipt tracking",
      "Role-based portals built cleanly for faculty and admin staff",
    ],
  },
  {
    number: "03",
    id: "vitalis",
    title: "SHEZINO VITALIS",
    tagline: "Organized Digital Workflows for Clinical & Medical Outreach.",
    sector: "Healthcare Coordination",
    status: "Active Development — Pilot Access Open",
    description:
      "A clinical coordination platform eliminating manual paper queues across medical camps and intake desks—uniting registration, vitals triage, volunteer sync, and doctor handoff.",
    focusAreas: [
      "Rapid patient onboarding & structured vitals triage capture",
      "Multi-station medical camp queue & volunteer alignment",
      "Seamless doctor consultation queue & partner hospital sync",
      "Organized clinical continuity and post-camp follow-up logs",
    ],
  },
  {
    number: "04",
    id: "learnix",
    title: "SHEZINO LEARNIX",
    tagline: "Structured Learning, Assessments & Competitive Engagement.",
    sector: "Student Learning Systems",
    status: "Active Development — Pilot Access Open",
    description:
      "An engaging digital learning environment combining guided study tracks, timed online evaluations, weekly and monthly academic competitions, and verified achievement badges.",
    focusAreas: [
      "Self-paced study modules with structured online assessments",
      "Scheduled weekly and monthly competitive academic tracks",
      "Transparent student progress tracking & accuracy metrics",
      "Earned milestone badges, rankings, and performance history",
    ],
  },
];

const exploratoryHorizons = [
  {
    number: "01",
    Icon: ShieldCheck,
    title: "Public Safety Intelligence",
    description:
      "Investigating intelligent AI-assisted communication systems that help coordinate urgent public safety updates and emergency response interactions.",
  },
  {
    number: "02",
    Icon: GraduationCap,
    title: "Inclusive Learning Systems",
    description:
      "Researching adaptive digital learning tools crafted specifically for children with diverse cognitive styles and specialized educational requirements.",
  },
  {
    number: "03",
    Icon: Radio,
    title: "Connected Physical Environments",
    description:
      "Exploring embedded hardware sensing and software-coordinated IoT environments built for responsive real-world spaces.",
  },
  {
    number: "04",
    Icon: Users,
    title: "Civic & Community Infrastructure",
    description:
      "Studying accessible digital systems that simplify local resource sharing, neighborhood trust, and grassroots coordination.",
  },
];

export default function Labs() {
  return (
    <div className="sz-labs">
      {/* 01. IMMERSIVE FULL-VIEWPORT OBSIDIAN HERO */}
      <section className="sz-labs-hero">
        <div className="sz-labs-hero-glow" aria-hidden="true" />

        <div className="sz-labs-hero-inner">
          <div className="sz-labs-hero-copy">
            <span className="sz-eyebrow sz-labs-eyebrow">SHEZINO LABS</span>

            <h1>
              The Intelligence Behind{" "}
              <span className="sz-labs-highlight">What We Build Next.</span>
            </h1>

            <p className="sz-labs-hero-lead">
              SHEZINO Labs is our dedicated product engineering and R&amp;D
              division in Chennai—building original platforms from scratch to
              replace scattered manual operations across campuses, community
              assistance, healthcare outreach, and student learning.
            </p>

            <div className="sz-labs-hero-index">
              <div>
                <span>Flagship Platforms</span>
                <strong>Connect, Acadex, Vitalis, Learnix</strong>
              </div>
              <div>
                <span>Exploratory Tracks</span>
                <strong>Public Safety, Inclusive EdTech, Connected IoT</strong>
              </div>
            </div>
          </div>

          <div className="sz-labs-hero-stage">
            <motion.div
              className="sz-labs-holo-glow"
              aria-hidden="true"
              animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.96, 1.04, 0.96] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="sz-labs-hero-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
              transition={{
                opacity: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <img
                src={labsEngineersHeroImg}
                alt="Two young SHEZINO engineers wearing black suits with SHEZINO chest badges collaborating over glowing web dashboard, community app, and healthcare monitor holograms"
                draggable="false"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 02. BEHIND EVERY INNOVATION — PURE WHITE EDITORIAL MANIFESTO */}
      <section className="sz-labs-white-band">
        <div className="sz-container sz-labs-manifesto-grid">
          <motion.div className="sz-labs-manifesto-copy" {...fadeInUp}>
            <span className="sz-eyebrow">Behind Every Build</span>
            <h2>Turning Everyday Friction Into Dependable Software.</h2>
            <p>
              Meaningful platforms rarely start on slide decks. They start when
              focused engineering meets recurring daily bottlenecks across
              campuses, healthcare camps, and neighborhoods—and keeps refining
              until workflows run smoothly.
            </p>
          </motion.div>

          <div className="sz-labs-standards-list">
            {labStandards.map((item, idx) => (
              <motion.article
                className="sz-labs-standard-row"
                key={item.number}
                {...fadeInUp}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="sz-labs-standard-num">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 03. FLAGSHIP INITIATIVES — DARK OBSIDIAN LIVE SYSTEM SHOWCASES */}
      <section className="sz-labs-dark-band" id="products">
        <div className="sz-container">
          <div className="sz-labs-band-head sz-labs-dark-head">
            <span className="sz-eyebrow">Flagship Initiatives</span>
            <h2>Four Platforms. One Standard of Execution.</h2>
            <p>
              Each product below is being engineered from the ground up inside
              SHEZINO Labs, with architecture blueprints open for early pilots
              and institutional collaboration.
            </p>
          </div>

          <div className="sz-labs-showcase-stack">
            {flagshipProducts.map((product, idx) => {
              const isReversed = idx % 2 === 1;
              return (
                <motion.article
                  className={`sz-labs-showcase-row${
                    isReversed ? " is-reversed" : ""
                  }`}
                  key={product.id}
                  {...fadeInUp}
                  transition={{
                    duration: 0.5,
                    delay: 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="sz-labs-showcase-media">
                    <LabsProductPreview productId={product.id} />
                  </div>

                  <div className="sz-labs-showcase-copy">
                    <div className="sz-labs-product-meta">
                      <span className="sz-labs-product-num">
                        Product {product.number}
                      </span>
                      <span aria-hidden="true">/</span>
                      <span>{product.sector}</span>
                      <span aria-hidden="true">/</span>
                      <strong className="sz-labs-product-status">
                        {product.status}
                      </strong>
                    </div>

                    <h3>{product.title}</h3>
                    <p className="sz-labs-product-tagline">{product.tagline}</p>
                    <p className="sz-labs-product-desc">
                      {product.description}
                    </p>

                    <ul className="sz-labs-focus-list">
                      {product.focusAreas.map((area) => (
                        <li key={area}>
                          <Check size={14} aria-hidden="true" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="sz-labs-product-cta-row">
                      <Link
                        to="/contact?subject=Product+Enquiry"
                        className="sz-labs-collaborate-btn"
                      >
                        <span>Collaborate or Request Early Pilot</span>
                        <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04. BEYOND OUR CURRENT PRODUCTS — PURE WHITE R&D HORIZONS */}
      <section className="sz-labs-white-band">
        <div className="sz-container">
          <div className="sz-labs-explore-top">
            <div className="sz-labs-band-head">
              <span className="sz-eyebrow">Beyond Our Current Products</span>
              <h2>Exploring What Comes Next.</h2>
              <p>
                Alongside active flagship builds, we maintain dedicated research
                tracks investigating high-impact challenges across safety,
                inclusive education, and connected infrastructure.
              </p>
            </div>
            <span className="sz-labs-explore-track-tag">
              Research &amp; Exploration Track
            </span>
          </div>

          <div className="sz-labs-horizons-grid">
            {exploratoryHorizons.map(({ number, Icon, title, description }, idx) => (
              <motion.article
                className="sz-labs-horizon-card"
                key={number}
                {...fadeInUp}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="sz-labs-horizon-top">
                  <span className="sz-labs-horizon-num">{number}</span>
                  <Icon
                    size={20}
                    strokeWidth={1.6}
                    className="sz-labs-horizon-glyph"
                    aria-hidden="true"
                  />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 05. MERGED CLOSING VISION & COLLABORATION MONOLITH BEFORE DARK FOOTER */}
      <section className="sz-labs-closing-wrap">
        <div className="sz-container">
          <motion.div className="sz-labs-closing-monolith" {...fadeInUp}>
            <div className="sz-labs-closing-copy">
              <span className="sz-eyebrow sz-labs-eyebrow">
                Building Beyond Today — Long-Term Vision
              </span>
              <h2>
                From Independent Platforms to a{" "}
                <span className="sz-labs-highlight">
                  Global Innovation Ecosystem.
                </span>
              </h2>
              <p>
                Our roadmap goes far beyond standalone demos. Inside SHEZINO
                Labs, we are shaping an interconnected ecosystem of reliable
                platforms designed to earn everyday user trust and scale across
                institutions. Whether you want early pilot access or wish to
                collaborate on emerging research—let&apos;s build what comes next.
              </p>
              <span className="sz-labs-closing-principle">
                Built to solve real bottlenecks and stay dependable long after launch.
              </span>
            </div>

            <div className="sz-labs-closing-action">
              <Link
                to="/contact?subject=Product+Enquiry"
                className="sz-labs-primary-btn"
              >
                <span>Collaborate or Discuss Product Access</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
