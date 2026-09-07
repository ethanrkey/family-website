import type { IconType } from "react-icons";
import type { ThemeName } from "@/lib/colors";

export interface ExperienceEntry {
  position: string;
  company: string;
  location: string;
  employmentType?: "Full-time" | "Part-time" | "Contract" | "Internship" | "Volunteer";
  /** Display string, e.g. "Jun 2026 – Present" */
  dates: string;
  /** Plain sentences — no bullet glyphs; the component renders the list. */
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  /** Absolute public path, e.g. "/budgeting.webp" */
  image: string;
  github: string;
  /** Omit when there is no deployed demo — the card renders repo-only. */
  live?: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  /** Tailwind hover class for the brand color, e.g. "hover:fill-[#387eb0]" */
  hoverClass: string;
}

export interface SkillGroup {
  heading: string;
  skills: Skill[];
}

export interface Education {
  school: string;
  schoolUrl: string;
  logo: string;
  location: string;
  degree: string;
  major: string;
  /** Display string, e.g. "Graduated May 2026" */
  dates: string;
  gpa: string;
  /** One short line of highlights, rendered as a comma-separated sentence. */
  courseworkHighlights: string[];
}

export interface FamilyMember {
  name: string;
  /** Route segment for this member's subpage, e.g. "amy" → /amy */
  slug: string;
  /** data-theme value that member's route sets */
  theme: ThemeName;
  /** Absolute public path to the portrait */
  photo: string;
  bio: string;
  /** Internal route to this member's subpage — set once the page exists. */
  href?: string;
}

export interface FamilyPhoto {
  src: string;
  alt: string;
}

export interface ContactLink {
  label: string;
  href: string;
  /** Rendered as an accessible name on icon-only links */
  ariaLabel?: string;
}

export interface Profile {
  name: string;
  /** Short headline sentence; typed out on the About tab. */
  headline: string;
  about: string;
  email: string;
  linkedin: string;
  github: string;
  /** Absolute public path to a résumé PDF. Leave undefined until the file exists. */
  resumeUrl?: string;
}
