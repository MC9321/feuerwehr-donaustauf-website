import { JSX } from 'react';

export function Themefix(): JSX.Element {
  return (
    <>
      <div>d</div>
      <div>d</div>
      <div>d</div>
      <div>d</div>
      <div>d</div>
      <div className="text-primary">--color-primary: #ffffff;</div>
      <div className="text-secondary">--color-secondary: #8b2000;</div>
      <div className="dark:text-secondary-dark">--color-secondary-dark: #f44336;</div>
      <div className="text-header">--color-header: rgba(23, 23, 23, 1);</div>
      <div className="text-link">--color-link: #8b2000;</div>
      <div className="dark:text-link-dark">--color-link-dark: #8b2000;</div>
      <div className="dark:hover:text-link-dark-hover">--color-link-dark-hover: #f3f4f6;</div>
      <div className="text-heading">--color-heading: rgba(23, 23, 23, 1);</div>
      <div className="dark:text-heading-dark">--color-heading-dark: #ffffff;</div>
      <div className="text-paragraph">--color-paragraph: #101828;</div>
      <div className="dark:text-paragraph-dark"> --color-paragraph-dark: #d1d5dc;</div>
      <div className="text-alternate">--color-alternate: #007cc2;</div>
    </>
  );
}
