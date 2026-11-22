import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, RotateCw } from "lucide-react";

import founderShejinImg from "./assets/images/team_exec_shejin_v2_1795000101099.jpg";
import execSanaImg from "./assets/images/team_exec_sana_dark_v3_1795002002201.jpg";
import execAayishaImg from "./assets/images/team_exec_aayisha_dark_v3_1795002002433.jpg";

import leadTahmeedImg from "./assets/images/team_lead_tahmeed_v5_1795024907481.jpg";
import leadKarimullaImg from "./assets/images/team_lead_karimulla_v3_1795001617782.jpg";
import leadSubramanianImg from "./assets/images/team_lead_subramanian_v3_1795001617942.jpg";
import leadShanavasImg from "./assets/images/team_lead_shanavas_v3_1795001612096.jpg";
import leadZaidImg from "./assets/images/team_lead_zaid_v3_1795001614139.jpg";
import leadTarikImg from "./assets/images/team_lead_tarik_v3_1795001619185.jpg";

import devDhaanishImg from "./assets/images/team_dev_dhaanish_v3_1795001611014.jpg";
import devIrfanImg from "./assets/images/team_dev_irfan_v5_1795024909760.jpg";
import devSriramImg from "./assets/images/team_dev_sriram_v5_1795024908768.jpg";
import devMuazImg from "./assets/images/team_dev_muaz_v3_1795001616978.jpg";
import devKameshImg from "./assets/images/team_dev_kamesh_v4_1795024658882.jpg";
import devRoniaImg from "./assets/images/team_dev_ronia_v3_1795001611354.jpg";

import bizFaizImg from "./assets/images/team_biz_faiz_v6_1795024908253.jpg";
import bizSwethaImg from "./assets/images/team_biz_swetha_v3_1795001613165.jpg";

import mediaImranImg from "./assets/images/team_media_imran_v2_1795000111236.jpg";
import mediaSuhebImg from "./assets/images/team_media_suheb_v6_1795025154208.jpg";

import "./Team.css";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: "some" },
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
};

const founderProfile = {
  name: "Yusuf Shejin",
  role: "Founder & Chief Executive Officer",
  location: "Chennai, India",
  image: founderShejinImg,
  linkedin: "https://www.linkedin.com/in/shejin11/",
};

