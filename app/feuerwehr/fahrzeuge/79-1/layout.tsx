import { JSX } from 'react';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `79/1 - Fahrzeuge - Feuerwehr - ${SITE_TITLE}`,
};

function FeuerwehrFahrzeuge791Layout({ children }: LayoutProps<'/feuerwehr/fahrzeuge/79-1'>): JSX.Element {
  return <>{children}</>;
}

export default FeuerwehrFahrzeuge791Layout;
