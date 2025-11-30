import { Metadata } from 'next';
import { JSX } from 'react';

import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Beitritt - Verein - ${SITE_TITLE}`,
};

function VereinBeitrittLayout({ children }: LayoutProps<'/verein/beitritt'>): JSX.Element {
  return <>{children}</>;
}

export default VereinBeitrittLayout;
