import { JSX, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './HeaderImage.module.css';
import Image from 'next/image';

interface HeaderImageProps {
  imageClass?: string;
}

function HeaderImage(props: Readonly<PropsWithChildren<HeaderImageProps>>): JSX.Element {
  const { imageClass, children } = props;

  if (children) {
    return (
      <>
        <div className={cn(styles.image, 'bg-transparent bg-cover bg-scroll bg-center bg-no-repeat', imageClass)}>{children}</div>
        <div className="h-1 bg-secondary dark:bg-black" />
      </>
    );
  } else {
    return (
      <>
        <div className={cn(styles.image, 'bg-transparent bg-cover bg-scroll bg-center bg-no-repeat', imageClass)}>
          <div className="flex flex-wrap">
            <section className="absolute w-full">
              <div className="relative mt-4 w-full sm:mt-4">
                <div className="flex flex-col items-end">
                  <div className="mr-2 grow">
                    <Image src="/assets/images/header-logo.png" width={70} height={80} alt="FEUERWEHR MARKT DONAUSTAUF" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="h-1 bg-secondary dark:bg-black" />
      </>
    );
  }
}

export default HeaderImage;
