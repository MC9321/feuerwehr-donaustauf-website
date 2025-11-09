'use client';

import { JSX, useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import { type ActiveMenuItem, type NavMenuItem } from '@/components/types/Menu/Menu';
import NavBarLink from '@/components/Header/NavBarLink';
import FfLogoSvgIcon from '@/components/SvgIcons/FfLogoSvgIcon';

import styles from './Header.module.css';
import HeaderSideMenu from '../HeaderSideMenu';

interface HeaderProps extends ActiveMenuItem {
  navMenuItems: NavMenuItem[];
}

function Header(props: Readonly<HeaderProps>): JSX.Element {
  const [isOn, setIsOn] = useState(false);
  const { activeMenu, navMenuItems } = props;

  return (
    <>
      <header className={cn('fixed z-10 w-full dark:bg-gray-900', styles.background)}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={cn('flex h-14 items-center justify-between sm:h-16', styles.margin)}>
            <div className="flex items-center">
              <div className="shrink-0 bg-secondary px-4 dark:bg-black">
                <Link href="/" className="text-white dark:text-gray-200" tabIndex={-1}>
                  <FfLogoSvgIcon className={styles.logo} />
                </Link>
              </div>
            </div>
            <div className="hidden md:flex">
              <div className="inline-flex items-center justify-center space-x-6 bg-secondary px-4 py-1 dark:bg-black">
                {navMenuItems.map(item => {
                  return (
                    <NavBarLink key={`main-menu-${item.activeMenuName}`} href={item.href} activeMenuName={item.activeMenuName} activeMenu={activeMenu}>
                      {item.children}
                    </NavBarLink>
                  );
                })}
              </div>
            </div>
            <div className="-mr-4 flex bg-secondary sm:mr-1 md:hidden dark:bg-black">
              <button
                className="inline-flex items-center justify-center rounded-full p-2 text-white transition-all duration-300 ease-in-out hover:bg-blue-600 hover:opacity-75 dark:text-white/87 dark:hover:bg-blue-400"
                onClick={() => setIsOn(true)}
              >
                {!isOn && (
                  <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
                {isOn && (
                  <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div
        aria-hidden="true"
        className={cn('fixed inset-0 z-10 transition-opacity', { 'inset-0 hidden': !isOn })}
        onClick={() => setIsOn(false)}
        onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
          if (event.key === 'Enter' || event.key === 'Escape') {
            setIsOn(false);
          }
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      <HeaderSideMenu navMenuItems={navMenuItems} activeMenu={activeMenu} open={isOn} onClose={() => setIsOn(false)} />
    </>
  );
}
export default Header;
