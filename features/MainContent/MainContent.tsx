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
import ImageCarousel from '@/components/ImageCarousel';
import { mainImages } from '@/data/MainImages';

interface MainContentProps {
  operations?: OPERATION_QUERYResult;
  latestFfOperations?: OPERATION_QUERYResult;
  latestFrOperations?: OPERATION_QUERYResult;
}

function MainContent(props: Readonly<MainContentProps>): JSX.Element {
  const { operations, latestFfOperations, latestFrOperations } = props;

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
      <FfPageSection headline="Einsätze" id="einsatz-content" level="h2" className="page-section main-content-index-image bg-gray-100 pb-6 sm:pb-8 dark:bg-gray-900">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="mr-0 md:mr-2">
              <h3 className={cn('text-lg tracking-tight text-secondary sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark', { 'mb-4': hideFfChart || hideAll, 'mb-1': !hideFfChart })}>FEUERWEHR</h3>
              <div className={cn('my-4 h-[400px] w-full bg-white text-gray-900 dark:bg-black', { hidden: hideFfChart, 'md:block': !hideAll })}>
                <OperationPieChart year={year} operations={ffOpsThisYear} />
              </div>
              <MoreLink href="/feuerwehr/einsaetze/" linkText="Weitere Einsätze">
                <Operations operations={latestFfOperations} alternate />
              </MoreLink>
            </div>
          </div>
          <div className="mt-4 w-full md:mt-0 md:w-1/2">
            <h3 className={cn('text-lg tracking-tight text-secondary sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark', { 'mb-4': hideFrChart || hideAll, 'mb-1': !hideFrChart })}>FIRST RESPONDER</h3>
            <div className={cn('my-4 h-[400px] w-full bg-white text-gray-900 dark:bg-black', { hidden: hideFrChart, 'md:block': !hideAll })}>
              <OperationPieChart year={year} operations={frOpsThisYear} />
            </div>
            <MoreLink href="/first-responder/einsaetze/" linkText="Weitere Einsätze">
              <Operations operations={latestFrOperations} alternate />
            </MoreLink>
          </div>
        </div>
      </FfPageSection>
      <FfPageSection id="bilder" level="h2" headline="Unsere Feuerwehr in Bildern" className="pb-6 sm:pb-8">
        <ImageCarousel images={mainImages} autoPlay enableOverlay style={{ aspectRatio: '16 / 9' }} />
      </FfPageSection>
      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 pt-4 text-base tracking-wide text-paragraph sm:px-6 sm:pt-6 lg:px-8 lg:pt-8 dark:text-paragraph-dark">
          <h2 className="text-xl font-medium tracking-tight text-heading uppercase sm:text-2xl lg:text-3xl dark:text-heading-dark">Unterstützen Sie uns</h2>
        </div>
        <SpendenContent level="h3" />
        <BeitrittContent level="h3" showContact={false} />
      </div>
      <ContactContent level="h2" />
    </>
  );
}

export default MainContent;
