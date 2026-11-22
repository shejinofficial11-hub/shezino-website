export const ENQUIRY_CATEGORIES = [
  {
    id: "technology",
    number: "01",
    label: "Technology & Products",
    shortLabel: "Tech & Builds",
    summary:
      "Web platforms, mobile apps, enterprise software, AI automation, Labs products, and applied R&D.",
    orgLabel: "Organization / Company (Optional)",
    orgPlaceholder: "Your company or venture name",
    topics: [
      "Project / Technology Solutions",
      "Product Enquiry",
      "Research & Innovation",
      "Web Development",
      "Mobile App Development",
      "Custom Software & Automation",
    ],
  },
  {
    id: "careers",
    number: "02",
    label: "Careers, Internships & Mentorship",
    shortLabel: "Careers & Internships",
    summary:
      "Hiring roles, hands-on internships, certification pathways, and guided student project mentorship.",
    orgLabel: "College / Current Organization (Optional)",
    orgPlaceholder: "Your institution or current workplace",
    topics: [
      "Internship Opportunities",
      "Hiring & Recruitment",
      "Internship Certification",
      "Project Guidance & Mentorship",
      "Software Development Application",
      "AI & Emerging Tech Application",
      "Hardware & IoT Application",
      "Design & Creative Application",
      "Business & Growth Application",
    ],
  },
  {
    id: "workshops",
    number: "03",
    label: "Workshops, Training & Seminars",
    shortLabel: "Workshops & Training",
    summary:
      "Practical technical workshops for schools, colleges, government institutions, and guest lectures.",
    orgLabel: "School / College / Institution Name (Optional)",
    orgPlaceholder: "Name of your school, college, or department",
    topics: [
      "School Workshops",
      "College Workshops",
      "Government School Programs",
      "Technical Training",
      "Seminars & Guest Lectures",
    ],
  },
  {
    id: "partnerships",
    number: "04",
    label: "MoUs, Events & Collaborations",
    shortLabel: "MoUs & Partnerships",
    summary:
      "Institutional MoUs, campus hackathons, student activities, and strategic business collaborations.",
    orgLabel: "Institution / Organization Name (Optional)",
    orgPlaceholder: "Your institution, club, or organization",
    topics: [
      "MoU & Institutional Partnership",
      "Business Collaboration",
      "Events & Student Activities",
      "Hackathons & Competitions",
    ],
  },
  {
    id: "general",
    number: "05",
    label: "General Enquiry",
    shortLabel: "General",
    summary:
      "Any question, introduction, or early discussion before defining a structured scope.",
    orgLabel: "Organization / Institution (Optional)",
    orgPlaceholder: "Optional organization name",
    topics: ["General Enquiry", "Other"],
  },
];

export const OPPORTUNITY_DIRECTORY = [
  {
    id: "careers",
    label: "Internships & Careers",
    headline: "Hands-On Experience, Mentorship & Career Pathways",
    items: [
      {
        title: "Internship Opportunities",
        description:
          "Structured engineering, design, and product internships working on real deployments.",
        topic: "Internship Opportunities",
      },
      {
        title: "Hiring & Recruitment",
        description:
          "Open contributor and specialist roles for builders ready to own deliverables.",
        topic: "Hiring & Recruitment",
      },
      {
        title: "Internship Certification",
        description:
          "Verified completion credentials and project evaluations for completed cohorts.",
        topic: "Internship Certification",
      },
      {
        title: "Project Guidance & Mentorship",
        description:
          "Architecture reviews and technical guidance for student teams building flagship projects.",
        topic: "Project Guidance & Mentorship",
      },
    ],
  },
  {
    id: "workshops",
    label: "Workshops & Training",
    headline: "Practical Learning Programs for Schools & Campuses",
    items: [
      {
        title: "School Workshops",
        description:
          "Interactive hands-on sessions introducing logic, coding, and hardware curiosity early.",
        topic: "School Workshops",
      },
      {
        title: "College Workshops",
        description:
          "Deep technical sprints covering full-stack software, AI workflows, and IoT prototyping.",
        topic: "College Workshops",
      },
      {
        title: "Government School Programs",
        description:
          "Accessible foundational technology outreach designed for public school students.",
        topic: "Government School Programs",
      },
      {
        title: "Technical Training",
        description:
          "Structured multi-day engineering bootcamps focused on practical system building.",
        topic: "Technical Training",
      },
      {
        title: "Seminars & Guest Lectures",
        description:
          "Focused talks on modern engineering practice, applied AI, and product thinking.",
        topic: "Seminars & Guest Lectures",
      },
    ],
  },
  {
    id: "partnerships",
    label: "Institutional MoUs & Events",
    headline: "Long-Term Campus Alliances, Hackathons & Events",
    items: [
      {
        title: "MoU & Institutional Partnership",
        description:
          "Formal multi-year collaboration frameworks connecting campuses with industry engineering.",
        topic: "MoU & Institutional Partnership",
      },
      {
        title: "Hackathons & Competitions",
        description:
          "Co-hosted innovation challenges, problem-statement curation, and technical judging.",
        topic: "Hackathons & Competitions",
      },
      {
        title: "Events & Student Activities",
        description:
          "Technical fests, builder showcases, and student-led innovation club initiatives.",
        topic: "Events & Student Activities",
      },
      {
        title: "Business Collaboration",
        description:
          "Joint delivery ventures, channel alliances, and co-developed commercial initiatives.",
        topic: "Business Collaboration",
      },
    ],
  },
  {
    id: "technology",
    label: "Research & Technology",
    headline: "Applied R&D, Custom Engineering & Product Pilots",
    items: [
      {
        title: "Research & Innovation",
        description:
          "Collaborative exploration on emerging AI, assistive systems, and connected environments.",
        topic: "Research & Innovation",
      },
      {
        title: "Project / Technology Solutions",
        description:
          "Custom websites, mobile apps, automation portals, and institutional software builds.",
        topic: "Project / Technology Solutions",
      },
      {
        title: "Product Enquiry",
        description:
          "Pilot access and walkthroughs for SHEZINO Connect, Acadex, Vitalis, and Learnix.",
        topic: "Product Enquiry",
      },
    ],
  },
];

