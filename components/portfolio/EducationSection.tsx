import Image from "next/image";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { education as e } from "@/content/education";

export default function EducationSection() {
  return (
    <Section id="education" title="Education">
      <Card variant="outline" className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        <a href={e.schoolUrl} target="_blank" rel="noopener noreferrer" aria-label={`${e.school} website`} className="shrink-0 rounded-full">
          <Image src={e.logo} alt={`${e.school} seal`} width={72} height={72} className="rounded-full" />
        </a>
        <div className="min-w-0">
          <h3 className="text-2xl font-semibold">{e.school}</h3>
          <p className="mt-1 text-lg">
            {e.degree} in {e.major}
          </p>
          <p className="text-ink-muted">
            {e.location} · {e.dates}
          </p>
          <p className="mt-2">
            GPA {e.gpa}
            {e.honors.length > 0 && ` · ${e.honors.join(" · ")}`}
          </p>
          <p className="mt-3 text-ink-muted">
            <span className="font-medium text-ink">Coursework: </span>
            {e.courseworkHighlights.join(", ")}
          </p>
        </div>
      </Card>
    </Section>
  );
}
