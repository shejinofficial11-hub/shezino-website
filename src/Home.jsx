import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  Code2,
  Compass,
  Cpu,
  Globe,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import heroCreatorsImg from "./assets/images/shezino_welcome_trio_clean_1795289438517.jpg";
import LabsProductPreview from "./components/LabsProductPreview.jsx";
import "./Home.css";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: "some" },
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
};

const visionCards = [
  {
    Icon: Compass,
    label: "Architecture",
    title: "Product-First Engineering",
    text: "Custom web platforms, internal software systems, and applied AI engineered from clean foundations around your actual operations — never recycled templates.",
  },
  {
    Icon: Cpu,
    label: "19-Member Core Team",
    title: "Multi-Disciplinary Specialists",
    text: "Leadership leads, full-stack developers, hardware & IoT builders, creative media specialists, and growth leads shipping together inside our Chennai company.",
  },
  {
    Icon: ShieldCheck,
    label: "Accountability",
    title: "Founder-Led Ownership",
    text: "Work directly with our founding leadership, project managers, and engineering leads — backed by structured milestone reviews and long-term support.",
  },
];

const capabilities = [
  {
    Icon: Globe,
    title: "Website Development",
    description:
      "Professional, responsive, and scalable websites designed to strengthen your digital presence and support business growth.",
    deliverables: "Corporate Websites / Landing Pages / E-Commerce / Custom Web Apps",
    idealFor: "Growing brands, businesses, and digital storefronts",
    subject: "Web Development",
  },
  {
    Icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "User-focused Android, iOS, and cross-platform mobile applications built for seamless experiences and everyday operations.",
    deliverables: "Android & iOS Apps / Cross-Platform Builds / Customer Portals",
    idealFor: "Service apps, consumer platforms, and operational teams",
    subject: "Mobile App Development",
  },
  {
    Icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored software systems and internal workflow platforms built cleanly around your specific business rules and database requirements.",
    deliverables: "Custom Business Software / Management Systems / Internal Workflows",
    idealFor: "Businesses replacing fragmented tools with bespoke systems",
    subject: "Project Enquiry",
  },
  {
    Icon: Building2,
    title: "ERP & Enterprise Solutions",
    description:
      "Integrated digital systems helping institutions and enterprises manage admissions, inventory, processes, and daily operations cleanly.",
    deliverables: "ERP Platforms / College & Learning Management / Inventory Systems",
    idealFor: "Colleges, training institutes, and multi-department teams",
    subject: "Project Enquiry",
  },
  {
    Icon: Workflow,
    title: "Automation & System Integration",
    description:
      "Streamlining repetitive workflows and connecting disparate tools with reliable API integrations and automated reporting.",
    deliverables: "Workflow Automation / API Integration / Automated Reporting",
    idealFor: "Operations desks, synced software stacks, and multi-team queues",
    subject: "Project Enquiry",
  },
  {
    Icon: Sparkles,
    title: "AI & Machine Learning Solutions",
    description:
      "Applying practical AI, machine learning models, and intelligent automation to support smarter operations and decision-making.",
    deliverables: "AI-Powered Apps / Predictive Analytics / Intelligent Automation",
    idealFor: "Knowledge workflows, triage routing, and predictive systems",
    subject: "Project Enquiry",
  },
  {
    Icon: Cpu,
    title: "Hardware, IoT & Embedded Technology",
    description:
      "Connecting physical devices, sensors, and embedded prototypes straight to unified cloud software interfaces.",
    deliverables: "IoT Solutions / Embedded Systems / Hardware-Software Integration",
    idealFor: "Smart monitoring, industrial sensors, and connected environments",
    subject: "Project Enquiry",
  },
  {
    Icon: BarChart3,
    title: "Data Analytics & Intelligence",
    description:
      "Transforming raw organizational records into visual business intelligence dashboards, reports, and clear operational insight.",
    deliverables: "BI Dashboards / Data Visualization / Executive Reporting Systems",
    idealFor: "Leadership teams, analysts, and institutional decision-makers",
    subject: "Project Enquiry",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Requirements & Blueprint",
    note: "We map your goals, operational workflows, and technical scope clearly before engineering begins.",
  },
  {
    step: "02",
    title: "UX & System Validation",
    note: "Review structured user flows and system architecture early so what you approve matches real daily usage.",
  },
  {
    step: "03",
    title: "Iterative Engineering & QA",
    note: "Transparent milestone builds, real-device testing, and direct review walkthroughs with our engineering leads.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    note: "Smooth production rollout, complete handover documentation, and dependable ongoing support as needs scale.",
  },
];

