import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import "./OpportunitiesActionStage.css";

const ORBIT_DISCIPLINES = [
  {
    id: "software",
    short: "Software",
    title: "Software Engineering",
    focus: "Web Platforms / Full-Stack / Mobile Apps",
    subject: "Software Development Application",
    angleDeg: -90,
    Icon: Code2,
  },
  {
    id: "ai",
    short: "AI & Tech",
    title: "AI & Applied Intelligence",
    focus: "Applied ML / Data Systems / Research",
    subject: "AI & Emerging Tech Application",
    angleDeg: -18,
    Icon: Sparkles,
  },
  {
    id: "hardware",
    short: "Hardware",
    title: "Hardware & Embedded IoT",
    focus: "Embedded Systems / Robotics / Prototyping",
    subject: "Hardware & IoT Application",
    angleDeg: 54,
    Icon: Cpu,
  },
  {
    id: "design",
    short: "Design",
    title: "Product Design & Media",
    focus: "UI & UX / Motion Video / Brand Systems",
    subject: "Design & Creative Application",
    angleDeg: 126,
    Icon: Layers,
  },
  {
    id: "growth",
    short: "Growth",
    title: "Strategy & Growth",
    focus: "Partnerships / Market Intel / Operations",
    subject: "Business & Growth Application",
    angleDeg: 198,
    Icon: TrendingUp,
  },
];

export default function OpportunitiesActionStage() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return undefined;
    const timer = window.setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % ORBIT_DISCIPLINES.length);
    }, 3400);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const active = ORBIT_DISCIPLINES[selectedIdx];
  const ActiveIcon = active.Icon;

  return (
    <div
      className="sz-orbit-stage"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Interactive SHEZINO five-discipline opportunity constellation"
    >
      {/* 3D ORBITAL RINGS & ROTATING CONSTELLATION */}
      <div className="sz-orbit-viewport">
        <div className="sz-orbit-halo" aria-hidden="true" />

        {/* TILTED PRECISION RINGS */}
        <div
          className={`sz-orbit-ring outer${reducedMotion ? " is-still" : ""}`}
          aria-hidden="true"
        />
        <div
          className={`sz-orbit-ring middle${reducedMotion ? " is-still" : ""}`}
          aria-hidden="true"
        />
        <div className="sz-orbit-ring inner" aria-hidden="true" />

        {/* RADIAL SPOKES GOING OUTWARD FROM SMALL CENTER CIRCLE TO ALL 5 NODES */}
        <svg
          className="sz-orbit-spokes"
          viewBox="0 0 400 400"
          aria-hidden="true"
        >
          {ORBIT_DISCIPLINES.map((item, idx) => {
            const rad = (item.angleDeg * Math.PI) / 180;
            const cos = Math.cos(rad);
            const sin = Math.sin(rad);
            const x1 = 200 + cos * 50;
            const y1 = 200 + sin * 50;
            const x2 = 200 + cos * 150;
            const y2 = 200 + sin * 150;
            const isSelected = idx === selectedIdx;

            return (
              <line
                key={item.id}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className={`sz-orbit-spoke${isSelected ? " is-active" : ""}`}
              />
            );
          })}
        </svg>

        {/* LUMINOUS SHEZINO CORE */}
        <motion.div
          className="sz-orbit-core"
          animate={
            reducedMotion
              ? undefined
              : {
                  scale: [1, 1.045, 1],
                }
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="sz-orbit-core-wordmark">SHEZINO</span>
          <span className="sz-orbit-core-sub">5 Tracks</span>
        </motion.div>

        {/* 5 INTERACTIVE DISCIPLINE NODES CONNECTED TO CORE */}
        {ORBIT_DISCIPLINES.map((item, idx) => {
          const NodeIcon = item.Icon;
          const isSelected = idx === selectedIdx;
          const rad = (item.angleDeg * Math.PI) / 180;
          const leftPct = 50 + Math.cos(rad) * 37.5;
          const topPct = 50 + Math.sin(rad) * 37.5;

          return (
            <button
              key={item.id}
              type="button"
              className={`sz-orbit-node${isSelected ? " is-active" : ""}`}
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
              }}
              onClick={() => setSelectedIdx(idx)}
              aria-pressed={isSelected}
            >
              <span className="sz-orbit-node-icon">
                <NodeIcon size={16} aria-hidden="true" />
              </span>
              <span className="sz-orbit-node-label">{item.short}</span>
            </button>
          );
        })}
      </div>

      {/* CLEAN BORDERLESS ACTIVE TRACK READOUT BAR */}
      <div className="sz-orbit-readout">
        <div className="sz-orbit-readout-info">
          <span className="sz-orbit-readout-icon">
            <ActiveIcon size={16} aria-hidden="true" />
          </span>
          <div>
            <strong>{active.title}</strong>
            <span>{active.focus}</span>
          </div>
        </div>

        <Link
          to={`/contact?subject=${encodeURIComponent(active.subject)}`}
          className="sz-orbit-readout-link"
        >
          <span>Apply</span>
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
