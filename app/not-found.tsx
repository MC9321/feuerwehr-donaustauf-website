import { JSX } from 'react';
import HeaderImage from '@/components/Header/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { Metadata } from 'next';
import PageSection from '@/components/PageSection/PageSection';
import Link from 'next/link';
import styles from '@/styles/index.module.css';

export const metadata: Metadata = {
  title: '404',
};

function FileNotFound(): JSX.Element {
  return (
    <HeaderMainLayout>
      <HeaderImage imageClass={styles.headerimage} />
      <PageSection headline="Seite nicht gefunden" id="notfound">
        <div>Die gewünschte Seite wurde nicht gefunden.</div>
        <div className="my-16 rounded-sm bg-yellow-400 p-8">
          <Link href="/" className="inline-flex items-center gap-0 text-yellow-800 hover:gap-1 hover:underline">
            <span>Weiter zur Startseite</span>{' '}
            <svg className="ml-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </PageSection>
    </HeaderMainLayout>
  );
}

export default FileNotFound;
