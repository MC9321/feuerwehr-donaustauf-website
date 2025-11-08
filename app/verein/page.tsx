'use client';

import { JSX } from 'react';
import { PageSection } from '@salzpate/react-ui';
import PageMenuLink from '@/components/PageMenuLink';

function Verein(): JSX.Element {
  return (
    <PageSection headline="Verein" id="verein">
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PageMenuLink href="/verein/vorstandschaft/" name="Vorstandschaft" image="/assets/images/menu/verein-vorstandschaft.jpg">
          Hier stellen wir das Vorstandsteam unseres Feuerwehrvereins vor.
        </PageMenuLink>
        <PageMenuLink href="/verein/chronik/" name="Chronik" image="/assets/images/menu/verein-chronik.jpg">
          Unsere Chronik dokumentiert die Geschichte und Entwicklung unseres Feuerwehrvereins.
        </PageMenuLink>
        <PageMenuLink href="/verein/satzung/" name="Satzung" image="/assets/images/menu/verein-satzung.jpg">
          Unsere Satzung regelt Organisation, Ziele und Rechte unseres Feuerwehrvereins. Hier finden Sie die wichtigsten Informationen und Bestimmungen.
        </PageMenuLink>
      </div>
    </PageSection>
  );
}

export default Verein;
