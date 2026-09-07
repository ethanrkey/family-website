import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  children: ReactNode;
}

const isExternal = (href: string) => /^(https?:)?\/\//.test(href);

/** Link styled as a button — the "clearly-marked" way to reach another page. */
export default function Button({ href, variant = "primary", size = "md", className = "", children }: ButtonProps) {
  const skin =
    variant === "primary"
      ? "bg-accent text-accent-ink hover:bg-accent/90"
      : "border border-rule text-ink hover:bg-surface-raised";
  const pad = size === "md" ? "px-5 py-2.5 text-base" : "px-4 py-2 text-sm";
  const cls = `inline-flex items-center gap-2 rounded-theme font-medium transition-colors ${skin} ${pad} ${className}`;
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
