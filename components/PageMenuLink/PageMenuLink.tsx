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
    <article>
      <Link href={href} id={id} className={[styles.link, 'rounded-lg'].join(' ')}>
        <figure className="relative">
          <Image src={image} alt={name} width={WIDTH} height={HEIGHT} className="images-dark aspect-2/1 object-cover" />
        </figure>
        <div className="h-full p-4">
          <h3 className="text-base font-medium text-secondary uppercase sm:text-lg md:text-xl lg:text-2xl dark:text-secondary-dark">{name}</h3>
          <p className="mt-2 hidden h-full text-sm font-light md:block">{children}</p>
        </div>
      </Link>
    </article>
  );
}
export default PageMenuLink;
