'use client';

import { ButtonLink, MoreLink } from '@salzpate/react-ui';
import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import ImageCarousel from '@/components/ImageCarousel';
import { ImageData } from '@/components/ImageOverlay';
import OperationPieChart from '@/components/OperationPieChart/OperationPieChart';
import Operations from '@/components/Operations/Operations';
import ArrowTopRightOnSquare from '@/components/SvgIcons/ArrowTopRightOnSquare';
import { cn } from '@/lib/cn';
import { getCurrentYear, getFfOperations, getFrOperations } from '@/lib/operationUtils';
import { OPERATION_QUERYResult } from '@/types/sanityTypes';

import BeitrittContent from '../BeitrittContent';
import ContactContent from '../ContactContent';
import SpendenContent from '../SpendenContent';

interface MainContentProps {
  operations?: OPERATION_QUERYResult;
  latestFfOperations?: OPERATION_QUERYResult;
  latestFrOperations?: OPERATION_QUERYResult;
  bannerImages?: ImageData[];
}

function MainContent(props: Readonly<MainContentProps>): JSX.Element {
  const { operations, latestFfOperations, latestFrOperations, bannerImages } = props;
  const year = getCurrentYear();

  const ffOpsThisYear = getFfOperations(operations) ?? [];
  const frOpsThisYear = getFrOperations(operations) ?? [];

  const hideFfChart = ffOpsThisYear.length === 0;
  const hideFrChart = frOpsThisYear.length === 0;
  const hideAll = hideFfChart && hideFrChart;

  return (
    <>
      <FfPageSection
        headline="Einsätze"
        id="einsatz-content"
        level="h2"
        className="page-section main-content-index-image bg-gray-100 bg-[url(https://res.cloudinary.com/dzirm6srd/image/upload/v1762606183/bg-einsatz_xxdjtf.jpg)] bg-cover bg-center pb-6 sm:pb-8 dark:bg-[url(https://res.cloudinary.com/dzirm6srd/image/upload/v1762606183/bg-einsatz-dark_z8uete.jpg)]"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="mr-0 md:mr-2">
              <h3 className={cn('text-lg tracking-tight text-secondary sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark', { 'mb-4': hideFfChart || hideAll, 'mb-1': !hideFfChart })}>FEUERWEHR</h3>
              <div className={cn('my-4 h-[400px] w-full bg-white/60 text-gray-900 backdrop-blur-xs hover:backdrop-blur-sm dark:bg-black/60', { hidden: hideFfChart, 'md:block': !hideAll })}>
                <OperationPieChart year={year} operations={ffOpsThisYear} />
              </div>
              <MoreLink href="/feuerwehr/einsaetze/" linkText="Weitere Einsätze">
                <Operations operations={latestFfOperations} alternate glass />
              </MoreLink>
            </div>
          </div>
          <div className="mt-4 w-full md:mt-0 md:w-1/2">
            <h3 className={cn('text-lg tracking-tight text-secondary sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark', { 'mb-4': hideFrChart || hideAll, 'mb-1': !hideFrChart })}>FIRST RESPONDER</h3>
            <div className={cn('my-4 h-[400px] w-full bg-white/60 text-gray-900 backdrop-blur-xs hover:backdrop-blur-sm dark:bg-black/60', { hidden: hideFrChart, 'md:block': !hideAll })}>
              <OperationPieChart year={year} operations={frOpsThisYear} />
            </div>
            <MoreLink href="/first-responder/einsaetze/" linkText="Weitere Einsätze">
              <Operations operations={latestFrOperations} alternate glass />
            </MoreLink>
          </div>
        </div>
      </FfPageSection>
      <FfPageSection id="bilder" level="h2" headline="Unsere Feuerwehr in Bildern" className="pb-6 sm:pb-8">
        {bannerImages && <ImageCarousel images={bannerImages} autoPlay enableOverlay style={{ aspectRatio: '16 / 9' }} />}
      </FfPageSection>
      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 pt-4 text-base tracking-wide text-paragraph sm:px-6 sm:pt-6 lg:px-8 lg:pt-8 dark:text-paragraph-dark">
          <h2 className="text-xl font-medium tracking-tight text-heading uppercase sm:text-2xl lg:text-3xl dark:text-heading-dark">Unterstützen Sie uns</h2>
        </div>
        <SpendenContent level="h3" />
        <BeitrittContent level="h3" showContact={false} />
      </div>
      <ContactContent level="h2" />
      <FfPageSection headline="Aktuelle Informationen des Landesfeuerwehrverband Bayern e.V." id="lfvb-content" level="h2" className="page-section main-content-index-image bg-gray-100 pb-6 sm:pb-8 dark:bg-gray-800">
        <div id="external-link" className="mx-auto w-3/4">
          <a href="https://team112.bayern/" target="_blank" rel="noreferrer">
            <img alt="Wir brauchen euch" src="https://feuerwehren.bayern/media/filer_public/07/d9/07d919da-d11f-49b7-a328-cc497fbd3671/bandentransparent_web.jpg" rel="nofollow noreferrer" />
          </a>
        </div>
        <h3 className="my-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-xl lg:font-medium dark:text-secondary-dark">#team112 - Viele Gesichter. Eine Heimat.</h3>
        <div>
          In den rund 7.500 Freiwiligen Feuerwehren in Bayern mit ihren vielfältigen Aufgaben engagieren sich die unterschiedlichsten Menschen. Als Feuerwehrdienstleistende schützen wir unsere Heimat - und alle können bei der Freiwilligen
          Feuerwehr mitmachen, sich engagieren und eine Heimat in der Feuerwehrfamilie finden.
        </div>
        <div className="mt-4">
          <ButtonLink href="/assets/Beitritt.pdf" target="_blank" className="flex w-75 items-center">
            <span className="mr-2">
              <ArrowTopRightOnSquare />
            </span>
            <span>Mehr zum Thema #team112</span>
          </ButtonLink>
        </div>
      </FfPageSection>
    </>
  );
}

export default MainContent;
