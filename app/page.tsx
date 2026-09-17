import { SiteHeader } from '@/components/layout/site-header';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="min-h-[calc(100svh-4rem)] py-20 sm:py-28" aria-labelledby="hero-title">
          <Container className="flex min-h-[calc(100svh-10rem)] flex-col justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
              Milan, Italy · Available for opportunities
            </p>
            <div className="max-w-6xl py-16">
              <p className="mb-5 text-lg text-[var(--muted)] sm:text-2xl">Hello, I&apos;m Dennis Oteri.</p>
              <h1 id="hero-title" className="font-[var(--display)] text-6xl font-semibold leading-[0.9] tracking-[-0.08em] text-[var(--ink)] sm:text-8xl lg:text-[clamp(6rem,12vw,11.5rem)]">
                Interfaces built for real-world impact.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                Front End Developer focused on secure payment experiences, resilient product interfaces and thoughtful systems that perform.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="#work">Explore my work <span aria-hidden="true">↘</span></Button>
                <Button href="#contact" variant="secondary">Let&apos;s talk</Button>
              </div>
            </div>
            <p className="text-sm text-[var(--muted)]">Scroll to discover <span aria-hidden="true">↓</span></p>
          </Container>
        </section>

        <section id="work" className="border-y border-[var(--line)] bg-[var(--surface)] py-24 sm:py-32" aria-labelledby="work-title">
          <Container>
            <SectionHeading
              id="work-title"
              eyebrow="Selected work"
              title="The next version will turn projects into evidence."
              description="Each case study will explain the problem, the engineering decisions and the outcomes—not just show a screenshot."
            />
          </Container>
        </section>

        <section id="about" className="py-24 sm:py-32" aria-labelledby="about-title">
          <Container>
            <SectionHeading
              id="about-title"
              eyebrow="Engineering with intention"
              title="A system is only as good as the experience it creates."
              description="The portfolio foundation prioritizes performance, accessibility and clarity before visual complexity."
            />
          </Container>
        </section>

        <section id="contact" className="border-t border-[var(--line)] bg-[var(--surface)] py-24 sm:py-32" aria-labelledby="contact-title">
          <Container>
            <SectionHeading
              id="contact-title"
              eyebrow="Start a conversation"
              title="Have a product challenge worth solving?"
              description="The production contact flow and downloadable CV will be delivered in Sprint 4."
            />
          </Container>
        </section>
      </main>
    </>
  );
}
