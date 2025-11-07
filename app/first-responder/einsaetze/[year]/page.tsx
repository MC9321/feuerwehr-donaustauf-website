import { JSX } from 'react';
import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import operationService from '@/lib/OperationService';
import OperationContent from '@/features/OperationContent';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';
import { getFrOperations, getOperationsOfYear, getOperationYears, parseToNumber, sortOperations } from '@/lib/operationUtils';

export async function generateStaticParams(): Promise<{ year: string }[]> {
  const operations = await operationService.getOperations();
  const years = getOperationYears(operations);

  return years.map((year) => ({ year: year.toString() }));
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
  const frOperations = getFrOperations(operations);
  const years = getOperationYears(frOperations);
  const frOperationsOfYear = getOperationsOfYear(frOperations, operationYear);

  const frOps = sortOperations(frOperationsOfYear) ?? [];

  return <OperationContent operations={frOps} year={operationYear} years={years} operationPath="/first-responder/einsaetze/" kind='FR' />;
}

export default FirstResponderYearEinsaetze;
