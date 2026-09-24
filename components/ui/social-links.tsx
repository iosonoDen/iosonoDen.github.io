import {
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/ui/social-icons';
import { profile } from '@/content/profile';

const socialLinks = [
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: EmailIcon,
  },
  {
    label: 'LinkedIn',
    href:
      profile.social.find((item) => item.label === 'LinkedIn')?.href ??
      'https://www.linkedin.com/in/dennisoteri/',
    icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    href:
      profile.social.find((item) => item.label === 'GitHub')?.href ??
      'https://github.com/iosonoDen',
    icon: GitHubIcon,
  },
  {
    label: 'Instagram',
    href:
      profile.social.find((item) => item.label === 'Instagram')?.href ??
      'https://www.instagram.com/dennis.oteri/',
    icon: InstagramIcon,
  },
];

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
      {socialLinks.map((item) => {
        const Icon = item.icon;
        const external = item.href.startsWith('http');

        return (
          <li key={item.label} className="group relative">
            <a
              className="interactive-hit inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--muted)]"
              href={item.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              aria-label={item.label}
            >
              <Icon className="h-5 w-5" />
            </a>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[var(--line)] bg-[var(--surface-elevated)] px-3 py-1 text-xs font-semibold text-[var(--ink)] opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100"
            >
              {item.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
