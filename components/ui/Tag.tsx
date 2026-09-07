import type { IconType } from "react-icons";

interface TagProps {
  label: string;
  icon?: IconType;
  /** solid = accent fill (for emphasis); default = outlined on surface */
  variant?: "default" | "solid";
  /** md gives room for an icon and a longer label (skills); sm for card meta */
  size?: "sm" | "md";
}

/** Always shows its text — never icon-only. */
export default function Tag({ label, icon: Icon, variant = "default", size = "sm" }: TagProps) {
  const skin = variant === "solid" ? "bg-accent text-accent-ink" : "border border-rule bg-surface text-ink";
  const pad = size === "md" ? "gap-2 px-3 py-1.5 text-sm" : "gap-1.5 px-2.5 py-1 text-xs";
  return (
    <span className={`inline-flex items-center rounded-theme-sm font-medium leading-none ${skin} ${pad}`}>
      {Icon && <Icon aria-hidden="true" className={size === "md" ? "h-4 w-4 shrink-0" : "h-3.5 w-3.5 shrink-0"} />}
      {label}
    </span>
  );
}
