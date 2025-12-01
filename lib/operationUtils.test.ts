import { describe, expect, it } from 'vitest';

import { OPERATION_QUERYResult } from '@/types/sanityTypes';

import {
  getCategoryColor,
  getCurrentYear,
  getFfOperations,
  getFrOperations,
  getOperationCategories,
  getOperationsOfCategory,
  getOperationsOfYear,
  getOperationYear,
  getOperationYears,
  parseCategory,
  parseOperationAlert,
  parseOperationTitle,
  parseToNumber,
  sortOperations,
} from './operationUtils';

describe('operationUtils', () => {
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
    {
      _id: '2',
      title: 'Verkehrsunfall',
      locality: 'Donaustauf',
      date: '2023-06-20T14:15:00Z',
      category: 'THL',
      incident: 2,
      slug: { current: 'verkehrsunfall-2023-06-20', _type: 'slug' },
    },
    {
      _id: '3',
      title: 'Medizinischer Notfall',
      locality: 'Donaustauf',
      date: '2024-01-10T08:45:00Z',
      category: 'First Responder THL',
      incident: 3,
      slug: { current: 'medizinischer-notfall-2024-01-10', _type: 'slug' },
    },
  ];

  describe('getCategoryColor', () => {
    it('should return correct color for Brände', () => {
      expect(getCategoryColor('Brände')).toBe('#fdd49e');
    });

    it('should return correct color for First Responder THL', () => {
      expect(getCategoryColor('First Responder THL')).toBe('#ff6b6b');
    });

    it('should return correct color for THL', () => {
      expect(getCategoryColor('THL')).toBe('#95e1d3');
    });

    it('should return default color for unknown category', () => {
      expect(getCategoryColor('Unknown')).toBe('#f38181');
    });
  });

  describe('getFrOperations', () => {
    it('should filter First Responder operations', () => {
      const result = getFrOperations(mockOperations);

      expect(result).toHaveLength(1);
      expect(result?.[0]?.category).toBe('First Responder THL');
    });

    it('should return undefined for undefined input', () => {
      expect(getFrOperations(undefined)).toBeUndefined();
    });
  });

  describe('getFfOperations', () => {
    it('should filter non-First Responder operations', () => {
      const result = getFfOperations(mockOperations);

      expect(result).toHaveLength(2);
      expect(result?.every(op => op.category !== 'First Responder THL')).toBe(true);
    });

    it('should return undefined for undefined input', () => {
      expect(getFfOperations(undefined)).toBeUndefined();
    });
  });

  describe('sortOperations', () => {
    it('should sort operations by date descending', () => {
      const result = sortOperations(mockOperations);

      expect(result?.[0]?.date).toBe('2024-01-10T08:45:00Z');
      expect(result?.[1]?.date).toBe('2023-06-20T14:15:00Z');
      expect(result?.[2]?.date).toBe('2023-05-15T10:30:00Z');
    });

    it('should return undefined for undefined input', () => {
      expect(sortOperations(undefined)).toBeUndefined();
    });
  });

  describe('getOperationYear', () => {
    it('should extract year from date string', () => {
      expect(getOperationYear('2023-05-15T10:30:00Z')).toBe(2023);
    });

    it('should return undefined for null date', () => {
      expect(getOperationYear(null)).toBeUndefined();
    });
  });

  describe('getOperationsOfYear', () => {
    it('should filter operations by year', () => {
      const result = getOperationsOfYear(mockOperations, 2023);

      expect(result).toHaveLength(2);
      expect(result?.every(op => getOperationYear(op.date) === 2023)).toBe(true);
    });

    it('should return empty array for year with no operations', () => {
      const result = getOperationsOfYear(mockOperations, 2022);

      expect(result).toEqual([]);
    });
  });

  describe('getOperationsOfCategory', () => {
    it('should filter operations by category', () => {
      const result = getOperationsOfCategory(mockOperations, 'thl');

      expect(result).toHaveLength(1);
      expect(result?.[0]?.category).toBe('THL');
    });
  });

  describe('getCurrentYear', () => {
    it('should return current year', () => {
      const currentYear = new Date().getFullYear();
      expect(getCurrentYear()).toBe(currentYear);
    });
  });

  describe('parseToNumber', () => {
    it('should parse string to number', () => {
      expect(parseToNumber('2023')).toBe(2023);
    });

    it('should return NaN for invalid string', () => {
      expect(parseToNumber('invalid')).toBeNaN();
    });
  });

  describe('getOperationYears', () => {
    it('should return unique years from operations', () => {
      const result = getOperationYears(mockOperations);

      expect(result).toContain(2023);
      expect(result).toContain(2024);
    });

    it('should include current year', () => {
      const result = getOperationYears(mockOperations);
      const currentYear = getCurrentYear();

      expect(result).toContain(currentYear);
    });

    it('should sort years descending', () => {
      const result = getOperationYears(mockOperations);

      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i]).toBeGreaterThanOrEqual(result[i + 1]!);
      }
    });
  });

  describe('getOperationCategories', () => {
    it('should return unique categories', () => {
      const result = getOperationCategories(mockOperations);

      expect(result).toContain('Brände');
      expect(result).toContain('THL');
      expect(result).toContain('First Responder THL');
    });

    it('should sort categories alphabetically', () => {
      const result = getOperationCategories(mockOperations);

      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i]!.localeCompare(result[i + 1]!)).toBeLessThanOrEqual(0);
      }
    });
  });

  describe('parseCategory', () => {
    it('should replace spaces with underscores', () => {
      expect(parseCategory('First Responder THL')).toBe('first_responder_thl');
    });

    it('should replace Ü with Ue', () => {
      expect(parseCategory('Übung')).toBe('uebung');
    });

    it('should replace ä with ae', () => {
      expect(parseCategory('Brände')).toBe('braende');
    });

    it('should convert to lowercase', () => {
      expect(parseCategory('THL')).toBe('thl');
    });
  });

  describe('parseOperationTitle', () => {
    it('should return title as is if no hash', () => {
      expect(parseOperationTitle('Brand')).toBe('Brand');
    });

    it('should extract last part after hash', () => {
      expect(parseOperationTitle('#B1#Brand#Wohnhaus')).toBe('Wohnhaus');
    });

    it('should return null for null input', () => {
      expect(parseOperationTitle(null)).toBeNull();
    });
  });

  describe('parseOperationAlert', () => {
    it('should return null if no hash', () => {
      expect(parseOperationAlert('Brand')).toBeNull();
    });

    it('should extract alert parts before last hash', () => {
      expect(parseOperationAlert('#B1#Brand#Wohnhaus')).toBe('Brand - B1');
    });

    it('should return null for null input', () => {
      expect(parseOperationAlert(null)).toBeNull();
    });
  });
});
