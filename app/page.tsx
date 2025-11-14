import { JSX } from 'react';
import HeaderImage from '@/components/Header/HeaderImage';
import InfoArticle from '@/components/InfoArticle';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import infoService from '@/lib/InfoService';
import MainContent from '@/features/MainContent';

import { PortableText, PortableTextComponents } from 'next-sanity';
import { INFO_QUERYResult, OPERATION_QUERYResult } from '@/types/sanityTypes';
import operationService from '@/lib/OperationService';
import { FfPageSection } from '@/components/FfPageSection';
import Link from 'next/link';
import { getCurrentYear } from '@/lib/operationUtils';

const portableTextComponents: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const href = value?.href;
      const isExternal = href?.startsWith('http://') || href?.startsWith('https://');

      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-link hover:underline hover:decoration-dotted dark:text-link-dark dark:hover:text-link-dark-hover">
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className="text-link hover:underline hover:decoration-dotted dark:text-link-dark dark:hover:text-link-dark-hover">
          {children}
        </Link>
      );
    },
  },
};

async function getInfos(): Promise<INFO_QUERYResult> {
  return await infoService.getInfos();
}

async function getLatestFr(): Promise<OPERATION_QUERYResult> {
  return operationService.getLatestFrOperations();
}

async function getLatestFf(): Promise<OPERATION_QUERYResult> {
  return operationService.getLatestFfOperations();
}

async function getOperations(): Promise<OPERATION_QUERYResult | undefined> {
  return operationService.getOperationsOfYear(getCurrentYear());
}

async function Home(): Promise<JSX.Element> {
  const infos = await getInfos();
  const operations = await getOperations();
  const latestFf = await getLatestFf();
  const latestFr = await getLatestFr();

  return (
    <HeaderMainLayout>
      <HeaderImage imageClass="bg-[url(https://res.cloudinary.com/dzirm6srd/image/upload/v1762605631/main_yydisz.jpg)]" />
      <FfPageSection headline="Feuerwehr Markt Donaustauf" id="ffdstf" className="page-section pb-4 sm:pb-8">
        {infos && (
          <>
            <h2 className="text-xl font-medium tracking-tight text-heading uppercase sm:text-2xl lg:text-3xl dark:text-heading-dark">Aktuelles</h2>
            <div className="pt-4 text-sm font-light sm:pt-6 lg:pt-8 lg:text-base lg:font-normal">
              {infos
                ?.toSorted((i1, i2) => (i1.index ?? 0) - (i2.index ?? 0))
                .map(info => (
                  <InfoArticle key={info._id} headline={info.title || ''}>
                    {Array.isArray(info.message) && (
                      <div className="index-page-article">
                        <PortableText value={info.message} components={portableTextComponents} />
                      </div>
                    )}
                  </InfoArticle>
                ))}
            </div>
          </>
        )}
      </FfPageSection>
      <MainContent operations={operations} latestFrOperations={latestFr} latestFfOperations={latestFf} />
    </HeaderMainLayout>
  );
}

export default Home;
