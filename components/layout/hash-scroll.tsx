'use client';

import { useEffect } from 'react';

const HEADER_GAP = 8;

function headerOffset() {
  const header = document.getElementById('site-header');
  const height = header?.getBoundingClientRect().height ?? 64;

  return height + HEADER_GAP;
}

function syncHeaderOffset() {
  document.documentElement.style.setProperty(
    '--header-offset',
    `${headerOffset()}px`,
  );
}

function scrollToHash(hash: string, behavior: ScrollBehavior) {
  const id = decodeURIComponent(hash.replace('#', ''));

  if (!id) {
    return;
  }

  if (id === 'top') {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  const top = Math.max(
    0,
    window.scrollY + target.getBoundingClientRect().top - headerOffset(),
  );
  window.scrollTo({ top, behavior });
}

export function HashScroll() {
  useEffect(() => {
    syncHeaderOffset();

    const header = document.getElementById('site-header');
    const resizeObserver = header ? new ResizeObserver(syncHeaderOffset) : null;

    if (header && resizeObserver) {
      resizeObserver.observe(header);
    }

    window.addEventListener('resize', syncHeaderOffset);

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const behavior: ScrollBehavior = reduced ? 'auto' : 'smooth';

    if (window.location.hash) {
      requestAnimationFrame(() => {
        scrollToHash(window.location.hash, 'auto');
      });
    }

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = (event.target as HTMLElement | null)?.closest(
        'a[href^="#"]',
      );

      if (!link) {
        return;
      }

      const href = link.getAttribute('href');

      if (!href || href === '#') {
        return;
      }

      const url = new URL(href, window.location.href);

      if (url.pathname !== window.location.pathname) {
        return;
      }

      event.preventDefault();
      history.pushState(null, '', href);
      scrollToHash(href, behavior);
    };

    const onHashChange = () => {
      scrollToHash(window.location.hash, behavior);
    };

    document.addEventListener('click', onClick, true);
    window.addEventListener('hashchange', onHashChange);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', syncHeaderOffset);
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return null;
}
