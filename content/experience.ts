import type { ExperienceEntry } from "./types";

/** Newest first. */
export const experience: ExperienceEntry[] = [
  {
    position: "Software Engineer 1",
    company: "Raytheon",
    location: "Fort Wayne, IN",
    employmentType: "Full-time",
    dates: "Jun 2026 – Present",
    bullets: ["Developing an AI prompt library for software engineers"],
  },
  {
    position: "CS411 Course Grader",
    company: "Boston University",
    location: "Boston, MA",
    employmentType: "Part-time",
    dates: "Jan 2026 – May 2026",
    bullets: [
      "Graded assignments and provided detailed feedback for students in the Software Engineering (CS411) course",
    ],
  },
  {
    position: "LLM Trainer",
    company: "Handshake",
    location: "Remote",
    employmentType: "Contract",
    dates: "Oct 2025 – May 2026",
    bullets: [
      "Trained AI models by performing tasks in the HandshakeAI Fellowship program",
    ],
  },
  {
    position: "Software Engineer Intern",
    company: "Otodata",
    location: "Montréal, QC (Remote)",
    employmentType: "Internship",
    dates: "May 2025 – Aug 2025",
    bullets: [
      "Developed an FTP reporting feature in the Neevo portal using C# and AngularJS, enabling clients to generate branch-level tank monitor reports",
      "Resolved 15 defects in UI rendering, translations, object-relationship logic, and API endpoints, reducing recurring support tickets and improving platform stability",
      "Optimized CI/CD unit test pipeline by identifying and removing redundant mock database initialization, reducing test suite run time from ~60s to under 5s",
    ],
  },
  {
    position: "Software Development Research Assistant",
    company: "Human-to-Everything (H2X) Lab",
    location: "Boston, MA",
    dates: "Oct 2024 – Jan 2025",
    bullets: [
      "Created 40 CARLA simulation maps by converting real-world nuScenes driving routes from Singapore into detailed road networks using OpenStreetMap and RoadRunner",
      "Integrated completed maps into the CARLA simulator, validating scene accuracy and preparing simulation viewpoints for autonomous driving research use",
    ],
  },
  {
    position: "Software Engineer Fellow",
    company: "BU Spark!",
    location: "Boston, MA",
    dates: "Sep 2024 – Dec 2024",
    bullets: [
      "Earned the Innovation Award for AccessiScan project, selected by judges at BU's Experiential Learning Expo",
      "Coordinated research with 20 professionals and interns to identify common web accessibility priorities for developers",
      "Engineered a Chrome extension with a REST API using Flask to scan websites, compute accessibility scores, and identify WCAG compliance issues",
      "Built and deployed a connected web application with GitHub OAuth, scan history, accessibility progress tracking, and a community discussion board using a Next.js, Go, and MongoDB stack",
    ],
  },
  {
    position: "Computing Department Associate",
    company: "Best Buy",
    location: "Watertown, MA",
    employmentType: "Part-time",
    dates: "Sep 2024 – Dec 2024",
    bullets: [
      "Assisted 30+ customers weekly in troubleshooting OS performance, software installation, and cloud storage issues, ensuring quick resolution and improved customer satisfaction",
      "Guided customers in understanding computing technologies by translating technical concepts into clear, actionable terms to support informed purchasing decisions",
    ],
  },
  {
    position: "Junior Development Team",
    company: "Hack4Impact",
    location: "Boston, MA",
    dates: "Jan 2024 – May 2024",
    bullets: [
      "Assisted club members in learning full stack web development projects using technologies such as React, JavaScript, Node.js, MongoDB, HTML, and CSS during weekly live coding workshops",
    ],
  },
];
