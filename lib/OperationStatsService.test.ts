import { beforeEach, describe, expect, it, vi } from 'vitest';

import { OPERATION_STATS_QUERYResult } from '@/types/sanityTypes';

import operationStatsService, { OPERATION_STATS_QUERY } from './OperationStatsService';
import { client } from './sanityClient';

vi.mock('./sanityClient', () => ({
  client: {
    fetch: vi.fn(),
  },
}));

describe('OperationStatsService', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('getOperationStats', () => {
    it('should fetch operation stats from Sanity', async () => {
      const mockStats: OPERATION_STATS_QUERYResult = [
        {
          _id: '1',
          year: 2023,
          ff: 45,
          fr: 120,
        },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.mocked(client.fetch).mockResolvedValue(mockStats as any);

      const result = await operationStatsService.getOperationStats();

      expect(client.fetch).toHaveBeenCalledWith(OPERATION_STATS_QUERY, {}, { next: { revalidate: 60 } });
      expect(result).toEqual(mockStats);
    });

    it('should handle empty result', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.mocked(client.fetch).mockResolvedValue([] as any);

      const result = await operationStatsService.getOperationStats();

      expect(result).toEqual([]);
    });
  });

  describe('OPERATION_STATS_QUERY', () => {
    it('should be defined', () => {
      expect(OPERATION_STATS_QUERY).toBeDefined();
      expect(typeof OPERATION_STATS_QUERY).toBe('string');
    });
  });
});
