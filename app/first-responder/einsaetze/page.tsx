import { JSX } from 'react';

import OperationContent from '@/features/OperationContent';
import operationService from '@/lib/OperationService';
import operationStatsService from '@/lib/OperationStatsService';
import { statsToChartDataFr } from '@/lib/operationStatsUtils';
import { getCurrentYear, getFrOperations } from '@/lib/operationUtils';
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
  const stats = statsToChartDataFr(operationStats);
  const frOperations = getFrOperations(operations);

  const frOps = frOperations ?? [];

  stats?.push({ id: year.toString(), label: year.toString(), count: frOperations?.length ?? 0 });

  return <OperationContent operations={frOps} year={year} years={years} operationPath="/first-responder/einsaetze/" statistics={stats} />;
}

export default FeuerwehrEinsaetze;
