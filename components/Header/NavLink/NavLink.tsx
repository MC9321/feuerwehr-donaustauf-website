import { JSX } from 'react';
import Link from 'next/link';
import { NavMenu } from '@/components/types/Menu/Menu';
import ChevronRightSvgIcon from '@/components/SvgIcons/ChevronRightSvgIcon';

const navLinkClassName =
  'w-full flex items-center px-2 py-3 text-sm uppercase rounded-md justify-between text-gray-700 hover:bg-gray-300 hover:text-gray-900 focus:outline-hidden focus:bg-gray-400 focus:border-gray-500 focus:shadow-outline-gray dark:text-gray-300 dark:hover:text-gray-200 dark:hover:text-gray-200 dark:hover:bg-black dark:focus:bg-gray-800';

const navLinkActiveClassName =
  'w-full flex items-center px-2 py-3 text-sm bg-gray-300 uppercase justify-between rounded-md text-gray-900 transition ease-in-out duration-150 hover:bg-gray-300 focus:outline-hidden focus:bg-gray-400 focus:shadow-outline-gray dark:text-gray-200 dark:bg-black dark:hover:bg-black dark:focus:bg-gray-800';

function NavLink(props: Readonly<NavMenu>): JSX.Element {
  const { href, children, activeMenu, activeMenuName, hasChildren } = props;
  return (
    <Link href={href} className={activeMenuName && activeMenu && activeMenu === activeMenuName ? navLinkActiveClassName : navLinkClassName}>
      {children}
      {hasChildren && <ChevronRightSvgIcon />}
    </Link>
  );
}
export default NavLink;
