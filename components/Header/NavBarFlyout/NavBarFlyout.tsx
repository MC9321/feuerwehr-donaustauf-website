'use client';

import Link from 'next/link';
import { JSX, useEffect, useRef, useState } from 'react';

import { NavMenuItem } from '@/components/types/Menu/Menu';

import linkStyles from '../NavBarLink/NavBarLink.module.css';
import styles from './NavBarFlyout.module.css';

interface NavBarFlyoutProps {
  item: NavMenuItem;
  activeMenu?: string;
}

function NavBarFlyout(props: Readonly<NavBarFlyoutProps>): JSX.Element {
  const { item, activeMenu } = props;
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = item.activeMenuName && activeMenu && activeMenu === item.activeMenuName;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIsOpen(true);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  return (
    <div ref={menuRef} className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button type="button" onClick={toggleMenu} onKeyDown={handleKeyDown} className={`${styles.button} ${isActive ? linkStyles.activated : linkStyles.link} ${isActive ? styles.activated : ''}`}>
        <span className={styles.textWrapper}>{item.children}</span>
        <svg className={`ml-1 h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && item.subMenue && item.subMenue.length > 0 && (
        <div className="ring-opacity-5 absolute top-full left-0 z-50 min-w-[200px] pt-5">
          <div className={`${styles.flyoutMenu} rounded-md bg-white shadow-lg ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-700`}>
            <div className="py-1">
              <Link
                href={item.href}
                target={item.target}
                className="block border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900 uppercase transition-colors hover:bg-secondary hover:text-white dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {item.children}
              </Link>
              {item.subMenue.map((subItem, index) => (
                <Link
                  key={`submenu-${item.activeMenuName}-${index}`}
                  href={subItem.href}
                  target={subItem.target}
                  className="block px-4 py-2 text-sm text-gray-700 uppercase transition-colors hover:bg-secondary hover:text-white dark:text-gray-200 dark:hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {subItem.children}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBarFlyout;
