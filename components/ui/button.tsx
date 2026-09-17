import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'text';
  className?: string;
} & Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'className'>;

const styles = {
  primary:
    'bg-[var(--ink)] text-black hover:bg-[var(--accent-strong)] hover:text-white focus-visible:outline-[var(--accent-strong)]',
  secondary:
    'border border-[var(--line)] bg-white/[0.03] text-[var(--ink)] hover:border-[var(--ink)] hover:bg-white/[0.08]',
  text: 'px-0 text-[var(--ink)] underline-offset-8 hover:text-[var(--accent-strong)] hover:underline',
};

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const shared = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-[-0.01em] transition-colors duration-200 ${styles[variant]} ${className}`;

  if (href) {
    const hash = href.startsWith('#') || href.startsWith('/#');
    const external = href.startsWith('http');

    if (hash) {
      return (
        <a className={shared} href={href}>
          {children}
        </a>
      );
    }

    return (
      <Link className={shared} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button className={shared} type="button" {...props}>
      {children}
    </button>
  );
}
