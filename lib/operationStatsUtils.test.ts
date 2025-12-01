import { describe, expect, it } from 'vitest';

import { OPERATION_STATS_QUERYResult } from '@/types/sanityTypes';

import { statsToChartDataFf, statsToChartDataFr } from './operationStatsUtils';

describe('operationStatsUtils', () => {
  const mockStats: OPERATION_STATS_QUERYResult = [
    { _id: '1', year: 2023, ff: 45, fr: 120 },
    { _id: '2', year: 2022, ff: 38, fr: 105 },
    { _id: '3', year: 2024, ff: 52, fr: 135 },
  ];

  describe('statsToChartDataFf', () => {
    it('should transform stats to FF chart data', () => {
      const result = statsToChartDataFf(mockStats);

      expect(result).toHaveLength(3);
      expect(result?.[0]).toEqual({ id: '2', label: '2022', count: 38 });
      expect(result?.[1]).toEqual({ id: '1', label: '2023', count: 45 });
      expect(result?.[2]).toEqual({ id: '3', label: '2024', count: 52 });
    });

    it('should sort by year ascending', () => {
      const result = statsToChartDataFf(mockStats);

      expect(result?.[0]?.label).toBe('2022');
      expect(result?.[1]?.label).toBe('2023');
      expect(result?.[2]?.label).toBe('2024');
    });

    it('should handle undefined input', () => {
      const result = statsToChartDataFf(undefined);

      expect(result).toBeUndefined();
    });

    it('should handle empty array', () => {
      const result = statsToChartDataFf([]);

      expect(result).toEqual([]);
    });

    it('should handle missing values', () => {
      const statsWithMissing: OPERATION_STATS_QUERYResult = [{ _id: '1', year: null, ff: null, fr: null }];

      const result = statsToChartDataFf(statsWithMissing);

      expect(result?.[0]).toEqual({ id: '1', label: '', count: 0 });
    });
  });

  describe('statsToChartDataFr', () => {
    it('should transform stats to FR chart data', () => {
      const result = statsToChartDataFr(mockStats);

      expect(result).toHaveLength(3);
      expect(result?.[0]).toEqual({ id: '2', label: '2022', count: 105 });
      expect(result?.[1]).toEqual({ id: '1', label: '2023', count: 120 });
      expect(result?.[2]).toEqual({ id: '3', label: '2024', count: 135 });
    });

    it('should sort by year ascending', () => {
      const result = statsToChartDataFr(mockStats);

      expect(result?.[0]?.label).toBe('2022');
      expect(result?.[1]?.label).toBe('2023');
      expect(result?.[2]?.label).toBe('2024');
    });

    it('should handle undefined input', () => {
      const result = statsToChartDataFr(undefined);

      expect(result).toBeUndefined();
    });

    it('should handle empty array', () => {
      const result = statsToChartDataFr([]);

      expect(result).toEqual([]);
    });
  });
});
