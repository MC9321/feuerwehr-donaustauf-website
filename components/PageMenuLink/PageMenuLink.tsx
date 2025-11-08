import { JSX, PropsWithChildren } from 'react';
import Link from 'next/link';
import styles from './PageMenuLink.module.css';
import Image from 'next/image';
import type { UrlObject } from 'node:url';

type Url = string | UrlObject;

const WIDTH = 480;
const HEIGHT = 240;

export type PageMenuLinkProps = {
  id?: string;
  image: string;
  name: string;
  href: Url;
};

function PageMenuLink(props: Readonly<PropsWithChildren<PageMenuLinkProps>>): JSX.Element {
  const { name, id, image, href, children } = props;

  return (
    <Link href={href} id={id} className={[styles.link, 'rounded-lg'].join(' ')}>
      <div className="relative">
        <Image src={image} alt={name} width={WIDTH} height={HEIGHT} />
      </div>
      <div className="h-full p-4">
        <h3 className="text-lg font-medium text-secondary uppercase sm:text-xl lg:text-2xl dark:text-secondary-dark">{name}</h3>
        <div className="mt-2 h-full text-sm font-light">{children}</div>
      </div>
      <div className="p-4">
        <span className="text-sm font-extralight tracking-widest text-secondary uppercase dark:text-secondary-dark">MEHR</span>
      </div>
    </Link>
  );
}
export default PageMenuLink;
