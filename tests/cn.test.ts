import { describe, expect, it } from 'vitest';

import { cn } from '../lib/cn';

describe('cn', () => {
  it('merges tailwind classes and drops conflicts', () => {
    expect(cn('px-2', 'px-4', 'text-[var(--ink)]')).toBe('px-4 text-[var(--ink)]');
  });
});
