import { Metadata } from 'next';
import { JSX } from 'react';

import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Kontakt - ${SITE_TITLE}`,
};

function KontaktLayout({ children }: LayoutProps<'/kontakt'>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="kontakt">
      <HeaderImage imageClass="bg-[url(https://res.cloudinary.com/dzirm6srd/image/upload/v1762606515/kontakt_fwthu2.jpg)]" />
      {children}
    </HeaderMainLayout>
  );
}

export default KontaktLayout;
