"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { FamilyPhoto } from "@/content/types";

interface GalleryProps {
  photos: FamilyPhoto[];
  /** Accessible name for the carousel region */
  label: string;
  /** Slides visible at md+ (always 1 at base) */
  perView?: 2 | 3;
}

/**
 * CSS scroll-snap carousel. No autoplay. Arrow buttons and ←/→ keys scroll
 * one viewport-width at a time; touch/trackpad swipe works natively.
 */
export default function Gallery({ photos, label, perView = 3 }: GalleryProps) {
  const track = useRef<HTMLUListElement>(null);

  const scrollByPage = useCallback((dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    let next = el.scrollLeft + dir * el.clientWidth;
    // Wrap at the ends so the arrows never dead-end.
    if (next > max + 2) next = 0;
    else if (next < -2) next = max;
    el.scrollTo({ left: next, behavior: "smooth" });
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByPage(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByPage(-1);
    }
  };

  const cols = perView === 2 ? "md:auto-cols-slide-2" : "md:auto-cols-slide-3";
  const sizes = perView === 2 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 100vw";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <ul
        ref={track}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label={`${label} — use arrow keys to scroll`}
        className={`snap-track grid auto-cols-slide grid-flow-col gap-4 overflow-x-auto rounded-theme focus-visible:outline-offset-4 ${cols}`}
      >
        {photos.map((p, i) => (
          <li key={p.src} className="relative aspect-photo snap-start overflow-hidden rounded-theme bg-surface-raised">
            <Image src={p.src} alt={p.alt} fill sizes={sizes} className="object-cover" loading={i < perView ? "eager" : "lazy"} />
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          aria-label={`Previous ${label.toLowerCase()}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rule text-ink transition-colors hover:bg-surface-raised"
        >
          <FaChevronLeft aria-hidden="true" className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          aria-label={`Next ${label.toLowerCase()}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rule text-ink transition-colors hover:bg-surface-raised"
        >
          <FaChevronRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
