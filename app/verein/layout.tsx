import { Metadata } from 'next';
import { JSX } from 'react';

import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { SITE_TITLE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Verein - ${SITE_TITLE}`,
};

function VereinLayout({ children }: LayoutProps<'/verein'>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="verein">
      <HeaderImage imageClass="bg-[url(https://res.cloudinary.com/dzirm6srd/image/upload/v1762601439/verein_at9b21.jpg)]" />
      {children}
    </HeaderMainLayout>
  );
}

export default VereinLayout;
