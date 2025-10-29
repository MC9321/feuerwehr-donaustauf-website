/* eslint-disable @next/next/no-img-element */
import { JSX, PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';

interface HeadlineTextElementProps {
  headline: ReactNode;
  imgSrc?: string;
}

function HeadlineTextElement(props: Readonly<PropsWithChildren<HeadlineTextElementProps>>): JSX.Element {
  const { headline, imgSrc, children } = props;

  return (
    <div>
      {imgSrc && <img src={imgSrc} width="100%" className="images-dark" alt={headline as string} />}
      <h3 className={cn('text-lg tracking-tight text-gray-900 sm:text-xl lg:text-2xl lg:font-medium dark:text-gray-200', { 'mt-4': imgSrc })}>{headline}</h3>
      <div className="my-4 text-sm font-light lg:text-base lg:font-normal">{children}</div>
    </div>
  );
}
export default HeadlineTextElement;
