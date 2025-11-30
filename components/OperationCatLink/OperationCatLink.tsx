import { UrlObject } from 'node:url';

import Link from 'next/link';
import { JSX, PropsWithChildren } from 'react';

type Url = string | UrlObject;

type OperationCatLinkProps = {
  key?: string | number | null;
  href: Url;
  active?: boolean;
};

const defaultClassName =
  'block px-2 py-2 my-2 text-sm tracking-widest rounded-md text-gray-600 font-light transition ease-in-out duration-150 hover:bg-gray-300 hover:text-secondary dark:hover:bg-gray-800 dark:hover:text-secondary-dark focus:outline-hidden focus:bg-gray-400 dark:focus:bg-black"';

const activeClassName =
  'block px-2 py-2 my-2 text-sm tracking-widest rounded-md text-secondary font-light transition ease-in-out duration-150 bg-gray-300 dark:bg-black hover:bg-gray-400 dark:hover:bg-gray-800 dark:hover:text-secondary-dark focus:outline-hidden focus:bg-gray-400 dark:focus:bg-black';

function OperationCatLink(props: Readonly<PropsWithChildren<OperationCatLinkProps>>): JSX.Element {
  const { active, href, children } = props;
  return (
    <Link href={href} className={active ? activeClassName : defaultClassName}>
      {children}
    </Link>
  );
}
export default OperationCatLink;
