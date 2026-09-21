import { HashScroll } from '@/components/layout/hash-scroll';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { SkipLink } from '@/components/layout/skip-link';
import { CursorGlow } from '@/components/motion/cursor-glow';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Experience } from '@/components/sections/experience';
import { Hero } from '@/components/sections/hero';
import { Skills } from '@/components/sections/skills';
import { Work } from '@/components/sections/work';

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <HashScroll />
      <CursorGlow />
      <SiteHeader />
      <main id="top">
        <Hero />
        <Work />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