const SUBJECT_LOOKUP_MAP = {
  "project enquiry": {
    category: "technology",
    topic: "Project / Technology Solutions",
  },
  "project / technology solutions": {
    category: "technology",
    topic: "Project / Technology Solutions",
  },
  "product enquiry": {
    category: "technology",
    topic: "Product Enquiry",
  },
  "web development": {
    category: "technology",
    topic: "Web Development",
  },
  "mobile app development": {
    category: "technology",
    topic: "Mobile App Development",
  },
  "research & innovation": {
    category: "technology",
    topic: "Research & Innovation",
  },
  "career enquiry": {
    category: "careers",
    topic: "Hiring & Recruitment",
  },
  "career / internship": {
    category: "careers",
    topic: "Internship Opportunities",
  },
  "internship application": {
    category: "careers",
    topic: "Internship Opportunities",
  },
  "internship opportunities": {
    category: "careers",
    topic: "Internship Opportunities",
  },
  "hiring & recruitment": {
    category: "careers",
    topic: "Hiring & Recruitment",
  },
  "internship certification": {
    category: "careers",
    topic: "Internship Certification",
  },
  "project guidance & mentorship": {
    category: "careers",
    topic: "Project Guidance & Mentorship",
  },
  "software development application": {
    category: "careers",
    topic: "Software Development Application",
  },
  "ai & emerging tech application": {
    category: "careers",
    topic: "AI & Emerging Tech Application",
  },
  "hardware & iot application": {
    category: "careers",
    topic: "Hardware & IoT Application",
  },
  "design & creative application": {
    category: "careers",
    topic: "Design & Creative Application",
  },
  "business & growth application": {
    category: "careers",
    topic: "Business & Growth Application",
  },
  "workshop enquiry": {
    category: "workshops",
    topic: "College Workshops",
  },
  "school workshops": {
    category: "workshops",
    topic: "School Workshops",
  },
  "college workshops": {
    category: "workshops",
    topic: "College Workshops",
  },
  "government school programs": {
    category: "workshops",
    topic: "Government School Programs",
  },
  "technical training": {
    category: "workshops",
    topic: "Technical Training",
  },
  "seminars & guest lectures": {
    category: "workshops",
    topic: "Seminars & Guest Lectures",
  },
  partnership: {
    category: "partnerships",
    topic: "Business Collaboration",
  },
  "business collaboration": {
    category: "partnerships",
    topic: "Business Collaboration",
  },
  "mou & institutional partnership": {
    category: "partnerships",
    topic: "MoU & Institutional Partnership",
  },
  "events & student activities": {
    category: "partnerships",
    topic: "Events & Student Activities",
  },
  "hackathons & competitions": {
    category: "partnerships",
    topic: "Hackathons & Competitions",
  },
  "general enquiry": {
    category: "general",
    topic: "General Enquiry",
  },
  other: {
    category: "general",
    topic: "Other",
  },
};

export function resolveEnquiryFromParams(categoryParam, topicParam, subjectParam) {
  if (categoryParam) {
    const matchedCat = ENQUIRY_CATEGORIES.find((c) => c.id === categoryParam);
    if (matchedCat) {
      const matchedTopic =
        topicParam && matchedCat.topics.includes(topicParam)
          ? topicParam
          : matchedCat.topics[0];
      return {
        category: matchedCat.id,
        topic: matchedTopic,
        subjectText: topicParam || "",
      };
    }
  }

  const raw = (topicParam || subjectParam || "").trim();
  if (raw) {
    const mapped = SUBJECT_LOOKUP_MAP[raw.toLowerCase()];
    if (mapped) {
      return {
        category: mapped.category,
        topic: mapped.topic,
        subjectText: raw,
      };
    }

    const catByTopic = ENQUIRY_CATEGORIES.find((c) =>
      c.topics.some((t) => t.toLowerCase() === raw.toLowerCase())
    );
    if (catByTopic) {
      const exactTopic = catByTopic.topics.find(
        (t) => t.toLowerCase() === raw.toLowerCase()
      );
      return {
        category: catByTopic.id,
        topic: exactTopic,
        subjectText: raw,
      };
    }

    return {
      category: "technology",
      topic: "Project / Technology Solutions",
      subjectText: raw,
    };
  }

  return {
    category: "technology",
    topic: "Project / Technology Solutions",
    subjectText: "",
  };
}
