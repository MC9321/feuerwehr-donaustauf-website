import { JSX } from 'react';
import { OPERATION_QUERYResult, OPERATION_STATS_QUERYResult } from '@/types/sanityTypes';
import operationService from '@/lib/OperationService';
import OperationContent from '@/features/OperationContent';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';
import { getCurrentYear, getFrOperations, getOperationsOfYear, getOperationYears, parseToNumber, sortOperations } from '@/lib/operationUtils';
import operationStatsService from '@/lib/OperationStatsService';
import { statsToChartDataFr } from '@/lib/operationStatsUtils';

export async function generateStaticParams(): Promise<{ year: string }[]> {
  const operations = await operationService.getOperations();
  const years = getOperationYears(operations);

  return years.map((year) => ({ year: year.toString() }));
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

async function getData(): Promise<OPERATION_QUERYResult | undefined> {
  return operationService.getOperations();
}

async function FirstResponderYearEinsaetze({ params }: Readonly<PageProps<'/first-responder/einsaetze/[year]'>>): Promise<JSX.Element> {
  const { year } = await params;
  const operationYear = parseToNumber(year);
  const operations = await getData();
  const operationStats = await getStatsData();
  const stats = statsToChartDataFr(operationStats);
  const frOperations = getFrOperations(operations);
  const years = getOperationYears(frOperations);
  const frOperationsOfYear = getOperationsOfYear(frOperations, operationYear);

  const currentYear = getCurrentYear();
  stats?.push({ id: currentYear.toString(), label: currentYear.toString(), count: getOperationsOfYear(frOperations, currentYear)?.length ?? 0 });

  const frOps = sortOperations(frOperationsOfYear) ?? [];

  return <OperationContent operations={frOps} year={operationYear} years={years} operationPath="/first-responder/einsaetze/" kind='FR' statistics={stats} />;
}

export default FirstResponderYearEinsaetze;
