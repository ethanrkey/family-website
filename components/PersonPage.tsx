import Image from "next/image";
import Nav from "@/components/ui/Nav";
import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Timeline from "@/components/ui/Timeline";
import Card from "@/components/ui/Card";
import Footer from "@/components/ui/Footer";
import Container from "@/components/ui/Container";
import { Star, LaneLines } from "@/components/ui/Decor";
import SwimLane from "@/components/person/SwimLane";
import type { FamilyMember, Feature } from "@/content/types";

interface PersonPageProps {
  member: FamilyMember;
}

/**
 * Shared skeleton for /amykey and /brycekey: Hero → About → Timeline →
 * Highlights → Feature → Footer. Only theme, hero image, and the feature
 * section's content differ; section ornaments are chosen by theme here so
 * the primitives stay theme-agnostic.
 */
export default function PersonPage({ member: m }: PersonPageProps) {
  const ornament =
    m.theme === "amy" ? { marker: <Star /> } : m.theme === "bryce" ? { divider: <Container><LaneLines /></Container> } : {};
  // One section gets the swimmer — the feature, which is the swimming section.
  const featureOrnament = m.theme === "bryce" ? { divider: <SwimLane /> } : ornament;

  const links = [
    { href: "#about", label: "About" },
    ...(m.timeline ? [{ href: "#timeline", label: "Timeline" }] : []),
    ...(m.highlights ? [{ href: "#highlights", label: "Highlights" }] : []),
    ...(m.feature ? [{ href: "#feature", label: m.feature.title }] : []),
  ];

  return (
    <div data-theme={m.theme} className="min-h-screen bg-surface text-ink">
      <Nav brand={{ label: "Key Family", href: "/" }} links={links} />

      <main id="main">
        <Hero title={m.name} identity={m.identity} image={{ src: m.photo, alt: m.name }} />

        <Section id="about" title="About" {...ornament}>
          <p className="max-w-prose text-lg leading-relaxed">{m.bio}</p>
        </Section>

        {m.timeline && (
          <Section id="timeline" title="Timeline" {...ornament}>
            <Timeline entries={m.timeline} />
          </Section>
        )}

        {m.highlights && (
          <Section id="highlights" title="Highlights" {...ornament}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {m.highlights.map((h) => (
                <Card as="li" key={h} className="text-lg font-medium">
                  {h}
                </Card>
              ))}
            </ul>
          </Section>
        )}

        {m.feature && (
          <Section id="feature" title={m.feature.title} {...featureOrnament}>
            <FeatureBody feature={m.feature} />
          </Section>
        )}
      </main>

      <Footer backHref="/" backLabel="Key Family" />
    </div>
  );
}

/** Text beside a photo column when photos exist; prose alone otherwise. */
function FeatureBody({ feature }: { feature: Feature }) {
  const prose = (
    <div className="max-w-prose space-y-5 text-lg leading-relaxed">
      {feature.paragraphs.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
    </div>
  );
  if (!feature.photos || feature.photos.length === 0) return prose;
  return (
    <div className="grid gap-8 md:grid-cols-feature md:gap-12">
      {prose}
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
        {feature.photos.map((p) => (
          <li key={p.src} className="relative aspect-photo overflow-hidden rounded-theme-lg bg-surface-raised">
            <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          </li>
        ))}
      </ul>
    </div>
  );
}
