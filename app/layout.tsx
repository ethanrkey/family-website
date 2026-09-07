import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://keyfamily.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Key Family",
    template: "%s | Key Family",
  },
  description:
    "The Key family — Amy, Ethan, and Bryce. Dedicated. Resilient. Determined.",
  openGraph: {
    type: "website",
    siteName: "Key Family",
    title: "Key Family",
    description:
      "The Key family — Amy, Ethan, and Bryce. Dedicated. Resilient. Determined.",
    url: siteUrl,
    images: [{ url: "/family3.webp", width: 2000, height: 1500, alt: "Key family photo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
