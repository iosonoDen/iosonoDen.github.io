'use client';

import { useEffect, useRef, useState } from 'react';

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (!finePointer || reduceMotion) {
      return;
    }

    setEnabled(true);
  }, []);

  useEffect(() => {
    const node = glowRef.current;

    if (!enabled || !node) {
      return;
    }

    const onMove = (event: PointerEvent) => {
      node.style.left = `${event.clientX}px`;
      node.style.top = `${event.clientY}px`;
    };

    window.addEventListener('pointermove', onMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onMove);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed z-10 hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.16),transparent_68%)] md:block"
    />
  );
}
