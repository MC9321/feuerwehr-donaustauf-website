import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import CloudinaryPageImage from '@/components/Image/CloudinaryPageImage';

function FeuerwehrFahrzeuge561(): JSX.Element {
  return (
    <article>
      <FfPageSection headline="Gerätewagen Logistik 2" id="geraetewagen" className="pb-6 sm:pb-8">
        <h2 className="text-xl font-medium tracking-tight text-heading uppercase sm:text-2xl lg:text-3xl dark:text-heading-dark">Florian Donaustauf 56/1</h2>
        <div className="pt-4 text-sm font-light sm:pt-6 md:inline-flex lg:pt-8 lg:text-base lg:font-normal">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <div>
              Der Gerätewagen Logistik 2 (GW-L2) ist ein geländegängiges Einsatzfahrzeug, das sowohl für die Brandbekämpfung als auch für technische Hilfeleistungen ausgerüstet ist. In den fest verbauten Gerätekästen befindet sich die
              Grundbeladung für diese Einsatzarten. Auf der Ladefläche mit hydraulischer Ladebordwand können zusätzlich Ausrüstung, Löschmittel und andere Einsatzgüter transportiert werden.
            </div>

            <div className="mt-2">
              Ergänzende Module und spezielle Gerätschaften werden auf Rollwagen oder Europaletten verladen und können je nach Einsatzlage flexibel mitgeführt oder direkt aus dem Gerätehaus entnommen werden. Darüber hinaus dient der GW-L2
              als Zugfahrzeug für das Mehrzweckboot.
            </div>
          </div>
          <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
            <CloudinaryPageImage src="geraetewagen_logistik_fkvt0v" width={405} height={227} alt="Florian Donaustauf 56/1" enableOverlay overlayWidth={800} overlayHeight={531}>
              GW-L2 - Florian Donaustauf 56/1
            </CloudinaryPageImage>
          </div>
        </div>
        <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Fahrzeugdaten</h3>
        <ul className="list-disc pl-8">
          <li>
            <span className="font-bold">Fahrgestell:</span> MAN TGM 13.280
          </li>
          <li>
            <span className="font-bold">Baujahr:</span> 2008
          </li>
          <li>
            <span className="font-bold">Hubraum:</span> 6871 ccm
          </li>
          <li>
            <span className="font-bold">Leistung:</span> 280 PS bei 2.300 1/min
          </li>
          <li>
            <span className="font-bold">Zulässiges Gesamtgewicht:</span> 14,1 t
          </li>
          <li>
            <span className="font-bold">Länge:</span> 8,22 m
          </li>
          <li>
            <span className="font-bold">Breite:</span> 2,55 m
          </li>
          <li>
            <span className="font-bold">Höhe:</span> 3,30 m
          </li>
          <li>
            <span className="font-bold">Wendekreis:</span> ca. 17,00 m
          </li>
          <li>
            <span className="font-bold">Nutzlast:</span> 4,00 t
          </li>
          <li>
            <span className="font-bold">Mannschaft:</span> 1/5 Staffel (6 Personen)
          </li>
        </ul>
        <div className="mt-4">
          <span className="font-bold">Besonderheiten:</span>
        </div>
        <ul className="mt-4 list-disc pl-8">
          <li>Automatikgetriebe</li>
          <li>Luftgefederte Hinterachse</li>
          <li>Rückfahrkamera</li>
          <li>Wechselsprechanlage zur Ladefläche</li>
        </ul>
        <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Feuerwehrtechnische Beladung und Ausrüstung (Auszug)</h3>
        <div className="mt-4">
          <span className="font-bold">Fahrzeug:</span>
        </div>
        <ul className="mt-4 list-disc pl-8">
          <li>
            <span className="font-bold">Aufbauhersteller:</span> Hensel
          </li>
          <li>Zusätzlicher Mittelsitz in der forderen Sitzreihe</li>
          <li>PFPN 10-1000 Pneumatischer Lichtmast in Fahrzeugmitte 2x 1.500 W</li>
          <li>Mehrzweckzug Z32</li>
          <li>Tragbarer Stromerzeuger 5 kVa</li>
          <li>4 Dräger Überdruck Atemschutzgeräte</li>
          <li>Hohlstrahlrohre</li>
          <li>Körperschutzanzüge BC Form</li>
          <li>2 Feuerlöscher Pulver und CO2</li>
          <li>Gerätesatz Absturzsicherung</li>
          <li>Vierteilige Steckleiter</li>
          <li>Spinebord</li>
          <li>Schleifkorbtrage</li>
        </ul>

        <div className="mt-4">
          <span className="font-bold">Ausrüstungsmodule in Rollwagen oder Euro-Paletten:</span>
        </div>
        <ul className="mt-2 list-disc pl-8">
          <li>Wasserversorgung (2.000 m B-Schläuche, für Verlegefahrt)</li>
          <li>Löschwasserbehälter 1.000 l</li>
          <li>Zusätzliche Tragkraftspritze TS 8/8</li>
          <li>Löschwasserfaltbehälter mineralölbeständig, 5.000 l</li>
          <li>Ölschaden</li>
          <li>Wasserschaden</li>
          <li>Sonderlöschmittel</li>
          <li>Sandsäcke</li>
        </ul>
        <div className="mt-4">
          <span className="font-bold">Sonstige Beladung:</span>
        </div>
        <ul className="mt-2 list-disc pl-8">
          <li>Tauchpumpe TP4</li>
          <li>Handwerkzeug</li>
          <li>Datensatz mit Objektdaten, Karten und Einsatzplänen</li>
          <li>Bodenhindernisleuchten synchronisierbar</li>
        </ul>
      </FfPageSection>
    </article>
  );
}

export default FeuerwehrFahrzeuge561;