const labsProducts = [
  {
    id: "connect",
    title: "SHEZINO Connect",
    subtitle: "Trusted Assistance & Community Coordination",
    sector: "Community Infrastructure — Active Development",
    status: "Active Development",
    summary:
      "A trust-centered assistance platform connecting people who need reliable day-to-day support with verified neighborhood helpers through structured fulfillment.",
    highlights: [
      "Structured assistance request intake and location matching",
      "Helper eligibility screening and identity trust verification",
      "Live task verification and accountability tracking",
    ],
    stack: "Web & Mobile / Smart Matching / Trust Verification Layer",
  },
  {
    id: "acadex",
    title: "SHEZINO Acadex",
    subtitle: "Unified Institutional Operations for Colleges",
    sector: "Education Infrastructure — Active Development",
    status: "Active Development",
    summary:
      "An academic management environment bringing student records, faculty coordination, departmental approvals, and daily campus operations into one digital system.",
    highlights: [
      "Centralized student admissions, attendance, and academic records",
      "Faculty scheduling and multi-department approval desks",
      "Engineered for fast daily access across desktop and mobile devices",
    ],
    stack: "Web Platform / Campus Portal / Role-Based Cloud Backend",
  },
  {
    id: "vitalis",
    title: "SHEZINO Vitalis",
    subtitle: "Clinical & Medical Camp Workflow Platform",
    sector: "Healthcare Coordination — Active Development",
    status: "Active Development",
    summary:
      "End-to-end patient journey coordination for medical outreach camps and clinic intake desks — uniting digital registration, volunteer sync, and hospital follow-up.",
    highlights: [
      "Rapid patient onboarding with paperless queue and vitals capture",
      "Multi-station camp desk and volunteer scheduling alignment",
      "Organized clinical handoff and post-camp follow-up continuity",
    ],
    stack: "Clinical Intake UI / Cloud Records / Follow-Up Workflows",
  },
  {
    id: "learnix",
    title: "SHEZINO Learnix",
    subtitle: "Structured Learning, Assessments & Competitions",
    sector: "Student Learning Systems — Active Development",
    status: "Active Development",
    summary:
      "An engaging digital learning environment combining self-paced study tracks, online assessments, weekly and monthly academic competitions, and earned recognition.",
    highlights: [
      "Guided self-learning workflows with timed online evaluations",
      "Scheduled weekly and monthly competitive academic leaderboards",
      "Transparent performance growth history and milestone badges",
    ],
    stack: "Web Platform / Assessment Engine / Achievement Tracking",
  },
];

const faqs = [
  {
    question: "How do new projects begin with SHEZINO?",
    answer:
      "Share a short overview on our Contact page or reach out directly via WhatsApp or email. Our founding leads review your goals within 24 hours and schedule a discovery call to outline technical scope and timeline.",
  },
  {
    question: "Does SHEZINO build both software and connected hardware?",
    answer:
      "Yes. Alongside full-stack web, mobile, cloud, and AI systems, our dedicated Hardware & IoT team engineers sensor telemetry and connected devices integrated directly into real-time dashboards.",
  },
  {
    question: "Can institutions or NGOs pilot SHEZINO Labs products?",
    answer:
      "Yes. All four SHEZINO Labs platforms are actively in development, and we partner with campuses, medical outreach trusts, and community organizations for early institutional pilots.",
  },
  {
    question: "Who communicates with us during delivery?",
    answer:
      "You collaborate directly with the founders and lead engineers responsible for architecture and delivery — ensuring clear technical decisions and fast turnaround.",
  },
];

