/**
 * Theme definitions — the single source of truth for color, type, and shape.
 *
 * `palette` holds raw brand hexes. `themes` maps each theme to semantic tokens.
 * tailwind.config.ts turns `themes` into CSS custom properties (`:root` = family,
 * `[data-theme="x"]` overrides) and maps utilities onto them:
 *
 *   colors   bg-surface · bg-surface-raised · text-ink · text-ink-muted
 *            bg-accent · text-accent-ink · border-rule
 *   fonts    font-display · font-heading · font-body
 *   radius   rounded-theme · rounded-theme-sm · rounded-theme-lg
 *
 * Components reference semantic names only — never `palette.*` — so no
 * component knows whose page it's on. Each route sets `data-theme` on its
 * top-level wrapper.
 *
 * Every text/background pair below clears WCAG AA (4.5:1); re-verify when tuning.
 */
export const palette = {
  // family
  charcoal: "#1F2937",
  slate: "#5c6d86", // darkened from #687a94 so white text clears 4.5:1
  // ethan
  navy: "#3c4f70",
  rose: "#9a5555", // darkened from #B36D6D so white text clears 4.5:1
  // amy
  cream: "#FBF7F0",
  powder: "#A5C8E1",
  brick: "#B23A2F",
  cocoa: "#3B2A24",
  // bryce
  columbia: "#B9D9EB",
  deepNavy: "#12233F",
  // neutrals
  white: "#ffffff",
} as const;

export type ThemeName = "family" | "ethan" | "amy" | "bryce";

export interface SemanticColors {
  /** Page background */
  surface: string;
  /** Cards, panels, inactive controls */
  surfaceRaised: string;
  /** Primary text on surface */
  ink: string;
  /** Secondary text, icons at rest */
  inkMuted: string;
  /** Highlights, active controls, links */
  accent: string;
  /** Text placed ON accent */
  accentInk: string;
  /** Borders and dividers */
  rule: string;
}

/** next/font CSS variables, set on <body> in app/layout.tsx */
export const fontVars = {
  sans: "var(--font-geist-sans)",
  martel: "var(--font-martel)",
  marck: "var(--font-marck-script)",
  lora: "var(--font-lora)",
} as const;

export interface ThemeTokens {
  colors: SemanticColors;
  /** Hero / page title */
  fontDisplay: string;
  /** Section and card headings */
  fontHeading: string;
  fontBody: string;
  /** Base corner radius; -sm and -lg derive from it */
  radius: string;
}

export const themes: Record<ThemeName, ThemeTokens> = {
  family: {
    colors: {
      surface: palette.charcoal,
      surfaceRaised: palette.slate,
      ink: palette.white,
      inkMuted: "#eef1f5",
      accent: palette.powder,
      accentInk: palette.charcoal,
      rule: "#8a97ab",
    },
    fontDisplay: fontVars.marck,
    fontHeading: fontVars.martel,
    fontBody: fontVars.sans,
    radius: "0.75rem",
  },
  ethan: {
    colors: {
      surface: palette.white,
      surfaceRaised: "#eaeef4",
      ink: palette.navy,
      inkMuted: "#596579",
      accent: palette.rose,
      accentInk: palette.white,
      rule: "#cfd6e2",
    },
    fontDisplay: fontVars.martel,
    fontHeading: fontVars.martel,
    fontBody: fontVars.sans,
    radius: "0.5rem",
  },
  amy: {
    colors: {
      surface: palette.cream,
      surfaceRaised: palette.powder,
      ink: palette.cocoa,
      inkMuted: "#5a4840",
      accent: palette.brick,
      accentInk: palette.white,
      rule: "#dccfc0",
    },
    fontDisplay: fontVars.lora,
    fontHeading: fontVars.lora,
    fontBody: fontVars.lora,
    radius: "1rem",
  },
  bryce: {
    colors: {
      surface: palette.white,
      surfaceRaised: palette.columbia,
      ink: palette.deepNavy,
      inkMuted: "#4A5A75",
      accent: palette.deepNavy,
      accentInk: palette.white,
      rule: palette.columbia,
    },
    fontDisplay: fontVars.sans,
    fontHeading: fontVars.sans,
    fontBody: fontVars.sans,
    radius: "0.375rem",
  },
};

/** CSS custom-property names for each semantic token. */
export const colorVars: Record<keyof SemanticColors, string> = {
  surface: "--surface",
  surfaceRaised: "--surface-raised",
  ink: "--ink",
  inkMuted: "--ink-muted",
  accent: "--accent",
  accentInk: "--accent-ink",
  rule: "--rule",
};

/** "#1F2937" → "31 41 55" (space-separated, for rgb(var(--x-rgb) / alpha)) */
function hexToRgbTriplet(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}

/** Flatten one theme into { "--surface": "#…", "--font-heading": "…", … } */
export function themeToCssVars(t: ThemeTokens): Record<string, string> {
  const out: Record<string, string> = {};
  for (const k of Object.keys(colorVars) as (keyof SemanticColors)[]) {
    out[colorVars[k]] = t.colors[k];
    out[`${colorVars[k]}-rgb`] = hexToRgbTriplet(t.colors[k]);
  }
  out["--font-display"] = t.fontDisplay;
  out["--font-heading"] = t.fontHeading;
  out["--font-body"] = t.fontBody;
  out["--radius"] = t.radius;
  return out;
}
