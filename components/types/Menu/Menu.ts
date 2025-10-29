import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { UrlObject } from 'url';

type Url = string | UrlObject;

interface NavMenuItem {
  children: ReactNode;
  href: Url;
  activeMenuName?: string;
  target?: HTMLAttributeAnchorTarget;
}

interface ActiveMenuItem {
  activeMenu?: string;
}

interface NavMenu extends NavMenuItem, ActiveMenuItem {}

interface AppMenu {
  main: NavMenuItem[];
  footer: NavMenuItem[];
}

export type { Url, NavMenuItem, ActiveMenuItem, NavMenu, AppMenu };
