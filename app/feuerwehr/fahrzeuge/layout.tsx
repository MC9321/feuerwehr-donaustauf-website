import { JSX } from 'react';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Fahrzeuge - Feuerwehr - ${SITE_TITLE}`,
};

function FeuerwehrFahrzeugeLayout({ children }: LayoutProps<'/feuerwehr/fahrzeuge'>): JSX.Element {
  return <>{children}</>;
}

export default FeuerwehrFahrzeugeLayout;
