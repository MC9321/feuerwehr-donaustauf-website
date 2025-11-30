import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import CloudinaryImageGalleryImage from '@/components/Image/CloudinaryImageGallery';
import CloudinaryPageImage from '@/components/Image/CloudinaryPageImage';
import { ImageData } from '@/components/ImageOverlay';

interface MzbContentProps {
  images?: ImageData[];
}

function MzbContent({ images }: Readonly<MzbContentProps>): JSX.Element {
  return (
    <article>
      <FfPageSection headline="Mehrzweckboot 60" id="mehrzweckboot" className="pb-6 sm:pb-8">
        <h2 className="text-xl font-medium tracking-tight text-heading uppercase sm:text-2xl lg:text-3xl dark:text-heading-dark">Florian Donaustauf 99/1</h2>
        <div className="pt-4 text-sm font-light sm:pt-6 md:inline-flex lg:pt-8 lg:text-base lg:font-normal">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <div>
              Das Mehrzweckboot 60 (MZB 60) ist ein speziell für den Feuerwehrdienst konstruiertes Wasserfahrzeug, das als flexible taktische Einheit mit Mannschaft, technischer Ausrüstung und feuerwehrtechnischer Beladung ausgestattet ist.
              Es dient sowohl der Rettung und dem Transport von Personengruppen als auch der technischen Hilfeleistung und der Unterstützung bei Löscheinsätzen auf dem Wasser.
            </div>
            <div className="mt-2">
              Dank seines großzügigen Platzangebots können Mannschaft und Gerät – vergleichbar mit einem Löschgruppenfahrzeug – in größerem Umfang aufgenommen und auf Gewässern eingesetzt werden. Typischerweise kommt das Boot auf der
              Bundeswasserstraße Donau sowie im Bereich des Landkreises und der Stadt Regensburg zum Einsatz.
            </div>
            <div className="mt-2">
              Durch die moderne Ausrüstung ist das MZB 60 für unterschiedlichste Einsatzszenarien bestens vorbereitet – von der Personenrettung bis zum Transport von Ausrüstung oder der Unterstützung bei Großschadenslagen.
            </div>
          </div>
          <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
            <CloudinaryPageImage src="mfz-1_ytfdug" width={405} height={227} alt="Florian Donaustauf 99/1" enableOverlay overlayWidth={800} overlayHeight={600} imageSeries={images}>
              MZB 60 - Florian Donaustauf 99/1
            </CloudinaryPageImage>
          </div>
        </div>
        <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Fahrzeugdaten</h3>
        <ul className="list-disc pl-8">
          <li>
            <span className="font-bold">Baujahr:</span> 2004
          </li>
          <li>
            <span className="font-bold">Werkstoff:</span> Aluminium
          </li>
          <li>
            <span className="font-bold">Gewicht:</span> 1,2 t (mit Motor)
          </li>
          <li>
            <span className="font-bold">Zuladung:</span> 1,5 t oder 10 Personen zzgl. Ausrüstung (z.B. Tragkraftspritze)
          </li>
          <li>
            <span className="font-bold">Länge:</span> 6,20 m
          </li>
          <li>
            <span className="font-bold">Motor:</span> Suzuki DF 90TL; 90PS, Viertakt
          </li>
        </ul>
        <div className="mt-4">
          <span className="font-bold">Sonstige Beladung:</span>
        </div>
        <ul className="mt-2 list-disc pl-8">
          <li>Unsinkbar und selbstlenzend</li>
          <li>Bugklappe zum leichteren Be- und Entladen</li>
          <li>A–Sauganschluss für Tragkraftspritze</li>
          <li>Boot ist kranbar</li>
        </ul>
        <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Feuerwehrtechnische Beladung und Ausrüstung (Auszug)</h3>
        <ul>
          <li>
            <span className="font-bold">Aufbauhersteller:</span> Eigenleistung
          </li>
          <li>
            <span className="font-bold">Mannschaft:</span> max. 10 Personen
          </li>
        </ul>
        <ul className="mt-4 list-disc pl-8">
          <li>10 Schwimmwesten</li>
          <li>4 Paddel</li>
          <li>2 Bootshaken</li>
          <li>Rettungshaken</li>
          <li>3D-Echolot</li>
          <li>Feuerwehraxt</li>
          <li>Brecheisen</li>
          <li>Kartenmaterial</li>
          <li>Leinen in verschiedenen Längen und Stärken</li>
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

export default MzbContent;
