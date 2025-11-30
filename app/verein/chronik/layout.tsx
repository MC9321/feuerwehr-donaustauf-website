import { Metadata } from 'next';
import { JSX } from 'react';

import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Chronik - Verein - ${SITE_TITLE}`,
};

function VereinChronikLayout({ children }: LayoutProps<'/verein/chronik'>): JSX.Element {
  return <>{children}</>;
}

export default VereinChronikLayout;
