import { Metadata } from 'next';
import { JSX } from 'react';

import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `56/1 - Fahrzeuge - Feuerwehr - ${SITE_TITLE}`,
};

function FeuerwehrFahrzeuge561Layout({ children }: LayoutProps<'/feuerwehr/fahrzeuge/56-1'>): JSX.Element {
  return <>{children}</>;
}

export default FeuerwehrFahrzeuge561Layout;
