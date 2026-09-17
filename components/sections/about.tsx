import { Reveal } from '@/components/motion/reveal';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { aboutStory } from '@/content/site';
import { whyHireMe } from '@/content/profile';

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32" aria-labelledby="about-title">
      <Container className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <Reveal>
          <SectionHeading
            id="about-title"
            eyebrow="About"
            title="From spectator to digital architect."
            description="A Front End Developer with full-stack range — and a quality bar formed in payment software, not in mockups."
          />
          <div className="mt-10 max-w-2xl space-y-5 text-base leading-7 text-[var(--muted)] sm:text-lg">
            {aboutStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border border-[var(--line)] bg-[var(--surface)] p-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-strong)]">Why hire me</h3>
            <ul className="mt-6 space-y-5">
              {whyHireMe.map((item) => (
                <li key={item} className="text-base leading-7 text-[var(--muted)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
