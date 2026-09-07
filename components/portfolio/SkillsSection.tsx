import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { skillGroups } from "@/content/skills";

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-8">
        {skillGroups.map((g) => (
          <div key={g.heading}>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-caps text-ink-muted">{g.heading}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <li key={s.name}>
                  <Tag label={s.name} icon={s.icon} size="md" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
