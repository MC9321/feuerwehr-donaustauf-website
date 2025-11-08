import { JSX } from 'react';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Satzung - Verein - ${SITE_TITLE}`,
};

function VereinSatzungLayout({ children }: LayoutProps<'/verein/satzung'>): JSX.Element {
  return <>{children}</>;
}

export default VereinSatzungLayout;
