import type { IconType } from "react-icons";
import type { ThemeName } from "@/lib/theme";

/** One row in a Timeline — a job, a fellowship, a degree. */
export interface TimelineEntry {
  /** Role or degree */
  title: string;
  /** Employer or school */
  org: string;
  location?: string;
  /** Employment type or other short qualifier, e.g. "Contract", "Remote" */
  meta?: string;
  /** Display string, e.g. "Jun 2026 – Present". Omit if unknown. */
  dates?: string;
  /** Plain sentences — no bullet glyphs; the component renders the list. */
  bullets?: string[];
}

export interface Project {
  title: string;
  /** One line */
  description: string;
  /** Absolute public path, e.g. "/budgeting.webp" */
  image: string;
  github: string;
  /** Omit when there is no deployed demo — the card renders repo-only. */
  live?: string;
  /** Tech tags shown as a Tag row */
  tags: string[];
}

export interface Skill {
  name: string;
  icon?: IconType;
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
  honors: string[];
  /** One short line of highlights, rendered comma-separated. */
  courseworkHighlights: string[];
}

export interface FamilyPhoto {
  src: string;
  alt: string;
}

/** The personality section on a person page — differs per member. */
export interface Feature {
  title: string;
  paragraphs: string[];
  photos?: FamilyPhoto[];
}

export interface FamilyMember {
  name: string;
  firstName: string;
  /** Route segment, e.g. "amykey" → /amykey */
  slug: string;
  /** data-theme value that member's route sets */
  theme: ThemeName;
  /** Absolute public path to the portrait */
  photo: string;
  /** One-line identity under the name, e.g. "Registered Nurse · Mansfield, Texas" */
  identity: string;
  bio: string;
  /** Internal route to this member's page */
  href: string;
  /** Person-page sections (Ethan's portfolio renders its own content instead) */
  timeline?: TimelineEntry[];
  highlights?: string[];
  feature?: Feature;
}

export interface Profile {
  name: string;
  /** One-line identity under the h1 */
  identity: string;
  /** Hero copy — two sentences max */
  summary: string;
  email: string;
  linkedin: string;
  github: string;
  /** Absolute public path to a résumé PDF */
  resumeUrl?: string;
}
