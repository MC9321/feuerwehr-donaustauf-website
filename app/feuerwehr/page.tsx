'use client';

import { JSX } from 'react';
import PageMenuLink from '@/components/PageMenuLink';
import { FfPageSection } from '@/components/FfPageSection';

function Feuerwehr(): JSX.Element {
  return (
    <FfPageSection headline="Feuerwehr" id="feuerwehr">
      <div className="mb-4 grid-cols-1 sm:col-span-8 lg:col-span-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PageMenuLink href="/feuerwehr/mannschaft/" name="Mannschaft" image="/assets/images/menu/feuerwehr-mannschaft.png">
            Unser Team aus ausgebildeten Einsatzkräften arbeitet gemeinsam in festen Funktionen, um den Feuerwehralltag effektiv zu bewältigen.
          </PageMenuLink>
          <PageMenuLink href="/feuerwehr/einsaetze/" name="Einsätze" image="/assets/images/menu/feuerwehr-einsatz.jpg">
            Unsere Feuerwehr ist 24/7 im Einsatz für Brände, technische Hilfe und Verkehrssicherheit. Hier finden Sie aktuelle Informationen zu unseren Einsätzen.
          </PageMenuLink>
          <PageMenuLink href="/feuerwehr/jugend/" name="Jugendfeuerwehr" image="/assets/images/menu/feuerwehr-jugend.jpg">
            In der Jugendfeuerwehr lernen Kinder und Jugendliche die Arbeit der Feuerwehr kennen – mit Spaß, Teamgeist und spannenden Aktionen.
          </PageMenuLink>
          <PageMenuLink href="/feuerwehr/fahrzeuge/" name="Fahrzeuge" image="/assets/images/menu/feuerwehr-fahrzeuge.jpg">
            Ein Überblick über unsere Einsatzfahrzeuge – von modernen Löschfahrzeugen bis zu unserem First Responder.
          </PageMenuLink>
          <PageMenuLink href="/feuerwehr/beitritt/" name="Mitglied werden" image="/assets/images/menu/verein-beitritt.jpg">
            Sie interessieren sich für eine Mitgliedschaft in unserer Feuerwehr?
          </PageMenuLink>
        </div>
      </div>
    </FfPageSection>
  );
}

export default Feuerwehr;
