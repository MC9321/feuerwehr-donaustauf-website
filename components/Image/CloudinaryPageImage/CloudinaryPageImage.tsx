import { JSX, PropsWithChildren } from 'react';
import cn from 'classnames';
import CloudinaryImage from '../CloudinaryImage';
import { CloudinaryImageProps } from '../CloudinaryImage/CloudinaryImage';

interface CloudinaryPageImageProps extends Omit<CloudinaryImageProps, 'caption'> {
  alternate?: boolean;
}

function CloudinaryPageImage(props: Readonly<PropsWithChildren<CloudinaryPageImageProps>>): JSX.Element {
  const { alternate, children, className, ...rest } = props;

  return (
    <figure className={cn('inline-block p-2', { 'bg-gray-100 dark:bg-gray-900': !alternate, 'bg-white dark:bg-black': alternate }, className)}>
      <CloudinaryImage {...rest} caption={typeof children === 'string' ? children : undefined} loading="lazy" />
      <figcaption className="mt-2 text-xs">{children}</figcaption>
    </figure>
  );
}

export default CloudinaryPageImage;
