
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
  Link,
} from "react-router-dom";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Labs from "./Labs.jsx";
import Team from "./Team.jsx";
import Opportunities from "./Opportunities.jsx";
import Contact from "./Contact.jsx";

import "./App.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "SHEZINO Labs", path: "/labs" },
  { label: "Team", path: "/team" },
  { label: "Opportunities", path: "/opportunities" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <header className="sz-header">
      <nav className="sz-navbar">
        <a href="/" className="navbar-logo">
  <img src="/shezino-logo.png" alt="SHEZINO" />
</a>

        <div className="sz-nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `sz-nav-link${isActive ? " active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link to="/contact" className="sz-contact-btn">
          Get In Touch <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="sz-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/team" element={<Team />} />
          <Route
            path="/opportunities"
            element={<Opportunities />}
          />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
