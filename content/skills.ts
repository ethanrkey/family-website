import {
  FaGitAlt,
  FaGithub,
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaSwift,
  FaDatabase,
  FaFigma,
  FaMicrosoft,
  FaGoogle,
} from "react-icons/fa";
import { FaPython, FaGolang } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { SiMongodb, SiChromewebstore, SiLatex, SiXcode } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiDocker } from "react-icons/di";
import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    heading: "Programming Languages and Frameworks",
    skills: [
      { name: "Python", icon: FaPython, hoverClass: "hover:fill-[#387eb0]" },
      { name: "Java", icon: FaJava, hoverClass: "hover:fill-[#387eb0]" },
      { name: "JavaScript", icon: IoLogoJavascript, hoverClass: "hover:fill-[#d1d422]" },
      { name: "TypeScript", icon: BiLogoTypescript, hoverClass: "hover:fill-[#0c82c7]" },
      { name: "React", icon: FaReact, hoverClass: "hover:fill-[#30abf2]" },
      { name: "Node.js", icon: FaNodeJs, hoverClass: "hover:fill-[#416b29]" },
      { name: "Next.js", icon: TbBrandNextjs, hoverClass: "hover:fill-[#000000]" },
      { name: "HTML", icon: FaHtml5, hoverClass: "hover:fill-[#d43e0d]" },
      { name: "CSS", icon: IoLogoCss3, hoverClass: "hover:fill-[#112ad1]" },
      { name: "Swift", icon: FaSwift, hoverClass: "hover:fill-[#ed7d0c]" },
      { name: "Go", icon: FaGolang, hoverClass: "hover:fill-[#2985cc]" },
      { name: "SQL", icon: FaDatabase, hoverClass: "hover:fill-[#6f7a82]" },
    ],
  },
  {
    heading: "Tools and Technologies",
    skills: [
      { name: "MongoDB", icon: SiMongodb, hoverClass: "hover:fill-[#2c7a2f]" },
      { name: "Git", icon: FaGitAlt, hoverClass: "hover:fill-[#b53910]" },
      { name: "GitHub", icon: FaGithub, hoverClass: "hover:fill-[#000000]" },
      { name: "VSCode", icon: VscVscode, hoverClass: "hover:fill-[#157dc2]" },
      { name: "XCode", icon: SiXcode, hoverClass: "hover:fill-[#32aafa]" },
      { name: "Docker", icon: DiDocker, hoverClass: "hover:fill-[#2847fa]" },
      { name: "Vercel", icon: IoLogoVercel, hoverClass: "hover:fill-[#000000]" },
      { name: "Figma", icon: FaFigma, hoverClass: "hover:fill-[#d66969]" },
      { name: "LaTeX", icon: SiLatex, hoverClass: "hover:fill-[#117367]" },
      { name: "Chrome Extensions", icon: SiChromewebstore, hoverClass: "hover:fill-[#21962f]" },
      { name: "Microsoft Office", icon: FaMicrosoft, hoverClass: "hover:fill-[#e83c15]" },
      { name: "Google Workspace", icon: FaGoogle, hoverClass: "hover:fill-[#387eb0]" },
    ],
  },
];
