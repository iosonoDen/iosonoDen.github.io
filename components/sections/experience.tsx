import { Reveal } from '@/components/motion/reveal';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { experiences } from '@/content/experience';

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-[var(--line)] bg-[var(--surface)] py-24 sm:py-32"
      aria-labelledby="experience-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="experience-title"
            eyebrow="Job journey"
            title="Experience that holds up in production."
            description="MADIC is a Front End Developer role on payment software. ENNOVA is the diagnostic discipline underneath it."
          />
        </Reveal>
        <ol className="mt-16 space-y-10">
          {experiences.map((role, index) => (
            <li key={role.id}>
              <Reveal delay={index * 0.08}>
                <article className="grid gap-6 border-t border-[var(--line)] pt-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
                  <div>
                    <p className="text-sm text-[var(--muted)]">{role.period}</p>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {role.location}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold tracking-[-0.05em]">
                      {role.role}
                    </h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent-strong)]">
                      {role.company}
                    </p>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)]">
                      {role.summary}
                    </p>
                    <ul className="mt-5 max-w-3xl space-y-2 text-sm leading-6 text-[var(--muted)]">
                      {role.outcomes.map((outcome) => (
                        <li key={outcome}>→ {outcome}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
