import { JSX } from 'react';
import { Metadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Einsätze - First Responder - ${SITE_TITLE}`,
};

function FirstResponserEinsaetzeLayout({ children }: LayoutProps<'/first-responder/einsaetze'>): JSX.Element {
  return (
    <>
      {children}
    </>
  );
}

export default FirstResponserEinsaetzeLayout;
