import { Metadata } from 'next';
import { JSX } from 'react';

import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Besondere Einsätze - Feuerwehr - ${SITE_TITLE}`,
};

function BesondereEinsaetzeLayout({ children }: LayoutProps<'/feuerwehr/besondere-einsaetze'>): JSX.Element {
  return <>{children}</>;
}

export default BesondereEinsaetzeLayout;
