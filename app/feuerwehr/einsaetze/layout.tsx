import { JSX } from 'react';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Einsätze - Feuerwehr - ${SITE_TITLE}`,
};

function FeuerwehrEinsaetzeLayout({ children }: LayoutProps<'/feuerwehr/einsaetze'>): JSX.Element {
  return <>{children}</>;
}

export default FeuerwehrEinsaetzeLayout;
