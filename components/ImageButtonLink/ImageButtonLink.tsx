/* eslint-disable @next/next/no-img-element */
import { JSX, PropsWithChildren, ReactNode } from 'react';
import Link from 'next/link';
import { Url } from '../types/Menu/Menu';

import styles from './ImageButtonLink.module.css';

interface ImageButtonLinkProps {
  href: Url;
  headline: ReactNode;
  imgSrc?: string;
}

function ImageButtonLink(props: Readonly<PropsWithChildren<ImageButtonLinkProps>>): JSX.Element {
  const { href, headline, imgSrc, children } = props;

  return (
    <Link href={href} className={styles.link + ' button-link'}>
      {imgSrc && <img className="images-dark mr-4 h-auto w-32 shrink-0 rounded-l-lg object-cover object-center" src={imgSrc} alt={headline as string} />}
      <div className="grow">
        <h2 className="title-font pb-1 font-bold text-gray-900 dark:text-gray-200">{headline}</h2>
        <p className="pr-2 text-sm text-gray-500 dark:text-gray-400">{children}</p>
      </div>
    </Link>
  );
}

export default ImageButtonLink;
