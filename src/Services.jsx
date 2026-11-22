import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Factory,
  FileText,
  Globe,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers,
  Lock,
  MousePointerClick,
  Navigation,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import servicesTrioImg from "./assets/images/shezino_trio_building_services_1794854540618.jpg";
import obstacleRobotImg from "./assets/images/obstacle_robot_kit_3d_1794857935464.jpg";
import "./Services.css";

// 0: Full 3-person team wide shot -> 1: Left Dev + Full Website -> 2: Center Eng + White Real-Life ML Automation Web App -> 3: Right Eng + 3D Obstacle Robot Kit
const SCENE_DURATIONS = [2200, 4200, 4400, 4200];

const CHARACTER_SPOTS = [
  {
    id: "web",
    label: "Website and Web Platform Engineer",
    origin: "20% 48%",
    maskClass: "is-left",
    states: {
      0: { x: "0%", y: "0%", scale: 1.04, opacity: 1, blur: "blur(0px)", z: 4 },
      1: { x: "4%", y: "2%", scale: 1.32, opacity: 1, blur: "blur(0px)", z: 10 },
      2: { x: "-8%", y: "0%", scale: 0.86, opacity: 0.14, blur: "blur(2px)", z: 1 },
      3: { x: "-8%", y: "0%", scale: 0.86, opacity: 0.14, blur: "blur(2px)", z: 1 },
    },
  },
  {
    id: "ai",
    label: "ML and Automation Systems Engineer",
    origin: "50% 48%",
    maskClass: "is-center",
    states: {
      0: { x: "0%", y: "0%", scale: 1.04, opacity: 1, blur: "blur(0px)", z: 5 },
      1: { x: "18%", y: "0%", scale: 0.86, opacity: 0.14, blur: "blur(2px)", z: 1 },
      2: { x: "-26%", y: "2%", scale: 1.32, opacity: 1, blur: "blur(0px)", z: 10 },
      3: { x: "18%", y: "0%", scale: 0.86, opacity: 0.14, blur: "blur(2px)", z: 1 },
    },
  },
  {
    id: "iot",
    label: "Robotics and Embedded IoT Engineer",
    origin: "80% 48%",
    maskClass: "is-right",
    states: {
      0: { x: "0%", y: "0%", scale: 1.04, opacity: 1, blur: "blur(0px)", z: 4 },
      1: { x: "4%", y: "0%", scale: 0.86, opacity: 0.12, blur: "blur(2px)", z: 1 },
      2: { x: "4%", y: "0%", scale: 0.86, opacity: 0.12, blur: "blur(2px)", z: 1 },
      3: { x: "-56%", y: "2%", scale: 1.32, opacity: 1, blur: "blur(0px)", z: 10 },
    },
  },
];

const MOBILE_SPOT_OFFSETS = {
  web: { 0: "0%", 1: "26%", 2: "-8%", 3: "-8%" },
  ai: { 0: "0%", 1: "18%", 2: "0%", 3: "18%" },
  iot: { 0: "0%", 1: "4%", 2: "4%", 3: "-26%" },
};

