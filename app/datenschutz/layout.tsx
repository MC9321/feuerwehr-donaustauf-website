import { JSX } from 'react';
import { Metadata } from 'next';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Datenschutz - ${SITE_TITLE}`,
};

function DatenschutzLayout({ children }: LayoutProps<'/datenschutz'>): JSX.Element {
  return <HeaderMainLayout>{children}</HeaderMainLayout>;
}

export default DatenschutzLayout;
