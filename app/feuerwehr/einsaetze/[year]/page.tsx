import { JSX } from 'react';
import { OPERATION_QUERYResult, OPERATION_STATS_QUERYResult } from '@/types/sanityTypes';
import operationService from '@/lib/OperationService';
import OperationContent from '@/features/OperationContent';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';
import { getCurrentYear, getFfOperations, getOperationCategories, getOperationsOfYear, getOperationYears, parseToNumber, sortOperations } from '@/lib/operationUtils';
import operationStatsService from '@/lib/OperationStatsService';
import { statsToChartDataFf } from '@/lib/operationStatsUtils';

export async function generateStaticParams(): Promise<{ year: string }[]> {
  const operations = await operationService.getOperations();
  const years = getOperationYears(operations);

  return years.map(year => ({ year: year.toString() }));
}

export async function generateMetadata({ params }: Readonly<PageProps<'/feuerwehr/einsaetze/[year]'>>): Promise<Metadata | null> {
  const { year } = await params;

  return {
    title: `Einsätze ${year} - Feuerwehr - ${SITE_TITLE}`,
  };
}

async function getData(): Promise<OPERATION_QUERYResult | undefined> {
  return operationService.getOperations();
}

async function getStatsData(): Promise<OPERATION_STATS_QUERYResult> {
  return operationStatsService.getOperationStats();
}

async function FeuerwehrEinsaetze({ params }: Readonly<PageProps<'/feuerwehr/einsaetze/[year]'>>): Promise<JSX.Element> {
  const { year } = await params;
  const operationYear = parseToNumber(year);
  const operations = await getData();
  const operationStats = await getStatsData();
  const stats = statsToChartDataFf(operationStats);
  const ffOperations = getFfOperations(operations);
  const years = getOperationYears(ffOperations);
  const ffOperationsOfYear = getOperationsOfYear(ffOperations, operationYear);
  const categories = getOperationCategories(ffOperationsOfYear);

  const currentYear = getCurrentYear();
  stats?.push({ id: currentYear.toString(), label: currentYear.toString(), count: getOperationsOfYear(ffOperations, currentYear)?.length ?? 0 });

  const ffOps = sortOperations(ffOperationsOfYear) ?? [];

  return <OperationContent operations={ffOps} year={operationYear} years={years} categories={categories} operationPath="/feuerwehr/einsaetze/" kind="FF" statistics={stats} />;
}

export default FeuerwehrEinsaetze;