const teamRoster = [
  {
    name: "Sana Nihal",
    role: "Managing Director",
    isLead: true,
    avatarScale: 0.9,
    focus: "Governance & Operations",
    note: "Oversees company governance, operational standards, and strategic direction — ensuring every commitment SHEZINO makes is backed by structure and long-term discipline.",
    image: execSanaImg,
    linkedin: "https://www.linkedin.com/in/sananihal",
  },
  {
    name: "Aayisha",
    role: "Executive Director",
    isLead: true,
    avatarScale: 0.91,
    focus: "Executive Management",
    note: "Drives cross-team alignment, internal execution frameworks, and leadership accountability so daily operations move with clarity, speed, and consistent follow-through.",
    image: execAayishaImg,
    linkedin: "https://www.linkedin.com/in/aayisha-anwardeen-98195b256/",
  },
  {
    name: "Tahmeed",
    role: "Project Manager",
    isLead: true,
    avatarScale: 0.9,
    focus: "Project Delivery",
    note: "Leads project planning, sprint coordination, and team accountability — keeping milestones organized, blockers resolved early, and client deliverables shipped on schedule.",
    image: leadTahmeedImg,
  },
  {
    name: "Karimulla",
    role: "Engineering Manager",
    isLead: true,
    avatarScale: 0.9,
    focus: "Engineering Execution",
    note: "Co-leads engineering operations alongside project management, guiding software developers on code quality, system stability, and timely production releases.",
    image: leadKarimullaImg,
  },
  {
    name: "Subramanian",
    role: "Technical Lead",
    isLead: true,
    avatarScale: 0.86,
    focus: "Technical Architecture",
    note: "Steers technical direction, architecture decisions, and complex troubleshooting — keeping software builds maintainable, secure, and aligned with industry practices.",
    image: leadSubramanianImg,
    linkedin: "https://linkedin.com/in/subramanian-m-69413b309",
  },
  {
    name: "Shanavas",
    role: "Hardware Lead",
    isLead: true,
    avatarScale: 0.9,
    focus: "Hardware & Embedded Systems",
    note: "Heads hardware engineering, circuit prototyping, and embedded device integration — connecting physical sensors and microcontroller firmware directly with cloud software platforms.",
    image: leadShanavasImg,
    linkedin:
      "https://www.linkedin.com/in/s-shanavas-b51336322?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Zaid",
    role: "Business Development Manager",
    isLead: true,
    avatarScale: 0.88,
    focus: "Client Growth & Strategy",
    note: "Leads client discovery, business expansion, and brand communication — translating real client challenges into clear project opportunities for SHEZINO.",
    image: leadZaidImg,
    linkedin:
      "https://www.linkedin.com/in/mohammed-zaid-391673423?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Tarik",
    role: "Creative Lead",
    isLead: true,
    avatarScale: 0.88,
    focus: "Creative Direction",
    note: "Directs visual storytelling, production standards, and media campaigns — ensuring SHEZINO communicates its work with clarity, originality, and craft.",
    image: leadTarikImg,
  },
  {
    name: "Dhaanish",
    role: "Software Developer",
    avatarScale: 0.89,
    focus: "Software & AI Workflows",
    note: "Builds practical application features and AI-assisted software modules focused on clean logic, fast iteration, and dependable real-world performance.",
    image: devDhaanishImg,
    linkedin:
      "https://www.linkedin.com/in/mohammed-danish-262523407?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Irfan",
    role: "Software Developer",
    avatarScale: 0.9,
    focus: "Application Engineering",
    note: "Develops structured web workflows, API integrations, and reliable software components tailored to everyday operational needs.",
    image: devIrfanImg,
    linkedin:
      "https://www.linkedin.com/in/mohammed-irfan-6b2240297?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Sriram",
    role: "Software Developer",
    avatarScale: 0.9,
    focus: "Product Development",
    note: "Contributes full-cycle feature development and AI-supported engineering workflows, turning functional specifications into stable user-ready software.",
    image: devSriramImg,
    linkedin:
      "https://www.linkedin.com/in/sriram-n-198626290?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Muaz",
    role: "Software Developer",
    avatarScale: 0.88,
    focus: "Core System Builds",
    note: "Executes core software builds and rapid product iterations with consistent focus on responsive functionality and clean delivery.",
    image: devMuazImg,
  },
  {
    name: "Kamesh",
    role: "Software Developer",
    avatarScale: 0.89,
    focus: "Web Systems",
    note: "Implements modern web components and practical application logic engineered for smooth usability and steady production uptime.",
    image: devKameshImg,
    linkedin: "https://www.linkedin.com/in/kameshwaran-s2006",
  },
  {
    name: "Ronia",
    role: "Software Developer",
    avatarScale: 0.9,
    focus: "Frontend & Interfaces",
    note: "Crafts clean, responsive user interfaces and accessible product experiences that make technical workflows intuitive for everyday users.",
    image: devRoniaImg,
    linkedin:
      "https://www.linkedin.com/in/ronia-rosario-sam-k-13493a290?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Faiz",
    role: "Business Development Executive",
    avatarScale: 0.9,
    focus: "Outreach & Client Relations",
    note: "Handles prospect outreach, initial client conversations, and hiring coordination — building genuine relationships that support company growth.",
    image: bizFaizImg,
  },
  {
    name: "Swetha",
    role: "Business Development Executive",
    avatarScale: 0.91,
    focus: "Partnerships & Talent",
    note: "Coordinates client communication, talent outreach, and content initiatives to keep partnerships responsive and well structured.",
    image: bizSwethaImg,
    linkedin: "https://www.linkedin.com/in/swetha-m-640767309",
  },
  {
    name: "Imran",
    role: "Visual Media Specialist",
    avatarScale: 0.89,
    focus: "Production & Social Media",
    note: "Shoots video content, captures photography, and manages digital channel publishing to present SHEZINO projects and culture authentically.",
    image: mediaImranImg,
  },
  {
    name: "Suheb",
    role: "Visual Media Specialist",
    avatarScale: 0.9,
    focus: "Editing & Visual Storytelling",
    note: "Produces edited video stories, visual assets, and photography across social platforms with sharp attention to pacing and detail.",
    image: mediaSuhebImg,
  },
];

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function AvatarVisual({ src, alt, name, className, isDark = false, style }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`sz-avatar-fallback${isDark ? " is-dark" : ""}`}
        aria-label={alt}
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      draggable="false"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}

function LinkedInLink({ url, name, dark = false }) {
  if (!url) return null;

  return (
    <a
      className={`sz-team-linkedin${dark ? " is-dark" : ""}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${name}'s LinkedIn profile`}
      title={`View ${name} on LinkedIn`}
      onClick={(e) => e.stopPropagation()}
    >
      in
    </a>
  );
}

