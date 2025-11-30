'use client';

import Link from 'next/link';
import { JSX, useRef, useState } from 'react';

import FfLogoSvgIcon from '@/components/SvgIcons/FfLogoSvgIcon';
import { type ActiveMenuItem, type NavMenuItem } from '@/components/types/Menu/Menu';
import { cn } from '@/lib/cn';

import HeaderBar from '../HeaderBar/HeaderBar';
import HeaderSideMenu from '../HeaderSideMenu';

interface HeaderProps extends ActiveMenuItem {
  navMenuItems: NavMenuItem[];
}

function Header(props: Readonly<HeaderProps>): JSX.Element {
  const [isOn, setIsOn] = useState(false);
  const { activeMenu, navMenuItems } = props;
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleMenuToggle = (open: boolean) => {
    setIsOn(open);
  };

  const handleMenuClose = () => {
    setIsOn(false);
    // Fokus zurück zum Menü-Button nach dem Schließen
    setTimeout(() => {
      menuButtonRef.current?.focus();
    }, 100);
  };

  return (
    <>
      <header className="fixed z-10 w-full bg-[url('/assets/images/header-bg.gif')] bg-center bg-repeat-x dark:bg-gray-900 dark:bg-[url('/assets/images/header-bg-dark.gif')]" role="banner">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
          <div className="-mx-4 flex h-14 items-center justify-between sm:h-16">
            <div className="flex items-center">
              <div className="shrink-0 bg-secondary px-4 dark:bg-black">
                <Link href="/" className="text-white dark:text-gray-200" aria-label="Zur Startseite">
                  <FfLogoSvgIcon className="-mt-4 h-[38px] w-[107px] sm:h-10 sm:w-28" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="hidden md:inline-flex md:items-center md:justify-center md:space-x-6">
              <HeaderBar navMenuItems={navMenuItems} activeMenu={activeMenu} />
            </div>
            <div className="bg-secondary sm:mr-1 md:hidden dark:bg-black">
              <button
                ref={menuButtonRef}
                className="inline-flex cursor-pointer items-center justify-center rounded-full p-2 text-white transition-all duration-300 ease-in-out hover:bg-blue-600 hover:opacity-75 dark:text-white/87 dark:hover:bg-blue-400"
                onClick={() => handleMenuToggle(true)}
                aria-label={isOn ? 'Menü schließen' : 'Menü öffnen'}
                aria-expanded={isOn}
                aria-controls="mobile-menu"
              >
                {!isOn && (
                  <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
                {isOn && (
                  <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div role="presentation" aria-hidden="true" className={cn('fixed inset-0 z-10 transition-opacity', { 'inset-0 hidden': !isOn })} onClick={handleMenuClose}>
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      <HeaderSideMenu navMenuItems={navMenuItems} activeMenu={activeMenu} open={isOn} onClose={handleMenuClose} id="mobile-menu" />
    </>
  );
}
export default Header;
