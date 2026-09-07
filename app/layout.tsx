import type { Metadata } from "next";
import { Geist, Lora, Marck_Script, Martel } from "next/font/google";
import "./globals.css";

// Every theme font is loaded once here and exposed as a CSS variable; each
// theme picks from them via --font-display / --font-heading / --font-body.
const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const martel = Martel({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-martel", display: "swap" });
const marck = Marck_Script({ subsets: ["latin"], weight: "400", variable: "--font-marck-script", display: "swap" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap" });

const siteUrl = "https://keyfamily.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Key Family",
    template: "%s | Key Family",
  },
  description: "The Key family — Amy, Ethan, and Bryce. Dedicated. Resilient. Determined.",
  openGraph: {
    type: "website",
    siteName: "Key Family",
    title: "Key Family",
    description: "The Key family — Amy, Ethan, and Bryce. Dedicated. Resilient. Determined.",
    url: siteUrl,
    images: [{ url: "/family3.webp", width: 2000, height: 1500, alt: "Key family photo" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${martel.variable} ${marck.variable} ${lora.variable}`}>{children}</body>
    </html>
  );
}
