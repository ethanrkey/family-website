import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { themes, tokenVars, type SemanticTokens, type ThemeName } from "./lib/colors";

/** { "--surface": "#…", … } for one theme */
const cssVars = (t: SemanticTokens) =>
  Object.fromEntries(
    (Object.keys(tokenVars) as (keyof SemanticTokens)[]).map((k) => [tokenVars[k], t[k]])
  );

/** Emits :root (family) plus a [data-theme="…"] block per theme. */
const themePlugin = plugin(({ addBase }) => {
  const blocks: Record<string, Record<string, string>> = {
    ":root": cssVars(themes.family),
  };
  for (const name of Object.keys(themes) as ThemeName[]) {
    blocks[`[data-theme="${name}"]`] = cssVars(themes[name]);
  }
  addBase(blocks);
});

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}", // data files carry Tailwind classes (e.g. skill hover colors)
  ],
  theme: {
    extend: {
      // Semantic colors resolve per theme via CSS variables:
      // bg-surface, bg-surface-raised, text-ink, text-ink-muted, bg-accent, text-accent-ink, border-rule
      colors: {
        surface: `var(${tokenVars.surface})`,
        "surface-raised": `var(${tokenVars.surfaceRaised})`,
        ink: `var(${tokenVars.ink})`,
        "ink-muted": `var(${tokenVars.inkMuted})`,
        accent: `var(${tokenVars.accent})`,
        "accent-ink": `var(${tokenVars.accentInk})`,
        rule: `var(${tokenVars.rule})`,
      },
    },
  },
  plugins: [themePlugin],
} satisfies Config;
