import Link from "next/link";
import type { ReactNode } from "react";
import Container from "./Container";

interface FooterProps {
  /** Contact / link row */
  children?: ReactNode;
  /** Where "back" goes; omit to hide */
  backHref?: string;
  backLabel?: string;
  note?: string;
}

export default function Footer({ children, backHref, backLabel = "Key Family", note }: FooterProps) {
  return (
    <footer className="border-t border-rule py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          {children && <div className="flex flex-wrap items-center gap-1">{children}</div>}
          {note && <p className="text-sm text-ink-muted">{note}</p>}
        </div>
        {backHref && (
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 rounded-theme-sm text-sm font-medium text-ink hover:text-accent"
          >
            <span aria-hidden="true">←</span> {backLabel}
          </Link>
        )}
      </Container>
    </footer>
  );
}
