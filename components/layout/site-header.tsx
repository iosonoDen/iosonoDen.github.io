import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cv, navigation } from '@/content/site';
import { profile } from '@/content/profile';

export function SiteHeader() {
  return (
    <header className="bg-[color:var(--canvas)]/85 sticky top-0 z-50 overflow-visible border-b border-[var(--line)] backdrop-blur-xl">
      <Container className="grid min-h-16 grid-cols-[auto_1fr_auto] items-center gap-4">
        <a
          className="interactive-hit inline-flex overflow-visible rounded-md p-1"
          href="#top"
          aria-label={`${profile.name}, home`}
        >
          <Image
            src="/brand/logo-do.png"
            alt=""
            width={90}
            height={60}
            className="h-8 w-[4.5rem] object-contain invert"
            priority
          />
        </a>
        <nav
          className="hidden justify-self-center md:block"
          aria-label="Primary navigation"
        >
          <ul className="flex items-center gap-1 text-sm text-[var(--muted)] lg:gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="interactive-hit inline-flex rounded-full px-3 py-2 transition-colors hover:text-[var(--ink)]"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3 justify-self-end">
          <Button
            href={cv.href}
            download={cv.filename}
            variant="ghost"
            className="hidden sm:inline-flex"
          >
            {cv.label}
          </Button>
          <details className="relative md:hidden">
            <summary className="interactive-hit cursor-pointer list-none rounded-full px-3 py-2 text-sm font-semibold [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <ul className="absolute right-0 mt-3 min-w-44 border border-[var(--line)] bg-[var(--surface-elevated)] p-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    className="interactive-hit block rounded-full px-3 py-2 text-[var(--muted)] hover:text-[var(--ink)]"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </Container>
    </header>
  );
}
