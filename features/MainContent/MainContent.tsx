'use client';

import Operations from '@/components/Operations/Operations';
import { OPERATION_QUERYResult } from '@/types/sanityTypes';
import { MoreLink } from '@salzpate/react-ui';
import { JSX } from 'react';
import cn from 'classnames';
import SpendenContent from '../SpendenContent';
import OperationPieChart from '@/components/OperationPieChart/OperationPieChart';
import { getCurrentYear, getFfOperations, getFrOperations, getOperationsOfYear, sortOperations } from '@/lib/operationUtils';
import BeitrittContent from '../BeitrittContent';
import ContactContent from '../ContactContent';
import { FfPageSection } from '@/components/FfPageSection';

interface MainContentProps {
  operations?: OPERATION_QUERYResult;
}

function MainContent(props: Readonly<MainContentProps>): JSX.Element {
  const { operations } = props;

  const frOps = sortOperations(getFrOperations(operations));
  const ffOps = sortOperations(getFfOperations(operations));
  const year = getCurrentYear();

  const ffOpsThisYear = getOperationsOfYear(ffOps, year) ?? [];
  const frOpsThisYear = getOperationsOfYear(frOps, year) ?? [];

  const hideFfChart = ffOpsThisYear.length === 0;
  const hideFrChart = frOpsThisYear.length === 0;
  const hideAll = hideFfChart && hideFrChart;

  return (
    <>
      <FfPageSection headline="Einsätze" id="einsatz-content" subSection className="page-section main-content-index-image bg-gray-100 pb-6 sm:pb-8 dark:bg-gray-900">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="mr-0 md:mr-2">
              <h3 className={cn('text-lg tracking-tight text-secondary sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark', { 'mb-4': hideFfChart || hideAll, 'mb-1': !hideFfChart })}>FEUERWEHR</h3>
              <div className={cn('my-4 h-[400px] w-full bg-white text-gray-900 dark:bg-black', { hidden: hideFfChart, 'md:block': !hideAll })}>
                <OperationPieChart year={year} operations={ffOpsThisYear} />
              </div>
              <MoreLink href="/feuerwehr/einsaetze/" linkText="Weitere Einsätze">
                <Operations operations={ffOps?.slice(0, 5)} kind="FF" alternate />
              </MoreLink>
            </div>
          </div>
          <div className="mt-4 w-full md:mt-0 md:w-1/2">
            <h3 className={cn('text-lg tracking-tight text-secondary sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark', { 'mb-4': hideFrChart || hideAll, 'mb-1': !hideFrChart })}>FIRST RESPONDER</h3>
            <div className={cn('my-4 h-[400px] w-full bg-white text-gray-900 dark:bg-black', { hidden: hideFrChart, 'md:block': !hideAll })}>
              <OperationPieChart year={year} operations={frOpsThisYear} />
            </div>
            <MoreLink href="/first-responder/einsaetze/" linkText="Weitere Einsätze">
              <Operations operations={frOps?.slice(0, 5)} kind="FR" alternate />
            </MoreLink>
          </div>
        </div>
      </FfPageSection>
      <SpendenContent subSection />
      <div className="bg-gray-100 dark:bg-gray-900">
        <BeitrittContent subSection showContact={false} />
      </div>
      <ContactContent subSection />
    </>
  );
}

export default MainContent;
