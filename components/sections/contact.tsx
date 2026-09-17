import { Reveal } from '@/components/motion/reveal';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { cv } from '@/content/site';
import { profile } from '@/content/profile';

const linkedIn = profile.social.find((item) => item.label === 'LinkedIn')?.href ?? 'https://www.linkedin.com/in/dennisoteri/';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-[var(--line)] bg-[var(--surface)] py-24 sm:py-32" aria-labelledby="contact-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="contact-title"
            eyebrow="Start a conversation"
            title="Have a product challenge worth solving?"
            description="Email is the fastest path. The CV is available without a form."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`}>Email {profile.name.split(' ')[0]}</Button>
            <Button href={linkedIn} variant="secondary">
              LinkedIn
            </Button>
            <Button href={cv.href} download={cv.filename} variant="text">
              {cv.label}
            </Button>
          </div>
          <a className="interactive-hit mt-8 inline-flex rounded-full px-2 py-1 text-sm text-[var(--muted)]" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
