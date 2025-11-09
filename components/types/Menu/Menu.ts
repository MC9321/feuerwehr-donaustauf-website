import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { UrlObject } from 'node:url';

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

export type { Url, NavMenuItem, ActiveMenuItem, NavMenu, AppMenu };
