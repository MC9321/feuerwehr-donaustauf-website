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
          id: 'feuerwehr-fahrzeuge',
          children: 'Fahrzeuge',
          href: '/feuerwehr/fahrzeuge/',
          subMenue: [
            {
              id: 'feuerwehr-fahrzeuge-11-1',
              children: 'Mehrzweckfahrzeug',
              href: '/feuerwehr/fahrzeuge/11-1',
            },
            {
              id: 'feuerwehr-fahrzeuge-40-1',
              children: 'HLF 20',
              href: '/feuerwehr/fahrzeuge/40-1',
            },
            {
              id: 'feuerwehr-fahrzeuge-56-1',
              children: 'Gerätewagen Logistik 2',
              href: '/feuerwehr/fahrzeuge/56-1',
            },
            {
              id: 'feuerwehr-fahrzeuge-59-1',
              children: 'Utility Task Vehicle',
              href: '/feuerwehr/fahrzeuge/59-1',
            },
            {
              id: 'feuerwehr-fahrzeuge-79-1',
              children: 'First Responder',
              href: '/feuerwehr/fahrzeuge/79-1',
            },
            {
              id: 'feuerwehr-fahrzeuge-99-1',
              children: 'Mehrzweckboot 60',
              href: '/feuerwehr/fahrzeuge/99-1',
            },
          ],
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
          id: 'first-responder-fahrzeug',
          children: 'Fahrzeug',
          href: '/first-responder/fahrzeug/',
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
          id: 'verein-vorstandschaft',
          children: 'Vorstandschaft',
          href: '/verein/vorstandschaft/',
        },
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
