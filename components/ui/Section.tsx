import type { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  /** Anchor target; also derives the heading id for aria-labelledby */
  id: string;
  title: string;
  /** Small caps line above the title */
  eyebrow?: string;
  /** Decorative element rendered before the title (e.g. a star) */
  marker?: ReactNode;
  /** Full-width decorative divider rendered at the top of the section */
  divider?: ReactNode;
  /** Optional intro paragraph under the title */
  lede?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, title, eyebrow, marker, divider, lede, className = "", children }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={`py-section-sm md:py-section ${className}`}>
      {divider && <div className="mb-10 md:mb-12">{divider}</div>}
      <Container>
        <header className="mb-8 md:mb-10">
          {eyebrow && <p className="mb-2 text-sm font-medium uppercase tracking-caps text-ink-muted">{eyebrow}</p>}
          <h2 id={headingId} className="flex items-center gap-3 text-3xl md:text-4xl">
            {marker && <span aria-hidden="true" className="shrink-0">{marker}</span>}
            {title}
          </h2>
          {lede && <p className="mt-3 max-w-prose text-lg text-ink-muted">{lede}</p>}
        </header>
        {children}
      </Container>
    </section>
  );
}
