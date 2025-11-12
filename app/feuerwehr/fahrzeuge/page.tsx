'use client';

import { JSX } from 'react';
import PageMenuLink from '@/components/PageMenuLink';
import { FfPageSection } from '@/components/FfPageSection';

function FeuerwehrFahrzeuge(): JSX.Element {
  return (
    <FfPageSection headline="Fahrzeuge" id="fahrzeuge">
      <nav aria-label="Fahrzeuge" className="mb-4 grid-cols-1 sm:col-span-8 lg:col-span-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PageMenuLink href="/feuerwehr/fahrzeuge/11-1" name="Florian Donaustauf 11/1" image="/assets/images/menu/feuerwehr-fahrzeuge-11-1.jpg">
            Mehrzweckfahrzeug
          </PageMenuLink>
          <PageMenuLink href="/feuerwehr/fahrzeuge/40-1" name="Florian Donaustauf 40/1" image="/assets/images/menu/feuerwehr-fahrzeuge-40-1.jpg">
            Hilfeleistungslöschgruppenfahrzeug 20
          </PageMenuLink>
          <PageMenuLink href="/feuerwehr/fahrzeuge/56-1" name="Florian Donaustauf 56/1" image="/assets/images/menu/feuerwehr-fahrzeuge-56-1.jpg">
            Gerätewagen Logistik 2
          </PageMenuLink>
          <PageMenuLink href="/feuerwehr/fahrzeuge/59-1" name="Florian Donaustauf 59/1" image="/assets/images/menu/feuerwehr-fahrzeuge-59-1.jpg">
            Utility Task Vehicle
          </PageMenuLink>
          <PageMenuLink href="/feuerwehr/fahrzeuge/79-1" name="Florian Donaustauf 79/1" image="/assets/images/menu/feuerwehr-fahrzeuge-79-1.jpg">
            First Responder
          </PageMenuLink>
          <PageMenuLink href="/feuerwehr/fahrzeuge/99-1" name="Florian Donaustauf 99/1" image="/assets/images/menu/feuerwehr-fahrzeuge-99-1.jpg">
            Mehrzweckboot 60
          </PageMenuLink>
        </div>
      </nav>
    </FfPageSection>
  );
}

export default FeuerwehrFahrzeuge;
