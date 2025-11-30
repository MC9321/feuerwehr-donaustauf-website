import { Metadata } from 'next';
import { JSX } from 'react';

import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Informationen - First Responder - ${SITE_TITLE}`,
};

function FirstResponderInfosLayout({ children }: LayoutProps<'/first-responder/informationen'>): JSX.Element {
  return <>{children}</>;
}

export default FirstResponderInfosLayout;
