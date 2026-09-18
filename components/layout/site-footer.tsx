import { Container } from '@/components/ui/container';
import { EmailIcon, GitHubIcon, InstagramIcon, LinkedInIcon } from '@/components/ui/social-icons';
import { profile } from '@/content/profile';
import { siteVersion } from '@/content/site';

const footerLinks = [
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: EmailIcon,
  },
  {
    label: 'LinkedIn',
    href: profile.social.find((item) => item.label === 'LinkedIn')?.href ?? 'https://www.linkedin.com/in/dennisoteri/',
    icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    href: profile.social.find((item) => item.label === 'GitHub')?.href ?? 'https://github.com/iosonoDen',
    icon: GitHubIcon,
  },
  {
    label: 'Instagram',
    href: profile.social.find((item) => item.label === 'Instagram')?.href ?? 'https://www.instagram.com/dennis.oteri/',
    icon: InstagramIcon,
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] py-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:py-10">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="text-sm text-[var(--muted)]">
          <p>© 2026 Copyright - Oteri Dennis, Milan</p>
          <p className="mt-1 text-xs tracking-wide">v{siteVersion}</p>
        </div>
        <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
          {footerLinks.map((item) => {
            const Icon = item.icon;
            const external = item.href.startsWith('http');

            return (
              <li key={item.label}>
                <a
                  className="interactive-hit inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--muted)] sm:h-10 sm:w-10"
                  href={item.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  aria-label={item.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </footer>
  );
}
