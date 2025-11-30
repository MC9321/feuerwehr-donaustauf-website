'use client';

import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import PageMenuLink from '@/components/PageMenuLink';

function FirstResponder(): JSX.Element {
  return (
    <FfPageSection headline="First Responder" id="first-responder">
      <nav aria-label="First Responder Bereiche" className="mb-4 grid-cols-1 sm:col-span-8 lg:col-span-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PageMenuLink href="/first-responder/informationen/" name="Informationen" image="/assets/images/menu/first-responder-einsatz.jpg">
            Was ist und was macht ein First Responder bei der Feuerwehr Donaustauf?
          </PageMenuLink>
          <PageMenuLink href="/first-responder/einsaetze/" name="Einsätze" image="/assets/images/menu/first-responder-einsatz.jpg">
            Unsere First Responder sind rund um die Uhr für schnelle medizinische Erstversorgung bei Notfällen im Einsatz, bis der Rettungsdienst vor Ort ist. Hier finden Sie aktuelle Informationen zu unseren Einsätzen.
          </PageMenuLink>
          <PageMenuLink href="/first-responder/fahrzeug/" name="Technik" image="/assets/images/menu/feuerwehr-fahrzeuge-79-1.jpg">
            First Responder Fahrzeug Florian Donaustauf 79/1.
          </PageMenuLink>
          <PageMenuLink href="/first-responder/spenden/" name="Spenden" image="/assets/images/menu/first-responder-spenden.jpg">
            Unterstützen Sie die First Responder Einheit mit einer Spende.
          </PageMenuLink>
        </div>
      </nav>
    </FfPageSection>
  );
}

export default FirstResponder;
