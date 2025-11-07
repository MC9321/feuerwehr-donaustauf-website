import { JSX } from 'react';
import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import operationService from '@/lib/OperationService';
import OperationContent from '@/features/OperationContent';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';
import { getFfOperations, getOperationCategories, getOperationsOfCategory, getOperationsOfYear, getOperationYears, parseToNumber, sortOperations } from '@/lib/operationUtils';

interface StaticYearCategoryParams {
  year: string;
  cat: string;
}

export async function generateStaticParams(): Promise<StaticYearCategoryParams[]> {
  const operations = await operationService.getOperations();
  const years = getOperationYears(operations);
  const yearCat: StaticYearCategoryParams[] = [];
  for (const year of years) {
    const operationOfYear = getOperationsOfYear(getFfOperations(operations), year);
    const categories = getOperationCategories(operationOfYear).filter(Boolean);
    for (const category of categories) {
      yearCat.push({ year: year.toString(), cat: category })
    }
  }
  console.log(yearCat);
  return yearCat;
}

export async function generateMetadata({ params }: Readonly<PageProps<'/feuerwehr/einsaetze/[year]/[cat]'>>): Promise<Metadata | null> {
  const { year } = await params;

  return {
    title: `${year} - Einsätze - Feuerwehr - ${SITE_TITLE}`,
  };
}

async function getData(): Promise<OPERATION_QUERYResult | undefined> {
  return operationService.getOperations();
}

async function FeuerwehrEinsaetzeCategory({ params }: Readonly<PageProps<'/feuerwehr/einsaetze/[year]/[cat]'>>): Promise<JSX.Element> {
  const { year, cat } = await params;
  const operationYear = parseToNumber(year);
  const operations = await getData();
  const ffOperations = getFfOperations(operations);
  const years = getOperationYears(ffOperations);
  const ffOperationsOfYear = getOperationsOfYear(ffOperations, operationYear);
  const categories = getOperationCategories(ffOperationsOfYear);
  const ffOperationsOfCat = getOperationsOfCategory(ffOperationsOfYear, cat);

  const ffOps = sortOperations(ffOperationsOfCat) ?? [];

  return <OperationContent operations={ffOps} year={operationYear} years={years} categories={categories} operationPath="/feuerwehr/einsaetze/" activeCategory={cat} />;
}

export default FeuerwehrEinsaetzeCategory;
