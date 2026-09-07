/** Small themed ornaments. All decorative — every export is aria-hidden. */

/** A single small star — Amy's section marker. */
export function Star({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`fill-accent ${className}`}>
      <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z" />
    </svg>
  );
}

/**
 * Five thin parallel rules — the lane-rope pattern, Bryce's section divider.
 * Fills its parent's width; wrap in <Container> to align with page content.
 */
export function LaneLines({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`w-full space-y-1.5 ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="block h-px w-full bg-rule" />
      ))}
    </div>
  );
}
