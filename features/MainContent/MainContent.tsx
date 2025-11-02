'use client';

import { OperationCounter } from '@/components/OperationCounter/OperationCounter';
import { Operations } from '@/components/Operations/Operations';
import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import { PageSection } from '@salzpate/react-ui';
import { JSX } from 'react';
import SpendenContent from '../SpendenContent';

interface MainContentProps {
  operations?: OPERATION_QUERYResult;
}

function MainContent(props: Readonly<MainContentProps>): JSX.Element {
  const { operations } = props;

  const frOps = operations?.filter((ops) => ops.category === 'First Responder THL').toSorted((o1, o2) => o2.date?.localeCompare(o1.date ?? '') ?? 0);
  const ffOps = operations?.filter((ops) => ops.category !== 'First Responder THL').toSorted((o1, o2) => o2.date?.localeCompare(o1.date ?? '') ?? 0);
  const year = new Date().getFullYear();
  const frOpsCount = frOps?.filter((ops) => new Date(ops.date ?? '').getFullYear() === year).length ?? 0;
  const ffOpsCount = ffOps?.filter((ops) => new Date(ops.date ?? '').getFullYear() === year).length ?? 0;

  return (
    <>
      <PageSection headline="Einsätze" id="einsatz-content" subSection className="page-section main-content-index-image pb-6 sm:pb-8 bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="mr-2">
              <h3 className="text-lg tracking-tight text-secondary mb-1 sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">FEUERWEHR</h3>
              <OperationCounter year={year} count={ffOpsCount} />
              <Operations operations={ffOps?.slice(0, 5)} alternate />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <h3 className="text-lg tracking-tight text-secondary mb-1 sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">FIRST RESPONDER</h3>
            <OperationCounter year={year} count={frOpsCount} />
            <Operations operations={frOps?.slice(0, 5)} alternate />
          </div>
        </div>
      </PageSection>
      <SpendenContent />
    </>
  );
}

export default MainContent;
