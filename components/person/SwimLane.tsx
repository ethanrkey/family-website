"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { LaneLines } from "@/components/ui/Decor";

/**
 * Lane-line divider with a small swimmer that crosses it once when scrolled
 * into view. Purely decorative; hidden under prefers-reduced-motion.
 */
export default function SwimLane() {
  const ref = useRef<HTMLDivElement>(null);
  const [swim, setSwim] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || swim) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSwim(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [swim]);

  return (
    <Container>
      <div ref={ref} className="relative">
        <LaneLines />
        {/* keyframe `swim` animates left: 0 → 100% with a matching translateX so it enters from the left edge and exits at the right */}
        <svg
          aria-hidden="true"
          viewBox="0 0 64 24"
          className={`pointer-events-none absolute top-1/2 h-6 w-16 fill-accent motion-reduce:hidden ${
            swim ? "animate-swim" : "left-0 -translate-x-full -translate-y-1/2 opacity-0"
          }`}
        >
          <circle cx="50" cy="9" r="4.5" />
          <path d="M14 13c8-3 16-4 24-2l8 1-1 5-9-1c-8-1-15 0-22 2z" />
          <path d="M22 9c3-4 7-6 11-6l1 3c-4 0-7 2-9 5z" />
          <path
            d="M4 15c2-1 4-1 6 0M2 19c3-1 6-1 9 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-accent"
          />
        </svg>
      </div>
    </Container>
  );
}
