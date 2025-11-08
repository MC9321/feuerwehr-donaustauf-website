import { JSX } from 'react';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Vorstandschaft - Verein - ${SITE_TITLE}`,
};

function VorstandschaftLayout({ children }: LayoutProps<'/verein/chronik'>): JSX.Element {
  return <>{children}</>;
}

export default VorstandschaftLayout;
