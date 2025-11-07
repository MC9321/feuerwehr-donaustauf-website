'use client';

import OperationPieChart from '@/components/OperationPieChart';
import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import { Banner, PageSection } from '@salzpate/react-ui';
import { JSX } from 'react';
import cn from 'classnames';
import OperationsWithMonth from '@/components/OperationsWithMonth';
import OperationLocationPieChart from '@/components/OperationLocationPieChart';
import { getCurrentYear } from '@/lib/operationUtils';
import OperationSidebar from '@/components/OperationSidebar';

interface OperationContentProps {
  operations: OPERATION_QUERYResult;
  year?: number;
  years?: number[];
  category?: string;
  categories?: string[];
  operationPath?: string;
  activeCategory?: string;
  kind?: 'FF' | 'FR';
}

function OperationContent(props: Readonly<OperationContentProps>): JSX.Element {
  const { operations, year = getCurrentYear(), years = [], categories = [], operationPath, activeCategory, category, kind } = props;
  const showSidebar = (years.length > 0 || categories.length > 0) && operationPath;

  return (
    <PageSection headline={category ? `Einsätze ${year} - ${category}` : `Einsätze ${year}`} id={kind === 'FF' ? 'feuerwehr-einsaetze' : 'first-responder-einsaetze'}>
      <div className="my-6 grid grid-cols-1 gap-4 sm:my-8 sm:grid-cols-12">
        <div className={cn('grid-cols-1 sm:col-span-8', { 'lg:col-span-9': showSidebar, 'lg:col-span-12': !showSidebar })}>
          {operations.length === 0 && (
            <div className="mb-8">
              <Banner type="info">Für das Jahr {year} wurden keine Einsätze hinterlegt!</Banner>
            </div>
          )}
          {operations.length > 0 && (
            <>
              <OperationsWithMonth operations={operations} kind={kind} />
              <div className="flex flex-wrap">
                <div className={cn('w-full md:w-1/2 h-[400px] my-4 bg-white dark:bg-black text-gray-900')}>
                  <OperationPieChart operations={operations} />
                </div>
                <div className={cn('w-full md:w-1/2 h-[400px] my-4 bg-white dark:bg-black text-gray-900')}>
                  <OperationLocationPieChart operations={operations} />
                </div>
              </div>
            </>
          )}
        </div>
        {showSidebar && operationPath && (
          <div className="grid-cols-1 sm:col-span-4 lg:col-span-3">
            <OperationSidebar categories={categories} years={years} year={year} operationPath={operationPath} activeCategory={activeCategory} />
          </div>
        )}
      </div>
    </PageSection >
  );
}

export default OperationContent;
