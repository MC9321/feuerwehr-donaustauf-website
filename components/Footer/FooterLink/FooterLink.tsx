import { JSX } from 'react';

import Link from 'next/link';

import { NavMenu } from '@/components/types/Menu/Menu';

function FooterLink(props: Readonly<NavMenu>): JSX.Element {
  const { href, children, target } = props;

  return (
    <Link
      href={href}
      target={target}
      className="my-2 inline-flex items-center justify-center rounded-md px-2 py-2 text-sm tracking-widest text-gray-400 shadow-xs transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-600 focus:outline-hidden sm:my-0 dark:hover:bg-gray-800 dark:focus:bg-gray-700"
    >
      {children}
    </Link>
  );
}

export default FooterLink;
