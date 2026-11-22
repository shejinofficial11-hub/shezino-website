
import { Link } from "react-router-dom";
import "./Labs.css";

const projects = [
  {
    image: "/labs-dcms-hd.jpg",
    title: "DCMS",
    category: "Digital College Management System",
    description:
      "Digitizing college operations for a smarter and more efficient campus experience.",
    status: "In Progress",
    tags: ["Education", "Web", "Mobile"],
  },
  {
    image: "/labs-health-camp-hd.jpg",
    title: "Digital Health Camp",
    category: "Healthcare",
    description:
      "A digital platform to manage and organize free medical camps effectively.",
    status: "In Progress",
    tags: ["Healthcare", "Web", "Mobile"],
  },
  {
    image: "/labs-connect-hd.jpg",
    title: "SHEZINO Connect",
    category: "Community / Marketplace",
    description:
      "Bridging seekers and helpers for a safer, trusted and stronger community.",
    status: "In Research",
    tags: ["Web", "Mobile", "AI"],
  },
  {
    image: "/labs-smart-camp-hd.jpg",
    title: "Smart Camp Assistant",
    category: "Healthcare / Education",
    description:
      "An offline-ready app to manage free medical camps with multiple roles and real-time sync.",
    status: "Planning",
    tags: ["Web", "Mobile", "Backend"],
  },
];

export default function Labs() {
  return (
    <main className="shezino-labs">
      {/* HERO */}
      <section className="labs-hero">
        <div className="labs-hero-wave" aria-hidden="true" />

        <div className="labs-hero-inner">
          <div className="labs-hero-copy">
            <span className="labs-eyebrow">SHEZINO LABS</span>

            <h1>
              Ideas. Prototypes.
              <br />
              <span>Real Impact.</span>
            </h1>

            <p>
              SHEZINO Labs is where we turn ideas into working
              products. Explore our ongoing and upcoming projects
              built to solve real problems.
            </p>
          </div>

          <div className="labs-hero-motto">
            <span>Research.</span>
            <span>Build.</span>
            <span>Validate.</span>
            <span>Scale.</span>
            <i />
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="labs-featured" id="featured-projects">
        <div className="labs-section-heading">
          <span className="labs-eyebrow">FEATURED PROJECTS</span>
        </div>

        <div className="labs-project-list">
          {projects.map((project) => (
            <article className="labs-project" key={project.title}>
              <div className="labs-project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="labs-project-info">
                <h2>{project.title}</h2>
                <h3>{project.category}</h3>
                <p>{project.description}</p>

                <div className="labs-project-meta">
                  <span
                    className={`labs-status ${
                      project.status === "In Progress"
                        ? "labs-status-progress"
                        : project.status === "In Research"
                          ? "labs-status-research"
                          : "labs-status-planning"
                    }`}
                  >
                    {project.status}
                  </span>

                  <div className="labs-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                className="labs-project-arrow"
                to="/contact"
                aria-label={`Ask about ${project.title}`}
              >
                →
              </Link>
            </article>
          ))}
        </div>

        <Link className="labs-more-link" to="/contact">
          More Projects <span>→</span>
        </Link>
      </section>
    </main>
  );
}
