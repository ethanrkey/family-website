import type { ElementType, ReactNode } from "react";

interface CardProps {
  as?: ElementType;
  /** raised = filled panel (default); outline = surface with a rule */
  variant?: "raised" | "outline";
  /** Remove padding (e.g. when the card starts with a full-bleed image) */
  flush?: boolean;
  className?: string;
  children: ReactNode;
}

export default function Card({ as: Tag = "div", variant = "raised", flush = false, className = "", children }: CardProps) {
  const skin = variant === "raised" ? "bg-surface-raised" : "bg-surface border border-rule";
  return (
    <Tag className={`overflow-hidden rounded-theme ${skin} ${flush ? "" : "p-6"} ${className}`}>
      {children}
    </Tag>
  );
}
