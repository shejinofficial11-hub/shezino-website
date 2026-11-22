import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Labs from "./Labs.jsx";
import Team from "./Team.jsx";
import Opportunities from "./Opportunities.jsx";
import Contact from "./Contact.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import Terms from "./Terms.jsx";
import Footer from "./Footer.jsx";

import "./App.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Team", path: "/team" },
  { label: "Labs", path: "/labs" },
  { label: "Opportunities", path: "/opportunities" },
];

const COOKIE_NOTICE_KEY = "shezino_cookie_notice_ack_v1";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function CookieNotice() {
  const [visible, setVisible] = useState(() => {
    try {
      return window.localStorage.getItem(COOKIE_NOTICE_KEY) !== "1";
    } catch {
      return false;
    }
  });

  if (!visible) return null;

  const handleAcknowledge = () => {
    try {
      window.localStorage.setItem(COOKIE_NOTICE_KEY, "1");
    } catch {
      // Ignore storage failures gracefully
    }
    setVisible(false);
  };

  return (
    <aside
      className="sz-cookie-notice"
      role="region"
      aria-label="Essential cookies notice"
    >
      <p>
        We use essential browser storage to ensure reliable navigation with zero
        ad-tracking cookies. Read our{" "}
        <Link to="/privacy#cookies">Privacy &amp; Cookie Notice</Link>.
      </p>
      <button
        type="button"
        className="sz-cookie-btn"
        onClick={handleAcknowledge}
      >
        Okay
      </button>
    </aside>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 12;
      setScrolled((prev) => (prev === next ? prev : next));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sz-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="sz-header-inner">
        <nav className="sz-navbar" aria-label="Main navigation">
          <Link to="/" className="sz-brand-logo" aria-label="SHEZINO Home">
            <img src="/shezino-logo.png" alt="SHEZINO" />
          </Link>

          <div
            className="sz-nav-dock"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);
              const isHighlighted = hoveredPath
                ? hoveredPath === item.path
                : isActive;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onMouseEnter={() => setHoveredPath(item.path)}
                  className={`sz-nav-link${isActive ? " is-active" : ""}${
                    isHighlighted ? " is-highlighted" : ""
                  }`}
                >
                  {isHighlighted && (
                    <motion.span
                      layoutId="sz-nav-gloss-pill"
                      className={`sz-nav-gloss-pill${isActive ? " is-current" : ""}`}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="sz-nav-link-text">{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          <div className="sz-nav-actions">
            <Link to="/contact" className="sz-contact-btn">
              <span>Get In Touch</span>
              <ArrowUpRight size={15} className="sz-contact-arrow" aria-hidden="true" />
            </Link>

            <button
              type="button"
              className="sz-mobile-toggle"
              aria-expanded={menuOpen}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="sz-mobile-drawer"
              initial={{ opacity: 0, y: -10, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.985 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="sz-mobile-links">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `sz-mobile-link${isActive ? " active" : ""}`
                    }
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </NavLink>
                ))}
              </div>

              <Link to="/contact" className="sz-mobile-cta">
                <span>Get In Touch</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <main className="sz-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <CookieNotice />
    </BrowserRouter>
  );
}