function FlipMemberCard({ person, idx }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  const scaleStyle =
    person.avatarScale && person.avatarScale !== 1
      ? { transform: `scale(${person.avatarScale})`, transformOrigin: "center bottom" }
      : undefined;

  return (
    <motion.div
      className={`sz-flip-card${isFlipped ? " is-flipped" : ""}${person.isLead ? " is-lead" : ""}`}
      {...fadeInUp}
      transition={{
        duration: 0.36,
        delay: Math.min(idx * 0.025, 0.25),
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label={`${person.name}, ${person.role}. Select to view role summary.`}
    >
      <div className="sz-flip-inner">
        {/* FRONT FACE */}
        <article className="sz-flip-face sz-flip-face-front">
          <div className="sz-member-portrait-stage">
            <div className="sz-member-portrait-mask">
              <AvatarVisual
                src={person.image}
                name={person.name}
                alt={`${person.name} — ${person.role}`}
                className="sz-member-portrait-img"
                style={scaleStyle}
                isDark
              />
            </div>

            <div className="sz-member-linkedin-slot">
              <LinkedInLink url={person.linkedin} name={person.name} dark />
            </div>
          </div>

          <div className="sz-member-foot">
            <div className="sz-member-info">
              <h3>{person.name}</h3>
              <p className="sz-member-role">{person.role}</p>
            </div>
            <span className="sz-flip-hint" aria-hidden="true">
              <RotateCw size={14} />
            </span>
          </div>
        </article>

        {/* BACK FACE */}
        <div className="sz-flip-face sz-flip-face-back">
          <div className="sz-back-head">
            <div>
              <h3>{person.name}</h3>
              <p className="sz-back-role">{person.role}</p>
            </div>
            <LinkedInLink url={person.linkedin} name={person.name} dark />
          </div>

          <p className="sz-back-note">{person.note}</p>

          <div className="sz-back-footer">
            <span className="sz-back-focus">{person.focus}</span>
            <span className="sz-flip-hint" aria-hidden="true">
              <RotateCw size={14} />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <div className="sz-team">
      {/* 01. HERO — ARCHITECTURAL OBSIDIAN */}
      <section className="sz-team-hero">
        <div className="sz-team-hero-grid" aria-hidden="true" />
        <div className="sz-team-hero-glow" aria-hidden="true" />

        <div className="sz-container sz-team-hero-inner">
          <span className="sz-eyebrow sz-team-eyebrow">Team SHEZINO</span>

          <h1>
            Builders Who Stand Behind{" "}
            <span className="sz-team-highlight">Every Outcome</span>
          </h1>

          <p className="sz-team-hero-lead">
            Founded in Chennai, our 19-member core team brings together founding
            leadership, full-stack developers, hardware &amp; IoT engineers,
            business leads, and creative media specialists — showing up with
            discipline and real ownership on every deliverable.
          </p>
        </div>
      </section>

      {/* 02. FOUNDER SPOTLIGHT — PURE WHITE */}
      <section className="sz-team-white-band" id="founder">
        <div className="sz-container">
          <motion.div className="sz-founder-feature" {...fadeInUp}>
            <div className="sz-founder-identity">
              <div className="sz-founder-portrait-wrap">
                <AvatarVisual
                  src={founderProfile.image}
                  name={founderProfile.name}
                  alt={`${founderProfile.name} — ${founderProfile.role} at SHEZINO`}
                  className="sz-founder-portrait-img"
                />
              </div>

              <div className="sz-founder-card-foot">
                <div>
                  <h3>{founderProfile.name}</h3>
                  <p className="sz-founder-role">{founderProfile.role}</p>
                  <span className="sz-founder-loc">
                    {founderProfile.location}
                  </span>
                </div>
                <LinkedInLink
                  url={founderProfile.linkedin}
                  name={founderProfile.name}
                />
              </div>
            </div>

            <div className="sz-founder-story">
              <span className="sz-eyebrow">Founder&apos;s Note</span>
              <h2>Why We Chose to Build</h2>

              <p>
                SHEZINO began with a collection of practical ideas and a deep
                commitment to technology — backed by the belief that strong
                engineering should do more than look impressive. Around us,
                everyday people and growing organizations face real struggles
                and daily friction that thoughtful technology can genuinely solve.
              </p>

              <p>
                Too often, those problems remain unsolved simply because no one
                takes the first step to build the right answer. We decided to
                take that step — starting in Chennai with a clear vision to
                create products and platforms that carry global reach and prove
                genuinely useful anywhere in the world.
              </p>

              <p>
                Equally important, SHEZINO was never built for one person to
                rise alone. Our company exists so every teammate, builder, and
                partner standing with us grows in skill, confidence, and
                opportunity — creating meaningful work together that leaves a
                lasting mark.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03. UNIFIED CORE TEAM — DEEP OBSIDIAN WITH 3D FLIP CARDS */}
      <section className="sz-team-dark-band" id="team">
        <div className="sz-container">
          <div className="sz-team-band-head sz-band-dark">
            <span className="sz-eyebrow sz-team-eyebrow">Core Team</span>
            <h2>The People Behind the Work</h2>
            <p>
              Hover or select any profile card to read each member&apos;s key
              focus and how they contribute to daily execution.
            </p>
          </div>

          <div className="sz-team-grid">
            {teamRoster.map((person, idx) => (
              <FlipMemberCard key={person.name} person={person} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 04. JOIN TEAM CTA — PURE WHITE BEFORE DARK FOOTER */}
      <section className="sz-team-cta-band">
        <div className="sz-container sz-team-cta-layout">
          <div className="sz-team-cta-copy">
            <span className="sz-eyebrow">Careers &amp; Collaboration</span>
            <h2>Interested in Building Alongside Us?</h2>
            <p>
              Whether you are exploring hands-on internship experience,
              project collaboration, or a future role on the team, we welcome
              conversations with people who take pride in solid work.
            </p>
          </div>

          <div className="sz-team-cta-actions">
            <Link to="/opportunities" className="sz-team-primary-btn">
              <span>View Open Programs</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <Link
              to="/contact?category=careers"
              className="sz-team-outline-btn"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
