'use client';

import { JSX, PropsWithChildren } from 'react';
import Header from '@/components/Header';
import { MenuData } from '@/data/MenuData';
import { usePathname } from 'next/navigation';

interface HeaderMainLayoutProps {
  activeMenu?: string;
}

function HeaderMainLayout(props: Readonly<PropsWithChildren<HeaderMainLayoutProps>>): JSX.Element {
  const { activeMenu, children } = props;
  const navMenuItems = MenuData.main;
  const pathName = usePathname();

  return (
    <>
      <Header activeMenu={activeMenu} navMenuItems={navMenuItems} key={pathName} />

      <main id="main-content" className="flex-1 pt-14 sm:pt-16" role="main">
        {children}
      </main>
    </>
  );
}
export default HeaderMainLayout;
