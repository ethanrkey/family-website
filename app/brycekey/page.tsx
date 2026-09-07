import type { Metadata } from "next";
import PersonPage from "@/components/PersonPage";
import { getMember } from "@/content/family";

const bryce = getMember("brycekey");

export const metadata: Metadata = {
  title: bryce.name,
  description: `${bryce.name} — ${bryce.identity}`,
  openGraph: {
    type: "profile",
    title: bryce.name,
    description: bryce.identity,
    url: bryce.href,
    images: [{ url: bryce.photo, alt: bryce.name }],
  },
};

export default function BryceKeyPage() {
  return <PersonPage member={bryce} />;
}
