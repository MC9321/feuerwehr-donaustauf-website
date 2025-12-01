import { beforeEach, describe, expect, it, vi } from 'vitest';

import { INFO_QUERYResult } from '@/types/sanityTypes';

import infoService, { INFO_QUERY } from './InfoService';
import { client } from './sanityClient';

vi.mock('./sanityClient', () => ({
  client: {
    fetch: vi.fn(),
  },
}));

describe('InfoService', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('getInfos', () => {
    it('should fetch infos from Sanity', async () => {
      const mockInfos: INFO_QUERYResult = [
        {
          _id: '1',
          title: 'Test Info',
          message: null,
          index: 1,
        },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.mocked(client.fetch).mockResolvedValue(mockInfos as any);

      const result = await infoService.getInfos();

      expect(client.fetch).toHaveBeenCalledWith(INFO_QUERY, {}, { next: { revalidate: 60 } });
      expect(result).toEqual(mockInfos);
    });

    it('should handle empty result', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.mocked(client.fetch).mockResolvedValue([] as any);

      const result = await infoService.getInfos();

      expect(result).toEqual([]);
    });
  });

  describe('INFO_QUERY', () => {
    it('should be defined', () => {
      expect(INFO_QUERY).toBeDefined();
      expect(typeof INFO_QUERY).toBe('string');
    });
  });
});
