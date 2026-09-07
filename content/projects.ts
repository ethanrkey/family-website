import type { Project } from "./types";

/**
 * Display order. `live` is omitted where no deployed demo exists.
 * Tags reflect each repo's primary languages/frameworks.
 */
export const projects: Project[] = [
  {
    title: "Personal Budgeting App",
    description: "Track income and recurring expenses and visualize balance trends over time.",
    image: "/budgeting.webp",
    github: "https://github.com/ethanrkey/cs412/tree/main/project",
    tags: ["Django", "Python"],
  },
  {
    title: "AccessiScan",
    description: "Chrome extension and companion site that scores websites against WCAG and tracks fixes over time.",
    image: "/accessiscan.webp",
    github: "https://github.com/AccessiScan-XC475",
    live: "https://accessiscan.vercel.app/",
    tags: ["Next.js", "Go", "MongoDB", "Flask", "Chrome Extension"],
  },
  {
    title: "Mini Instagram",
    description: "Django social app with accounts, posts, follows, likes, and a personal feed.",
    image: "/miniinsta.webp",
    github: "https://github.com/ethanrkey/cs412/tree/main/mini_insta",
    tags: ["Django", "Python"],
  },
  {
    title: "Trivia Game",
    description: "Quick-fire trivia across a range of categories.",
    image: "/trivia.webp",
    github: "https://github.com/ethanrkey/cs391-mp-2",
    live: "https://cs391triviagame.vercel.app/",
    tags: ["Next.js", "TypeScript"],
  },
  {
    title: "Global Conflict Visualizer",
    description: "Interactive visualization of 20th- and 21st-century international conflicts.",
    image: "/gcv3.webp",
    github: "https://github.com/ethanrkey/global-conflict-visualizer",
    tags: ["TypeScript", "Data Visualization"],
  },
  {
    title: "Stock Trading Simulator",
    description: "Paper-trading platform for practicing market strategies without real money.",
    image: "/stocktrading.webp",
    github: "https://github.com/ethanrkey/stock-trading-app",
    tags: ["Python", "Docker"],
  },
  {
    title: "Newton Voter Analytics",
    description: "Filter and chart election results for Newton, MA.",
    image: "/voteranalytics.webp",
    github: "https://github.com/ethanrkey/cs412/tree/main/voter_analytics",
    tags: ["Django", "Python", "Plotly"],
  },
  {
    title: "Text Image Generator",
    description: "iOS app that turns a text description into a generated image.",
    image: "/texttoimage.webp",
    github: "https://github.com/ethanrkey/text-to-image",
    tags: ["Swift", "iOS"],
  },
  {
    title: "Resume Website",
    description: "My résumé, as a website.",
    image: "/mp1.webp",
    github: "https://github.com/ethanrkey/cs391-mp-1",
    live: "https://cs391mp1.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];
