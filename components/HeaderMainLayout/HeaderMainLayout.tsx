import { JSX, PropsWithChildren } from 'react';
import Header from '@/components/Header';
import { MenuData } from '@/data/MenuData';

interface HeaderMainLayoutProps {
  activeMenu?: string;
}

function HeaderMainLayout(props: Readonly<PropsWithChildren<HeaderMainLayoutProps>>): JSX.Element {
  const { activeMenu, children } = props;
  const navMenuItems = MenuData.main;

  return (
    <>
      <Header activeMenu={activeMenu} navMenuItems={navMenuItems} />

      <main className="flex-1 pt-14 sm:pt-16">{children}</main>
    </>
  );
}
export default HeaderMainLayout;
