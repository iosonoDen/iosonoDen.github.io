import { Reveal } from '@/components/motion/reveal';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { SocialLinks } from '@/components/ui/social-links';

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
          <div className="mt-8 sm:mt-10">
            <SocialLinks />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
