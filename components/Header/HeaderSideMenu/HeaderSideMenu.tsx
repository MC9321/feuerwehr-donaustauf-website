import FfLogoSvgIcon from '@/components/SvgIcons/FfLogoSvgIcon';
import Link from 'next/link';
import cn from 'classnames';
import { JSX } from 'react';
import NavLink from '../NavLink';

import styles from '../Header/Header.module.css';
import { NavMenuItem } from '@/components/types/Menu/Menu';

interface HeaderSideMenuProps {
  navMenuItems: NavMenuItem[];
  activeMenu?: string;
  open?: boolean;
  onClose?: () => void;
}

function HeaderSideMenu(props: Readonly<HeaderSideMenuProps>): JSX.Element {
  const { navMenuItems, activeMenu, open = false } = props;

  return (
    <aside className={cn('fixed top-0 left-0 z-30 h-full w-70 transform overflow-auto bg-gray-100 shadow-xl transition-all duration-300 ease-in-out dark:bg-gray-900', { 'translate-x-0': open }, { '-translate-x-full': !open })}>
      <span className="flex w-full items-center p-4">
        <Link href="/" className="text-gray-900 dark:text-gray-200" tabIndex={-1}>
          <FfLogoSvgIcon className={styles.logo} />
        </Link>
      </span>
      {navMenuItems.map(item => {
        const hasChildren = (item.subMenue?.length ?? 0) > 0;

        return (
          <span key={`mobile-menu-${item.activeMenuName}`} className="mb-1 flex px-2">
            <NavLink href={item.href} activeMenuName={item.activeMenuName} activeMenu={activeMenu} hasChildren={hasChildren}>
              {item.children}
            </NavLink>
          </span>
        );
      })}
    </aside>
  );
}

export default HeaderSideMenu;
