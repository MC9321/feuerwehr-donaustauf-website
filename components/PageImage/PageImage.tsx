import Image from 'next/image';
import { JSX, PropsWithChildren } from 'react';

import { cn } from '@/lib/cn';

interface PageImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  alternate?: boolean;
}

function PageImage(props: Readonly<PropsWithChildren<PageImageProps>>): JSX.Element {
  const { src, alt, width, height, fill, className, alternate, children } = props;

  return (
    <div className={cn('inline-block p-2', { 'bg-gray-100 dark:bg-gray-900': !alternate, 'bg-white dark:bg-black': alternate }, className)}>
      <Image src={src} alt={alt} width={width} height={height} fill={fill} />
      <div className="mt-2 text-xs">{children}</div>
    </div>
  );
}

export default PageImage;
