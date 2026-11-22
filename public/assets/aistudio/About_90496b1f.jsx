
import { Link } from "react-router-dom";
import "./About.css";

const principles = [
  {
    label: "OUR VISION",
    title: "Our Vision",
    description:
      "To be a global technology brand that creates meaningful impact through innovation, people and technology.",
  },
  {
    label: "OUR MISSION",
    title: "Our Mission",
    description:
      "To build practical solutions, empower businesses and individuals, and contribute to a smarter, more connected world.",
  },
  {
    label: "OUR FOCUS",
    title: "What We're Building",
    description:
      "We are building products and platforms that solve real problems in education, healthcare, safety and community services.",
  },
];

export default function About() {
  return (
    <main className="sz-about">
      <section className="sz-about-hero">
        <div className="sz-about-copy">
          <span className="sz-eyebrow">ABOUT US</span>

          <h1>
            Who <span>We Are</span>
          </h1>

          <p>
            SHEZINO is a product-first technology company,
            building innovative digital solutions, modern technology
            services, and next-generation products that solve
            real-world problems.
          </p>
        </div>

        <div className="sz-about-mantra">
          Build.
          <br />
          Connect.
          <br />
          Deliver.
        </div>

        <div className="sz-office">
          <img
            src="/shezino-office-wall.png"
            alt="SHEZINO office interior"
          />
          <div className="sz-office-fade" />
        </div>
      </section>

      <section className="sz-principles">
        {principles.map((item) => (
          <article className="sz-principle" key={item.label}>
            <span className="sz-eyebrow">{item.label}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="sz-story">
        <img
          className="sz-story-image"
          src="/shezino-story-banner.png"
          alt="City skyline at dusk"
        />

        <div className="sz-story-fade" />

        <div className="sz-story-copy">
          <h2>Our Story</h2>

          <p>
            Founded by a group of passionate builders,
            SHEZINO started with a simple belief — technology
            should create real value for real people.
          </p>

          <Link to="/labs">
            The journey continues <span>↗</span>
          </Link>
        </div>

        <div className="sz-story-location">
          <span>Chennai, India</span>
          <span>→ Global Ambition</span>
        </div>
      </section>
    </main>
  );
}
