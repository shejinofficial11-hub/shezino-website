
import { Link } from "react-router-dom";
import "./Home.css";

const values = [
  {
    icon: "↗",
    label: "OUR VISION",
    title: "Our Vision",
    text: "To be a global technology brand that creates meaningful impact through innovation, people and technology.",
  },
  {
    icon: "◎",
    label: "OUR MISSION",
    title: "Our Mission",
    text: "To build practical solutions, empower businesses and individuals, and contribute to a smarter, more connected world.",
  },
  {
    icon: "✳",
    label: "OUR FOCUS",
    title: "What We're Building",
    text: "We develop innovative products, platforms and services that solve real problems and create lasting value.",
  },
];

const capabilities = [
  ["▯", "Web & Mobile Apps", "Scalable, user-centric applications for modern needs."],
  ["</>", "Custom Software", "Tailored solutions for your unique goals."],
  ["▱", "ERP Systems", "Streamline operations and boost productivity."],
  ["⚙", "Automation", "Work smarter, not harder with intelligent systems."],
  ["▦", "Hardware / IoT", "Connecting devices, creating possibilities."],
  ["◉", "ML & AI Solutions", "Turning data into smarter decisions."],
];

const projects = [
  {
    title: "DCMS",
    text: "Digital College Management System",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=75",
  },
  {
    title: "Smart Camp Assistant",
    text: "AI-powered camp management solution",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=75",
  },
  {
    title: "Digital Health Camp",
    text: "Healthcare access for everyone",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=75",
  },
  {
    title: "And More...",
    text: "Innovative solutions in progress",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=500&q=75",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      {/* HERO */}
      <section className="home-hero">
       <img
  className="home-hero-photo"
  src="/shezino-home-hero-faded.webp"
  alt="SHEZINO office with sunset skyline"
  fetchPriority="high"
/>

        <div className="home-hero-fade" />

        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <span className="home-eyebrow">
              INNOVATION MEETS IMPACT
            </span>

            <h1>
              We Build Technology
              <br />
              for a <span>Better Tomorrow.</span>
            </h1>

            <p>
              SHEZINO is a product-first technology company,
              creating innovative digital solutions, modern
              technology services and next-generation products
              that solve real-world problems.
            </p>

            <div className="home-hero-actions">
              <Link className="home-primary-button" to="/labs">
                Explore Our Work <span>→</span>
              </Link>

              <Link className="home-secondary-button" to="/about">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VISION, MISSION AND FOCUS */}
      <section className="home-values home-container">
        <div className="home-value-cards">
          {values.map((item) => (
            <article className="home-value-card" key={item.label}>
              <div className="home-value-icon">{item.icon}</div>
              <span className="home-card-eyebrow">{item.label}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <article className="home-city-card">
          <img
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=700&q=75"
            alt="City skyline at dusk"
            loading="lazy"
            decoding="async"
          />

          <div className="home-city-overlay" />

          <div className="home-city-copy">
            <span>Chennai, India</span>
            <strong>→ Global Ambition</strong>
          </div>
        </article>
      </section>

      {/* STATS */}
      <section className="home-stats home-container">
        <div>
          <strong>8+</strong>
          <span>Products & Labs</span>
        </div>

        <div>
          <strong>5+</strong>
          <span>Services</span>
        </div>

        <div>
          <strong>50+</strong>
          <span>Team Members</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Committed to Impact</span>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="home-capabilities home-container">
        <header className="home-section-heading">
          <span className="home-eyebrow">OUR CAPABILITIES</span>
          <h2>From Ideas to Impact</h2>
          <p>
            We combine technology, creativity and expertise to build
            solutions that drive growth, efficiency and real-world change.
          </p>
        </header>

        <div className="home-capability-grid">
          {capabilities.map(([icon, title, description]) => (
            <article className="home-capability" key={title}>
              <div className="home-capability-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="home-projects home-container">
        <div className="home-project-intro">
          <span className="home-eyebrow">FEATURED PROJECTS</span>
          <h2>
            SHEZINO <span>Labs</span>
          </h2>
          <p>Real ideas. Working prototypes. Measurable impact.</p>

          <Link className="home-project-button" to="/labs">
            Explore Labs <span>→</span>
          </Link>
        </div>

        <div className="home-project-grid">
          {projects.map((project) => (
            <Link
              className="home-project-card"
              to="/labs"
              key={project.title}
            >
              <img
                src={project.image}
                alt=""
                loading="lazy"
                decoding="async"
              />

              <div className="home-project-card-copy">
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="home-cta home-container">
        <div className="home-cta-icon">✳</div>

        <div className="home-cta-copy">
          <h2>Have an idea? Let's build it together.</h2>
          <p>Partner with us to turn your vision into reality.</p>
        </div>

        <Link className="home-cta-button" to="/contact">
          Get In Touch <span>→</span>
        </Link>
      </section>

      {/* HOME PAGE FOOTER */}
      <footer className="home-footer home-container">
        <div className="home-footer-brand">
          <Link to="/" className="home-footer-logo">
            SHEZINO
          </Link>
          <span>Build. Connect. Deliver.</span>
        </div>

        <nav className="home-footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/labs">Labs</Link>
          <Link to="/team">Team</Link>
          <Link to="/opportunities">Opportunities</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="home-footer-bottom">
          <span>© {new Date().getFullYear()} SHEZINO. All rights reserved.</span>
          <span>Chennai, India · Global Ambition</span>
        </div>
      </footer>
    </main>
  );
}
