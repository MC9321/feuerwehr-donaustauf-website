import { AppMenu } from '@/components/types/Menu/Menu';

export const MenuData: AppMenu = {
  main: [
    {
      id: 'feuerwehr',
      children: 'Feuerwehr',
      href: '/feuerwehr/',
      activeMenuName: 'feuerwehr',
      subMenue: [
        {
          id: 'feuerwehr-mannschaft',
          children: 'Mannschaft',
          href: '/feuerwehr/mannschaft/',
        },
        {
          id: 'feuerwehr-einsaetze',
          children: 'Einsätze',
          href: '/feuerwehr/einsaetze/',
        },
        {
          id: 'feuerwehr-jugend',
          children: 'Jugend',
          href: '/feuerwehr/jugend/',
        },
        {
          id: 'feuerwehr-beitritt',
          children: 'Mitglied werden',
          href: '/feuerwehr/beitritt/',
        },
      ],
    },
    {
      id: 'first-responder',
      children: 'First Responder',
      href: '/first-responder/',
      activeMenuName: 'first-responder',
      subMenue: [
        {
          id: 'first-responder-informationen',
          children: 'Informationen',
          href: '/first-responder/informationen/',
        },
        {
          id: 'first-responder-einsaetze',
          children: 'Einsätze',
          href: '/first-responder/einsaetze/',
        },
        {
          id: 'first-responder-spenden',
          children: 'Spenden',
          href: '/first-responder/spenden/',
        },
      ],
    },
    {
      id: 'verein',
      children: 'Verein',
      href: '/verein/',
      activeMenuName: 'verein',
      subMenue: [
        {
          id: 'verein-satzung',
          children: 'Satzung',
          href: '/verein/satzung/',
        },
        {
          id: 'verein-chronik',
          children: 'Chronik',
          href: '/verein/chronik/',
        },
        {
          id: 'verein-beitritt',
          children: 'Mitglied werden',
          href: '/verein/beitritt/',
        },
      ],
    },
    {
      id: 'kontakt',
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
