import { JSX } from 'react';
import Link from 'next/link';
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
        <Link href={item.href} className={`inline-flex items-center text-link hover:underline dark:text-link-dark ${indent} ${level === 0 ? 'font-medium uppercase' : ''}`}>
          {level > 0 && (
            <span className="mr-2 text-gray-400">
              <ChevronRightSvgIcon />
            </span>
          )}
          {item.children}
        </Link>
        {hasChildren && <div className={compact ? 'ml-4' : 'mt-1 ml-6'}>{item.subMenue?.map(subItem => renderMenuItem(subItem, level + 1))}</div>}
      </div>
    );
  };

  return (
    <nav aria-label={title} className="bg-gray-50 p-6 dark:bg-gray-900">
      <h2 className="mb-4 text-xl font-semibold text-heading dark:text-heading-dark">{title}</h2>
      <div className={compact ? 'space-y-1' : 'space-y-2'}>{menuItems.map(item => renderMenuItem(item))}</div>
    </nav>
  );
}

export default SiteMap;
