
import React from "react";
import "./Team.css";

const leaders = [
  {
    name: "Yusuf Shejin S",
    role: "Founder & CEO",
    description: "Vision, Strategy, Growth",
    linkedin: "https://www.linkedin.com/in/shejin11/",
  },
  {
    name: "Sana Nihal",
    role: "Co-Founder & COO",
    description: "Operations, People, Execution",
    linkedin: "https://www.linkedin.com/in/sananihal",
  },
];

const members = [
  {
    name: "Subramanian M",
    role: "Designer",
    linkedin: "https://linkedin.com/in/subramanian-m-69413b309",
  },
  {
    name: "Shanavas",
    role: "Hardware Lead",
    linkedin: "https://www.linkedin.com/in/s-shanavas-b51336322?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Mohammed Danish",
    role: "Data & AI Engineer",
    linkedin: "https://www.linkedin.com/in/mohammed-danish-262523407?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Mohammed Irfan",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/mohammed-irfan-6b2240297?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Mohammed Zaid",
    role: "Business Dev. Exec.",
    linkedin: "https://www.linkedin.com/in/mohammed-zaid-391673423?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
    {
         name: "Sriram",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/sriram-n-198626290?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
         name: "Kameshwaran S",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/kameshwaran-s2006",
  },
  {
         name: "Aayisha Anwardeen",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/aayisha-anwardeen-98195b256/",
  },{
         name: "Ronia Rosario Sam K",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/ronia-rosario-sam-k-13493a290?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
         name: "Swetha M",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/swetha-m-640767309",
  },
];

function LinkedInLink({ url }) {
  return (
    <a
      className="team-linkedin"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open LinkedIn profile"
      title="LinkedIn profile"
    >
       in <span></span>
    </a>
  );
}

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function Team() {
  return (
    <main className="team-page">
      {/* Hero */}
      <section className="team-hero">
        <div className="team-hero-content">
          <span className="team-eyebrow">OUR TEAM</span>

          <h1>
            The People Behind
            <br />
            <span>SHEZINO</span>
          </h1>

          <p>
            A diverse team of builders, creators and problem solvers,
            working together to turn ideas into real-world solutions.
          </p>

          <div className="team-hero-note">
            Different Skills.
            <br />
            Same Mission.
            <span className="team-note-line" />
          </div>
        </div>

        
<div
  className="team-hero-image"
  style={{
    backgroundImage: "url('/team-hero.jpg')",
  }}
  role="img"
  aria-label="SHEZINO team watching the sunset together"
>
  <div className="team-image-overlay" />

  <div className="team-image-caption">
    <span>ONE TEAM.</span>
    <span>SHARED AMBITION.</span>
  </div>
</div>

      </section>

      {/* Leadership */}
      <section className="team-section">
        <div className="team-section-heading">
          <span className="team-eyebrow">THE PEOPLE WHO LEAD</span>
          <h2>Leadership</h2>
        </div>

        <div className="team-leadership-list">
          {leaders.map((person, index) => (
            <article
              className="team-leader team-fade-up"
              key={person.name}
              style={{ "--team-delay": `${index * 120}ms` }}
            >
              <div className="team-initials" aria-hidden="true">
                {getInitials(person.name)}
              </div>

              <div className="team-person-info">
                <h3>{person.name}</h3>
                <p className="team-role">{person.role}</p>
                <p className="team-description">
                  {person.description}
                </p>
              </div>

              <LinkedInLink url={person.linkedin} />
            </article>
          ))}
        </div>
      </section>

      {/* Core Team */}
      <section className="team-section team-core-section">
        <div className="team-section-heading">
          <span className="team-eyebrow">BUILDING TOGETHER</span>
          <h2>Core Team</h2>
          <p>Different expertise. One shared vision.</p>
        </div>

        <div className="team-core-grid">
          {members.map((person, index) => (
            <article
              className="team-member team-fade-up"
              key={person.name}
              style={{ "--team-delay": `${index * 90}ms` }}
            >
              <div className="team-member-top">
                <div
                  className="team-initials team-small-initials"
                  aria-hidden="true"
                >
                  {getInitials(person.name)}
                </div>

                <LinkedInLink url={person.linkedin} />
              </div>

              <h3>{person.name}</h3>
              <p className="team-role">{person.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Join Team */}
      <section className="team-join">
        <div>
          <span className="team-eyebrow">YOUR NEXT CHAPTER</span>
          <h2>Great people build great products.</h2>
          <p>
            We are always looking for passionate minds to join our journey.
          </p>
        </div>

        <a className="team-join-button" href="/opportunities">
          Join Our Team <span></span>
        </a>
      </section>
    </main>
  );
}

export default Team;
