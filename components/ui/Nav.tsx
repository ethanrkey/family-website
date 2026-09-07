"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export interface NavLink {
  /** "#section-id" for in-page anchors, or a route */
  href: string;
  label: string;
}

interface NavProps {
  brand: { label: string; href: string };
  links: NavLink[];
}

/**
 * Sticky top nav with backdrop blur. In-page anchor links get active-section
 * highlighting via IntersectionObserver. Includes a skip link.
 */
export default function Nav({ brand, links }: NavProps) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = links.filter((l) => l.href.startsWith("#")).map((l) => l.href.slice(1));
    const targets = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    // Track which sections are on screen; the top-most visible one is active.
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.boundingClientRect.top);
          else visible.delete(e.target.id);
        }
        if (visible.size === 0) return;
        const top = [...visible.entries()].sort((a, b) => a[1] - b[1])[0][0];
        setActive(top);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [links]);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-surface/85 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-gutter focus:top-2 focus:z-50 focus:rounded-theme-sm focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex min-h-nav w-full max-w-content flex-wrap items-center justify-between gap-x-6 gap-y-1 px-gutter py-2 lg:px-gutter-lg"
      >
        <Link href={brand.href} className="shrink-0 font-heading text-lg font-bold text-ink hover:text-accent">
          {brand.label}
        </Link>
        <ul className="-mx-2 flex min-w-0 items-center gap-0.5 overflow-x-auto text-sm font-medium md:-mx-3 md:gap-1">
          {links.map((l) => {
            const isActive = l.href === `#${active}`;
            return (
              <li key={l.href} className="shrink-0">
                <a
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`inline-block whitespace-nowrap rounded-theme-sm px-2 py-1.5 transition-colors hover:text-accent md:px-3 ${
                    isActive ? "text-accent underline decoration-2 underline-offset-8" : "text-ink-muted"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
