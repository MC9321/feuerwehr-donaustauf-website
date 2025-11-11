'use client';

import { FfPageSection } from '@/components/FfPageSection';
import PageMenuLink from '@/components/PageMenuLink';
import { JSX } from 'react';

function BesondereEinsaetze(): JSX.Element {
  return (
    <FfPageSection headline="Besondere Einsätze" id="besondere-einsaetze">
      <div className="mb-4 grid-cols-1 sm:col-span-8 lg:col-span-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PageMenuLink href="/feuerwehr/besondere-einsaetze/grossbrand-06102025/" name="Großbrand am 06.10.2025" image="/assets/images/menu/feuerwehr-besondere-einsatz.jpg">
            Pressebericht zum verheerenden Brand des Jagdschlosses Thiergarten am 06. Oktober 2025.
          </PageMenuLink>
        </div>
      </div>
    </FfPageSection>
  );
}

export default BesondereEinsaetze;
