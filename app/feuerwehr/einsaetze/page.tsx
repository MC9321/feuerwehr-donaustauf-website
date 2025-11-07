import { JSX } from 'react';
import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import operationService from '@/lib/OperationService';
import OperationContent from '@/features/OperationContent';
import { getCurrentYear, getFfOperations, getOperationCategories, getOperationsOfYear, getOperationYears, sortOperations } from '@/lib/operationUtils';

async function getData(): Promise<OPERATION_QUERYResult> {
  return operationService.getOperations();
}

async function FeuerwehrEinsaetze(): Promise<JSX.Element> {
  const year = getCurrentYear();
  const operations = await getData();
  const ffOperations = getFfOperations(operations);
  const years = getOperationYears(ffOperations);
  const ffOperationsOfYear = getOperationsOfYear(ffOperations, year);
  const categories = getOperationCategories(ffOperationsOfYear);

  const ffOps = sortOperations(ffOperationsOfYear) ?? [];

  return <OperationContent operations={ffOps} year={year} years={years} categories={categories} operationPath="/feuerwehr/einsaetze/" kind='FF' />;
}

export default FeuerwehrEinsaetze;
