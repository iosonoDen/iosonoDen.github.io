import { Reveal } from '@/components/motion/reveal';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { caseStudies } from '@/content/work';

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-y border-[var(--line)] bg-[var(--surface)] py-24 sm:py-32" aria-labelledby="work-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="work-title"
            eyebrow="Selected work"
            title="Case studies, not screenshots."
            description="Each piece of work starts from a constraint: what broke, what we chose, what shipped, and what a recruiter can verify."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.id} delay={index * 0.08}>
              <article className="flex h-full flex-col border border-[var(--line)] bg-[var(--surface-elevated)] p-8 transition-transform duration-300 hover:-translate-y-1">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-strong)]">{study.eyebrow}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">{study.title}</h3>
                <p className="mt-5 text-base leading-7 text-[var(--muted)]">
                  <span className="font-semibold text-[var(--ink)]">Problem. </span>
                  {study.problem}
                </p>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-[var(--muted)]">
                  {study.decisions.map((decision) => (
                    <li key={decision}>→ {decision}</li>
                  ))}
                </ul>
                <p className="mt-5 text-base leading-7 text-[var(--muted)]">
                  <span className="font-semibold text-[var(--ink)]">Outcome. </span>
                  {study.outcome}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]"
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
          <div className="mt-12">
            <Button href="#contact" variant="text">
              Start with a product challenge ↘
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
