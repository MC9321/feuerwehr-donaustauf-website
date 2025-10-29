import { JSX, ReactNode } from 'react';
import { NavMenuItem } from '@/components/types/Menu/Menu';
import FooterLink from '@/components/Footer/FooterLink';

interface FooterProps {
  text: ReactNode;
  menuItems: NavMenuItem[];
}

function Footer(props: Readonly<FooterProps>): JSX.Element {
  const { text, menuItems } = props;
  return (
    <footer className="w-full bg-gray-800 py-6 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between sm:flex-row md:flex-wrap">
          <div className="order-2 flex items-center lg:order-1">
            <div className="my-8 text-center text-xs font-thin text-gray-400 md:my-0 md:text-left md:text-sm">{text}</div>
          </div>
          <div className="order-1 flex flex-col md:grow md:flex-row md:items-stretch md:justify-end">
            <span className="text-center md:text-left">
              <a
                href="https://www.facebook.com/feuerwehrdonaustauf/"
                target="_blank"
                rel="nofollow noreferrer"
                className="my-2 inline-flex items-center justify-center rounded-md px-2 py-2 text-sm tracking-widest text-gray-400 shadow-xs transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-600 focus:outline-hidden sm:my-0 dark:hover:bg-gray-800 dark:focus:bg-gray-700"
              >
                <svg className="block h-5 w-5" viewBox="0 0 77.809997 156.31039" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m64.13 24.850402c-9.65 0-12.44 4.28-12.44 13.72v15.66h25.739997l-2.58 25.299997h-23.149997v76.780001h-30.89v-76.780001h-20.81v-25.299997h20.81v-15.23c0-25.52 10.29-38.99999996 39-38.99999996a146.17 146.17 0 0 1 17.999997 1.06999996v23.81z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </span>
            {menuItems.map((item, i) => {
              return (
                <span key={'footer' + i} className="text-center md:text-left">
                  {<span className="mx-1 hidden text-gray-600 md:inline">|</span>}
                  <FooterLink href={item.href} target={item.target}>
                    {item.children}
                  </FooterLink>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
