import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Compass,
  Lightbulb,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import aboutPeopleImg from "./assets/images/shezino_about_people_team_clean_1794773911336.jpg";
import "./About.css";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: "some" },
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
};

const heroHighlights = [
  {
    tag: "MSME",
    title: "MSME (Udyam) Registered — UDYAM-TN-02-0468670",
    detail: "Officially registered technology enterprise under the Ministry of MSME, Govt. of India.",
  },
  {
    tag: "STN",
    title: "StartupTN Registered — ID: STN98658",
    detail: "Recognized Tamil Nadu startup ecosystem venture across IT, ITES & SaaS platforms.",
  },
  {
    tag: "2026",
    title: "Founded April 2026 in Chennai",
    detail: "Built in Tamil Nadu to engineer custom software, applied AI, and connected IoT systems.",
  },
  {
    tag: "LABS",
    title: "19 Specialists / 4 Original Labs Platforms",
    detail: "Eight engineering disciplines building Connect, Acadex, Vitalis & Learnix alongside client systems.",
  },
];

const directionItems = [
  {
    Icon: Compass,
    label: "Our Vision",
    title: "Global Lasting Value",
    description:
      "To establish SHEZINO as a globally respected technology company known for clear product engineering, dependable platforms, and software that creates lasting value for people and industries.",
  },
  {
    Icon: Target,
    label: "Our Mission",
    title: "Practical Engineering Foundation",
    description:
      "To partner with businesses, campuses, and institutions by combining skilled builders, applied AI, and modern engineering to turn ambitious ideas into reliable production systems.",
  },
  {
    Icon: Sparkles,
    label: "Our Philosophy",
    title: "Think Boldly & Grow Together",
    description:
      "Think boldly. Learn continuously. Build responsibly. Grow together. Every architecture choice, client commitment, and technical experiment at SHEZINO follows these four everyday standards.",
  },
];

const evolutionSteps = [
  {
    step: "01",
    phase: "The Spark",
    title: "Defining the Purpose",
    description:
      "Setting a clear standard from day one: engineer practical software and connected systems around real operational bottlenecks.",
  },
  {
    step: "02",
    phase: "Core Team",
    title: "Uniting Disciplines",
    description:
      "Bringing software developers, AI & hardware builders, creative media specialists, and strategists onto one collaborative table.",
  },
  {
    step: "03",
    phase: "Product R&D",
    title: "Building SHEZINO Labs",
    description:
      "Developing original software across campus operations, community assistance, healthcare outreach, and student learning.",
  },
  {
    step: "04",
    phase: "The Road Ahead",
    title: "Scaling Beyond Borders",
    description:
      "Moving flagship R&D platforms toward institutional pilots while expanding dependable client engineering globally.",
  },
];

const approachItems = [
  {
    Icon: Lightbulb,
    title: "Problem-Driven Thinking",
    description:
      "We study the real workflow bottleneck first before choosing frameworks, tools, or system architecture.",
  },
  {
    Icon: BookOpen,
    title: "Continuous Learning",
    description:
      "We evaluate emerging capabilities early and refine our engineering playbook through hands-on experimentation.",
  },
  {
    Icon: Users,
    title: "Collaborative Execution",
    description:
      "Designers, backend engineers, hardware builders, and growth leads ship together without handoff silos.",
  },
  {
    Icon: TrendingUp,
    title: "Long-Term Perspective",
    description:
      "We build clean, maintainable systems engineered to stay dependable years after initial deployment.",
  },
];

const coreValues = [
  {
    number: "01",
    Icon: ShieldCheck,
    title: "Ownership",
    description:
      "Taking full responsibility for our code, technical decisions, and delivery commitments.",
  },
  {
    number: "02",
    Icon: Sparkles,
    title: "Innovation",
    description:
      "Staying curious, questioning outdated defaults, and building practical new approaches.",
  },
  {
    number: "03",
    Icon: Compass,
    title: "Integrity",
    description:
      "Earning client and teammate trust through transparent timelines and honest communication.",
  },
  {
    number: "04",
    Icon: Users,
    title: "Collaboration",
    description:
      "Respecting diverse strengths and achieving stronger outcomes as one cohesive team.",
  },
  {
    number: "05",
    Icon: Award,
    title: "Excellence",
    description:
      "Raising the bar continuously on usability, performance, architecture, and reliability.",
  },
  {
    number: "06",
    Icon: RefreshCw,
    title: "Adaptability",
    description:
      "Learning fast from feedback and evolving smoothly as technology and needs shift.",
  },
];

