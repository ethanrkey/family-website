import type { TimelineEntry } from "@/content/types";

interface TimelineProps {
  entries: TimelineEntry[];
  /** Heading level for each entry title (defaults to h3 under a Section h2) */
  headingLevel?: "h3" | "h4";
}

/**
 * Stacked list, newest first. Dates sit in a narrow left column at md+ and
 * stack above the entry at base. Everything is visible — nothing to expand.
 */
export default function Timeline({ entries, headingLevel: H = "h3" }: TimelineProps) {
  return (
    <ol className="divide-y divide-rule border-y border-rule">
      {entries.map((e) => {
        const meta = [e.org, e.location, e.meta].filter(Boolean).join(" · ");
        return (
          <li key={`${e.title}-${e.org}-${e.dates ?? ""}`} className="grid gap-2 py-6 md:grid-cols-timeline md:gap-8 md:py-7">
            <p className="text-sm font-medium uppercase tracking-caps text-ink-muted md:pt-1">
              {e.dates ?? "—"}
            </p>
            <div>
              <H className="text-xl font-semibold">{e.title}</H>
              <p className="mt-1 text-ink-muted">{meta}</p>
              {e.bullets && e.bullets.length > 0 && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-ink-muted">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
