import { AppMenu } from '@/components/types/Menu/Menu';

export const MenuData: AppMenu = {
  main: [
    {
      children: 'Feuerwehr',
      href: '/feuerwehr/',
      activeMenuName: 'feuerwehr',
    },
    {
      children: 'First Responder',
      href: '/first-responder/',
      activeMenuName: 'first-responder',
    },
    {
      children: 'Verein',
      href: '/verein/',
      activeMenuName: 'verein',
    },
    {
      children: 'Kontakt',
      href: '/kontakt/',
      activeMenuName: 'kontakt',
    },
  ],
  footer: [
    {
      children: 'Spenden',
      href: '/spenden/',
      activeMenuName: 'spenden',
    },
    {
      children: 'Datenschutz',
      href: '/datenschutz/',
      activeMenuName: 'datenschutz',
    },
    {
      children: 'Impressum',
      href: '/impressum/',
      activeMenuName: 'impressum',
    },
  ],
};
