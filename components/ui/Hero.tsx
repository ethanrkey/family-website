import type { ReactNode } from "react";
import Container from "./Container";
import Portrait from "./Portrait";

interface HeroProps {
  title: string;
  /** One-line identity under the title */
  identity: string;
  /** Two sentences max */
  summary?: string;
  image?: { src: string; alt: string };
  /** Action row — IconLinks or Buttons */
  children?: ReactNode;
  /** center is for the family homepage; start is the default for person pages */
  align?: "start" | "center";
}

/** A band, not a screen. Holds the page's single h1. */
export default function Hero({ title, identity, summary, image, children, align = "start" }: HeroProps) {
  const centered = align === "center";
  return (
    <section aria-labelledby="hero-title" className="border-b border-rule">
      <Container
        className={`py-12 md:py-16 ${
          image ? "grid items-center gap-8 md:grid-cols-hero md:gap-12" : centered ? "text-center" : ""
        }`}
      >
        <div className={`animate-fade-up ${centered ? "mx-auto max-w-prose" : ""}`}>
          <h1
            id="hero-title"
            className={`font-display tracking-display ${centered ? "text-6xl md:text-7xl" : "text-5xl md:text-6xl"}`}
          >
            {title}
          </h1>
          <p className={`mt-3 text-xl text-ink-muted ${centered ? "md:text-2xl" : ""}`}>{identity}</p>
          {summary && <p className="mt-5 max-w-prose text-lg">{summary}</p>}
          {children && <div className={`mt-6 flex flex-wrap items-center gap-2 ${centered ? "justify-center" : ""}`}>{children}</div>}
        </div>
        {image && <Portrait src={image.src} alt={image.alt} size="xl" priority className="justify-self-center md:justify-self-end" />}
      </Container>
    </section>
  );
}
