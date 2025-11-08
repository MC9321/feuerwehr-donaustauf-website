import { JSX } from 'react';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Beitritt - Feuerwehr - ${SITE_TITLE}`,
};

function FeuerwehrBeitrittLayout({ children }: LayoutProps<'/feuerwehr/beitritt'>): JSX.Element {
  return <>{children}</>;
}

export default FeuerwehrBeitrittLayout;
