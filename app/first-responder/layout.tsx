import { Metadata } from 'next';
import { JSX } from 'react';

import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `First Responder - ${SITE_TITLE}`,
};

function FirstResponderLayout({ children }: LayoutProps<'/first-responder'>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="first-responder">
      <HeaderImage imageClass="bg-[url(https://res.cloudinary.com/dzirm6srd/image/upload/v1762606183/fr_o3mmtg.jpg)]" />
      {children}
    </HeaderMainLayout>
  );
}

export default FirstResponderLayout;
