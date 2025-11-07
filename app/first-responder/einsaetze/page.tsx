import { JSX } from 'react';
import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import operationService from '@/lib/OperationService';
import OperationContent from '@/features/OperationContent';
import { getCurrentYear, getFrOperations, getOperationsOfYear, getOperationYears, sortOperations } from '@/lib/operationUtils';

async function getData(): Promise<OPERATION_QUERYResult> {
  return operationService.getOperations();
}

async function FeuerwehrEinsaetze(): Promise<JSX.Element> {
  const year = getCurrentYear();
  const operations = await getData();
  const frOperations = getFrOperations(operations);
  const years = getOperationYears(frOperations);
  const frOperationsOfYear = getOperationsOfYear(frOperations, year);

  const frOps = sortOperations(frOperationsOfYear) ?? [];

  return <OperationContent operations={frOps} year={year} years={years} operationPath="/first-responder/einsaetze/" kind='FR' />;
}

export default FeuerwehrEinsaetze;
