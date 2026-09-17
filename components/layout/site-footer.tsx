import { Container } from '@/components/ui/container';
import { cv } from '@/content/site';
import { profile } from '@/content/profile';

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          © 2026 {profile.name}. Front End Developer, Milan.
        </p>
        <ul className="flex flex-wrap gap-5 text-sm">
          {profile.social.map((item) => (
            <li key={item.href}>
              <a className="interactive-hit inline-flex rounded-full px-2 py-1 text-[var(--muted)]" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a className="interactive-hit inline-flex rounded-full px-2 py-1 text-[var(--muted)]" href={cv.href} download={cv.filename}>
              CV
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
