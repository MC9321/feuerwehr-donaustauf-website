import { JSX } from 'react';
import { OPERATION_QUERYResult, OPERATION_STATS_QUERYResult } from '@/types/sanityTypes';
import operationService from '@/lib/OperationService';
import OperationContent from '@/features/OperationContent';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';
import { getCurrentYear, getFrOperations, getOperationYears, parseToNumber } from '@/lib/operationUtils';
import operationStatsService from '@/lib/OperationStatsService';
import { statsToChartDataFr } from '@/lib/operationStatsUtils';

export async function generateStaticParams(): Promise<{ year: string }[]> {
  const operations = await operationService.getOperations();
  const years = getOperationYears(operations);

  return years.map(year => ({ year: year.toString() }));
}

async function getStatsData(): Promise<OPERATION_STATS_QUERYResult> {
  return operationStatsService.getOperationStats();
}

export async function generateMetadata({ params }: Readonly<PageProps<'/first-responder/einsaetze/[year]'>>): Promise<Metadata | null> {
  const { year } = await params;

  return {
    title: `Einsätze ${year} - First Responder - ${SITE_TITLE}`,
  };
}

async function getData(year: number): Promise<OPERATION_QUERYResult | undefined> {
  return operationService.getOperationsOfYear(year);
}

async function getAvailableYears(): Promise<number[]> {
  return operationService.getAvailableYears();
}

async function FirstResponderYearEinsaetze({ params }: Readonly<PageProps<'/first-responder/einsaetze/[year]'>>): Promise<JSX.Element> {
  const { year } = await params;
  const years = await getAvailableYears();
  const operationYear = parseToNumber(year);
  const operations = await getData(operationYear);
  const operationStats = await getStatsData();
  const stats = statsToChartDataFr(operationStats);
  const frOperations = getFrOperations(operations);

  const currentYear = getCurrentYear();
  const currentYearOps = getFrOperations(await getData(currentYear));
  stats?.push({ id: currentYear.toString(), label: currentYear.toString(), count: currentYearOps?.length ?? 0 });

  const frOps = frOperations ?? [];

  return <OperationContent operations={frOps} year={operationYear} years={years} operationPath="/first-responder/einsaetze/" statistics={stats} />;
}

export default FirstResponderYearEinsaetze;
