import { JSX } from 'react';
import { OPERATION_QUERYResult, OPERATION_STATS_QUERYResult } from '@/types/sanityTypes';
import operationService from '@/lib/OperationService';
import OperationContent from '@/features/OperationContent';
import { getCurrentYear, getFfOperations, getOperationCategories, getOperationsOfYear, getOperationYears, sortOperations } from '@/lib/operationUtils';
import operationStatsService from '@/lib/OperationStatsService';
import { statsToChartDataFf } from '@/lib/operationStatsUtils';

async function getData(): Promise<OPERATION_QUERYResult> {
  return operationService.getOperations();
}

async function getStatsData(): Promise<OPERATION_STATS_QUERYResult> {
  return operationStatsService.getOperationStats();
}

async function FeuerwehrEinsaetze(): Promise<JSX.Element> {
  const year = getCurrentYear();
  const operations = await getData();
  const operationStats = await getStatsData();
  const stats = statsToChartDataFf(operationStats);
  const ffOperations = getFfOperations(operations);
  const years = getOperationYears(ffOperations);
  const ffOperationsOfYear = getOperationsOfYear(ffOperations, year);
  const categories = getOperationCategories(ffOperationsOfYear);

  stats?.push({ id: year.toString(), label: year.toString(), count: ffOperationsOfYear?.length ?? 0 });

  const ffOps = sortOperations(ffOperationsOfYear) ?? [];

  return <OperationContent operations={ffOps} year={year} years={years} categories={categories} operationPath="/feuerwehr/einsaetze/" kind="FF" statistics={stats} />;
}

export default FeuerwehrEinsaetze;
