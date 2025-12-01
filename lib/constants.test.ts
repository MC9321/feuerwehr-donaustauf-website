import { describe, expect, it } from 'vitest';

import { SITE_DESC, SITE_KEYWORDS, SITE_TITLE, SITE_URL } from './constants';

describe('constants', () => {
  it('should export SITE_URL', () => {
    expect(SITE_URL).toBe('https://www.feuerwehr-donaustauf.de');
  });

  it('should export SITE_TITLE', () => {
    expect(SITE_TITLE).toBe('FEUERWEHR MARKT DONAUSTAUF');
  });

  it('should export SITE_DESC', () => {
    expect(SITE_DESC).toBe('Willkommen bei der FEUERWEHR MARKT DONAUSTAUF');
  });

  it('should export SITE_KEYWORDS as string', () => {
    expect(typeof SITE_KEYWORDS).toBe('string');
    expect(SITE_KEYWORDS.length).toBeGreaterThan(0);
  });

  it('should contain relevant keywords', () => {
    expect(SITE_KEYWORDS).toContain('Donaustauf');
    expect(SITE_KEYWORDS).toContain('Feuerwehr');
    expect(SITE_KEYWORDS).toContain('First Responder');
  });
});
