import { JSX } from 'react';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `11/1 - Fahrzeuge - Feuerwehr - ${SITE_TITLE}`,
};

function FeuerwehrFahrzeuge111Layout({ children }: LayoutProps<'/feuerwehr/fahrzeuge/11-1'>): JSX.Element {
  return <>{children}</>;
}

export default FeuerwehrFahrzeuge111Layout;
