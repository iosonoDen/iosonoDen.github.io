import { Container } from '@/components/ui/container';

const navigation = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--canvas)]/85 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-5">
        <a className="text-sm font-bold tracking-[-0.04em]" href="#top" aria-label="Dennis Oteri, home">
          DEN<span className="text-[var(--accent-strong)]">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-4 text-sm text-[var(--muted)] sm:gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="transition-colors hover:text-[var(--ink)]" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
