import { JSX } from 'react';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `40/1 - Fahrzeuge - Feuerwehr - ${SITE_TITLE}`,
};

function FeuerwehrFahrzeuge401Layout({ children }: LayoutProps<'/feuerwehr/fahrzeuge/40-1'>): JSX.Element {
  return <>{children}</>;
}

export default FeuerwehrFahrzeuge401Layout;
