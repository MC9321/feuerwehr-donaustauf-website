'use client';

import { JSX } from 'react';
import PageMenuLink from '@/components/PageMenuLink';
import { FfPageSection } from '@/components/FfPageSection';

function Verein(): JSX.Element {
  return (
    <FfPageSection headline="Verein" id="verein">
      <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PageMenuLink href="/verein/vorstandschaft/" name="Vorstandschaft" image="/assets/images/menu/verein-vorstandschaft.png">
          Hier stellen wir das Vorstandsteam unseres Feuerwehrvereins vor.
        </PageMenuLink>
        <PageMenuLink href="/verein/satzung/" name="Satzung" image="/assets/images/menu/verein-satzung.jpg">
          Unsere Satzung regelt Organisation, Ziele und Rechte unseres Feuerwehrvereins. Hier finden Sie die wichtigsten Informationen und Bestimmungen.
        </PageMenuLink>
        <PageMenuLink href="/verein/chronik/" name="Chronik" image="/assets/images/menu/verein-chronik.jpg">
          Unsere Chronik dokumentiert die Geschichte und Entwicklung unseres Feuerwehrvereins.
        </PageMenuLink>
        <PageMenuLink href="/verein/beitritt/" name="Mitglied werden" image="/assets/images/menu/verein-beitritt.jpg">
          Sie interessieren sich für eine Mitgliedschaft in unserer Feuerwehr?
        </PageMenuLink>
      </div>
    </FfPageSection>
  );
}

export default Verein;
