import { JSX } from 'react';
import { Metadata } from 'next';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';
import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import styles from '@/styles/fr.module.css';

export const metadata: Metadata = {
  title: `First Responder - ${SITE_TITLE}`,
};

function FirstResponderLayout({ children }: LayoutProps<'/first-responder'>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="first-responder">
      <HeaderImage imageClass={styles.headerimage} />
      {children}
    </HeaderMainLayout>
  );
}

export default FirstResponderLayout;
