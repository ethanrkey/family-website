import type { TimelineEntry } from "./types";

/** Newest first. */
export const experience: TimelineEntry[] = [
  {
    title: "Software Engineer 1",
    org: "Raytheon",
    location: "Fort Wayne, IN",
    meta: "Full-time",
    dates: "Jun 2026 – Present",
    bullets: ["Developing an AI prompt library for software engineers"],
  },
  {
    title: "CS411 Course Grader",
    org: "Boston University",
    location: "Boston, MA",
    meta: "Part-time",
    dates: "Jan 2026 – May 2026",
    bullets: [
      "Graded assignments and provided detailed feedback for students in the Software Engineering (CS411) course",
    ],
  },
  {
    title: "LLM Trainer",
    org: "Handshake",
    location: "Remote",
    meta: "Contract",
    dates: "Oct 2025 – May 2026",
    bullets: [
      "Trained AI models by performing tasks in the HandshakeAI Fellowship program",
    ],
  },
  {
    title: "Software Engineer Intern",
    org: "Otodata",
    location: "Montréal, QC (Remote)",
    meta: "Internship",
    dates: "May 2025 – Aug 2025",
    bullets: [
      "Developed an FTP reporting feature in the Neevo portal using C# and AngularJS, enabling clients to generate branch-level tank monitor reports",
      "Resolved 15 defects in UI rendering, translations, object-relationship logic, and API endpoints, reducing recurring support tickets and improving platform stability",
      "Optimized CI/CD unit test pipeline by identifying and removing redundant mock database initialization, reducing test suite run time from ~60s to under 5s",
    ],
  },
  {
    title: "Software Development Research Assistant",
    org: "Human-to-Everything (H2X) Lab",
    location: "Boston, MA",
    dates: "Oct 2024 – Jan 2025",
    bullets: [
      "Created 40 CARLA simulation maps by converting real-world nuScenes driving routes from Singapore into detailed road networks using OpenStreetMap and RoadRunner",
      "Integrated completed maps into the CARLA simulator, validating scene accuracy and preparing simulation viewpoints for autonomous driving research use",
    ],
  },
  {
    title: "Software Engineer Fellow",
    org: "BU Spark!",
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
    title: "Computing Department Associate",
    org: "Best Buy",
    location: "Watertown, MA",
    meta: "Part-time",
    dates: "Sep 2024 – Dec 2024",
    bullets: [
      "Assisted 30+ customers weekly in troubleshooting OS performance, software installation, and cloud storage issues, ensuring quick resolution and improved customer satisfaction",
      "Guided customers in understanding computing technologies by translating technical concepts into clear, actionable terms to support informed purchasing decisions",
    ],
  },
  {
    title: "Junior Development Team",
    org: "Hack4Impact",
    location: "Boston, MA",
    dates: "Jan 2024 – May 2024",
    bullets: [
      "Assisted club members in learning full stack web development projects using technologies such as React, JavaScript, Node.js, MongoDB, HTML, and CSS during weekly live coding workshops",
    ],
  },
];
