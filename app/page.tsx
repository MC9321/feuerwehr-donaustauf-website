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

async function getData(): Promise<{ infos?: INFO_QUERYResult; operations?: OPERATION_QUERYResult }> {
  const infos = await infoService.getInfos();
  const operations = await operationService.getOperations();

  return { infos, operations };
}

async function Home(): Promise<JSX.Element> {
  const data = await getData();

  return (
    <HeaderMainLayout>
      <HeaderImage imageClass="bg-[url(https://res.cloudinary.com/dzirm6srd/image/upload/v1762605631/main_yydisz.jpg)]" />
      <FfPageSection headline="Aktuelles" id="aktuelles" subSection className="page-section pb-4 sm:pb-8">
        {data?.infos
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
      </FfPageSection>
      <MainContent operations={data?.operations} />
    </HeaderMainLayout>
  );
}

export default Home;
