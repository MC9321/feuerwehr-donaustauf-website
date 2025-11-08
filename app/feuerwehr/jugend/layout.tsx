import { JSX } from 'react';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Jugend - Feuerwehr - ${SITE_TITLE}`,
};

function JugendLayout({ children }: LayoutProps<'/feuerwehr/jugend'>): JSX.Element {
  return <>{children}</>;
}

export default JugendLayout;
