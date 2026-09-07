/**
 * Palette + theme definitions — the single source of truth for color.
 *
 * `palette` holds raw brand hexes. `themes` maps each theme to the semantic
 * token set that components use. tailwind.config.ts turns `themes` into CSS
 * custom properties (`:root` = family, `[data-theme="x"]` overrides) and maps
 * utilities like `bg-surface` / `text-ink` / `border-rule` onto them.
 *
 * Components must reference semantic names only — never `palette.*` directly —
 * so no component knows whose page it's on. `palette` may still feed MUI `sx`
 * props via the theme CSS variables until MUI is gone.
 *
 * Every text/background pair below clears WCAG AA (4.5:1); verify with a
 * contrast checker when tuning.
 */
export const palette = {
  // family
  charcoal: "#1F2937",
  slate: "#5c6d86", // was #687a94 — darkened so white text clears 4.5:1
  // ethan
  navy: "#3c4f70",
  rose: "#9a5555", // was #B36D6D — darkened so white text clears 4.5:1
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

export interface SemanticTokens {
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

export const themes: Record<ThemeName, SemanticTokens> = {
  family: {
    surface: palette.charcoal,
    surfaceRaised: palette.slate,
    ink: palette.white,
    inkMuted: "#eef1f5",
    accent: palette.powder,
    accentInk: palette.charcoal,
    rule: palette.white,
  },
  ethan: {
    surface: palette.white,
    surfaceRaised: "#eaeef4",
    ink: palette.navy,
    inkMuted: "#596579",
    accent: palette.rose,
    accentInk: palette.white,
    rule: palette.navy,
  },
  amy: {
    surface: palette.cream,
    surfaceRaised: palette.powder,
    ink: palette.cocoa,
    inkMuted: "#5a4840",
    accent: palette.brick,
    accentInk: palette.white,
    rule: palette.brick,
  },
  bryce: {
    surface: palette.white,
    surfaceRaised: palette.columbia,
    ink: palette.deepNavy,
    inkMuted: "#4A5A75",
    accent: palette.deepNavy,
    accentInk: palette.white,
    rule: palette.deepNavy,
  },
};

/** CSS custom-property name for each semantic token. */
export const tokenVars: Record<keyof SemanticTokens, string> = {
  surface: "--surface",
  surfaceRaised: "--surface-raised",
  ink: "--ink",
  inkMuted: "--ink-muted",
  accent: "--accent",
  accentInk: "--accent-ink",
  rule: "--rule",
};
