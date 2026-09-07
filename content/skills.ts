import { FaJava, FaSwift, FaDatabase, FaHtml5, FaReact, FaNodeJs, FaAngular, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { FaPython, FaGolang } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandCSharp, TbBrandNextjs } from "react-icons/tb";
import { SiDjango, SiFlask, SiTailwindcss, SiMongodb, SiXcode, SiLatex, SiChromewebstore } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiDocker } from "react-icons/di";
import type { SkillGroup } from "./types";

/** Rendered as rows of Tags with visible labels; icons are decorative. */
export const skillGroups: SkillGroup[] = [
  {
    heading: "Languages",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "TypeScript", icon: BiLogoTypescript },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "Java", icon: FaJava },
      { name: "C#", icon: TbBrandCSharp },
      { name: "Go", icon: FaGolang },
      { name: "Swift", icon: FaSwift },
      { name: "SQL", icon: FaDatabase },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: IoLogoCss3 },
    ],
  },
  {
    heading: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: TbBrandNextjs },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
      { name: "AngularJS", icon: FaAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    heading: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: DiDocker },
      { name: "MongoDB", icon: SiMongodb },
      { name: "VS Code", icon: VscVscode },
      { name: "Xcode", icon: SiXcode },
      { name: "Vercel", icon: IoLogoVercel },
      { name: "Figma", icon: FaFigma },
      { name: "LaTeX", icon: SiLatex },
      { name: "Chrome Extensions", icon: SiChromewebstore },
    ],
  },
];
