import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import IconLink from "@/components/ui/IconLink";
import { projects } from "@/content/projects";

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card as="li" key={p.title} flush className="flex flex-col">
            <div className="relative aspect-video border-b border-rule bg-surface">
              <Image
                src={p.image}
                alt={`${p.title} screenshot`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-ink-muted">{p.description}</p>
              <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                {p.tags.map((t) => (
                  <li key={t}>
                    <Tag label={t} />
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-1 pt-2">
                <IconLink href={p.github} label="Repository" icon={FaGithub} showLabel size="sm" className="-ml-3" />
                {p.live && <IconLink href={p.live} label="Live site" icon={FaExternalLinkAlt} showLabel size="sm" />}
              </div>
            </div>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
