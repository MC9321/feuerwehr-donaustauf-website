import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import CloudinaryPageImage from '@/components/Image/CloudinaryPageImage';

function AudiContent(): JSX.Element {
  return (
    <FfPageSection headline="Einsatzfahrzeug" id="einsatzfahrzeug" className="pb-6 sm:pb-8">
      <h2 className="text-xl font-medium tracking-tight text-heading uppercase sm:text-2xl lg:text-3xl dark:text-heading-dark">
        Florian Donaustauf 79/1
      </h2>

      <div className="pt-4 text-sm font-light sm:pt-6 md:inline-flex lg:pt-8 lg:text-base lg:font-normal">
        <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
          <div>
            Unser First Responder-Team verfügt über ein modernes Einsatzfahrzeug, das speziell für die Anforderungen im Feuerwehr- und Rettungsdienst
            ausgerüstet wurde. Dabei handelt es sich um einen Audi Q5 Quattro, der von der Firma Audi bereits komplett einsatzfertig geliefert und
            individuell an unsere Bedürfnisse angepasst wurde.
          </div>
          <div className="mt-2">
            Der Wagen wird in erster Linie für First-Responder-Einsätze genutzt und unterstützt uns dabei, bei medizinischen Notfällen schnell vor Ort
            zu sein. Wenn das Fahrzeug verfügbar ist, dient es darüber hinaus als Kommandowagen (KdoW) bei Feuerwehreinsätzen.
          </div>
          <div className="mt-2">
            Die Anschaffung und der laufende Unterhalt des Fahrzeugs werden vollständig durch die Freiwillige Feuerwehr Donaustauf e. V. finanziert.
            Dank der großzügigen Unterstützung unserer Bürgerinnen und Bürger, zahlreicher Spenden sowie der erfolgreichen Haussammlung konnte die
            Finanzierung des neuen Audi Q5 gesichert werden. Auch der Verkauf des bisherigen Fahrzeugs hat einen wichtigen Beitrag dazu geleistet.
          </div>
          <div className="mt-2">
            Mit diesem leistungsstarken Einsatzfahrzeug sind wir bestens ausgerüstet, um im Ernstfall schnell, effektiv und zuverlässig zu helfen –
            für die Sicherheit unserer Gemeinde und zum Schutz von Menschenleben.
          </div>
        </div>

        <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
          <CloudinaryPageImage src="einsatzfahrzeug_gjowy5" width={405} height={227} alt="Florian Donaustauf 79/1">
            Audi Q5 – Florian Donaustauf 79/1
          </CloudinaryPageImage>
        </div>
      </div>

      <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">
        Fahrzeugdaten
      </h3>
      <ul className="list-disc pl-8">
        <li>
          <span className="font-bold">Fahrgestell:</span> Audi Q5 Quattro
        </li>
        <li>
          <span className="font-bold">Herstellungsdatum:</span> 03/2022
        </li>
        <li>
          <span className="font-bold">Hubraum:</span> 1968 cm²
        </li>
        <li>
          <span className="font-bold">Leistung:</span> 150 kW bei 3.800 1/min
        </li>
        <li>
          <span className="font-bold">Zulässiges Gesamtgewicht:</span> 2510 kg
        </li>
        <li>Designbeklebung durch Firma Design 112</li>
      </ul>

      <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">
        Beladung, Ausstattung und Ausrüstung (Auszug)
      </h3>

      <ul>
        <li>
          <span className="font-bold">Aufbauhersteller:</span> Audi, Eigen (KdoW)
        </li>
      </ul>

      <ul className="mt-4 list-disc pl-8">
        <li>First Responder Rucksack</li>
        <li>Kindernotfalltasche</li>
        <li>Sauerstofftasche</li>
        <li>Ersatzsauerstoffflasche</li>
        <li>230 Volt Einspeisung mit Heizung</li>
        <li>Hänsch DBS 5000</li>
        <li>LED Frontblitzer im Kühlergrill</li>
        <li>LED Blitzer in der Kofferraumklappe (blau und gelb)</li>
        <li>Fußtaster für Einsatzhorn</li>
        <li>Freisprecheinrichtung für Digitalfunk</li>
        <li>Rückfahrkamera</li>
        <li>Luftfederung</li>
        <li>Hochsichtbare Designbeklebung</li>
        <li>Navigationssystem mit Routing durch ILS und Einsatzversand direkt auf das Display</li>
        <li>Eingaswarngerät CO</li>
        <li>RLS 2000 mobiles Lichtsystem LED – Rosenbauer</li>
        <li>Motorola HRT mit Ladeerhaltung (Digitalfunk)</li>
        <li>Halligan Tool</li>
        <li>Funk Rauchmelder mit SIM-Karte</li>
        <li>Feuerlöscher ABF</li>
        <li>Bolzenschneider</li>
        <li>Handsäge</li>
        <li>Infektionsschutzausrüstung</li>
      </ul>
    </FfPageSection>
  );
}

export default AudiContent;
