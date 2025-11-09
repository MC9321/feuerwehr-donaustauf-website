import FfLogoSvgIcon from '@/components/SvgIcons/FfLogoSvgIcon';
import Link from 'next/link';
import cn from 'classnames';
import { JSX, useState, useMemo, useRef, useEffect, MouseEvent } from 'react';
import NavLink from '../NavLink';

import styles from '../Header/Header.module.css';
import { NavMenuItem } from '@/components/types/Menu/Menu';
import ChevronLeftSvgIcon from '@/components/SvgIcons/ChevronLeftSvgIcon';
import { getHeaderNavLinkItemKey } from '../utils/headerUtils';
import NavButton from '../NavButton';
import NavHeaderLink from '../NavHeaderLink';

interface HeaderSideMenuProps {
  navMenuItems: NavMenuItem[];
  activeMenu?: string;
  open?: boolean;
  onClose?: () => void;
}

function HeaderSideMenu(props: Readonly<HeaderSideMenuProps>): JSX.Element {
  const { navMenuItems, activeMenu, open = false } = props;
  const [menuStack, setMenuStack] = useState<NavMenuItem[]>([]);
  const prevOpenRef = useRef(open);
  const stacked = menuStack.length > 0;

  // Reset menu stack when menu closes to ensure clean state on reopen
  // Note: This is a valid use case for setState in useEffect - resetting UI state
  // when a modal/menu closes is necessary for good UX and is a common pattern
  useEffect(() => {
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = open;

    if (wasOpen && !open && menuStack.length > 0) {
      // Menu closed - reset state for next open
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMenuStack([]);
    }
  }, [open, menuStack.length]);

  // Compute current menu based on menu stack
  const currentMenu = useMemo(() => {
    if (menuStack.length === 0) {
      return navMenuItems;
    }
    const parentItem = menuStack.at(-1);
    return parentItem?.subMenue || [];
  }, [menuStack, navMenuItems]);

  const handleMenuClick = (item: NavMenuItem, event: MouseEvent) => {
    const hasChildren = (item.subMenue?.length ?? 0) > 0;

    if (hasChildren) {
      event.preventDefault();
      setMenuStack([...menuStack, item]);
    }
  };

  const handleBackClick = () => {
    if (stacked) {
      setMenuStack(menuStack.slice(0, -1));
    }
  };

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-30 h-full w-70 transform overflow-auto bg-gray-100 shadow-xl transition-all duration-300 ease-in-out dark:bg-gray-900',
        {
          'translate-x-0': open,
        },
        {
          '-translate-x-full': !open,
        },
      )}
    >
      <div className={cn('flex h-16 w-full items-center border-b p-4', { 'border-gray-200 dark:border-gray-800': stacked, 'border-gray-100 dark:border-gray-900': !stacked })}>
        {stacked && (
          <div>
            <button
              className="mr-8 inline-flex items-center justify-center rounded-full bg-gray-300 p-2 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:opacity-75 dark:bg-gray-700 dark:text-white/87 dark:hover:bg-blue-400"
              onClick={handleBackClick}
            >
              <ChevronLeftSvgIcon />
            </button>
          </div>
        )}
        <Link href="/" className="text-gray-900 dark:text-gray-200" tabIndex={-1}>
          <FfLogoSvgIcon className={styles.logo} />
        </Link>
      </div>
      {stacked && (
        <div className={cn('mb-2 border-b px-2', { 'border-gray-200 dark:border-gray-800': stacked, 'border-gray-100 dark:border-gray-900': !stacked })}>
          <NavHeaderLink href={menuStack.at(-1)?.href ?? ''}>{menuStack.at(-1)?.children}</NavHeaderLink>
        </div>
      )}

      {currentMenu.map((item, index) => {
        const hasChildren = (item.subMenue?.length ?? 0) > 0;

        return (
          <span key={getHeaderNavLinkItemKey(item, index)} className="mb-1 flex px-2">
            {hasChildren && (
              <NavButton activeMenuName={item.activeMenuName} activeMenu={activeMenu} hasChildren={hasChildren} onClick={e => handleMenuClick(item, e)}>
                {item.children}
              </NavButton>
            )}
            {!hasChildren && (
              <NavLink href={item.href} activeMenuName={item.activeMenuName} activeMenu={activeMenu} onClick={e => handleMenuClick(item, e)}>
                {item.children}
              </NavLink>
            )}
          </span>
        );
      })}
    </aside>
  );
}

export default HeaderSideMenu;