export default function Home() {
  const [activeCapIndex, setActiveCapIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (event) => setReducedMotion(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!activeProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  return (
    <div className="home-page">
      {/* 1. IMMERSIVE DARK HERO */}
      <section className="home-hero">
        <div className="home-hero-glow" aria-hidden="true" />

        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <span className="sz-eyebrow home-hero-eyebrow">
              BUILD. CONNECT. DELIVER.
            </span>

            <h1>
              We Don&apos;t Just Build Technology.{" "}
              <span className="home-hero-highlight">
                We Build What Comes Next.
              </span>
            </h1>

            <p className="home-hero-lead">
              SHEZINO is a product-first technology company creating intelligent
              digital products, engineering solutions and connected experiences
              that solve real-world problems.
            </p>

            <div className="home-hero-actions">
              <Link className="home-primary-button" to="/services">
                <span>Explore Services</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              <Link
                className="home-secondary-button"
                to="/contact?subject=Project+Enquiry"
              >
                <span>Build With SHEZINO</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="home-hero-trust" aria-label="Official registrations">
              <ShieldCheck size={15} aria-hidden="true" />
              <span>
                MSME Registered (UDYAM-TN-02-0468670) | StartupTN Registered
                (STN98658)
              </span>
            </div>
          </div>

          <div className="home-hero-stage">
            <motion.div
              className="home-hero-welcome"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="home-welcome-kicker-row">
                <motion.span
                  className="home-welcome-line-rule"
                  aria-hidden="true"
                  initial={reducedMotion ? false : { scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
                <span className="home-welcome-kicker">WELCOME TO SHEZINO</span>
                <motion.span
                  className="home-welcome-line-rule"
                  aria-hidden="true"
                  initial={reducedMotion ? false : { scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              <motion.p
                className="home-welcome-line"
                initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              >
                A team of innovators, engineers and creators building
                intelligent technology and meaningful solutions for a better
                tomorrow.
              </motion.p>
            </motion.div>

            <motion.div
              className="home-hero-trio-wrap"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="home-hero-trio-aura" aria-hidden="true" />
              <img
                src={heroCreatorsImg}
                alt="Three distinct 21-year-old SHEZINO creators in tailored black blazers with white shirts and SHEZINO badges warmly welcoming visitors"
                className="home-hero-photo"
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY HIGHLIGHTS — PURE WHITE WITH BREATHING ROOM & BLUE ACCENTS */}
      <motion.section className="home-identity-band" {...fadeInUp}>
        <div className="sz-container home-vision-grid">
          {visionCards.map(({ Icon, label, title, text }) => (
            <article className="home-vision-item" key={label}>
              <div className="home-vision-accent" aria-hidden="true" />
              <div className="home-vision-head">
                <Icon size={26} className="home-vision-icon" aria-hidden="true" />
                <span className="home-vision-kicker">{label}</span>
              </div>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </motion.section>

      {/* 3. ALL 8 CORE CAPABILITIES — PURE WHITE + INTERACTIVE DELIVERABLES */}
      <motion.section className="home-section home-cap-section" {...fadeInUp}>
        <div className="sz-container">
          <div className="home-cap-header">
            <div>
              <span className="sz-eyebrow">Core Capabilities</span>
              <h2>Eight Disciplines Under One Roof</h2>
            </div>

            <Link to="/services" className="home-cap-all-link">
              <span>Explore full service details</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="home-capability-list">
            {capabilities.map((cap, index) => {
              const isOpen = activeCapIndex === index;
              const numLabel = `0${index + 1}`;
              const Icon = cap.Icon;

              return (
                <article
                  className={`home-capability-row${isOpen ? " is-active" : ""}`}
                  key={cap.title}
                >
                  <button
                    type="button"
                    className="home-capability-trigger"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setActiveCapIndex(isOpen ? -1 : index)
                    }
                  >
                    <div className="home-capability-left">
                      <span className="home-capability-num">{numLabel}</span>
                      <Icon
                        size={22}
                        className="home-capability-icon"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="home-capability-copy">
                      <h3>{cap.title}</h3>
                      <p>{cap.description}</p>
                    </div>

                    <span className="home-capability-cta">
                      <span>{isOpen ? "Hide Scope" : "View Scope"}</span>
                      <ChevronDown
                        size={17}
                        className={isOpen ? "is-rotated" : ""}
                        aria-hidden="true"
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="home-capability-detail">
                      <div className="home-cap-meta">
                        <div>
                          <span className="home-cap-meta-label">
                            Key Deliverables
                          </span>
                          <strong>{cap.deliverables}</strong>
                        </div>
                        <div>
                          <span className="home-cap-meta-label">Built For</span>
                          <strong>{cap.idealFor}</strong>
                        </div>
                      </div>

                      <Link
                        className="home-cap-scope-link"
                        to={`/contact?subject=${encodeURIComponent(cap.subject)}`}
                      >
                        <span>Discuss {cap.title}</span>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </Link>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 4. HOW WE WORK — DEEP NAVY WITH 4 DISTINCT BLOCKS & ANIMATED TIMELINE */}
      <motion.section className="home-process-band" {...fadeInUp}>
        <div className="sz-container">
          <div className="home-process-header">
            <div>
              <span className="home-process-eyebrow">How We Work</span>
              <h2>Structured Delivery, Zero Guesswork.</h2>
            </div>
            <p>
              Four transparent stages guiding every engagement from technical
              discovery through production launch.
            </p>
          </div>

          <div className="home-process-timeline">
            <div className="home-process-rail" aria-hidden="true">
              <div className="home-process-track">
                <div className="home-process-beam" />
              </div>
              {processSteps.map((item) => (
                <div className="home-process-node-cell" key={item.step}>
                  <span className="home-process-node" />
                </div>
              ))}
            </div>

            <div className="home-process-grid">
              {processSteps.map((item) => (
                <article className="home-process-block" key={item.step}>
                  <span className="home-process-num">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. SHEZINO LABS — CHARCOAL PRODUCT SHOWCASE WITH LIVE UI PREVIEWS */}
      <motion.section className="home-labs-band" {...fadeInUp}>
        <div className="sz-container">
          <div className="home-labs-header">
            <div>
              <span className="home-labs-eyebrow">
                Product-First Engineering
              </span>
              <h2>
                Built at SHEZINO <span>Labs</span>
              </h2>
              <p>
                Original software platforms currently in development for
                community assistance, modern campuses, healthcare camps, and
                student learning ecosystems.
              </p>
            </div>

            <Link className="home-labs-btn" to="/labs">
              <span>Explore All Products</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="home-labs-showcase">
            {labsProducts.map((product) => (
              <button
                type="button"
                className="home-labs-item"
                key={product.id}
                onClick={() => setActiveProject(product)}
              >
                <div className="home-labs-media">
                  <LabsProductPreview productId={product.id} />
                </div>

                <div className="home-labs-item-body">
                  <div className="home-labs-text">
                    <span className="home-labs-status">
                      {product.sector}
                    </span>
                    <h3>{product.title}</h3>
                    <p>{product.summary}</p>
                  </div>

                  <span className="home-labs-inspect">
                    <span>Explore Product</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. COMMON QUESTIONS + OPEN WHITE CLOSING CTA */}
      <motion.section className="home-faq-section" {...fadeInUp}>
        <div className="sz-container home-faq-layout">
          <div className="home-faq-intro">
            <span className="sz-eyebrow">Common Questions</span>
            <h2>Before We Start Building</h2>
            <p>
              Quick answers on how collaborations, custom engineering, and
              SHEZINO Labs pilots work.
            </p>
          </div>

          <div className="home-faq-list">
            {faqs.map((item, index) => {
              const isExpanded = openFaqIndex === index;
              return (
                <div
                  className={`home-faq-item${isExpanded ? " is-open" : ""}`}
                  key={item.question}
                >
                  <button
                    type="button"
                    className="home-faq-question"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setOpenFaqIndex(isExpanded ? -1 : index)
                    }
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      size={18}
                      className={isExpanded ? "is-rotated" : ""}
                      aria-hidden="true"
                    />
                  </button>

                  {isExpanded && (
                    <p className="home-faq-answer">{item.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section className="home-cta-section" {...fadeInUp}>
        <div className="sz-container home-cta-content">
          <div className="home-cta-copy">
            <div className="home-cta-assurance">
              <ShieldCheck size={16} aria-hidden="true" />
              <span>
                Direct Founder Consultation — Response within 24 hours
              </span>
            </div>
            <h2>Have an idea? Let&apos;s build it properly.</h2>
            <p>
              Share your goals or operational bottlenecks — our engineers will
              map a practical architecture and project roadmap with you.
            </p>
          </div>

          <div className="home-cta-actions">
            <Link
              className="home-primary-button"
              to="/contact?subject=Project+Enquiry"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link className="home-cta-ghost" to="/services">
              View Services
            </Link>
          </div>
        </div>
      </motion.section>

      {/* PRODUCT BRIEF MODAL */}
      {activeProject && (
        <div
          className="home-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="home-modal-title"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="home-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="home-modal-close"
              aria-label="Close product brief"
              onClick={() => setActiveProject(null)}
            >
              <X size={20} aria-hidden="true" />
            </button>

            <div className="home-modal-media">
              <LabsProductPreview productId={activeProject.id} variant="modal" />
            </div>

            <div className="home-modal-body">
              <span className="sz-eyebrow">{activeProject.sector}</span>
              <h3 id="home-modal-title">{activeProject.title}</h3>
              <p className="home-modal-subtitle">{activeProject.subtitle}</p>
              <p className="home-modal-summary">{activeProject.summary}</p>

              <div className="home-modal-highlights">
                <strong>Key Capabilities Built</strong>
                <ul>
                  {activeProject.highlights.map((item) => (
                    <li key={item}>
                      <Check size={15} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="home-modal-stack">
                <span>Architecture:</span>
                <strong>{activeProject.stack}</strong>
              </div>

              <div className="home-modal-actions">
                <Link
                  className="home-primary-button"
                  to="/contact?subject=Product+Enquiry"
                  onClick={() => setActiveProject(null)}
                >
                  <span>Enquire / Request Pilot</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  className="home-secondary-button"
                  to="/labs"
                  onClick={() => setActiveProject(null)}
                >
                  Open in SHEZINO Labs
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
