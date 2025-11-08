import { JSX } from 'react';
import { OPERATION_QUERYResult, OPERATION_STATS_QUERYResult } from '@/types/sanityTypes';
import operationService from '@/lib/OperationService';
import OperationContent from '@/features/OperationContent';
import { getCurrentYear, getFrOperations, getOperationsOfYear, getOperationYears, sortOperations } from '@/lib/operationUtils';
import { statsToChartDataFr } from '@/lib/operationStatsUtils';
import operationStatsService from '@/lib/OperationStatsService';

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
  const stats = statsToChartDataFr(operationStats);
  const frOperations = getFrOperations(operations);
  const years = getOperationYears(frOperations);
  const frOperationsOfYear = getOperationsOfYear(frOperations, year);

  const frOps = sortOperations(frOperationsOfYear) ?? [];

  stats?.push({ id: year.toString(), label: year.toString(), count: frOperationsOfYear?.length ?? 0 });

  return <OperationContent operations={frOps} year={year} years={years} operationPath="/first-responder/einsaetze/" kind="FR" statistics={stats} />;
}

export default FeuerwehrEinsaetze;
