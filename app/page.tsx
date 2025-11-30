import Link from 'next/link';
import { PortableText, PortableTextComponents } from 'next-sanity';
import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import HeaderImage from '@/components/Header/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import InfoArticle from '@/components/InfoArticle';
import MainContent from '@/features/MainContent';
import cloudinaryService from '@/lib/CloudinaryService';
import { buildImageData } from '@/lib/cloudinaryUtils';
import infoService from '@/lib/InfoService';
import operationService from '@/lib/OperationService';
import { getCurrentYear } from '@/lib/operationUtils';
import { INFO_QUERYResult, OPERATION_QUERYResult } from '@/types/sanityTypes';

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
    code: ({ children }) => <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-red-600 dark:bg-gray-800 dark:text-red-400">{children}</code>,
  },
  block: {
    h1: ({ children }) => <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-4 text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-4 text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">{children}</h3>,
    h4: ({ children }) => <h4 className="text-md mb-4 font-bold tracking-tight sm:text-lg lg:text-xl">{children}</h4>,
    h5: ({ children }) => <h5 className="sm:text-md mb-4 text-sm font-bold tracking-tight lg:text-lg">{children}</h5>,
    h6: ({ children }) => <h6 className="lg:text-md mb-4 text-xs font-bold tracking-tight sm:text-sm">{children}</h6>,
    blockquote: ({ children }) => <blockquote className="my-4 border-l-4 border-gray-600 py-2 pl-4 text-gray-700 italic dark:border-gray-300 dark:text-gray-400">{children}</blockquote>,
    code: ({ children }) => (
      <pre className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100 dark:bg-gray-950">
        <code className="font-mono">{children}</code>
      </pre>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-inside list-disc space-y-1">{children}</ul>,
    number: ({ children }) => <ol className="list-inside list-decimal space-y-1">{children}</ol>,
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

async function getBannerImages() {
  return cloudinaryService.getImagesByTag('banner');
}

async function Home(): Promise<JSX.Element> {
  const [infos, operations, latestFf, latestFr, bannerImages] = await Promise.all([getInfos(), getOperations(), getLatestFf(), getLatestFr(), getBannerImages()]);
  const images = buildImageData(bannerImages);

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
      <MainContent operations={operations} latestFrOperations={latestFr} latestFfOperations={latestFf} bannerImages={images} />
    </HeaderMainLayout>
  );
}

export default Home;
