import { Reveal } from '@/components/motion/reveal';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { caseStudies } from '@/content/work';

export function Work() {
  return (
    <section id="work" className="border-y border-[var(--line)] bg-[var(--surface)] py-16 sm:py-32" aria-labelledby="work-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="work-title"
            eyebrow="Projects"
            title="Case studies, not screenshots."
            description="Each piece of work starts from a constraint: what broke, what we chose, what shipped, and what a recruiter can verify."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:mt-16 sm:gap-6 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.id} delay={index * 0.08}>
              <article className="flex h-full flex-col border border-[var(--line)] bg-[var(--surface-elevated)] p-5 transition-transform duration-300 sm:p-8 md:hover:-translate-y-1">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--accent-strong)] sm:text-xs sm:tracking-[0.18em]">
                  {study.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] sm:mt-4 sm:text-3xl">{study.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-[var(--muted)] sm:mt-5 sm:text-base">
                  <span className="font-semibold text-[var(--ink)]">Problem. </span>
                  {study.problem}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--muted)] sm:mt-5">
                  {study.decisions.map((decision) => (
                    <li key={decision}>→ {decision}</li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.95rem] leading-7 text-[var(--muted)] sm:mt-5 sm:text-base">
                  <span className="font-semibold text-[var(--ink)]">Outcome. </span>
                  {study.outcome}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                  {study.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[var(--line)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--muted)] sm:text-xs"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 sm:mt-12">
            <Button href="#contact" variant="text">
              Start with a product challenge ↘
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
