import Nav from "@/components/ui/Nav";
import Hero from "@/components/ui/Hero";
import Container from "@/components/ui/Container";
import Portrait from "@/components/ui/Portrait";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Gallery from "@/components/ui/Gallery";
import Footer from "@/components/ui/Footer";
import { familyName, tagline, members, galleryTop, galleryBottom } from "@/content/family";

export default function HomePage() {
  const navLinks = [
    ...members.map((m) => ({ href: `#${m.slug}`, label: m.firstName })),
    { href: "#photos", label: "Photos" },
  ];

  return (
    <div data-theme="family" className="min-h-screen bg-surface text-ink">
      <Nav brand={{ label: familyName, href: "/" }} links={navLinks} />

      <main id="main">
        <Hero title={familyName} identity={tagline} align="center" />

        {members.map((m, i) => {
          const headingId = `${m.slug}-title`;
          return (
            <section
              key={m.slug}
              id={m.slug}
              aria-labelledby={headingId}
              className="border-b border-rule py-section-sm md:py-section"
            >
              <Container
                className={`flex flex-col items-center gap-8 text-center md:items-center md:gap-14 md:text-left ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <Portrait src={m.photo} alt={m.name} size="xl" />
                <div className="max-w-prose">
                  <h2 id={headingId} className="text-4xl md:text-5xl">
                    {m.name}
                  </h2>
                  <p className="mt-2 text-lg text-ink-muted">{m.identity}</p>
                  <p className="mt-5 text-lg leading-relaxed">{m.bio}</p>
                  <Button href={m.href} className="mt-7">
                    Visit {m.firstName}&rsquo;s page <span aria-hidden="true">→</span>
                  </Button>
                </div>
              </Container>
            </section>
          );
        })}

        <Section id="photos" title="Photos">
          <div className="space-y-6">
            <Gallery photos={galleryTop} label="Family photos, row one" />
            <Gallery photos={galleryBottom} label="Family photos, row two" />
          </div>
        </Section>
      </main>

      <Footer note={`© ${new Date().getFullYear()} ${familyName}`} />
    </div>
  );
}
