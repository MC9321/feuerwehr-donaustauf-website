import { JSX } from 'react';
import { Metadata } from 'next';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';
import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import styles from '@/styles/ff.module.css';

export const metadata: Metadata = {
  title: `Feuerwehr - ${SITE_TITLE}`,
};

function FeuerwehrLayout({ children }: LayoutProps<'/feuerwehr'>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="feuerwehr">
      <HeaderImage imageClass={styles.headerimage} />
      {children}
    </HeaderMainLayout>
  );
}

export default FeuerwehrLayout;
