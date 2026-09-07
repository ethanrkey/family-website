import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { themes, themeToCssVars, colorVars, type ThemeName } from "./lib/theme";

/** Emits :root (family) plus a [data-theme="…"] block per theme. */
const themePlugin = plugin(({ addBase }) => {
  const blocks: Record<string, Record<string, string>> = {
    ":root": themeToCssVars(themes.family),
  };
  for (const name of Object.keys(themes) as ThemeName[]) {
    blocks[`[data-theme="${name}"]`] = themeToCssVars(themes[name]);
  }
  addBase(blocks);
});

/** `rgb(var(--x-rgb) / <alpha-value>)` so opacity modifiers (bg-surface/80) work. */
const semantic = (name: keyof typeof colorVars) => `rgb(var(${colorVars[name]}-rgb) / <alpha-value>)`;

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // ---- Type scale (explicit, replaces the default) ----
    // Use these steps only; no arbitrary text-[…] values in components.
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.625rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1.1" }],
      "6xl": ["3.75rem", { lineHeight: "1.05" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
    },
    extend: {
      // ---- Semantic colors (resolve per theme via CSS variables) ----
      colors: {
        surface: semantic("surface"),
        "surface-raised": semantic("surfaceRaised"),
        ink: semantic("ink"),
        "ink-muted": semantic("inkMuted"),
        accent: semantic("accent"),
        "accent-ink": semantic("accentInk"),
        rule: semantic("rule"),
      },
      fontFamily: {
        display: "var(--font-display)",
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
      borderRadius: {
        "theme-sm": "calc(var(--radius) / 2)",
        theme: "var(--radius)",
        "theme-lg": "calc(var(--radius) * 2)",
      },
      // ---- Spacing scale additions (semantic layout steps) ----
      spacing: {
        gutter: "1.5rem", // horizontal page padding at base
        "gutter-lg": "2.5rem", // …at lg+
        "section-sm": "3.5rem", // vertical section padding, base
        section: "5.5rem", // …at md+
        nav: "3.5rem", // sticky nav height; also scroll-margin-top
        portrait: "10rem",
        "portrait-lg": "15rem",
        "portrait-xl": "18rem",
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
        narrow: "36rem",
      },
      letterSpacing: {
        display: "-0.02em",
        caps: "0.12em",
      },
      gridTemplateColumns: {
        timeline: "9rem minmax(0, 1fr)",
        hero: "minmax(0, 1fr) auto",
        feature: "minmax(0, 3fr) minmax(0, 2fr)",
      },
      gridAutoColumns: {
        slide: "100%",
        "slide-2": "calc((100% - 1rem) / 2)",
        "slide-3": "calc((100% - 2rem) / 3)",
      },
      aspectRatio: {
        photo: "4 / 3",
        portrait: "4 / 5",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(0.5rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        // Crosses the full width of a relative parent: enters from the left edge, exits at the right.
        swim: {
          from: { left: "0%", transform: "translate(-100%, -50%)", opacity: "1" },
          "90%": { opacity: "1" },
          to: { left: "100%", transform: "translate(0%, -50%)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 500ms ease-out both",
        swim: "swim 3s cubic-bezier(0.45, 0, 0.55, 1) forwards",
      },
    },
  },
  plugins: [themePlugin],
} satisfies Config;
