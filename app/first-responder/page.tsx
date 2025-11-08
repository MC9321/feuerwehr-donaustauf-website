'use client';

import { JSX } from 'react';
import { PageSection } from '@salzpate/react-ui';
import PageMenuLink from '@/components/PageMenuLink';

function FirstResponder(): JSX.Element {
  return (
    <PageSection headline="First Responder" id="first-responder">
      <div className="mb-4 grid-cols-1 sm:col-span-8 lg:col-span-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PageMenuLink href="/first-responder/einsaetze/" name="Einsätze" image="/assets/images/menu/einsatz-fr.jpg">
            Unsere First Responder sind rund um die Uhr für schnelle medizinische Erstversorgung bei Notfällen im Einsatz, bis der Rettungsdienst vor Ort ist. Hier finden Sie aktuelle Informationen zu unseren Einsätzen.
          </PageMenuLink>
        </div>
      </div>
    </PageSection>
  );
}

export default FirstResponder;
