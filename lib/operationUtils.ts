import { OPERATION_QUERYResult } from '@/types/sanityTypes';

function getCategoryColor(category: string): string {
  switch (category) {
    case 'Brände':
      return '#fdd49e';
    case 'First Responder THL':
      return '#ff6b6b';
    case 'Sicherheitswache':
      return '#d9f0a3';
    case 'THL':
      return '#95e1d3';
    case 'Verkehrsabsicherung':
      return '#ece7f2';
    case 'Wasserdienst':
      return '#74a9cf';
    default:
      return '#f38181';
  }
}

function getFrOperations(operations: OPERATION_QUERYResult | undefined): OPERATION_QUERYResult | undefined {
  return operations?.filter(ops => ops.category === 'First Responder THL');
}

function getFfOperations(operations: OPERATION_QUERYResult | undefined): OPERATION_QUERYResult | undefined {
  return operations?.filter(ops => ops.category !== 'First Responder THL');
}

function sortOperations(operations: OPERATION_QUERYResult | undefined): OPERATION_QUERYResult | undefined {
  return operations?.toSorted((op1, op2) => op2.date?.localeCompare(op1.date ?? '') ?? 0);
}

function getOperationYear(date: string | null): number | undefined {
  return date ? new Date(date).getFullYear() : undefined;
}

function getOperationsOfYear(operations: OPERATION_QUERYResult | undefined, year: number): OPERATION_QUERYResult | undefined {
  return operations?.filter(ops => getOperationYear(ops.date) === year);
}

function getOperationsOfCategory(operations: OPERATION_QUERYResult | undefined, category: string): OPERATION_QUERYResult | undefined {
  return operations?.filter(ops => parseCategory(ops.category ?? '') === category);
}

function getCurrentYear(): number {
  return new Date().getFullYear();
}

function parseToNumber(value: string): number {
  try {
    return Number.parseInt(value);
  } catch {
    return 0;
  }
}

function getOperationYears(operations: OPERATION_QUERYResult | undefined): number[] {
  const yearSet = new Set<number>([getCurrentYear()]);

  if (operations) {
    for (const operation of operations) {
      if (operation.date) {
        const year = getOperationYear(operation.date);
        yearSet.add(year ?? getCurrentYear());
      }
    }
  }

  return Array.from(yearSet).toSorted((year1, year2) => year2 - year1);
}

function getOperationCategories(operations: OPERATION_QUERYResult | undefined): string[] {
  const categorySet = new Set<string>();

  if (operations) {
    for (const operation of operations) {
      if (operation.category) {
        categorySet.add(operation.category);
      }
    }
  }

  return Array.from(categorySet).toSorted((cat1, cat2) => cat1.localeCompare(cat2));
}

function parseCategory(category: string): string {
  return category.replaceAll(/\s/g, '_').replaceAll('Ü', 'Ue').replaceAll('ä', 'ae').toLowerCase();
}

function parseOperationTitle(title: string | null): string | null {
  if (!title) {
    return title;
  }

  if (title.startsWith('#')) {
    return title.split('#').filter(Boolean).toReversed()[0];
  }

  return title;
}

function parseOperationAlert(title: string | null): string | null {
  if (!title) {
    return title;
  }

  if (title.startsWith('#')) {
    const alert = title.split('#').filter(Boolean);
    alert.pop();

    return alert.toReversed().join(' - ');
  }

  return null;
}

export {
  getCategoryColor,
  getFrOperations,
  getFfOperations,
  sortOperations,
  getOperationsOfYear,
  getCurrentYear,
  getOperationYear,
  parseToNumber,
  getOperationYears,
  getOperationCategories,
  parseCategory,
  getOperationsOfCategory,
  parseOperationTitle,
  parseOperationAlert,
};
