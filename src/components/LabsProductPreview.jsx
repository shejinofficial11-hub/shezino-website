import React from "react";
import { motion } from "motion/react";
import {
  Activity,
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  GraduationCap,
  HeartPulse,
  Lock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserCheck,
  Users,
} from "lucide-react";
import "./LabsProductPreview.css";

const pulseTransition = {
  duration: 2.4,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

export default function LabsProductPreview({ productId }) {
  /* 01. SHEZINO CONNECT — REAL COMMUNITY ASSISTANCE & SERVICE PORTAL */
  if (productId === "connect") {
    return (
      <div
        className="lpp-stage lpp-stage-connect"
        role="img"
        aria-label="SHEZINO Connect web application interface showing verified helpers, live service requests, and neighborhood trust tracking"
      >
        <div className="lpp-app-window is-dark">
          <div className="lpp-app-chrome is-dark">
            <div className="lpp-mac-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="lpp-app-url is-dark">
              <Lock size={9} aria-hidden="true" />
              <span>connect.shezino.in/dispatch</span>
            </div>
            <span className="lpp-live-pill">Verified Network</span>
          </div>

          <div className="lpp-app-nav is-dark">
            <span className="lpp-nav-brand">
              <Users size={12} aria-hidden="true" />
              <strong>SHEZINO Connect</strong>
            </span>
            <div className="lpp-nav-links" aria-hidden="true">
              <span className="is-on">Live Requests</span>
              <span>Helpers</span>
              <span>Safety Log</span>
            </div>
          </div>

          <div className="lpp-connect-body">
            <div className="lpp-connect-hero-bar">
              <div>
                <strong>Active Assistance Feed — Chennai</strong>
                <span>18 verified neighborhood specialists online nearby</span>
              </div>
              <span className="lpp-action-chip">+ New Request</span>
            </div>

            <div className="lpp-connect-feed">
              <motion.div
                className="lpp-feed-item is-featured"
                initial={{ opacity: 0.88 }}
                animate={{ opacity: 1 }}
                transition={pulseTransition}
              >
                <div className="lpp-feed-left">
                  <div className="lpp-avatar-badge">
                    <UserCheck size={12} aria-hidden="true" />
                  </div>
                  <div>
                    <strong>Senior Care &amp; Pharmacy Errand</strong>
                    <span>
                      <MapPin size={9} aria-hidden="true" /> Adyar, Chennai —
                      ID Verified
                    </span>
                  </div>
                </div>
                <span className="lpp-status-tag is-matched">Matched in 6m</span>
              </motion.div>

              <div className="lpp-feed-item">
                <div className="lpp-feed-left">
                  <div className="lpp-avatar-badge is-blue">
                    <ShieldCheck size={12} aria-hidden="true" />
                  </div>
                  <div>
                    <strong>Campus Document Courier</strong>
                    <span>
                      <MapPin size={9} aria-hidden="true" /> Guindy — Pin
                      Handover Active
                    </span>
                  </div>
                </div>
                <span className="lpp-status-tag is-active">In Transit</span>
              </div>

              <div className="lpp-feed-item">
                <div className="lpp-feed-left">
                  <div className="lpp-avatar-badge is-green">
                    <CheckCircle2 size={12} aria-hidden="true" />
                  </div>
                  <div>
                    <strong>Home Technician Visit</strong>
                    <span>
                      <Clock size={9} aria-hidden="true" /> Anna Nagar —
                      Verified Completion
                    </span>
                  </div>
                </div>
                <span className="lpp-status-tag is-done">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* 02. SHEZINO ACADEX — REAL INSTITUTIONAL CAMPUS ERP INTERFACE */
  if (productId === "acadex") {
    return (
      <div
        className="lpp-stage lpp-stage-acadex"
        role="img"
        aria-label="SHEZINO Acadex campus management web portal showing student enrollment stats, attendance percentage, and department workflows"
      >
        <div className="lpp-app-window">
          <div className="lpp-app-chrome">
            <div className="lpp-mac-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="lpp-app-url">
              <Lock size={9} aria-hidden="true" />
              <span>acadex.shezino.in/admin/overview</span>
            </div>
          </div>

          <div className="lpp-campus-shell">
            <aside className="lpp-campus-rail" aria-hidden="true">
              <div className="lpp-campus-logo">
                <GraduationCap size={13} />
                <span>Acadex</span>
              </div>
              <div className="lpp-rail-pill is-on">Dashboard</div>
              <div className="lpp-rail-pill">Admissions</div>
              <div className="lpp-rail-pill">Attendance</div>
              <div className="lpp-rail-pill">Exams &amp; Fees</div>
            </aside>

            <div className="lpp-campus-canvas">
              <div className="lpp-acadex-topbar">
                <div>
                  <strong>Campus Operations Portal</strong>
                  <span>Academic Term 2026 — Engineering &amp; Arts</span>
                </div>
                <span className="lpp-acadex-live">Synced</span>
              </div>

              <div className="lpp-campus-stats">
                <div className="lpp-stat-card">
                  <span>Enrolled Students</span>
                  <strong>1,420</strong>
                </div>
                <div className="lpp-stat-card">
                  <span>Today Attendance</span>
                  <strong>94.6%</strong>
                </div>
                <div className="lpp-stat-card">
                  <span>Active Depts</span>
                  <strong>14</strong>
                </div>
              </div>

              <div className="lpp-acadex-table">
                <div className="lpp-table-row">
                  <span>B.E. CSE Sem IV Timetable</span>
                  <strong className="is-ok">Published</strong>
                </div>
                <div className="lpp-table-row">
                  <span>Internal Assessment Marks</span>
                  <motion.strong
                    className="is-sync"
                    initial={{ opacity: 0.65 }}
                    animate={{ opacity: 1 }}
                    transition={pulseTransition}
                  >
                    8/8 Depts Ready
                  </motion.strong>
                </div>
                <div className="lpp-table-row">
                  <span>Fee Receipt Clearance</span>
                  <strong className="is-ok">Updated</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* 03. SHEZINO VITALIS — REAL CLINICAL & MEDICAL OUTREACH WEB PORTAL */
  if (productId === "vitalis") {
    return (
      <div
        className="lpp-stage lpp-stage-vitalis"
        role="img"
        aria-label="SHEZINO Vitalis healthcare web portal displaying live medical camp patient queue, vitals triage, and physician handoff"
      >
        <div className="lpp-app-window">
          <div className="lpp-app-chrome">
            <div className="lpp-mac-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="lpp-app-url">
              <Lock size={9} aria-hidden="true" />
              <span>vitalis.shezino.in/camp-14/triage</span>
            </div>
          </div>

          <div className="lpp-vitalis-body">
            <div className="lpp-tablet-head">
              <span className="lpp-clinical-brand">
                <HeartPulse size={14} aria-hidden="true" />
                <span>SHEZINO Vitalis — Camp #14 Live</span>
              </span>
              <span className="lpp-patient-token">48 Screened Today</span>
            </div>

            <div className="lpp-clinical-grid">
              <div className="lpp-vitals-card">
                <div className="lpp-ecg-header">
                  <div>
                    <strong>Token #C-049 — R. Karthik (54 yrs)</strong>
                    <span>Vitals cleared for Dr. Consultation</span>
                  </div>
                  <Activity size={15} className="lpp-ecg-icon" aria-hidden="true" />
                </div>

                <svg
                  className="lpp-ecg-svg"
                  viewBox="0 0 220 34"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 19H46L54 11L61 27L69 5L77 30L85 17H134L142 12L149 25L157 7L165 27L173 19H220"
                    stroke="#0d9488"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="lpp-clinical-metrics">
                  <div>
                    <span>BP</span>
                    <strong>126/82</strong>
                  </div>
                  <div>
                    <span>SpO2</span>
                    <strong>98%</strong>
                  </div>
                  <div>
                    <span>Sugar</span>
                    <strong>108 mg</strong>
                  </div>
                </div>
              </div>

              <div className="lpp-triage-side">
                <div className="lpp-triage-step is-done">
                  <CheckCircle2 size={13} aria-hidden="true" />
                  <span>Registration &amp; ID Logged</span>
                </div>
                <motion.div
                  className="lpp-triage-step is-active"
                  initial={{ opacity: 0.85 }}
                  animate={{ opacity: 1 }}
                  transition={pulseTransition}
                >
                  <Activity size={13} aria-hidden="true" />
                  <span>Doctor Cabin #2 Assigned</span>
                </motion.div>
                <div className="lpp-triage-step">
                  <ClipboardCheck size={13} aria-hidden="true" />
                  <span>Hospital Follow-Up Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* 04. SHEZINO LEARNIX — REAL STUDENT LEARNING & COMPETITION PLATFORM */
  return (
    <div
      className="lpp-stage lpp-stage-learnix"
      role="img"
      aria-label="SHEZINO Learnix student learning platform showing active study tracks, live competition leaderboard, and achievement badges"
    >
      <div className="lpp-app-window is-dark">
        <div className="lpp-app-chrome is-dark">
          <div className="lpp-mac-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="lpp-app-url is-dark">
            <Lock size={9} aria-hidden="true" />
            <span>learnix.shezino.in/contests</span>
          </div>
          <span className="lpp-live-pill">Live Cohort</span>
        </div>

        <div className="lpp-app-nav is-dark">
          <span className="lpp-nav-brand">
            <Trophy size={12} aria-hidden="true" />
            <strong>SHEZINO Learnix</strong>
          </span>
          <div className="lpp-nav-links" aria-hidden="true">
            <span>Courses</span>
            <span className="is-on">Assessments</span>
            <span>Leaderboard</span>
          </div>
        </div>

        <div className="lpp-learnix-body">
          <div className="lpp-learnix-banner">
            <div>
              <span className="lpp-banner-tag">
                <Sparkles size={10} aria-hidden="true" /> Weekly Challenge Open
              </span>
              <strong>Full-Stack Logic &amp; System Sprint</strong>
            </div>
            <div className="lpp-xp-chip">
              <Award size={12} aria-hidden="true" />
              <span>2,480 XP</span>
            </div>
          </div>

          <div className="lpp-learnix-split">
            <div className="lpp-learnix-tracks">
              <div className="lpp-track-pill">
                <BookOpen size={11} aria-hidden="true" />
                <div>
                  <strong>React &amp; API Track</strong>
                  <span>84% complete</span>
                </div>
              </div>
              <div className="lpp-track-pill is-highlight">
                <Sparkles size={11} aria-hidden="true" />
                <div>
                  <strong>Weekly Test #12</strong>
                  <span>Starts Sun 8 PM</span>
                </div>
              </div>
            </div>

            <div className="lpp-learnix-board">
              <motion.div
                className="lpp-lb-row is-top"
                initial={{ opacity: 0.85 }}
                animate={{ opacity: 1 }}
                transition={pulseTransition}
              >
                <span className="lpp-lb-rank">#1</span>
                <strong>Divya S.</strong>
                <span className="lpp-lb-reward">980 pts</span>
              </motion.div>
              <div className="lpp-lb-row">
                <span className="lpp-lb-rank">#2</span>
                <strong>Aarav K.</strong>
                <span className="lpp-lb-reward">945 pts</span>
              </div>
              <div className="lpp-lb-row">
                <span className="lpp-lb-rank">#3</span>
                <strong>Meera R.</strong>
                <span className="lpp-lb-reward">910 pts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
