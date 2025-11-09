import { JSX } from 'react';
import NavBarLink from '../NavBarLink';
import NavBarFlyout from '../NavBarFlyout';
import { NavMenuItem } from '@/components/types/Menu/Menu';

interface HeaderBarProps {
  activeMenu?: string;
  navMenuItems: NavMenuItem[];
}

function HeaderBar(props: Readonly<HeaderBarProps>): JSX.Element {
  const { navMenuItems, activeMenu } = props;

  return (
    <div className="inline-flex items-center justify-center space-x-6 bg-secondary px-4 py-1 dark:bg-black">
      {navMenuItems.map(item => {
        if (item.subMenue && item.subMenue.length > 0) {
          return <NavBarFlyout key={`main-menu-${item.activeMenuName}`} item={item} activeMenu={activeMenu} />;
        }
        return (
          <NavBarLink key={`main-menu-${item.activeMenuName}`} href={item.href} activeMenuName={item.activeMenuName} activeMenu={activeMenu}>
            {item.children}
          </NavBarLink>
        );
      })}
    </div>
  );
}

export default HeaderBar;
