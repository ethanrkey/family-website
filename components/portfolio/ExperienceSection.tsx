import Section from "@/components/ui/Section";
import Timeline from "@/components/ui/Timeline";
import { experience } from "@/content/experience";

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <Timeline entries={experience} />
    </Section>
  );
}
