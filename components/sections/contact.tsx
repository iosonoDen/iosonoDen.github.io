import { Reveal } from '@/components/motion/reveal';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { profile } from '@/content/profile';

const linkedIn =
  profile.social.find((item) => item.label === 'LinkedIn')?.href ??
  'https://www.linkedin.com/in/dennisoteri/';

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--line)] bg-[var(--canvas)] py-16 sm:py-32"
      aria-labelledby="contact-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="contact-title"
            eyebrow="Contacts"
            title="Have a product challenge worth solving?"
            description="If you're interested in my contribution, please email me or download my PDF for further contact details."
          />
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <Button href={`mailto:${profile.email}`} className="w-full sm:w-auto">
              Email Me
            </Button>
            <Button href={linkedIn} variant="secondary" className="w-full sm:w-auto">
              Linked In
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
