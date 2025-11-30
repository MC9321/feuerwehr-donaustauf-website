import { UrlObject } from 'node:url';

import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

type Url = string | UrlObject;

interface NavMenuItem {
  children: ReactNode;
  href: Url;
  activeMenuName?: string;
  target?: HTMLAttributeAnchorTarget;
  subMenue?: NavMenuItem[];
  id?: string;
  hideFooter?: boolean;
}

interface ActiveMenuItem {
  activeMenu?: string;
}

interface NavMenu extends Omit<NavMenuItem, 'id'>, ActiveMenuItem {
  id?: string;
}

interface AppMenu {
  main: NavMenuItem[];
  footer: NavMenuItem[];
}

export type { ActiveMenuItem, AppMenu, NavMenu, NavMenuItem, Url };
