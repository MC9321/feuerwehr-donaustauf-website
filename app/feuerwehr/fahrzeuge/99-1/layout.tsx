import { JSX } from 'react';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `99/1 - Fahrzeuge - Feuerwehr - ${SITE_TITLE}`,
};

function FeuerwehrFahrzeuge991Layout({ children }: LayoutProps<'/feuerwehr/fahrzeuge/99-1'>): JSX.Element {
  return <>{children}</>;
}

export default FeuerwehrFahrzeuge991Layout;
