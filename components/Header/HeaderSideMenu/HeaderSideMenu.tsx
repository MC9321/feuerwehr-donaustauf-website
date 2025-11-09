import FfLogoSvgIcon from '@/components/SvgIcons/FfLogoSvgIcon';
import Link from 'next/link';
import cn from 'classnames';
import { JSX, useState, useMemo, useRef, useEffect, MouseEvent } from 'react';
import NavLink from '../NavLink';

import styles from '../Header/Header.module.css';
import { NavMenuItem } from '@/components/types/Menu/Menu';
import ChevronLeftSvgIcon from '@/components/SvgIcons/ChevronLeftSvgIcon';
import { buildHeaderNavHeadline, getHeaderNavLinkItemKey } from '../utils/headerUtils';
import NavButton from '../NavButton';
import NavHeaderLink from '../NavHeaderLink';
import FacebookSvgIcon from '@/components/SvgIcons/FacebookSvgIcon';
import InstagramSvgIcon from '@/components/SvgIcons/InstagramSvgIcon';

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

  useEffect(() => {
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = open;

    if (wasOpen && !open && menuStack.length > 0) {
      // Menu closed - reset state for next open
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMenuStack([]);
    }
  }, [open, menuStack.length]);

  const currentMenu = useMemo(() => {
    if (menuStack.length === 0) {
      return navMenuItems;
    }
    const parentItem = menuStack.at(-1);
    return parentItem?.subMenue || [];
  }, [menuStack, navMenuItems]);

  function handleMenuClick(item: NavMenuItem, event: MouseEvent) {
    const hasChildren = (item.subMenue?.length ?? 0) > 0;

    if (hasChildren) {
      event.preventDefault();
      setMenuStack([...menuStack, item]);
    }
  }

  function handleBackClick() {
    if (stacked) {
      setMenuStack(menuStack.slice(0, -1));
    }
  }

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-30 h-full w-70 transform bg-gray-100 shadow-xl transition-all duration-300 ease-in-out dark:bg-gray-900',
        {
          'translate-x-0': open,
        },
        {
          '-translate-x-full': !open,
        },
      )}
    >
      <div className="flex h-full w-full flex-col">
        <div className={cn('flex h-16 w-full items-center border-b border-gray-200 p-4 dark:border-gray-800')}>
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
          <div className={cn('border-b px-2', { 'border-gray-200 dark:border-gray-800': stacked, 'border-gray-100 dark:border-gray-900': !stacked })}>
            <NavHeaderLink href={menuStack.at(-1)?.href ?? ''}>{buildHeaderNavHeadline(menuStack, -1)}</NavHeaderLink>
          </div>
        )}
        <div className="relative mt-2 grow overflow-x-hidden overflow-y-scroll">
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
        </div>
        <div className={cn('border-t border-gray-200 p-2 dark:border-gray-800')}>
          <a
            href="https://www.facebook.com/feuerwehrdonaustauf/"
            target="_blank"
            rel="nofollow noreferrer"
            className="focus:shadow-outline-gray my-2 inline-flex items-center justify-center rounded-md px-2 py-2 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-300 hover:text-gray-900 focus:border-gray-500 focus:bg-gray-400 focus:outline-hidden dark:text-gray-300 dark:hover:text-gray-200"
          >
            <FacebookSvgIcon className="block h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/feuerwehrmarktdonaustauf/"
            target="_blank"
            rel="nofollow noreferrer"
            className="focus:shadow-outline-gray my-2 inline-flex items-center justify-center rounded-md px-2 py-2 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-300 hover:text-gray-900 focus:border-gray-500 focus:bg-gray-400 focus:outline-hidden dark:text-gray-300 dark:hover:text-gray-200"
          >
            <InstagramSvgIcon className="block h-5 w-5" />
          </a>
        </div>
      </div>
    </aside>
  );
}

export default HeaderSideMenu;
