'use client';

import { useEffect, useState } from 'react';

import { EmailIcon } from '@/components/ui/social-icons';
import { profile } from '@/content/profile';
import { cn } from '@/lib/cn';

export function EmailFab() {
  const [nearContact, setNearContact] = useState(false);

  useEffect(() => {
    const contact = document.getElementById('contact');
    if (!contact) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearContact(entry.isIntersecting),
      { rootMargin: '0px 0px 200px 0px', threshold: 0 },
    );

    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-40 transition-transform duration-500 ease-out motion-reduce:transition-none',
        nearContact && 'pointer-events-none translate-x-[calc(100%+9rem)]',
      )}
    >
      <div className="group relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap text-xs font-semibold tracking-[0.16em] text-[var(--ink)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
        >
          EMAIL ME
        </span>
        <a
          className="interactive-hit inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-strong)] text-[#140804]"
          href={`mailto:${profile.email}`}
          aria-label="E-mail me"
          tabIndex={nearContact ? -1 : undefined}
          aria-hidden={nearContact}
        >
          <EmailIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
