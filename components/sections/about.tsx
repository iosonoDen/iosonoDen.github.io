import Image from 'next/image';

import { Reveal } from '@/components/motion/reveal';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { aboutPhoto, aboutStory } from '@/content/site';

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32" aria-labelledby="about-title">
      <Container className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,32rem)] lg:gap-16">
        <Reveal>
          <SectionHeading
            id="about-title"
            eyebrow="About me"
            title="From spectator to digital architect."
          />
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            {aboutStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-[1.25rem] bg-[var(--surface)]">
            <Image
              src={aboutPhoto.src}
              alt={aboutPhoto.alt}
              width={aboutPhoto.width}
              height={aboutPhoto.height}
              unoptimized
              sizes="(min-width: 1024px) 512px, 90vw"
              className="h-auto w-full [image-rendering:-webkit-optimize-contrast]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
