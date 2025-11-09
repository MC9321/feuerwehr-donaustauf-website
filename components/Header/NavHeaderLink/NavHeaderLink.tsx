import { JSX, MouseEvent } from 'react';
import Link from 'next/link';
import { NavMenu } from '@/components/types/Menu/Menu';

const navLinkClassName =
  'w-full flex items-center px-2 h-12 text-xs uppercase rounded-md text-gray-500 hover:bg-gray-300 hover:text-gray-900 focus:outline-hidden focus:bg-gray-400 focus:border-gray-500 focus:shadow-outline-gray dark:text-gray-400 dark:hover:text-gray-200 dark:hover:text-gray-200 dark:hover:bg-black dark:focus:bg-gray-800';

interface NavLinkProps extends Pick<NavMenu, 'href' | 'children'> {
  onClick?: (event: MouseEvent) => void;
}

function NavHeaderLink(props: Readonly<NavLinkProps>): JSX.Element {
  const { href, children, onClick } = props;
  return (
    <Link href={href} className={navLinkClassName} onClick={onClick}>
      {children}
    </Link>
  );
}
export default NavHeaderLink;
