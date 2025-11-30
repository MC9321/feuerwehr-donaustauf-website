import { Metadata } from 'next';
import { JSX } from 'react';

import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Impressum - ${SITE_TITLE}`,
};

function ImpressumLayout({ children }: LayoutProps<'/impressum'>): JSX.Element {
  return <HeaderMainLayout>{children}</HeaderMainLayout>;
}

export default ImpressumLayout;
