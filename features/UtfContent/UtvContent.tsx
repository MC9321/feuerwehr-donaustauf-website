import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import CloudinaryImageGalleryImage from '@/components/Image/CloudinaryImageGallery';
import CloudinaryPageImage from '@/components/Image/CloudinaryPageImage';
import { ImageData } from '@/components/ImageOverlay';

interface UtvContentProps {
  images?: ImageData[];
}

function UtvContent({ images }: Readonly<UtvContentProps>): JSX.Element {
  return (
    <article>
      <FfPageSection headline="Utility Task Vehicle" id="vehicle" className="pb-6 sm:pb-8">
        <h2 className="text-xl font-medium tracking-tight text-heading uppercase sm:text-2xl lg:text-3xl dark:text-heading-dark">Florian Donaustauf 59/1</h2>
        <div className="pt-4 text-sm font-light sm:pt-6 md:inline-flex lg:pt-8 lg:text-base lg:font-normal">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <div>
              Das geländegängige Allzweckfahrzeug ist, wie sein Name schon sagt, vielseitig einsetzbar und zeigt seine Stärken besonders in unwegsamem Gelände. Dank seiner umfangreichen Ausstattung und der flexibel anpassbaren, modularen
              Beladung lässt sich das Fahrzeug für eine Vielzahl unterschiedlicher Einsatzszenarien optimal nutzen. Es bietet folgende Einsatzmöglichkeiten:
            </div>
            <ul className="mt-2 list-disc pl-8">
              <li>Personensuchen im Wald und Uferbereichen der Donau</li>
              <li>Erkundungsfahrzeug</li>
              <li>Erstversorgung von Verletzten in schwer zugänglichen Bereichen</li>
              <li>Transport von Patienten auf befahrbares Terrain</li>
              <li>Wald- und Flächenbrände</li>
              <li>Entstehungsbrände</li>
              <li>Verkehrsabsicherung</li>
              <li>Transport von Materialien und Geräten in unwegsames Gelände</li>
              <li>Transport von kontaminierten Materialien auf der Ladefläche</li>
              <li>Eigenständige Abarbeitung von Einsatzstellen bei schweren Unwetterereignissen</li>
              <li>Zugänglichkeit aller unserer Wahrzeichen, wie Walhalla und Burg</li>
              <li>Materialzubringer</li>
              <li>Sonst. Menschen- und Tierrettungen</li>
            </ul>
            <div className="mt-2">
              Um den stetig wachsenden Einsatzzahlen und der zunehmenden Vielfalt an Einsatzsituationen gerecht zu werden, wurde das Fahrzeug mit modernster Technik und umfangreicher Ausrüstung ausgestattet. So sind wir in jeder Lage
              optimal vorbereitet, schnell und wirkungsvoll Hilfe zu leisten.
            </div>
          </div>
          <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
            <CloudinaryPageImage src="utv-1_imgp0q" width={405} height={227} alt="Florian Donaustauf 59/1" enableOverlay overlayWidth={800} overlayHeight={600} imageSeries={images}>
              UTV - Florian Donaustauf 59/1
            </CloudinaryPageImage>
          </div>
        </div>
        <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Fahrzeugdaten</h3>
        <ul className="list-disc pl-8">
          <li>
            <span className="font-bold">Fahrgestell:</span> Can-Am Traxter Pro XU HD10
          </li>
          <li>
            <span className="font-bold">Aufbau:</span> RDF-Tec
          </li>
          <li>
            <span className="font-bold">Baujahr:</span> 2023/2024
          </li>
          <li>
            <span className="font-bold">Hubraum:</span> 976 cm³
          </li>
          <li>
            <span className="font-bold">Leistung:</span> 61 kW (83 PS)
          </li>
          <li>
            <span className="font-bold">Zulässiges Gesamtgewicht:</span> 1.668 Kg
          </li>
          <li>
            <span className="font-bold">Länge:</span> 3,91 m
          </li>
          <li>
            <span className="font-bold">Breite:</span> 1,63 m
          </li>
          <li>
            <span className="font-bold">Höhe:</span> 2,10 m
          </li>
          <li>
            <span className="font-bold">Mannschaft:</span> 1/2 Trupp (3 Personen)
          </li>
        </ul>
        <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Feuerwehrtechnische Beladung und Ausrüstung (Auszug)</h3>
        <div className="mt-4">
          <span className="font-bold">Aufbau:</span>
        </div>
        <ul className="mt-4 list-disc pl-8">
          <li>Feuerwehrtechnische Beklebung</li>
          <li>Sondersignalanlage</li>
          <li>Heckwarneinrichtung</li>
          <li>Umfeldbeleuchtung</li>
          <li>Digitalfunk</li>
          <li>Lardis One Mini (Navigation)</li>
          <li>Einsatztablet</li>
          <li>Hochdruckpumpe inklusive Wassertanks</li>
          <li>Schienensystem für bestehende modulare Boxen (Waldbrand, Wasserschaden etc.)</li>
          <li>Lagerung Schleifkorbtrage (Transport in unwegsamen Geländen)</li>
          <li>Suchscheinwerfer</li>
          <li>Seilwinde</li>
        </ul>
        <div className="mt-4">
          <span className="font-bold">Beladung:</span>
        </div>
        <ul className="mt-2 list-disc pl-8">
          <li>Handfunkgeräte (Digitalfunk)</li>
          <li>Headset für HRTs</li>
          <li>Adalit Handlampen</li>
          <li>Notfallrucksack</li>
          <li>Kleinlöschgerät</li>
          <li>RLS 2000 Lichtmast</li>
          <li>Schleifkorbtrage</li>
          <li>Verkehrsabsicherungsmaterial</li>
          <li>Hochdruckpumpe mit Tank</li>
          <li>Modulare Lagerungsbox</li>
          <li>Feuerwehrleinen</li>
          <li>Halligantool</li>
          <li>Bolzenschneider</li>
          <li>Schlüsseltresor</li>
        </ul>
      </FfPageSection>
      {images && (
        <FfPageSection id="bilder" headline="Bilder" level="h2" className="bg-gray-200 pb-6 sm:pb-8 dark:bg-gray-900">
          <CloudinaryImageGalleryImage imageSeries={images} />
        </FfPageSection>
      )}
    </article>
  );
}

export default UtvContent;
