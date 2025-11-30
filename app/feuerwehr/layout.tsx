import { Metadata } from 'next';
import { JSX } from 'react';

import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Feuerwehr - ${SITE_TITLE}`,
};

function FeuerwehrLayout({ children }: LayoutProps<'/feuerwehr'>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="feuerwehr">
      <HeaderImage imageClass="bg-[url(https://res.cloudinary.com/dzirm6srd/image/upload/v1762605631/ff_hrwr0m.jpg)]" />
      {children}
    </HeaderMainLayout>
  );
}

export default FeuerwehrLayout;
