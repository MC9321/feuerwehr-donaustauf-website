import Link from 'next/link';
import { JSX, MouseEvent, useEffect, useMemo, useRef, useState } from 'react';

import ChevronLeftSvgIcon from '@/components/SvgIcons/ChevronLeftSvgIcon';
import FacebookSvgIcon from '@/components/SvgIcons/FacebookSvgIcon';
import FfLogoSvgIcon from '@/components/SvgIcons/FfLogoSvgIcon';
import InstagramSvgIcon from '@/components/SvgIcons/InstagramSvgIcon';
import { NavMenuItem } from '@/components/types/Menu/Menu';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { cn } from '@/lib/cn';

import NavButton from '../NavButton';
import NavHeaderLink from '../NavHeaderLink';
import NavLink from '../NavLink';
import { buildHeaderNavHeadline, getHeaderNavLinkItemKey } from '../utils/headerUtils';

interface HeaderSideMenuProps {
  navMenuItems: NavMenuItem[];
  activeMenu?: string;
  open?: boolean;
  onClose?: () => void;
  id?: string;
}

function HeaderSideMenu(props: Readonly<HeaderSideMenuProps>): JSX.Element {
  const { navMenuItems, activeMenu, open = false, id, onClose } = props;
  const [menuStack, setMenuStack] = useState<NavMenuItem[]>([]);
  const prevOpenRef = useRef(open);
  const menuRef = useRef<HTMLElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const stacked = menuStack.length > 0;

  // Custom Hooks für Fokus-Management und Body-Scroll-Lock
  useFocusTrap(open, menuRef, onClose);
  useBodyScrollLock(open);

  // Menü-State und Fokus-Management
  useEffect(() => {
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = open;

    if (wasOpen && !open && menuStack.length > 0) {
      // Menu closed - reset state for next open
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMenuStack([]);
    }

    // Fokus ins Menü setzen wenn geöffnet
    if (open && !wasOpen) {
      setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 100);
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
    <nav
      ref={menuRef}
      id={id}
      className={cn(
        'fixed top-0 left-0 z-30 h-full w-70 transform bg-gray-100 shadow-xl transition-all duration-300 ease-in-out dark:bg-gray-900',
        {
          'translate-x-0': open,
        },
        {
          '-translate-x-full': !open,
        },
      )}
      aria-label="Mobile Navigation"
      aria-hidden={!open}
    >
      <div className="flex h-full w-full flex-col">
        <div className={cn('flex h-16 w-full items-center border-b border-gray-200 py-4 dark:border-gray-800', { 'justify-between': !stacked })}>
          {stacked && (
            <div className="pl-4">
              <button
                ref={firstFocusableRef}
                className={cn(
                  'mr-8 inline-flex cursor-pointer items-center justify-center rounded-full p-2 transition-all duration-300 ease-in-out',
                  'bg-gray-300 hover:bg-blue-600 hover:opacity-75',
                  'dark:bg-gray-800 dark:text-white/87 dark:hover:bg-blue-400',
                )}
                onClick={handleBackClick}
                aria-label="Zurück zur vorherigen Menüebene"
              >
                <ChevronLeftSvgIcon aria-hidden="true" />
              </button>
            </div>
          )}

          <Link href="/" className={cn('text-gray-900 dark:text-gray-200', { 'pl-4': !stacked })} aria-label="Zur Startseite">
            <FfLogoSvgIcon className="-mt-4 h-[38px] w-[107px] sm:h-10 sm:w-28" aria-hidden="true" />
          </Link>
          {!stacked && (
            <button
              ref={firstFocusableRef}
              className="mr-2 ml-4 inline-flex cursor-pointer items-center justify-center rounded-full bg-gray-100 p-2 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:opacity-75 dark:bg-gray-900 dark:text-white/87 dark:hover:bg-blue-400"
              onClick={() => onClose?.()}
              aria-label="Menü schließen"
            >
              <svg className="block h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {stacked && (
          <div className={cn('border-b px-2', { 'border-gray-200 dark:border-gray-800': stacked, 'border-gray-100 dark:border-gray-900': !stacked })}>
            <NavHeaderLink href={menuStack.at(-1)?.href ?? ''}>{buildHeaderNavHeadline(menuStack, -1)}</NavHeaderLink>
          </div>
        )}
        <ul className="relative mt-2 grow overflow-x-hidden overflow-y-scroll">
          {currentMenu.map((item, index) => {
            const hasChildren = (item.subMenue?.length ?? 0) > 0;

            return (
              <li key={getHeaderNavLinkItemKey(item, index)} className="mb-1 flex px-2">
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
              </li>
            );
          })}
        </ul>
        <div className={cn('border-t border-gray-200 p-2 dark:border-gray-800')}>
          <a
            href="https://www.facebook.com/feuerwehrdonaustauf/"
            target="_blank"
            rel="nofollow noreferrer"
            className="focus:shadow-outline-gray my-2 inline-flex items-center justify-center rounded-md px-2 py-2 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-300 hover:text-gray-900 focus:border-gray-500 focus:bg-gray-400 focus:outline-hidden dark:text-gray-300 dark:hover:text-gray-200"
            aria-label="Besuche uns auf Facebook"
          >
            <FacebookSvgIcon className="block h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/feuerwehrmarktdonaustauf/"
            target="_blank"
            rel="nofollow noreferrer"
            className="focus:shadow-outline-gray my-2 inline-flex items-center justify-center rounded-md px-2 py-2 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-300 hover:text-gray-900 focus:border-gray-500 focus:bg-gray-400 focus:outline-hidden dark:text-gray-300 dark:hover:text-gray-200"
            aria-label="Folge uns auf Instagram"
          >
            <InstagramSvgIcon className="block h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default HeaderSideMenu;
