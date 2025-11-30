import { Metadata } from 'next';
import { JSX } from 'react';

import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Großbrand am 06.10.2025 - Besondere Einsätze - Feuerwehr - ${SITE_TITLE}`,
};

function Grossbrand06102025Layout({ children }: LayoutProps<'/feuerwehr/besondere-einsaetze/grossbrand-06102025'>): JSX.Element {
  return <>{children}</>;
}

export default Grossbrand06102025Layout;
