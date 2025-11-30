import { Metadata } from 'next';
import { JSX } from 'react';

import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Fahrzeug - First Responder - ${SITE_TITLE}`,
};

function FirstResponderFahrzeugLayout({ children }: LayoutProps<'/first-responder/fahrzeug'>): JSX.Element {
  return <>{children}</>;
}

export default FirstResponderFahrzeugLayout;
