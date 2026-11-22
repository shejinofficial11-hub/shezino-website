
import "./Services.css";

const services = [
  ["01", "Business Websites", "Modern, fast and scalable websites for your brand."],
  ["02", "Mobile App Development", "iOS & Android apps tailored to your needs."],
  ["03", "Custom Software", "Tailor-made software for unique business processes."],
  ["04", "ERP Systems", "Streamline your operations with integrated ERP solutions."],
  ["05", "Automation", "Save time, reduce manual work and improve efficiency."],
  ["06", "Hardware / IoT", "Smart devices and connected systems for real-world use."],
  ["07", "ML & AI Solutions", "Intelligent systems for smarter decisions and automation."],
];

export default function Services() {
  return (
    <main className="sz-services">
      <section className="sz-services-hero">
        <div className="sz-services-wave" aria-hidden="true" />

        <div className="sz-services-layout">
          <div className="sz-services-copy">
            <span className="sz-services-eyebrow">OUR SERVICES</span>

            <h1>
              Technology Services
              <br />
              for <span>Real-World Impact</span>
            </h1>

            <p className="sz-services-description">
              We design, develop and deliver technology solutions
              that help businesses, institutions and organizations
              work smarter, faster and grow.
            </p>

            <span className="sz-services-rule" />

            <div className="sz-services-list">
              {services.map(([number, title, description]) => (
                <article className="sz-service-item" key={number}>
                  <span className="sz-service-number">{number}</span>

                  <div className="sz-service-text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="sz-services-aside">
            <div className="sz-services-slogan">
              <span>Your Ideas.</span>
              <span>Our Technology.</span>
              <span>Real Solutions.</span>
              <i />
            </div>

            <div className="sz-services-office">
              <img
                src="/services-office.png"
                alt="Modern office workspace with a laptop and plant"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="sz-services-cta">
        <div className="sz-services-cta-art" aria-hidden="true" />

        <div className="sz-services-cta-content">
          <h2>
            Not just services.
            <br />
            We build solutions that last.
          </h2>

          <span className="sz-services-cta-line" />

          <a href="/labs">
            Explore Our Work <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
