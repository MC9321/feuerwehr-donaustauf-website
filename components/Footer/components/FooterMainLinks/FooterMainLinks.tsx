import { NavMenuItem } from '@/components/types/Menu/Menu';
import Link from 'next/link';
import { JSX } from 'react';

interface FooterMainLinksProps {
  menuItems: NavMenuItem[];
}

function FooterMainLinks(props: Readonly<FooterMainLinksProps>): JSX.Element {
  const { menuItems } = props;

  return (
    <div className="mt-6 mb-6 grid grid-cols-1 gap-4 text-gray-400 sm:grid-cols-4">
      {menuItems
        .filter(item => !item.hideFooter)
        .map(item => (
          <div key={`footer-main-item-${item.id ?? item.activeMenuName}`} className="mb-6">
            <Link href={item.href} target={item.target} className="pt-2 pr-2 pb-2 text-sm text-gray-300 hover:underline">
              {item.children}
            </Link>
            {item.subMenue && (
              <ul className="mt-6">
                {item.subMenue
                  .filter(item => !item.hideFooter)
                  .map(subItem => (
                    <li key={subItem.id ?? subItem.activeMenuName} className="pt-1 pr-1 pb-2">
                      <Link href={subItem.href} target={subItem.target} className="text-xs hover:underline">
                        {subItem.children}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        ))}
    </div>
  );
}

export default FooterMainLinks;
