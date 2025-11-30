import Link from 'next/link';
import { JSX, MouseEvent } from 'react';

import { NavMenu } from '@/components/types/Menu/Menu';

const navLinkClassName =
  'w-full flex items-center px-4 py-3 min-h-[44px] text-sm uppercase rounded-md text-gray-700 hover:bg-gray-300 hover:text-gray-900 focus:outline-hidden focus:bg-gray-400 focus:border-gray-500 focus:shadow-outline-gray active:bg-gray-400 transition-colors duration-150 dark:text-gray-300 dark:hover:text-gray-200 dark:hover:bg-black dark:focus:bg-gray-800 dark:active:bg-gray-800';

const navLinkActiveClassName =
  'w-full flex items-center px-4 py-3 min-h-[44px] text-sm bg-gray-300 uppercase rounded-md text-gray-900 transition ease-in-out duration-150 hover:bg-gray-300 focus:outline-hidden focus:bg-gray-400 focus:shadow-outline-gray active:bg-gray-400 dark:text-gray-200 dark:bg-black dark:hover:bg-black dark:focus:bg-gray-800 dark:active:bg-gray-800';

interface NavLinkProps extends NavMenu {
  onClick?: (event: MouseEvent) => void;
}

function NavLink(props: Readonly<NavLinkProps>): JSX.Element {
  const { href, children, activeMenu, activeMenuName, onClick } = props;
  return (
    <Link href={href} className={activeMenuName && activeMenu && activeMenu === activeMenuName ? navLinkActiveClassName : navLinkClassName} onClick={onClick}>
      {children}
    </Link>
  );
}
export default NavLink;
