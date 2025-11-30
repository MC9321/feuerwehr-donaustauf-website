import { Metadata } from 'next';
import { JSX } from 'react';

import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Vorstandschaft - Verein - ${SITE_TITLE}`,
};

function VorstandschaftLayout({ children }: LayoutProps<'/verein/vorstandschaft'>): JSX.Element {
  return <>{children}</>;
}

export default VorstandschaftLayout;