export default function About() {
  return (
    <div className="sz-about">
      {/* 01. HERO SECTION — DEEP OBSIDIAN WITH BALANCED VERTICAL RECOGNITION & MILESTONE SPINE */}
      <section className="sz-about-hero">
        <div className="sz-about-hero-glow" aria-hidden="true" />

        <div className="sz-container sz-about-hero-grid">
          <div className="sz-about-hero-copy">
            <span className="sz-eyebrow sz-about-eyebrow">Our Story</span>

            <h1>
              Driven by Curiosity,{" "}
              <span className="sz-about-highlight">United by Purpose</span>
            </h1>

            <p className="sz-about-subheadline">
              A Journey That Started With an Idea
            </p>

            <p className="sz-about-hero-lead">
              SHEZINO began with a clear conviction: bring capable engineers and
              creative builders together to replace scattered tools with
              disciplined technology that genuinely lasts.
            </p>

            <div className="sz-about-hero-actions">
              <Link to="/team" className="sz-about-hero-primary">
                <span>Meet the Team</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/labs" className="sz-about-hero-ghost">
                <span>Explore SHEZINO Labs</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div
            className="sz-about-spine"
            aria-label="SHEZINO key recognitions and milestones"
          >
            {heroHighlights.map((item) => (
              <div className="sz-spine-item" key={item.tag}>
                <span className="sz-spine-badge">{item.tag}</span>
                <div className="sz-spine-content">
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02. OUR BEGINNING + 03. OUR DIRECTION — PURE WHITE */}
      <section className="sz-about-white-band">
        <div className="sz-container">
          <div className="sz-beginning-layout">
            <div className="sz-beginning-head">
              <span className="sz-eyebrow">Where It All Started</span>
              <h2>Every Journey Starts With a Vision</h2>

              <blockquote className="sz-beginning-quote">
                <p>
                  &ldquo;Build from first principles, stay accountable after
                  launch, and engineer technology that solves everyday human
                  bottlenecks cleanly.&rdquo;
                </p>
                <footer>
                  <strong>Yusuf Shejin</strong>
                  <span>Founder &amp; CEO, SHEZINO</span>
                </footer>
              </blockquote>
            </div>

            <div className="sz-beginning-prose">
              <p>
                SHEZINO started when a focused circle of builders noticed the
                same friction everywhere: institutions and growing businesses
                forced to piece together rigid templates and disconnected apps
                just to handle daily operations.
              </p>
              <p>
                Instead of chasing quick shortcuts, we committed to engineering
                clean software platforms and connected hardware from scratch—prioritizing
                maintainable code, transparent architecture, and honest timelines.
              </p>
              <p>
                Today, developers, AI &amp; hardware makers, designers, and
                growth leads work side-by-side without silos, turning ambitious
                operational ideas into reliable real-world systems.
              </p>
            </div>
          </div>

          <div className="sz-white-divider" />

          <div className="sz-direction-head">
            <span className="sz-eyebrow">Our Direction</span>
            <h2>Thinking Beyond Today, Preparing for Tomorrow</h2>
          </div>

          <div className="sz-direction-grid">
            {directionItems.map((item, idx) => {
              const Icon = item.Icon;
              return (
                <motion.article
                  className="sz-direction-card"
                  key={item.label}
                  {...fadeInUp}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="sz-direction-icon">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <span className="sz-direction-label">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04. OUR EVOLUTION — UNIFIED DEEP OBSIDIAN */}
      <section className="sz-about-dark-band">
        <div className="sz-container">
          <div className="sz-band-head sz-band-head-dark">
            <span className="sz-eyebrow">The Journey So Far</span>
            <h2>From an Early Conviction to Active Engineering</h2>
            <p>
              Four stages capture how SHEZINO grew from an initial blueprint
              into a focused product and systems company.
            </p>
          </div>

          <div className="sz-evolution-timeline">
            <div className="sz-evolution-track" aria-hidden="true">
              <div className="sz-evolution-beam" />
            </div>

            <div className="sz-evolution-grid">
              {evolutionSteps.map((item, idx) => (
                <motion.article
                  className="sz-evolution-block"
                  key={item.step}
                  {...fadeInUp}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="sz-evolution-top">
                    <span className="sz-evolution-num">{item.step}</span>
                    <span className="sz-evolution-phase">{item.phase}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05. OUR APPROACH + 06. OUR PEOPLE — PURE WHITE */}
      <section className="sz-about-white-band sz-about-people-section">
        <div className="sz-container">
          <div className="sz-band-head">
            <span className="sz-eyebrow">How We Think</span>
            <h2>Progress Comes From How We Approach Challenges</h2>
          </div>

          <div className="sz-approach-grid">
            {approachItems.map((item, idx) => {
              const Icon = item.Icon;
              return (
                <motion.article
                  className="sz-approach-item"
                  key={item.title}
                  {...fadeInUp}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="sz-approach-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div className="sz-approach-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="sz-white-divider" />

          {/* OUR PEOPLE — GROUNDED FLUSH ON WHITE BASELINE */}
          <div className="sz-people-split">
            <div className="sz-people-copy">
              <span className="sz-eyebrow">The Team Behind the Journey</span>
              <h2>Different Perspectives, One Shared Ambition</h2>

              <div className="sz-people-prose">
                <p>
                  SHEZINO runs on the energy of builders who bring distinct
                  strengths to the same table — full-stack developers, hardware
                  and IoT makers, AI researchers, product designers, and
                  business leads.
                </p>
                <p>
                  Rather than working inside rigid silos, every teammate shares
                  context directly, challenges weak assumptions early, and takes
                  pride in seeing software and hardware work smoothly in the real
                  world.
                </p>
              </div>

              <Link to="/team" className="sz-people-link">
                <span>Meet the SHEZINO Team</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="sz-people-visual">
              <img
                src={aboutPeopleImg}
                alt="Animated SHEZINO builders in tailored black coats with white shirts and SHEZINO badges collaborating on tablets and laptops"
                referrerPolicy="no-referrer"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 07. OUR VALUES — UNIFIED DEEP OBSIDIAN */}
      <section className="sz-about-dark-band">
        <div className="sz-container">
          <div className="sz-band-head sz-band-head-dark">
            <span className="sz-eyebrow">What Guides Us</span>
            <h2>Principles That Shape Everything We Do</h2>
          </div>

          <div className="sz-values-grid">
            {coreValues.map((value, idx) => {
              const Icon = value.Icon;
              return (
                <motion.article
                  className="sz-value-card"
                  key={value.title}
                  {...fadeInUp}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="sz-value-head">
                    <span className="sz-value-num">{value.number}</span>
                    <div className="sz-value-icon">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 08. OUR FUTURE — PURE WHITE BEFORE DARK FOOTER */}
      <section className="sz-about-future-band">
        <div className="sz-container">
          <div className="sz-future-panel">
            <div className="sz-future-copy">
              <span className="sz-eyebrow">What Comes Next</span>
              <h2>The Journey Is Just Getting Started</h2>

              <div className="sz-future-prose">
                <p>
                  Our roadmap looks far beyond one-off client deliverables. We
                  are building an interconnected ecosystem of original platforms
                  inside SHEZINO Labs alongside custom engineering partnerships
                  for growing institutions and enterprises.
                </p>
                <p>
                  With roots in Chennai and an eye toward global partnerships,
                  our next chapter will be defined by what we build, validate,
                  and sustain together.
                </p>
              </div>

              <p className="sz-future-invite">Let&apos;s shape what comes next.</p>

              <div className="sz-future-actions">
                <Link to="/labs" className="sz-future-primary-btn">
                  <span>Explore SHEZINO Labs</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>

                <Link
                  to="/contact?subject=Project+Enquiry"
                  className="sz-future-secondary-btn"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
