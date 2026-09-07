import Link from "next/link";
import type { IconType } from "react-icons";

interface IconLinkProps {
  href: string;
  /** Accessible name; also the visible text when showLabel is set */
  label: string;
  icon: IconType;
  showLabel?: boolean;
  /** md for hero/footer rows; sm for card actions */
  size?: "sm" | "md";
  className?: string;
}

const isExternal = (href: string) => /^(https?:)?\/\//.test(href) || href.startsWith("mailto:");

/**
 * A link whose visual is an icon. Always carries an accessible name; external
 * targets open in a new tab with rel="noopener noreferrer".
 */
export default function IconLink({ href, label, icon: Icon, showLabel = false, size = "md", className = "" }: IconLinkProps) {
  const iconSize = size === "md" ? "h-6 w-6" : "h-5 w-5";
  const base = `inline-flex items-center gap-2 rounded-theme-sm text-ink-muted transition-colors hover:text-accent focus-visible:text-accent ${
    showLabel ? "px-3 py-2 text-sm font-medium" : "p-2"
  } ${className}`;
  const content = (
    <>
      <Icon aria-hidden="true" className={`${iconSize} shrink-0`} />
      {showLabel ? <span>{label}</span> : <span className="sr-only">{label}</span>}
    </>
  );
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={base}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} aria-label={label} title={label} className={base}>
      {content}
    </Link>
  );
}
