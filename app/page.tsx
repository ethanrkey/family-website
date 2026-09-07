"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Experience from "@/components/experience";
import Education from "@/components/education";
const Projects = dynamic(() => import('@/components/projects'), { ssr: false });
import Skills from "@/components/skills";
import About from "@/components/about";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import dynamic from 'next/dynamic';
import { profile } from "@/content/profile";

// MUI sx reads the theme's CSS variables so the shell follows data-theme.
const tabSx = (active: boolean) => ({
  height: "60px",
  width: "150px",
  fontFamily: "inherit",
  textTransform: "none" as const,
  backgroundColor: active ? "var(--accent)" : "var(--surface-raised)",
  color: active ? "var(--accent-ink)" : "var(--ink)",
  padding: "10px 20px",
  borderRadius: "12px",
  "&:hover": {
    backgroundColor: "var(--accent)",
    color: "var(--accent-ink)",
  },
});

export default function EthanKey() {
  const [activeSection, setActiveSection] = useState("");

  const renderContent = () => {
    switch (activeSection) {
      case "Experience":
        return <Experience />;
      case "Education":
        return <Education />;
      case "Projects":
        return <Projects />;
      case "Skills":
        return <Skills />;
      default:
        return <About />;
    }
  };

  return (
    <div className="bg-surface text-ink flex flex-col min-h-screen">
      <header className="flex flex-col items-center justify-center h-48 border-b-2 border-rule">
        <Link href="/">
          <h1 className="text-6xl text-ink font-bold">{profile.name}</h1>
        </Link>
      </header>
      <div className="flex flex-1">
        <div className="flex justify-center w-1/5 py-16">
          <Stack spacing={3} direction="column">
            <Button onClick={() => setActiveSection("Experience")} variant="contained" sx={tabSx(activeSection === "Experience")}>
              Experience
            </Button>
            <Button onClick={() => setActiveSection("Education")} variant="contained" sx={tabSx(activeSection === "Education")}>
              Education
            </Button>
            <Button onClick={() => setActiveSection("Projects")} variant="contained" sx={tabSx(activeSection === "Projects")}>
              Projects
            </Button>
            <Button onClick={() => setActiveSection("Skills")} variant="contained" sx={tabSx(activeSection === "Skills")}>
              Skills
            </Button>
          </Stack>
        </div>
        <div className="flex flex-1 justify-center">{renderContent()}</div>
      </div>

      <footer className="py-6 flex flex-col items-center gap-4 border-t-2 border-rule">
        <div className="flex flex-row items-center justify-center gap-8">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <FaLinkedin size={36} className="fill-ink-muted hover:fill-accent transition-transform duration-300 ease-in-out hover:scale-125"/>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <FaGithub size={36} className="fill-ink-muted hover:fill-accent transition-transform duration-300 ease-in-out hover:scale-125"/>
          </a>
          <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} title={profile.email}>
            <MdEmail size={36} className="fill-ink-muted hover:fill-accent transition-transform duration-300 ease-in-out hover:scale-125"/>
          </a>
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="Résumé (PDF)" title="Résumé">
              <FaFilePdf size={36} className="fill-ink-muted hover:fill-accent transition-transform duration-300 ease-in-out hover:scale-125"/>
            </a>
          )}
        </div>
        <a href={`mailto:${profile.email}`} className="text-ink hover:underline">{profile.email}</a>
      </footer>
    </div>
  );
}
