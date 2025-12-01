import { beforeEach, describe, expect, it, vi } from 'vitest';

import { OPERATION_QUERYResult } from '@/types/sanityTypes';

import operationService, { OPERATION_BY_YEAR_QUERY, OPERATION_LATEST_FR_THL_QUERY, OPERATION_LATEST_NON_FR_THL_QUERY, OPERATION_QUERY, OPERATION_YEARS_QUERY } from './OperationService';
import { client } from './sanityClient';

vi.mock('./sanityClient', () => ({
  client: {
    fetch: vi.fn(),
  },
}));

describe('OperationService', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  const mockOperations: OPERATION_QUERYResult = [
    {
      _id: '1',
      title: 'Brand',
      locality: 'Donaustauf',
      date: '2023-05-15T10:30:00Z',
      category: 'Brände',
      incident: 1,
      slug: { current: 'brand-2023-05-15', _type: 'slug' },
    },
  ];

  describe('getOperations', () => {
    it('should fetch all operations from Sanity', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.mocked(client.fetch).mockResolvedValue(mockOperations as any);

      const result = await operationService.getOperations();

      expect(client.fetch).toHaveBeenCalledWith(OPERATION_QUERY, {}, { next: { revalidate: 60 } });
      expect(result).toEqual(mockOperations);
    });
  });

  describe('getOperationsOfYear', () => {
    it('should fetch operations for specific year', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.mocked(client.fetch).mockResolvedValue(mockOperations as any);

      const result = await operationService.getOperationsOfYear(2023);

      expect(client.fetch).toHaveBeenCalledWith(
        OPERATION_BY_YEAR_QUERY,
        {
          dateFrom: '2022-12-31T23:00:00Z',
          dateUntil: '2023-12-31T22:59:59Z',
        },
        { next: { revalidate: 60 } },
      );
      expect(result).toEqual(mockOperations);
    });

    it('should handle different years correctly', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.mocked(client.fetch).mockResolvedValue(mockOperations as any);

      await operationService.getOperationsOfYear(2024);

      expect(client.fetch).toHaveBeenCalledWith(
        OPERATION_BY_YEAR_QUERY,
        {
          dateFrom: '2023-12-31T23:00:00Z',
          dateUntil: '2024-12-31T22:59:59Z',
        },
        { next: { revalidate: 60 } },
      );
    });
  });

  describe('getLatestFrOperations', () => {
    it('should fetch latest First Responder operations', async () => {
      const frOperations: OPERATION_QUERYResult = [
        {
          _id: '1',
          title: 'Medizinischer Notfall',
          locality: 'Donaustauf',
          date: '2023-05-15T10:30:00Z',
          category: 'First Responder THL',
          incident: 1,
          slug: { current: 'notfall-2023-05-15', _type: 'slug' },
        },
      ];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.mocked(client.fetch).mockResolvedValue(frOperations as any);

      const result = await operationService.getLatestFrOperations();

      expect(client.fetch).toHaveBeenCalledWith(OPERATION_LATEST_FR_THL_QUERY, {}, { next: { revalidate: 60 } });
      expect(result).toEqual(frOperations);
    });
  });

  describe('getLatestFfOperations', () => {
    it('should fetch latest Feuerwehr operations', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.mocked(client.fetch).mockResolvedValue(mockOperations as any);

      const result = await operationService.getLatestFfOperations();

      expect(client.fetch).toHaveBeenCalledWith(OPERATION_LATEST_NON_FR_THL_QUERY, {}, { next: { revalidate: 60 } });
      expect(result).toEqual(mockOperations);
    });
  });

  describe('getAvailableYears', () => {
    it('should fetch and parse available years', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.mocked(client.fetch).mockResolvedValue(['2023', '2022', '2024'] as any);

      const result = await operationService.getAvailableYears();

      expect(client.fetch).toHaveBeenCalledWith(OPERATION_YEARS_QUERY, {}, { next: { revalidate: 60 } });
      expect(result).toEqual([2023, 2022, 2024]);
    });

    it('should handle empty years array', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      vi.mocked(client.fetch).mockResolvedValue([] as any);

      const result = await operationService.getAvailableYears();

      expect(result).toEqual([]);
    });
  });

  describe('Query exports', () => {
    it('should export OPERATION_QUERY', () => {
      expect(OPERATION_QUERY).toBeDefined();
      expect(typeof OPERATION_QUERY).toBe('string');
    });

    it('should export OPERATION_BY_YEAR_QUERY', () => {
      expect(OPERATION_BY_YEAR_QUERY).toBeDefined();
      expect(typeof OPERATION_BY_YEAR_QUERY).toBe('string');
    });

    it('should export OPERATION_LATEST_FR_THL_QUERY', () => {
      expect(OPERATION_LATEST_FR_THL_QUERY).toBeDefined();
      expect(typeof OPERATION_LATEST_FR_THL_QUERY).toBe('string');
    });

    it('should export OPERATION_LATEST_NON_FR_THL_QUERY', () => {
      expect(OPERATION_LATEST_NON_FR_THL_QUERY).toBeDefined();
      expect(typeof OPERATION_LATEST_NON_FR_THL_QUERY).toBe('string');
    });

    it('should export OPERATION_YEARS_QUERY', () => {
      expect(OPERATION_YEARS_QUERY).toBeDefined();
      expect(typeof OPERATION_YEARS_QUERY).toBe('string');
    });
  });
});
