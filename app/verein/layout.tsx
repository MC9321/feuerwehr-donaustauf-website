import { JSX } from 'react';
import { Metadata } from 'next';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';
import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import styles from '@/styles/verein.module.css';

export const metadata: Metadata = {
  title: `Verein - ${SITE_TITLE}`,
};

function VereinLayout({ children }: LayoutProps<'/verein'>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="verein">
      <HeaderImage imageClass={styles.headerimage} />
      {children}
    </HeaderMainLayout>
  );
}

export default VereinLayout;
