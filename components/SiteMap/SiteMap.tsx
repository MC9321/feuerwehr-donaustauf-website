import Link from 'next/link';
import { JSX } from 'react';

import { NavMenuItem } from '@/components/types/Menu/Menu';

import ChevronRightSvgIcon from '../SvgIcons/ChevronRightSvgIcon';

interface SiteMapProps {
  menuItems: NavMenuItem[];
  title?: string;
  compact?: boolean;
}

function SiteMap({ menuItems, title = 'Sitemap', compact = false }: Readonly<SiteMapProps>): JSX.Element {
  const renderMenuItem = (item: NavMenuItem, level = 0) => {
    const hasChildren = item.subMenue && item.subMenue.length > 0;
    const indent = level > 0 ? `ml-${level * 4}` : '';

    return (
      <div key={item.id} className={compact ? '' : 'mb-2'}>
        <Link href={item.href} className={`inline-flex items-center py-2 text-link hover:underline dark:text-link-dark ${indent} ${level === 0 ? 'font-medium uppercase' : ''}`}>
          {level > 0 && (
            <span className="mr-2 text-gray-400">
              <ChevronRightSvgIcon />
            </span>
          )}
          {item.children}
        </Link>
        {hasChildren && <div className={compact ? 'ml-2' : 'mt-1 ml-3'}>{item.subMenue?.map(subItem => renderMenuItem(subItem, level + 1))}</div>}
      </div>
    );
  };

  return (
    <nav aria-label={title} className="bg-gray-50 p-6 dark:bg-gray-900">
      <h3 className="mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">{title}</h3>
      <div className={compact ? 'space-y-1' : 'space-y-2'}>{menuItems.map(item => renderMenuItem(item))}</div>
    </nav>
  );
}

export default SiteMap;
