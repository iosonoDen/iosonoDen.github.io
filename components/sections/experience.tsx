import { Reveal } from '@/components/motion/reveal';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { experiences } from '@/content/experience';

export function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-[var(--line)] bg-[var(--surface)] py-16 sm:py-32"
      aria-labelledby="experience-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="experience-title"
            eyebrow="Jobs Journey"
            title="My Professional experience."
            description="Below, you'll find a list of all my work experience since I finished secondary school."
          />
        </Reveal>
        <ol className="mt-10 space-y-8 sm:mt-16 sm:space-y-10">
          {experiences.map((role, index) => (
            <li key={role.id}>
              <Reveal delay={index * 0.08}>
                <article
                  className={
                    index === 0
                      ? 'grid gap-4 sm:gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]'
                      : 'grid gap-4 border-t border-[var(--line)] pt-8 sm:gap-6 sm:pt-10 lg:grid-cols-[18rem_minmax(0,1fr)]'
                  }
                >
                  <div>
                    <p className="text-sm text-[var(--muted)]">{role.period}</p>
                    <p className="mt-1 text-sm text-[var(--muted)] sm:mt-2">
                      {role.location}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
                      {role.role}
                    </h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-strong)] sm:text-sm">
                      {role.company}
                    </p>
                    {role.summary ? (
                      <p className="mt-4 max-w-3xl text-[0.95rem] leading-7 text-[var(--muted)] sm:mt-5 sm:text-base">
                        {role.summary}
                      </p>
                    ) : null}
                    <ul className="mt-4 max-w-3xl space-y-2 text-sm leading-6 text-[var(--muted)] sm:mt-5">
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
