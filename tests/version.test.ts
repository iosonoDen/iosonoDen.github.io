import { describe, expect, it } from 'vitest';

import { siteVersion } from '../content/version';
import packageJson from '../package.json';

describe('siteVersion', () => {
  it('stays in sync with package.json', () => {
    expect(siteVersion).toBe(packageJson.version);
  });
});
