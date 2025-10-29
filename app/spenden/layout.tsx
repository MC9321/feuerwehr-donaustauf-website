import { JSX } from 'react';
import { Metadata } from 'next';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Spenden - ${SITE_TITLE}`,
};

function SpendenLayout({ children }: LayoutProps<'/spenden'>): JSX.Element {
  return <HeaderMainLayout>{children}</HeaderMainLayout>;
}

export default SpendenLayout;
