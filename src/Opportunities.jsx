import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import OpportunitiesActionStage from "./components/OpportunitiesActionStage";
import { OPPORTUNITY_DIRECTORY } from "./data/enquiryCatalog";
import oppWelcomeHoloImg from "./assets/images/opp_premium_welcome_holo_1794940094186.jpg";
import "./Opportunities.css";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: "some" },
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
};

const whyPillars = [
  {
    number: "01",
    title: "Production Exposure",
    description:
      "Work directly on client deployments, active SHEZINO Labs builds (Connect, Acadex, Vitalis, Learnix), and live R&D prototypes.",
  },
  {
    number: "02",
    title: "Cross-Domain Range",
    description:
      "Gain practical depth spanning full-stack engineering, applied AI, connected hardware, UI systems, media, and strategy.",
  },
  {
    number: "03",
    title: "Direct Lead Mentorship",
    description:
      "Collaborate side-by-side with our founding leads, project managers, and engineering heads rather than sitting behind layers.",
  },
  {
    number: "04",
    title: "Earned Ownership",
    description:
      "Step up from guided tasks to owning core features, technical decisions, and measurable release milestones.",
  },
];

const opportunityTracks = [
  {
    number: "01",
    Icon: Code2,
    title: "Software Engineering",
    description:
      "Architect dependable web applications, scalable APIs, and cross-platform software built for everyday reliability.",
    areas: [
      "Frontend Systems",
      "Backend Architecture",
      "Full-Stack Platforms",
      "Mobile Applications",
      "Quality Engineering",
    ],
    subject: "Software Development Application",
  },
  {
    number: "02",
    Icon: Sparkles,
    title: "AI & Applied Intelligence",
    description:
      "Research and integrate intelligent automation, decision workflows, and data-backed reasoning models.",
    areas: [
      "Applied AI Workflows",
      "Machine Learning",
      "Data Systems",
      "Prototype Research",
    ],
    subject: "AI & Emerging Tech Application",
  },
  {
    number: "03",
    Icon: Cpu,
    title: "Hardware & Embedded IoT",
    description:
      "Engineer connected physical prototypes, sensor-driven robotics kits, and dependable embedded firmware.",
    areas: [
      "Embedded Firmware",
      "Sensor Integration",
      "Connected IoT",
      "Hardware Prototyping",
    ],
    subject: "Hardware & IoT Application",
  },
  {
    number: "04",
    Icon: Layers,
    title: "Product Design & Media",
    description:
      "Shape clear user interfaces, brand systems, and visual product narratives that make complex tech intuitive.",
    areas: [
      "UI/UX Systems",
      "Brand Visuals",
      "Motion & Video",
      "Technical Storytelling",
    ],
    subject: "Design & Creative Application",
  },
  {
    number: "05",
    Icon: TrendingUp,
    title: "Strategy, Partnerships & Growth",
    description:
      "Drive institutional collaborations, structured market research, and disciplined operations as SHEZINO scales.",
    areas: [
      "Institutional Outreach",
      "Client Partnerships",
      "Market Intelligence",
      "Operations Strategy",
    ],
    subject: "Business & Growth Application",
  },
];

const audienceJourneys = [
  {
    number: "01",
    title: "Students & Early Builders",
    description:
      "Transition from classroom theory to hands-on software builds, architecture reviews, and certified internships.",
  },
  {
    number: "02",
    title: "Emerging Specialists",
    description:
      "Sharpen your engineering, AI, hardware, or design craft by owning meaningful deliverables on live products.",
  },
  {
    number: "03",
    title: "Makers & Problem Solvers",
    description:
      "Bring original prototypes, curiosity, and technical ideas into an environment built for rapid validation.",
  },
  {
    number: "04",
    title: "Schools, Colleges & Partners",
    description:
      "Collaborate with SHEZINO on technical workshops, government school outreach, campus MoUs, and hackathons.",
  },
];

const coreExpectations = [
  "Intellectual curiosity and rapid learning",
  "End-to-end responsibility and ownership",
  "Clear, structured communication",
  "Respectful multidisciplinary teamwork",
  "First-principles problem solving",
  "Steady consistency on real commitments",
];

