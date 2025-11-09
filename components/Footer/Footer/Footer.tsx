import { JSX, ReactNode } from 'react';
import { NavMenuItem } from '@/components/types/Menu/Menu';
import FooterLink from '@/components/Footer/FooterLink';
import FooterMainLinks from '../components/FooterMainLinks';
import FacebookSvgIcon from '@/components/SvgIcons/FacebookSvgIcon';
import InstagramSvgIcon from '@/components/SvgIcons/InstagramSvgIcon';
import FfLogoSvgIcon from '@/components/SvgIcons/FfLogoSvgIcon';

interface FooterProps {
  text: ReactNode;
  menuItems: NavMenuItem[];
  mainMenuItems: NavMenuItem[];
}

function Footer(props: Readonly<FooterProps>): JSX.Element {
  const { text, menuItems, mainMenuItems } = props;
  return (
    <footer className="w-full bg-gray-800 py-6 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FooterMainLinks menuItems={mainMenuItems} />
        <div className="flex flex-col md:flex-row md:items-stretch md:justify-end">
          <div className="mb-2 grow text-center md:mb-0 md:text-left">
            <a
              href="https://www.facebook.com/feuerwehrdonaustauf/"
              target="_blank"
              rel="nofollow noreferrer"
              className="my-2 inline-flex items-center justify-center rounded-md px-2 py-2 text-sm tracking-widest text-gray-400 shadow-xs transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-600 focus:outline-hidden sm:my-0 dark:hover:bg-gray-800 dark:focus:bg-gray-700"
            >
              <FacebookSvgIcon className="block h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/feuerwehrmarktdonaustauf/"
              target="_blank"
              rel="nofollow noreferrer"
              className="my-2 inline-flex items-center justify-center rounded-md px-2 py-2 text-sm tracking-widest text-gray-400 shadow-xs transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-600 focus:outline-hidden sm:my-0 dark:hover:bg-gray-800 dark:focus:bg-gray-700"
            >
              <InstagramSvgIcon className="block h-5 w-5" />
            </a>
          </div>
          <div className="text-center md:text-right">
            {menuItems.map((item, i) => {
              return (
                <span key={'footer' + i}>
                  {i > 0 && <span className="mx-1 inline text-gray-600">|</span>}
                  <FooterLink href={item.href} target={item.target}>
                    {item.children}
                  </FooterLink>
                </span>
              );
            })}
          </div>
        </div>
        <div className="mt-4 border-t border-gray-600">
          <div className="mt-4 flex items-center justify-between text-gray-400 md:flex-wrap">
            <FfLogoSvgIcon height={38} width={107} />
            <div className="mt-4 text-right text-xs font-thin text-gray-400 md:text-sm">{text}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
