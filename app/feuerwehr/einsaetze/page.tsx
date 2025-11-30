import { JSX } from 'react';

import OperationContent from '@/features/OperationContent';
import operationService from '@/lib/OperationService';
import operationStatsService from '@/lib/OperationStatsService';
import { statsToChartDataFf } from '@/lib/operationStatsUtils';
import { getCurrentYear, getFfOperations, getOperationCategories } from '@/lib/operationUtils';
import { OPERATION_QUERYResult, OPERATION_STATS_QUERYResult } from '@/types/sanityTypes';

async function getData(year: number): Promise<OPERATION_QUERYResult | undefined> {
  return operationService.getOperationsOfYear(year);
}

async function getAvailableYears(): Promise<number[]> {
  return operationService.getAvailableYears();
}

async function getStatsData(): Promise<OPERATION_STATS_QUERYResult> {
  return operationStatsService.getOperationStats();
}

async function FeuerwehrEinsaetze(): Promise<JSX.Element> {
  const year = getCurrentYear();
  const years = await getAvailableYears();
  const operations = await getData(year);
  const operationStats = await getStatsData();
  const stats = statsToChartDataFf(operationStats);
  const ffOperations = getFfOperations(operations);
  const categories = getOperationCategories(ffOperations);

  stats?.push({ id: year.toString(), label: year.toString(), count: ffOperations?.length ?? 0 });

  const ffOps = ffOperations ?? [];

  return <OperationContent operations={ffOps} year={year} years={years} categories={categories} operationPath="/feuerwehr/einsaetze/" statistics={stats} />;
}

export default FeuerwehrEinsaetze;
