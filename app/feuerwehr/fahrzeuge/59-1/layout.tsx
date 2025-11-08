import { JSX } from 'react';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `59/1 - Fahrzeuge - Feuerwehr - ${SITE_TITLE}`,
};

function FeuerwehrFahrzeuge591Layout({ children }: LayoutProps<'/feuerwehr/fahrzeuge/59-1'>): JSX.Element {
  return <>{children}</>;
}

export default FeuerwehrFahrzeuge591Layout;
