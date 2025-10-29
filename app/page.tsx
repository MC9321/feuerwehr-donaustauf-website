import { JSX } from 'react';
import HeaderImage from '@/components/Header/HeaderImage';
import InfoArticle from '@/components/InfoArticle';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import PageSection from '@/components/PageSection';
import infoService from '@/lib/InfoService';
import { HEADER_LINE_1, HEADER_LINE_2 } from 'lib/constants';
import MainContent from '@/features/MainContent';

import styles from '@/styles/index.module.css';
import { PortableText } from 'next-sanity';
import { INFO_QUERYResult } from '@/types/sanityTypes';

async function getData(): Promise<INFO_QUERYResult> {
  return infoService.getInfos();
}

async function Home(): Promise<JSX.Element> {
  const infos = await getData();

  return (
    <HeaderMainLayout>
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass={styles.headerimage} />
      <PageSection headline="Aktuelles" id="aktuelles" subSection className="page-section pb-4 sm:pb-8">
        {infos?.map(info => (
          <InfoArticle key={info._id} headline={info.title || ''}>
            {Array.isArray(info.message) && <div className="index-page-article"><PortableText value={info.message} /></div>}
          </InfoArticle>
        ))}
      </PageSection>
      <MainContent />
    </HeaderMainLayout>
  );
}

export default Home;
