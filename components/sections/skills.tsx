import { Reveal } from '@/components/motion/reveal';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { skillGroups } from '@/content/skills';

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24 sm:py-32" aria-labelledby="skills-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="skills-title"
            eyebrow="Stack"
            title="Tools I actually ship with."
            description="Grouped by how I use them — not a logo wall, not a percentage bar."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.06}>
              <article className="border border-[var(--line)] bg-[var(--surface)] p-8">
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-strong)]">{group.title}</h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[var(--line)] px-3 py-1 text-sm text-[var(--ink)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
