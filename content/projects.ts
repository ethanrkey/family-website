import type { Project } from "./types";

/** Display order. `live` is omitted where no deployed demo exists. */
export const projects: Project[] = [
  {
    title: "Personal Budgeting App",
    description:
      "A personal budgeting application for tracking income, recurring expenses, and visualizing balance trends",
    image: "/budgeting.webp",
    github: "https://github.com/ethanrkey/cs412/tree/main/project",
  },
  {
    title: "AccessiScan",
    description:
      "Chrome extension and connected website for developers to improve the accessibility of their websites",
    image: "/accessiscan.webp",
    github: "https://github.com/AccessiScan-XC475",
    live: "https://accessiscan.vercel.app/",
  },
  {
    title: "Mini Instagram",
    description:
      "A mock Instagram Django application in which users can create accounts, make posts, follow other profiles, like other profiles, and view their post feed",
    image: "/miniinsta.webp",
    github: "https://github.com/ethanrkey/cs412/tree/main/mini_insta",
  },
  {
    title: "Trivia Game",
    description: "A fun trivia game with questions from a variety of categories",
    image: "/trivia.webp",
    github: "https://github.com/ethanrkey/cs391-mp-2",
    live: "https://cs391triviagame.vercel.app/",
  },
  {
    title: "Global Conflict Visualizer",
    description:
      "Tool which visualizes various international conflicts from the 20th and 21st centuries",
    image: "/gcv3.webp",
    github: "https://github.com/ethanrkey/global-conflict-visualizer",
  },
  {
    title: "Stock Trading Simulator",
    description: "Paper trading platform to practice stock market strategies",
    image: "/stocktrading.webp",
    github: "https://github.com/ethanrkey/stock-trading-app",
  },
  {
    title: "Newton Voter Analytics",
    description:
      "A website that shows data from election results in Newton, MA and allows for filtering and visualizing this data",
    image: "/voteranalytics.webp",
    github: "https://github.com/ethanrkey/cs412/tree/main/voter_analytics",
  },
  {
    title: "Text Image Generator",
    description: "Generate an image from any text description",
    image: "/texttoimage.webp",
    github: "https://github.com/ethanrkey/text-to-image",
  },
  {
    title: "Resume Website",
    description: "My resume as a website",
    image: "/mp1.webp",
    github: "https://github.com/ethanrkey/cs391-mp-1",
    live: "https://cs391mp1.vercel.app/",
  },
];
