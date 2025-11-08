import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import CloudinaryImage from '@/components/Image/CloudinaryImage';

function AudiContent(): JSX.Element {
  return (
    <FfPageSection headline="Einsatzfahrzeug" id="einsatzfahrzeug" className="pb-6 sm:pb-8">
      <h2 className="text-xl font-medium tracking-tight text-heading uppercase sm:text-2xl lg:text-3xl dark:text-heading-dark">Florian Donaustauf 79/1</h2>
      <div className="pt-4 text-sm font-light sm:pt-6 md:inline-flex lg:pt-8 lg:text-base lg:font-normal">
        <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
          <div>
            Unser First Responder-Team verfügt über ein modernes Einsatzfahrzeug, das speziell für die Anforderungen im Feuerwehr- und Rettungsdienst ausgerüstet wurde. Dabei handelt es sich um einen Audi Q5 Quattro, der von der Firma Audi
            bereits komplett einsatzfertig geliefert und individuell an unsere Bedürfnisse angepasst wurde.
          </div>
          <div className="mt-2">
            Der Wagen wird in erster Linie für First-Responder-Einsätze genutzt und unterstützt uns dabei, bei medizinischen Notfällen schnell vor Ort zu sein. Wenn das Fahrzeug verfügbar ist, dient es darüber hinaus als Kommandowagen
            (KDOW) bei Feuerwehreinsätzen.
          </div>
          <div className="mt-2">
            Die Anschaffung und der laufende Unterhalt des Fahrzeugs werden vollständig durch die Freiwillige Feuerwehr Donaustauf e.V. finanziert. Dank der großzügigen Unterstützung unserer Bürgerinnen und Bürger, zahlreicher Spenden sowie
            der erfolgreichen Haussammlung konnte die Finanzierung des neuen Audi Q5 gesichert werden. Auch der Verkauf des bisherigen Fahrzeugs hat einen wichtigen Beitrag dazu geleistet.
          </div>
          <div className="mt-2">
            Mit diesem leistungsstarken Einsatzfahrzeug sind wir bestens ausgerüstet, um im Ernstfall schnell, effektiv und zuverlässig zu helfen – für die Sicherheit unserer Gemeinde und zum Schutz von Menschenleben.
          </div>
        </div>
        <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
          <CloudinaryImage src="https://res.cloudinary.com/dzirm6srd/image/upload/v1762622482/einsatzfahrzeug_gjowy5.jpg" width={405} height={227} alt="Florian Donaustauf 79/1" />
        </div>
      </div>
      <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Fahrzeugdaten</h3>
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
          <span className="font-bold">Zulässiges Gesamtgewicht:</span> 2510 Kg
        </li>
        <li>Designbeklebung durch Firma Design 112</li>
      </ul>
      <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Beladung, Ausstattung und Ausrüstung (Auszug)</h3>
      <ul>
        <li>
          <span className="font-bold">Aufbauhersteller:</span> Audi, Eigen (kdoW)
        </li>
      </ul>
      <ul className="mt-4 list-disc pl-8">
        <li>Handwerkzeug</li>
        <li>Feuerlöscher Pulver 12KG</li>
        <li>6 Digitalfunkhandsprechfunkgeräte</li>
        <li>Handmikrofon für Außendurchsagen</li>
        <li>Handscheinwerfer in LED</li>
        <li>4 Blitzleuchten (Syncroblitz)</li>
        <li>Bolzenschneider</li>
        <li>10 Faltleitkegel</li>
        <li>Brechstange</li>
        <li>Türöffnungswerkzeug</li>
        <li>Erste-Hilfe-Ausrüstung</li>
        <li>Gasmessgerät</li>
        <li>Ausrüstungsmodule zum Beispiel für Unwettereinsätze mit Motorsäge und Wassersauger, individuell beladbar</li>
        <li>Zweite Sprechfunkstelle hinten im Fahrzeug</li>
        <li>Umklappbarer Tisch</li>
        <li>230 Volt Wechselrichter</li>
        <li>Akkuladegerät für Akkuschrauber</li>
        <li>Heckwarneinrichtung LED</li>
        <li>Heckwarnbeklebung hochreflektierend</li>
        <li>Neues Fahrzeugdesign in Donaustauf Optik</li>
      </ul>
    </FfPageSection>
  );
}

export default AudiContent;