export default function Opportunities() {
  const [closingImgFailed, setClosingImgFailed] = useState(false);
  const [activeProgramTab, setActiveProgramTab] = useState(
    OPPORTUNITY_DIRECTORY[0].id
  );

  const selectedProgramGroup =
    OPPORTUNITY_DIRECTORY.find((group) => group.id === activeProgramTab) ||
    OPPORTUNITY_DIRECTORY[0];

  return (
    <div className="sz-opp">
      {/* 01. IMMERSIVE FULL-VIEWPORT OBSIDIAN HERO + 3D KINETIC DISCIPLINE ORBIT */}
      <section className="sz-opp-hero">
        <div className="sz-opp-hero-glow" aria-hidden="true" />

        <div className="sz-opp-hero-inner">
          <div className="sz-opp-hero-copy">
            <span className="sz-eyebrow sz-opp-eyebrow">
              Careers &amp; Collaboration
            </span>

            <h1>
              Build Technology{" "}
              <span className="sz-opp-highlight">With Purpose.</span>
            </h1>

            <p className="sz-opp-hero-lead">
              Meaningful engineering grows around people who care about craft,
              accountability, and real outcomes. At SHEZINO in Chennai, student
              interns, specialists, and campus partners collaborate directly on
              live platforms, client builds, and hands-on workshops.
            </p>

            <div className="sz-opp-hero-index">
              <div>
                <span>Core Tracks</span>
                <strong>Engineering / AI / IoT / Design / Growth</strong>
              </div>
              <div>
                <span>Ways to Collaborate</span>
                <strong>Internships / Roles / Workshops / Campus MoUs</strong>
              </div>
            </div>
          </div>

          <div className="sz-opp-hero-stage">
            <div className="sz-opp-stage-glow" aria-hidden="true" />
            <OpportunitiesActionStage />
          </div>
        </div>
      </section>

      {/* 02. ENGINEERING CULTURE — PURE WHITE EDITORIAL MANIFESTO */}
      <section className="sz-opp-white-band">
        <div className="sz-container sz-opp-why-grid">
          <motion.div className="sz-opp-why-copy" {...fadeInUp}>
            <span className="sz-eyebrow">Engineering Culture</span>
            <h2>Real Ownership From Day One.</h2>
            <p>
              Contributors at SHEZINO work alongside our 19-member core team
              from the start—solving real operational bottlenecks and shipping
              reviewed code, circuits, and visual campaigns into production.
            </p>
          </motion.div>

          <div className="sz-opp-pillars-list">
            {whyPillars.map((item, idx) => (
              <motion.article
                className="sz-opp-pillar-row"
                key={item.number}
                {...fadeInUp}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="sz-opp-pillar-num">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 03. OPEN DISCIPLINES — DARK OBSIDIAN STICKY SPLIT */}
      <section className="sz-opp-dark-band" id="tracks">
        <div className="sz-container sz-opp-tracks-layout">
          <div className="sz-opp-tracks-intro">
            <span className="sz-eyebrow">Open Tracks</span>
            <h2>Five Disciplines. One Engineering Standard.</h2>
            <p>
              Explore the five core practice areas driving our flagship
              platforms, bespoke client engineering, and long-term growth.
            </p>
          </div>

          <div className="sz-opp-tracks-stack">
            {opportunityTracks.map(
              ({ number, Icon, title, description, areas, subject }, idx) => (
                <motion.article
                  className="sz-opp-track-card"
                  key={number}
                  {...fadeInUp}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="sz-opp-track-head">
                    <div className="sz-opp-track-title">
                      <span className="sz-opp-track-num">{number}</span>
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                        className="sz-opp-track-icon"
                        aria-hidden="true"
                      />
                      <h3>{title}</h3>
                    </div>

                    <Link
                      to={`/contact?subject=${encodeURIComponent(subject)}`}
                      className="sz-opp-track-link"
                    >
                      <span>Express Interest</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>

                  <p className="sz-opp-track-desc">{description}</p>

                  <div className="sz-opp-areas-line">
                    {areas.map((area) => (
                      <span key={area} className="sz-opp-area-item">
                        {area}
                      </span>
                    ))}
                  </div>
                </motion.article>
              )
            )}
          </div>
        </div>
      </section>

      {/* 04. PATHWAYS & SHARED STANDARDS — PURE WHITE SPLIT */}
      <section className="sz-opp-white-band">
        <div className="sz-container sz-opp-connect-value-grid">
          <div className="sz-opp-journeys-col">
            <div className="sz-opp-section-head">
              <span className="sz-eyebrow">Engagement Pathways</span>
              <h2>Built for Builders at Every Stage.</h2>
            </div>

            <div className="sz-opp-journeys-grid">
              {audienceJourneys.map((item, idx) => (
                <motion.article
                  className="sz-opp-journey-card"
                  key={item.number}
                  {...fadeInUp}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className="sz-opp-journey-num">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.aside className="sz-opp-expectations-card" {...fadeInUp}>
            <span className="sz-eyebrow">Shared Standards</span>
            <h2>What Defines Our Team</h2>
            <p className="sz-opp-exp-intro">
              Across every track, we value collaborators who consistently bring:
            </p>

            <ul className="sz-opp-exp-list">
              {coreExpectations.map((trait) => (
                <li key={trait}>
                  <Check size={16} aria-hidden="true" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>

            <p className="sz-opp-exp-principle">
              Tools evolve fast—curiosity, clarity, and reliable execution are
              what endure.
            </p>
          </motion.aside>
        </div>

        <div className="sz-container">
          <div className="sz-opp-white-divider" />

          <div className="sz-opp-directory">
            <div className="sz-opp-directory-head">
              <div>
                <span className="sz-eyebrow">Programs &amp; Initiatives</span>
                <h2>Explore Opportunities by Category.</h2>
              </div>
              <p>
                From student internships and school outreach to institutional
                MoUs, hackathons, and applied research—select a category to
                connect directly.
              </p>
            </div>

            <div
              className="sz-opp-cat-tabs"
              role="tablist"
              aria-label="Opportunity and collaboration categories"
            >
              {OPPORTUNITY_DIRECTORY.map((group) => {
                const isSelected = group.id === activeProgramTab;
                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`sz-opp-cat-tab${isSelected ? " is-active" : ""}`}
                    onClick={() => setActiveProgramTab(group.id)}
                  >
                    {group.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProgramGroup.id}
                className="sz-opp-cat-panel"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="sz-opp-cat-subheading">
                  {selectedProgramGroup.headline}
                </p>

                <div className="sz-opp-cat-grid">
                  {selectedProgramGroup.items.map((program) => (
                    <article className="sz-opp-program-card" key={program.title}>
                      <h3>{program.title}</h3>
                      <p>{program.description}</p>
                      <Link
                        to={`/contact?category=${encodeURIComponent(
                          selectedProgramGroup.id
                        )}&topic=${encodeURIComponent(program.topic)}`}
                        className="sz-opp-program-link"
                      >
                        <span>Enquire for This Program</span>
                        <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </article>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 05. OBSIDIAN CLOSING INVITATION SPLIT WITH WELCOMING FOUNDERS */}
      <section className="sz-opp-closing-band">
        <div className="sz-container sz-opp-closing-split">
          <motion.div className="sz-opp-closing-copy" {...fadeInUp}>
            <span className="sz-eyebrow sz-opp-eyebrow">
              Start the Conversation
            </span>
            <h2>
              Bring Your Craft.{" "}
              <span className="sz-opp-highlight">Shape What Ships Next.</span>
            </h2>
            <p>
              Whether you are applying for a software or hardware internship,
              exploring a specialist role, or inviting us for a campus workshop
              or MoU—share your interest and what you want to build together.
            </p>
            <span className="sz-opp-closing-principle">
              Strong partnerships begin with an open conversation around real work.
            </span>

            <div className="sz-opp-closing-action">
              <Link
                to="/contact?subject=Career+Enquiry"
                className="sz-opp-primary-btn"
              >
                <span>Express Your Interest</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          <motion.div className="sz-opp-closing-visual-wrap" {...fadeInUp}>
            <div className="sz-opp-closing-aura" aria-hidden="true" />
            <div className="sz-opp-closing-frame">
              {!closingImgFailed ? (
                <img
                  src={oppWelcomeHoloImg}
                  alt="Two smiling 21-year-old SHEZINO engineers in black blazers with SHEZINO chest badges extending open welcoming hands beside a glowing cyan team, software, hardware, and AI hologram"
                  className="sz-opp-closing-img"
                  draggable="false"
                  referrerPolicy="no-referrer"
                  onError={() => setClosingImgFailed(true)}
                />
              ) : (
                <div className="sz-opp-closing-fallback">
                  <Users size={28} aria-hidden="true" />
                  <span>Grow With SHEZINO</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}