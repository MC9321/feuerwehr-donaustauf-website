import { Metadata } from 'next';
import { JSX } from 'react';

import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Spenden - First Responder - ${SITE_TITLE}`,
};

function FirstResponderSpendenLayout({ children }: LayoutProps<'/first-responder/spenden'>): JSX.Element {
  return <>{children}</>;
}

export default FirstResponderSpendenLayout;
