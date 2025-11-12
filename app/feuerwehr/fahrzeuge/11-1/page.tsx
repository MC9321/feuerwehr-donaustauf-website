import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import CloudinaryImage from '@/components/Image/CloudinaryImage';

function FeuerwehrFahrzeuge111(): JSX.Element {
  return (
    <article>
      <FfPageSection headline="Mehrzweckfahrzeug" id="mehrzweckfahrzeug" className="pb-6 sm:pb-8">
        <h2 className="text-xl font-medium tracking-tight text-heading uppercase sm:text-2xl lg:text-3xl dark:text-heading-dark">Florian Donaustauf 11/1</h2>
        <div className="pt-4 text-sm font-light sm:pt-6 md:inline-flex lg:pt-8 lg:text-base lg:font-normal">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <div>
              Das Mehrzweckfahrzeug (MZF) ist mit modernen Kommunikationsmitteln und umfangreicher Ausrüstung zur Führung taktischer Einheiten ausgestattet. Es dient der Einsatzleitung zur raschen Anfahrt und Erkundung von Einsatzstellen.
            </div>
            <div className="mt-2">
              Als erstes Fahrzeug, das im Alarmfall das Feuerwehrgerätehaus verlässt, bringt das MZF den Einsatzleiter und den Zugtrupp direkt zur Einsatzstelle. Dort verschaffen sie sich einen Überblick über die Lage und können so den
              nachrückenden Kräften ohne Zeitverlust gezielte Einsatzaufträge erteilen.
            </div>
          </div>
          <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
            <CloudinaryImage src="mfz-11-1_qlxhtv" width={405} height={227} alt="Florian Donaustauf 11/1" caption="Florian Donaustauf 11/1" enableOverlay overlayHeight={600} overlayWidth={800} />
          </div>
        </div>
        <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Fahrzeugdaten</h3>
        <ul className="list-disc pl-8">
          <li>
            <span className="font-bold">Fahrgestell:</span> Mercedes Sprinter 316
          </li>
          <li>
            <span className="font-bold">Baujahr Fahrgestell:</span> 2018
          </li>
          <li>
            <span className="font-bold">Baujahr Aufbau:</span> 2019
          </li>
          <li>
            <span className="font-bold">Zulässiges Gesamtgewicht:</span> 3,5 t
          </li>
          <li>Automatikgetriebe</li>
          <li>LED-Fahrzeugfrontscheinwerfer</li>
          <li>Standheizung</li>
        </ul>
        <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Feuerwehrtechnische Beladung und Ausrüstung (Auszug)</h3>
        <ul>
          <li>
            <span className="font-bold">Aufbauhersteller:</span> Furtner und Ammer Landau
          </li>
          <li>
            <span className="font-bold">Mannschaft:</span> 1/5 Staffel (6 Personen)
          </li>
        </ul>
        <ul className="mt-4 list-disc pl-8">
          <li>First Responder Rucksäcke</li>
          <li>Kindernotfalltasche</li>
          <li>Ersatzsauerstoffflasche</li>
          <li>230 Volt Einspeisung mit Heizung</li>
          <li>Hänsch DBS 5000</li>
          <li>LED Frontblitzer&nbsp;im Kühlergrill</li>
          <li>LED Blitzer in der Kofferraumklappe Blau und Gelb</li>
          <li>Fußtaster für Einsatzhorn</li>
          <li>Freisprecheinrichtung für Digitalfunk</li>
          <li>Rückfahrkamera</li>
          <li>Luftfederung</li>
          <li>Hochsichtbare Designbeklebung</li>
          <li>Navigationssystem mit Routing durch ILS und Einsatzversand direkt auf das Display.&nbsp;</li>
          <li>Eingaswarngerät CO</li>
          <li>RLS 2000 mobiles Lichtsystem LED - Rosenbauer</li>
          <li>Motorola HRT mit Ladeerhaltung Digitalfunk</li>
          <li>Halligan Tool</li>
          <li>Funk Rauchmelder mit SIM-Karte</li>
          <li>Feuerlöscher ABF</li>
          <li>Bolzenschneider</li>
          <li>Handsäge</li>
          <li>Infektionsschutzausrüstung</li>
        </ul>
        <div className="mt-4">
          <span className="font-bold">Sonstige Beladung:</span>
        </div>
        <ul className="mt-2 list-disc pl-8">
          <li>Datensatz mit Objektdaten, Karten und Einsatzpläne</li>
          <li>Warnwesten</li>
          <li>Leinenbeutel</li>
          <li>Decke</li>
          <li>Akkuschrauber</li>
        </ul>
      </FfPageSection>
    </article>
  );
}

export default FeuerwehrFahrzeuge111;
