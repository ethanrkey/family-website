import type { Metadata } from "next";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Nav from "@/components/ui/Nav";
import Hero from "@/components/ui/Hero";
import IconLink from "@/components/ui/IconLink";
import Footer from "@/components/ui/Footer";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: { absolute: `${profile.name} | Software Engineer` },
  description: profile.summary,
  openGraph: {
    type: "profile",
    title: `${profile.name} | Software Engineer`,
    description: profile.identity,
    url: "/ethankey",
    images: [{ url: "/me.webp", width: 1170, height: 1368, alt: profile.name }],
  },
};

const NAV = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

export default function EthanKeyPage() {
  const contact = (
    <>
      <IconLink href={profile.github} label="GitHub" icon={FaGithub} showLabel />
      <IconLink href={profile.linkedin} label="LinkedIn" icon={FaLinkedin} showLabel />
      <IconLink href={`mailto:${profile.email}`} label="Email" icon={MdEmail} showLabel />
      {profile.resumeUrl && <IconLink href={profile.resumeUrl} label="Résumé" icon={FaFilePdf} showLabel />}
    </>
  );

  return (
    <div data-theme="ethan" className="min-h-screen bg-surface text-ink">
      <Nav brand={{ label: profile.name, href: "/" }} links={NAV} />

      <main id="main">
        <Hero title={profile.name} identity={profile.identity} summary={profile.summary}>
          {contact}
        </Hero>
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </main>

      <Footer backHref="/" backLabel="Key Family" note={profile.email}>
        {contact}
      </Footer>
    </div>
  );
}