function ServicesHeroFilm() {
  const [scene, setScene] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobileStage, setIsMobileStage] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqMobile = window.matchMedia("(max-width: 768px)");
    setIsMobileStage(mqMobile.matches);
    const onMobileChange = (e) => setIsMobileStage(e.matches);
    mqMobile.addEventListener("change", onMobileChange);

    if (mqMotion.matches) {
      setReducedMotion(true);
      setScene(0);
      return () => mqMobile.removeEventListener("change", onMobileChange);
    }

    const timer = window.setTimeout(() => {
      setScene((prev) => (prev + 1) % SCENE_DURATIONS.length);
    }, SCENE_DURATIONS[scene]);

    return () => {
      window.clearTimeout(timer);
      mqMobile.removeEventListener("change", onMobileChange);
    };
  }, [scene]);

  return (
    <div
      className="sz-shuffle-stage"
      aria-label="SHEZINO engineering team shuffling into spotlight beside live website, real-life ML automation web app, and 3D obstacle-avoiding robotics kit demonstrations"
    >
      {/* AMBIENT COBALT SPOTLIGHT BEHIND FOCUSED CHARACTER */}
      <motion.div
        className="sz-shuffle-spotlight"
        aria-hidden="true"
        animate={
          reducedMotion
            ? undefined
            : {
                opacity: scene === 0 ? 0.52 : 0.96,
                x: isMobileStage ? "0%" : scene === 0 ? "0%" : "-22%",
                scale: scene === 0 ? 0.95 : 1.05,
              }
        }
        transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* 3 LARGE CHARACTERS SHUFFLING INTO SPOTLIGHT */}
      <div className="sz-performers-deck">
        {CHARACTER_SPOTS.map((char, idx) => {
          const st = char.states[scene];
          const targetX = isMobileStage
            ? MOBILE_SPOT_OFFSETS[char.id][scene]
            : st.x;
          return (
            <motion.div
              key={char.id}
              className={`sz-performer-layer ${char.maskClass}`}
              style={{
                transformOrigin: char.origin,
                zIndex: st.z,
              }}
              animate={{
                x: targetX,
                y: st.y,
                scale: st.scale,
                opacity: st.opacity,
                filter: st.blur,
              }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                src={servicesTrioImg}
                alt={idx === 1 ? "SHEZINO web, automation, and robotics engineers" : ""}
                aria-hidden={idx !== 1}
                draggable="false"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          );
        })}
      </div>

      {/* DEDICATED WORK SHOWCASE (SIDE ON DESKTOP, BELOW ON MOBILE) */}
      <div className="sz-work-side-dock">
        <AnimatePresence mode="wait">
          {scene === 0 && isMobileStage && (
            <motion.div
              key="demo-mobile-standby"
              className="sz-mobile-demo-standby"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles size={15} aria-hidden="true" />
              <span>
                Live Showcase: Website Engineering, ML Automation &amp; Robotics
              </span>
            </motion.div>
          )}
          {/* CHARACTER 1: FULL AUTO-SCROLLING CLIENT WEBSITE */}
          {scene === 1 && (
            <motion.div
              key="demo-full-website"
              className="sz-demo-browser sz-demo-browser-full"
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="sz-browser-chrome">
                <div className="sz-browser-url">
                  <Lock size={11} aria-hidden="true" />
                  <span>www.client-storefront.in</span>
                </div>
                <span className="sz-browser-kind">Website Engineering</span>
              </div>

              <div className="sz-webpage-window">
                <motion.div
                  className="sz-webpage-scroll-canvas"
                  initial={{ y: 0 }}
                  animate={{ y: -116 }}
                  transition={{ duration: 3.1, delay: 0.55, ease: "easeInOut" }}
                >
                  {/* FULL WEBPAGE HEADER */}
                  <div className="sz-wp-header">
                    <span className="sz-wp-brand">APEX RETAIL</span>
                    <div className="sz-wp-nav">
                      <span>Solutions</span>
                      <span>Catalog</span>
                      <span>Pricing</span>
                      <span className="sz-wp-nav-cta">Order Now</span>
                    </div>
                  </div>

                  {/* FULL WEBPAGE HERO BANNER */}
                  <div className="sz-wp-hero">
                    <div className="sz-wp-hero-copy">
                      <strong>Modern Commerce &amp; Booking Website</strong>
                      <p>
                        Responsive multi-page storefront, live inventory sync, and
                        instant customer checkout.
                      </p>
                      <span className="sz-wp-primary-btn">
                        <span>Explore Catalog</span>
                        <MousePointerClick size={12} aria-hidden="true" />
                      </span>
                    </div>
                    <div className="sz-wp-hero-visual">
                      <Globe size={28} aria-hidden="true" />
                      <span>Custom UI</span>
                    </div>
                  </div>

                  {/* FULL WEBPAGE FEATURE GRID */}
                  <div className="sz-wp-section-grid">
                    <div className="sz-wp-mini-card">
                      <strong>Product Catalog</strong>
                      <span>Filtered search &amp; instant cart</span>
                    </div>
                    <div className="sz-wp-mini-card">
                      <strong>Payment Gateway</strong>
                      <span>Verified UPI &amp; card checkout</span>
                    </div>
                    <div className="sz-wp-mini-card">
                      <strong>Order Tracking</strong>
                      <span>Automated SMS &amp; status updates</span>
                    </div>
                  </div>

                  {/* FULL WEBPAGE BOTTOM FOOTER BAND */}
                  <div className="sz-wp-footer-strip">
                    <span>© Client Commerce Platform</span>
                    <span>Privacy / Terms / Support</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* CHARACTER 2: CRISP WHITE-SCREEN REAL-LIFE ML & AUTOMATION WEB PORTAL */}
          {scene === 2 && (
            <motion.div
              key="demo-ml-white-webapp"
              className="sz-demo-browser sz-demo-browser-full"
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="sz-browser-chrome">
                <div className="sz-browser-url">
                  <Lock size={11} aria-hidden="true" />
                  <span>portal.auto-ops.in/smart-intake</span>
                </div>
                <span className="sz-browser-kind">ML &amp; Automation</span>
              </div>

              <div className="sz-webpage-window">
                <motion.div
                  className="sz-webpage-scroll-canvas"
                  initial={{ y: 0 }}
                  animate={{ y: -120 }}
                  transition={{ duration: 3.3, delay: 0.55, ease: "easeInOut" }}
                >
                  {/* WHITE WEB PORTAL HEADER */}
                  <div className="sz-wp-header">
                    <span className="sz-wp-brand">AUTO-OPS PORTAL</span>
                    <div className="sz-wp-nav">
                      <span>Bills</span>
                      <span>Orders</span>
                      <span>Support</span>
                      <span className="sz-wp-nav-cta">Auto-Mode</span>
                    </div>
                  </div>

                  {/* REAL-LIFE INVOICE & ORDER AUTOMATION FLOW ON WHITE SCREEN */}
                  <div className="sz-mlw-hero-card">
                    <div className="sz-mlw-title-row">
                      <strong>Real-Life Example: Supplier Bill Auto-Approval</strong>
                      <span>Automated Flow</span>
                    </div>

                    <div className="sz-mlw-flow-grid">
                      <motion.div
                        className="sz-mlw-step"
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.3 }}
                      >
                        <FileText size={14} aria-hidden="true" />
                        <strong>1. Bill Uploaded</strong>
                        <span>Invoice #2084 — ₹18,450</span>
                      </motion.div>

                      <span className="sz-mlw-arrow" aria-hidden="true">
                        <ArrowRight size={13} />
                      </span>

                      <motion.div
                        className="sz-mlw-step is-highlight"
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, delay: 0.65 }}
                      >
                        <Sparkles size={14} aria-hidden="true" />
                        <strong>2. ML Reads Items</strong>
                        <span>GSTIN &amp; Tax Verified</span>
                      </motion.div>

                      <span className="sz-mlw-arrow" aria-hidden="true">
                        <ArrowRight size={13} />
                      </span>

                      <motion.div
                        className="sz-mlw-step is-done"
                        initial={{ opacity: 0, x: 6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 1.0 }}
                      >
                        <CheckCircle2 size={14} aria-hidden="true" />
                        <strong>3. Stock Updated</strong>
                        <span>Ledger &amp; Alert Synced</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* REAL-LIFE DAILY TASKS RUNNING AUTOMATICALLY */}
                  <div className="sz-mlw-feed">
                    <div className="sz-mlw-feed-row">
                      <div>
                        <strong>Customer Refund Email</strong>
                        <span>ML sorted priority &amp; drafted reply</span>
                      </div>
                      <span className="sz-mlw-status">Routed</span>
                    </div>

                    <div className="sz-mlw-feed-row">
                      <div>
                        <strong>Warehouse Delivery Challan</strong>
                        <span>Scanned 14 boxes from mobile photo</span>
                      </div>
                      <span className="sz-mlw-status">Synced</span>
                    </div>

                    <div className="sz-mlw-feed-row">
                      <div>
                        <strong>Daily Hospital Lab Report</strong>
                        <span>Flagged critical result to doctor portal</span>
                      </div>
                      <span className="sz-mlw-status">Alerted</span>
                    </div>
                  </div>

                  <div className="sz-wp-footer-strip">
                    <span>Business Workflow Automation</span>
                    <span>Zero Manual Data Entry</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* CHARACTER 3: 3D OBSTACLE-AVOIDING ROBOT & IOT ROBOTICS KIT */}
          {scene === 3 && (
            <motion.div
              key="demo-3d-robotics-kit"
              className="sz-demo-hardware-stage"
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="sz-hw-device-visual">
                <img
                  src={obstacleRobotImg}
                  alt="Autonomous 3D obstacle-avoiding rover robotics kit with dual ultrasonic sensors, lidar turret, and microcontroller PCB"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="sz-hw-companion-card">
                <div className="sz-demo-wf-head">
                  <Cpu size={14} aria-hidden="true" />
                  <span>Obstacle-Avoiding Robot Kit</span>
                </div>

                <div className="sz-hw-reading">
                  <Navigation size={15} aria-hidden="true" />
                  <div>
                    <strong>Ultrasonic: 18 cm — Auto-Turn Left</strong>
                    <span>LiDAR + Dual Rangefinder Avoidance</span>
                  </div>
                </div>

                <div className="sz-hw-toggle-card">
                  <div className="sz-hw-toggle-label">
                    <Smartphone size={13} aria-hidden="true" />
                    <span>Autonomous Rover Drive</span>
                  </div>
                  <div className="sz-hw-switch">
                    <motion.span
                      className="sz-hw-knob"
                      initial={{ x: 0 }}
                      animate={{ x: 16 }}
                      transition={{ duration: 0.45, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: "some" },
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
};

const servicesList = [
  {
    number: "01",
    Icon: Globe,
    title: "Website Development",
    shortLine: "Corporate platforms, landing pages, commerce, and custom web apps",
    description:
      "Fast, responsive, and search-ready websites built from clean frontend foundations to present your brand clearly and convert visitors into enquiries.",
    items: [
      "Business & corporate websites",
      "High-conversion landing pages",
      "E-commerce storefronts & checkouts",
      "Custom React & full-stack web apps",
    ],
    subject: "Web Development",
  },
  {
    number: "02",
    Icon: Smartphone,
    title: "Mobile Application Development",
    shortLine: "Android, iOS, and cross-platform business applications",
    description:
      "Reliable Android, iOS, and cross-platform mobile apps engineered for smooth daily use by your customers, students, or field staff.",
    items: [
      "Native & cross-platform Android / iOS apps",
      "Customer self-service portals",
      "Field-team & operations companion apps",
      "Secure API & push notification sync",
    ],
    subject: "Mobile App Development",
  },
  {
    number: "03",
    Icon: Code2,
    title: "Custom Software Development",
    shortLine: "Tailored internal platforms and database-driven systems",
    description:
      "Purpose-built software systems designed around your actual business rules, replacing scattered spreadsheets and rigid off-the-shelf tools.",
    items: [
      "Bespoke internal operations platforms",
      "Role-based management portals",
      "Database-driven business software",
      "Billing, intake & approval workflows",
    ],
    subject: "Custom Software & Automation",
  },
  {
    number: "04",
    Icon: Building2,
    title: "ERP & Enterprise Solutions",
    shortLine: "Institutional ERPs, campus platforms, and inventory suites",
    description:
      "Integrated multi-department systems helping institutions and enterprises manage admissions, inventory, schedules, and approvals in one workspace.",
    items: [
      "Enterprise Resource Planning (ERP)",
      "College & academic management systems",
      "Learning Management Systems (LMS)",
      "Inventory, vendor & admin dashboards",
      "Departmental process coordination",
    ],
    subject: "Project / Technology Solutions",
  },
  {
    number: "05",
    Icon: Workflow,
    title: "Automation & System Integration",
    shortLine: "Automated pipelines, API integrations, and reporting sync",
    description:
      "Eliminate manual data re-entry by connecting disconnected software tools through dependable APIs and automated background workflows.",
    items: [
      "End-to-end workflow automation",
      "Payment, SMS & webhook integrations",
      "Custom REST API engineering",
      "Cross-platform database synchronization",
      "Scheduled status & ledger reporting",
    ],
    subject: "Custom Software & Automation",
  },
  {
    number: "06",
    Icon: Sparkles,
    title: "AI & Machine Learning Solutions",
    shortLine: "Applied AI workflows, document parsing, and predictive models",
    description:
      "Practical AI and machine learning integrated directly into your software—built to extract data, classify requests, and support faster decisions.",
    items: [
      "AI-powered application features",
      "Automated invoice & document parsing",
      "Smart triage & routing assistants",
      "Custom ML model integration",
      "Predictive operational analytics",
    ],
    subject: "Project / Technology Solutions",
  },
  {
    number: "07",
    Icon: Cpu,
    title: "Hardware, IoT & Embedded Technology",
    shortLine: "Connected devices, sensor telemetry, and embedded prototyping",
    description:
      "Bridging physical electronics and cloud software—from microcontroller prototypes and sensor arrays to live monitoring and control portals.",
    items: [
      "Connected IoT device architectures",
      "Microcontroller & embedded firmware",
      "Hardware & robotics prototyping",
      "Sensor telemetry & alert pipelines",
      "Hardware-to-cloud web control panels",
    ],
    subject: "Research & Innovation",
  },
  {
    number: "08",
    Icon: BarChart3,
    title: "Data Analytics & Intelligence",
    shortLine: "BI dashboards, data visualization, and executive reporting",
    description:
      "Turn scattered operational records into clean, real-time dashboards and structured reports so leadership can track performance at a glance.",
    items: [
      "Interactive BI & KPI dashboards",
      "Operational data visualization",
      "Automated weekly & monthly reports",
      "Multi-source data pipelines",
      "Role-filtered executive insights",
    ],
    subject: "Project / Technology Solutions",
  },
];

const industriesList = [
  {
    Icon: GraduationCap,
    title: "Education & Campuses",
    description:
      "Campus ERPs, student portals, online assessments, and digital learning environments built for daily institutional scale.",
  },
  {
    Icon: HeartPulse,
    title: "Healthcare & Clinics",
    description:
      "Patient registration queues, medical camp coordination, vitals intake workflows, and clinical follow-up records.",
  },
  {
    Icon: Factory,
    title: "Manufacturing & Industrial",
    description:
      "IoT sensor monitoring, production tracking, inventory sync, and automated operational floor dashboards.",
  },
  {
    Icon: Rocket,
    title: "Startups & Founders",
    description:
      "Product-first MVPs, clean customer web & mobile builds, and scalable cloud architecture ready for early traction.",
  },
  {
    Icon: Briefcase,
    title: "Growing SMEs",
    description:
      "Custom internal software, billing and approval automation, and practical tools that cut repetitive desk work.",
  },
  {
    Icon: Landmark,
    title: "Organizations & Enterprises",
    description:
      "Multi-department management suites, third-party API integrations, and tailored reporting platforms.",
  },
];

const approachSteps = [
  {
    step: "01",
    title: "Understand Workflows",
    description:
      "We map your operational bottlenecks, user roles, and business goals before writing a line of code.",
  },
  {
    step: "02",
    title: "Scope & Architecture",
    description:
      "We define clean system architecture, milestone deliverables, and realistic timelines with full clarity.",
  },
  {
    step: "03",
    title: "Design & Engineer",
    description:
      "Software, UI, AI, and hardware builders ship together in structured sprints with direct review checkpoints.",
  },
  {
    step: "04",
    title: "Real-Device QA",
    description:
      "We validate edge cases, security rules, mobile responsiveness, and performance under realistic loads.",
  },
  {
    step: "05",
    title: "Deploy & Support",
    description:
      "Smooth production launch, team handover walkthroughs, and dependable post-delivery technical support.",
  },
];

const commitmentItems = [
  {
    title: "First-Principles Engineering",
    description:
      "Solutions designed around your actual daily workflow — never forced into generic templates.",
  },
  {
    title: "Multi-Disciplinary Specialists",
    description:
      "Full-stack web, mobile, AI, data analytics, UI/UX, and embedded hardware specialists under one roof.",
  },
  {
    title: "Direct Leadership Collaboration",
    description:
      "Work directly with our founding leads and engineering owners throughout every milestone.",
  },
  {
    title: "Maintainable Architecture",
    description:
      "Clean, documented codebases built to stay reliable and easy to extend as your team grows.",
  },
  {
    title: "Transparent Milestone Reviews",
    description:
      "Honest timelines, live staging previews, and regular walkthroughs with zero guesswork.",
  },
  {
    title: "Long-Term Support Continuity",
    description:
      "Structured post-launch maintenance, monitoring, and feature iteration tailored to your agreement.",
  },
];

const engagementModels = [
  {
    Icon: Layers,
    tag: "End-to-End Delivery",
    title: "Custom Project Development",
    description:
      "Complete design, engineering, testing, and launch of a web platform, mobile app, custom software suite, or IoT system.",
    scopeNote: "Best for full-cycle product & platform builds",
  },
  {
    Icon: Users,
    tag: "Extended Capacity",
    title: "Dedicated Development Support",
    description:
      "Embed SHEZINO specialists alongside your internal team to accelerate active roadmaps, feature releases, or technical backlogs.",
    scopeNote: "Best for expanding active engineering teams",
  },
  {
    Icon: ShieldCheck,
    tag: "Advisory & Integration",
    title: "Technology Consulting & Integration",
    description:
      "Architecture audits, legacy workflow automation, third-party API integrations, and applied AI upgrades for existing systems.",
    scopeNote: "Best for system upgrades & connected workflows",
  },
];

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeService = servicesList[selectedIndex];
  const ActiveIcon = activeService.Icon;

  return (
    <div className="sz-services">
      {/* 01. HERO SECTION — IMMERSIVE FULL-VIEWPORT OBSIDIAN */}
      <section className="sz-services-hero">
        <div className="sz-services-hero-glow" aria-hidden="true" />

        <div className="sz-services-hero-inner">
          <div className="sz-services-hero-copy">
            <span className="sz-eyebrow sz-services-eyebrow">Our Services</span>

            <h1>
              Engineering Solutions for{" "}
              <span className="sz-services-highlight">
                Real Business Challenges
              </span>
            </h1>

            <div className="sz-services-hero-prose">
              <p>
                Our Chennai engineering team helps businesses, campuses, and
                growing ventures replace manual friction with dependable web
                platforms, custom software, applied AI, and connected IoT
                systems.
              </p>
              <p>
                Every engagement is scoped from scratch around your actual
                operational workflows, backed by founder-led accountability.
              </p>
            </div>

            <div className="sz-services-hero-actions">
              <Link
                to="/contact?subject=Project+Enquiry"
                className="sz-services-primary-btn"
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <ServicesHeroFilm />
        </div>
      </section>

      {/* 02. CORE SERVICES — PURE WHITE INTERACTIVE EXPLORER */}
      <section className="sz-services-white-band" id="capabilities">
        <div className="sz-container">
          <div className="sz-services-band-head">
            <span className="sz-eyebrow">What We Do</span>
            <h2>Eight Engineering Disciplines, Practical Outcomes</h2>
            <p>
              Explore our core capabilities below to inspect key deliverables
              and select the right engineering track for your project.
            </p>
          </div>

          <div className="sz-explorer-layout">
            {/* LEFT CLICKABLE SERVICE SELECTOR (ACCORDION ON MOBILE) */}
            <div className="sz-explorer-list">
              {servicesList.map((service, index) => {
                const isSelected = selectedIndex === index;
                const Icon = service.Icon;

                return (
                  <div
                    key={service.number}
                    className={`sz-explorer-row${isSelected ? " is-active" : ""}`}
                  >
                    <button
                      type="button"
                      className="sz-explorer-trigger"
                      aria-expanded={isSelected}
                      onClick={() => setSelectedIndex(index)}
                    >
                      <span className="sz-explorer-num">{service.number}</span>

                      <div className="sz-explorer-title-group">
                        <div className="sz-explorer-title-line">
                          <Icon size={18} aria-hidden="true" />
                          <h3>{service.title}</h3>
                        </div>
                        <p>{service.shortLine}</p>
                      </div>

                      <ChevronRight
                        size={18}
                        className="sz-explorer-arrow"
                        aria-hidden="true"
                      />
                    </button>

                    {/* MOBILE INLINE DETAILS */}
                    {isSelected && (
                      <div className="sz-explorer-mobile-panel">
                        <p className="sz-explorer-mobile-desc">
                          {service.description}
                        </p>
                        <ul className="sz-explorer-checklist">
                          {service.items.map((item) => (
                            <li key={item}>
                              <CheckCircle2 size={16} aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={`/contact?subject=${encodeURIComponent(
                            service.subject
                          )}`}
                          className="sz-explorer-cta"
                        >
                          <span>Request Scope</span>
                          <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* RIGHT STICKY DESKTOP SCOPE INSPECTOR */}
            <aside className="sz-explorer-detail" aria-live="polite">
              <div className="sz-detail-card">
                <div className="sz-detail-top">
                  <div className="sz-detail-icon">
                    <ActiveIcon size={24} aria-hidden="true" />
                  </div>
                  <span className="sz-detail-num">
                    Service {activeService.number} of 08
                  </span>
                </div>

                <h3>{activeService.title}</h3>
                <p className="sz-detail-desc">{activeService.description}</p>

                <div className="sz-detail-scope">
                  <strong>Key Deliverables &amp; Solutions</strong>
                  <ul className="sz-explorer-checklist">
                    {activeService.items.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={17} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sz-detail-actions">
                  <Link
                    to={`/contact?subject=${encodeURIComponent(
                      activeService.subject
                    )}`}
                    className="sz-explorer-cta"
                  >
                    <span>Discuss {activeService.title}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 03. INDUSTRIES WE SUPPORT — UNIFIED DARK OBSIDIAN */}
      <section className="sz-services-dark-band">
        <div className="sz-container">
          <div className="sz-services-band-head sz-band-dark">
            <span className="sz-eyebrow">Our Industry Focus</span>
            <h2>Built for Real Operational Environments</h2>
            <p>
              We tailor software architecture, user interfaces, and hardware
              integrations to fit the daily realities of each sector we serve.
            </p>
          </div>

          <div className="sz-industries-grid">
            {industriesList.map((industry, idx) => {
              const Icon = industry.Icon;
              return (
                <motion.article
                  className="sz-industry-card"
                  key={industry.title}
                  {...fadeInUp}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="sz-industry-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04. OUR DEVELOPMENT APPROACH — PURE WHITE */}
      <section className="sz-services-white-band" id="approach">
        <div className="sz-container">
          <div className="sz-services-band-head">
            <span className="sz-eyebrow">How We Work</span>
            <h2>Every Build Starts With Clarity</h2>
            <p>
              A disciplined five-stage delivery model taking your project from
              workflow discovery to dependable production support.
            </p>
          </div>

          <div className="sz-approach-steps-grid">
            {approachSteps.map((step, idx) => (
              <motion.article
                className="sz-approach-step"
                key={step.step}
                {...fadeInUp}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="sz-approach-step-num">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 05. WHY WORK WITH SHEZINO + 06. ENGAGEMENT MODELS — UNIFIED DARK OBSIDIAN */}
      <section className="sz-services-dark-band">
        <div className="sz-container">
          <div className="sz-services-band-head sz-band-dark">
            <span className="sz-eyebrow">Our Commitment</span>
            <h2>A Thoughtful Approach to Every Project</h2>
          </div>

          <div className="sz-commitments-grid">
            {commitmentItems.map((item) => (
              <div className="sz-commitment-point" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="sz-dark-divider" />

          <div className="sz-services-band-head sz-band-dark">
            <span className="sz-eyebrow">Work With Us</span>
            <h2>Different Requirements, Flexible Engagements</h2>
          </div>

          <div className="sz-engagements-grid">
            {engagementModels.map((model, idx) => {
              const Icon = model.Icon;
              return (
                <motion.article
                  className="sz-engagement-card"
                  key={model.title}
                  {...fadeInUp}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="sz-engagement-top">
                    <div className="sz-engagement-icon">
                      <Icon size={21} aria-hidden="true" />
                    </div>
                    <span className="sz-engagement-tag">{model.tag}</span>
                  </div>

                  <h3>{model.title}</h3>
                  <p>{model.description}</p>

                  <span className="sz-engagement-fit">{model.scopeNote}</span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07. FINAL CTA — PURE WHITE BEFORE DARK FOOTER */}
      <section className="sz-services-final-cta">
        <div className="sz-container sz-final-cta-layout">
          <div className="sz-final-cta-copy">
            <span className="sz-eyebrow">Have a Project in Mind?</span>
            <h2>Let&apos;s Discuss What You Want to Build</h2>
            <p>
              Share your goals, timeline, or technical bottlenecks. Our
              engineering leads will review your scope and map out a practical
              path forward.
            </p>
          </div>

          <div className="sz-final-cta-actions">
            <Link
              to="/contact?subject=Project+Enquiry"
              className="sz-services-primary-btn"
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <Link to="/labs" className="sz-services-outline-btn">
              <span>Explore SHEZINO Labs</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
