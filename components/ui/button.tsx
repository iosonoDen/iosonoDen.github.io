import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cn } from '@/lib/cn';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  download?: string | boolean;
  variant?: 'primary' | 'secondary' | 'text';
  className?: string;
} & Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'className'>;

const styles = {
  primary: 'bg-[var(--ink)] text-black',
  secondary: 'border border-[var(--line)] bg-white/[0.03] text-[var(--ink)]',
  text: 'px-0 text-[var(--ink)] underline-offset-8',
};

export function Button({
  children,
  href,
  download,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const shared = cn(
    'interactive-hit inline-flex min-h-11 items-center justify-center gap-2 overflow-visible rounded-full px-5 text-sm font-semibold tracking-[-0.01em]',
    styles[variant],
    className,
  );

  if (href) {
    const hash = href.startsWith('#') || href.startsWith('/#');
    const external = href.startsWith('http');
    const mail = href.startsWith('mailto:');
    const fileLink = Boolean(download) || href.endsWith('.pdf');

    if (hash || fileLink || external || mail) {
      return (
        <a
          className={shared}
          href={href}
          download={fileLink ? download || true : undefined}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
        >
          {children}
        </a>
      );
    }

    return <Link className={shared} href={href}>{children}</Link>;
  }

  return (
    <button className={shared} type="button" {...props}>
      {children}
    </button>
  );
}
