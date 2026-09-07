import type { Metadata } from "next";
import { profile } from "@/content/profile";

// Server-side layout: carries route metadata (the page is a client component)
// and sets the theme for everything under /ethankey.
export const metadata: Metadata = {
  title: { absolute: `${profile.name} | Software Engineer` },
  description: profile.headline,
  openGraph: {
    type: "profile",
    title: `${profile.name} | Software Engineer`,
    description: profile.headline,
    url: "/ethankey",
    images: [{ url: "/me.webp", width: 1170, height: 1368, alt: profile.name }],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <div data-theme="ethan">{children}</div>;
}
