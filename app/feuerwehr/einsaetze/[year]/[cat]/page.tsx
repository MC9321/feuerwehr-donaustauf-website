import { JSX } from 'react';
import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import operationService from '@/lib/OperationService';
import OperationContent from '@/features/OperationContent';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';
import { getFfOperations, getOperationCategories, getOperationsOfCategory, getOperationsOfYear, getOperationYears, parseCategory, parseToNumber } from '@/lib/operationUtils';

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
      yearCat.push({ year: year.toString(), cat: category });
    }
  }

  return yearCat;
}

export async function generateMetadata({ params }: Readonly<PageProps<'/feuerwehr/einsaetze/[year]/[cat]'>>): Promise<Metadata | null> {
  const { year } = await params;

  return {
    title: `Einsätze ${year} - Feuerwehr - ${SITE_TITLE}`,
  };
}

async function getData(year: number): Promise<OPERATION_QUERYResult | undefined> {
  return operationService.getOperationsOfYear(year);
}

async function getAvailableYears(): Promise<number[]> {
  return operationService.getAvailableYears();
}

async function FeuerwehrEinsaetzeCategory({ params }: Readonly<PageProps<'/feuerwehr/einsaetze/[year]/[cat]'>>): Promise<JSX.Element> {
  const { year, cat } = await params;
  const years = await getAvailableYears();
  const operationYear = parseToNumber(year);
  const operations = await getData(operationYear);
  const ffOperations = getFfOperations(operations);
  const categories = getOperationCategories(ffOperations);
  const ffOperationsOfCat = getOperationsOfCategory(ffOperations, cat);
  const category = categories.find(c => parseCategory(c) === cat);

  const ffOps = ffOperationsOfCat ?? [];

  return <OperationContent operations={ffOps} year={operationYear} years={years} category={category} categories={categories} operationPath="/feuerwehr/einsaetze/" activeCategory={cat} />;
}

export default FeuerwehrEinsaetzeCategory;
