import type { Metadata } from "next";
import PersonPage from "@/components/PersonPage";
import { getMember } from "@/content/family";

const amy = getMember("amykey");

export const metadata: Metadata = {
  title: amy.name,
  description: `${amy.name} — ${amy.identity}`,
  openGraph: {
    type: "profile",
    title: amy.name,
    description: amy.identity,
    url: amy.href,
    images: [{ url: amy.photo, alt: amy.name }],
  },
};

export default function AmyKeyPage() {
  return <PersonPage member={amy} />;
}
