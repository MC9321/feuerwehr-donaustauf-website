import { Metadata } from 'next';
import { JSX } from 'react';

import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Mannschaft - Feuerwehr - ${SITE_TITLE}`,
};

function MannschaftLayout({ children }: LayoutProps<'/feuerwehr/mannschaft'>): JSX.Element {
  return <>{children}</>;
}

export default MannschaftLayout;
