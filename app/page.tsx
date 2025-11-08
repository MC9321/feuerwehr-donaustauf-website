import { JSX } from 'react';
import HeaderImage from '@/components/Header/HeaderImage';
import InfoArticle from '@/components/InfoArticle';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import PageSection from '@/components/PageSection';
import infoService from '@/lib/InfoService';
import MainContent from '@/features/MainContent';

import { PortableText } from 'next-sanity';
import { INFO_QUERYResult, OPERATION_QUERYResult } from '@/types/sanityTypes';
import operationService from '@/lib/OperationService';

import styles from '@/styles/index.module.css';

async function getData(): Promise<{ infos?: INFO_QUERYResult; operations?: OPERATION_QUERYResult }> {
  const infos = await infoService.getInfos();
  const operations = await operationService.getOperations();

  return { infos, operations };
}

async function Home(): Promise<JSX.Element> {
  const data = await getData();

  return (
    <HeaderMainLayout>
      <HeaderImage imageClass={styles.headerimage} />
      <PageSection headline="Aktuelles" id="aktuelles" subSection className="page-section pb-4 sm:pb-8">
        {data?.infos?.map(info => (
          <InfoArticle key={info._id} headline={info.title || ''}>
            {Array.isArray(info.message) && (
              <div className="index-page-article">
                <PortableText value={info.message} />
              </div>
            )}
          </InfoArticle>
        ))}
      </PageSection>
      <MainContent operations={data?.operations} />
    </HeaderMainLayout>
  );
}

export default Home;
