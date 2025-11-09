import { JSX, MouseEvent, PropsWithChildren } from 'react';
import { NavMenu } from '@/components/types/Menu/Menu';
import ChevronRightSvgIcon from '@/components/SvgIcons/ChevronRightSvgIcon';

const navLinkClassName =
  'w-full flex items-center px-2 py-3 text-sm uppercase rounded-md justify-between text-gray-700 hover:bg-gray-300 hover:text-gray-900 focus:outline-hidden focus:bg-gray-400 focus:border-gray-500 focus:shadow-outline-gray dark:text-gray-300 dark:hover:text-gray-200 dark:hover:text-gray-200 dark:hover:bg-black dark:focus:bg-gray-800';

const navLinkActiveClassName =
  'w-full flex items-center px-2 py-3 text-sm bg-gray-300 uppercase justify-between rounded-md text-gray-900 transition ease-in-out duration-150 hover:bg-gray-300 focus:outline-hidden focus:bg-gray-400 focus:shadow-outline-gray dark:text-gray-200 dark:bg-black dark:hover:bg-black dark:focus:bg-gray-800';

interface NavButtonProps extends Pick<NavMenu, 'activeMenu' | 'activeMenuName'> {
  hasChildren?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function NavButton(props: Readonly<PropsWithChildren<NavButtonProps>>): JSX.Element {
  const { children, activeMenu, activeMenuName, hasChildren, onClick } = props;
  return (
    <button onClick={onClick} className={activeMenuName && activeMenu && activeMenu === activeMenuName ? navLinkActiveClassName : navLinkClassName}>
      {children}
      {hasChildren && <ChevronRightSvgIcon />}
    </button>
  );
}
export default NavButton;
