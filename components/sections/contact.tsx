import { Reveal } from '@/components/motion/reveal';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { profile } from '@/content/profile';

const linkedIn = profile.social.find((item) => item.label === 'LinkedIn')?.href ?? 'https://www.linkedin.com/in/dennisoteri/';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-[var(--line)] bg-[var(--canvas)] py-24 sm:py-32" aria-labelledby="contact-title">
      <Container>
        <Reveal>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact me"
            title="Have a product challenge worth solving?"
            description="If you're interested in my contribution, please email me or download my PDF for further contact details."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`}>Email Me</Button>
            <Button href={linkedIn} variant="secondary">
              Linked In
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
