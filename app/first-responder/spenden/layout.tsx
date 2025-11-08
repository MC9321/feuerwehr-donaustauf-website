import { JSX } from 'react';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Spenden - First Responder - ${SITE_TITLE}`,
};

function FirstResponderSpendenLayout({ children }: LayoutProps<'/first-responder/einsaetze'>): JSX.Element {
  return <>{children}</>;
}

export default FirstResponderSpendenLayout;
