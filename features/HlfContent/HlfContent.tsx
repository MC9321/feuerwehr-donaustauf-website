import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import CloudinaryPageImage from '@/components/Image/CloudinaryPageImage';
import CloudinaryImageGalleryImage from '@/components/Image/CloudinaryImageGallery';
import { ImageData } from '@/components/ImageOverlay';

interface HlfContentProps {
  images?: ImageData[];
}

function HlfContent({ images }: Readonly<HlfContentProps>): JSX.Element {
  return (
    <article>
      <FfPageSection headline="Hilfeleistungslöschgruppenfahrzeug 20" id="hilfeleistungslöschgruppenfahrzeug" className="pb-6 sm:pb-8">
        <h2 className="text-xl font-medium tracking-tight text-heading uppercase sm:text-2xl lg:text-3xl dark:text-heading-dark">Florian Donaustauf 40/1</h2>
        <div className="pt-4 text-sm font-light sm:pt-6 md:inline-flex lg:pt-8 lg:text-base lg:font-normal">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <div>
              Das Hilfeleistungslöschgruppenfahrzeug HLF 20 ist das vielseitigste Einsatzfahrzeug unserer Feuerwehr. Es wird sowohl zur Brandbekämpfung und Löschwasserförderung als auch für eine Vielzahl technischer Hilfeleistungen
              eingesetzt. Dazu gehören unter anderem:
            </div>
            <ul className="mt-2 list-disc pl-8">
              <li>PKW/ LKW Brände</li>
              <li>Rauchentwicklungen und Wohnhausbrände</li>
              <li>Wald und Flächenbrände</li>
              <li>Gasgeruch/ Gasaustritt</li>
              <li>Sturmschäden</li>
              <li>Verkehrsunfälle mit und ohne eingeklemmte Personen</li>
              <li>Personenrettungen</li>
              <li>eingeklemmte Personen (nicht VU)</li>
              <li>technische Hilfeleistungen&nbsp;</li>
              <li>Wohnungsöffnungen (Notfall)</li>
              <li>Umweltschäden eindämmen und beseitigen</li>
              <li>uvm.</li>
            </ul>
            <div className="mt-2">
              Um den stetig wachsenden Einsatzzahlen und der großen Bandbreite an Einsatzszenarien gerecht zu werden, ist das HLF 20 mit modernster Technik und umfangreicher Ausrüstung ausgestattet. So sind wir optimal vorbereitet, um in
              jeder Situation schnell und effektiv helfen zu können.
            </div>
          </div>
          <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
            <CloudinaryPageImage src="hlf-20-1_ldn62n" width={405} height={227} alt="Florian Donaustauf 40/1" enableOverlay overlayWidth={1600} overlayHeight={835} imageSeries={images}>
              HLF 20 - Florian Donaustauf 40/1
            </CloudinaryPageImage>
          </div>
        </div>
        <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Fahrzeugdaten</h3>
        <ul className="list-disc pl-8">
          <li>
            <span className="font-bold">Fahrgestell:</span> MAN TGM 13.320 4x4
          </li>
          <li>
            <span className="font-bold">Baujahr:</span> 2023
          </li>
          <li>
            <span className="font-bold">Hubraum:</span> 6,9 l
          </li>
          <li>
            <span className="font-bold">Leistung:</span> 235 kW (320 PS)
          </li>
          <li>
            <span className="font-bold">Zulässiges Gesamtgewicht:</span> 16 t
          </li>
          <li>
            <span className="font-bold">Länge:</span> 8,70 m
          </li>
          <li>
            <span className="font-bold">Breite:</span> 2,50 m
          </li>
          <li>
            <span className="font-bold">Höhe:</span> 3,30 m
          </li>
          <li>
            <span className="font-bold">Mannschaft:</span> 1/8 Löschgruppe (9 Personen)
          </li>
        </ul>
        <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Feuerwehrtechnische Beladung und Ausrüstung (Auszug)</h3>
        <div className="mt-4">
          <span className="font-bold">Fahrzeug:</span>
        </div>
        <ul className="mt-4 list-disc pl-8">
          <li>Automatische Einsatzstellennavigation</li>
          <li>Einsatztablet</li>
          <li>Digitalfunk</li>
          <li>LED Umfeldbeleuchtung</li>
          <li>LED Lichtmast</li>
          <li>Heckwarneinrichtung</li>
          <li>Standheizung</li>
          <li>FireCan Steuerung</li>
          <li>Feuerlöschkreiselpumpe FPN 10/3000 (Pumpenleistung 3000L/min bei 10bar)</li>
          <li>Löschwasserbehälter mit 2400l Inhalt</li>
          <li>Schnellangriffhaspel 50 Meter</li>
          <li>Elektrohaspel und Drucklufthaspel</li>
          <li>Suchscheinwerfer</li>
          <li>Selbstschutzanlage an der Fahrzeugfront</li>
          <li>zusätzlicher B-Druckabgang an der Fahrzeugfront</li>
          <li>uvm.</li>
        </ul>
        <div className="mt-4">
          <span className="font-bold">Beladung Brand:</span>
        </div>
        <ul className="mt-2 list-disc pl-8">
          <li>Atemschutzgeräte (Überdruck)</li>
          <li>Poelz Checkbox zur Atemschutzüberwachung</li>
          <li>Akkubetriebener Überdrucklüfter</li>
          <li>Wärmebildkamera</li>
          <li>Schlauchpaket und Schlauchtragekörbe</li>
          <li>Netzmittel und Schaummittel</li>
          <li>Sprungpolster SP16</li>
          <li>Kleinlöschgeräte</li>
          <li>Atemschutznotfalltasche</li>
          <li>uvm.</li>
        </ul>
        <div className="mt-4">
          <span className="font-bold">Beladung THL:</span>
        </div>
        <ul className="mt-2 list-disc pl-8">
          <li>Tragbarer Stromerzeuger 14 kVa</li>
          <li>Hochdruckhebekissen</li>
          <li>Mehrzweckzug MZ16</li>
          <li>Hydraulischer Rettungssatz</li>
          <li>Rettungsplattform</li>
          <li>umfangreiches Material zur technischen Hilfe</li>
          <li>Spineboard und Shortboard</li>
          <li>4tlg. Steckleiter/ 3 tlg. Schiebleiter</li>
          <li>Sperrwerkzeug/ Tür- und Fensteröffnungswerkzeug</li>
          <li>Gefahrstoffumfüllpumpe</li>
          <li>Mehrgasmessgerät</li>
          <li>Motorsäge inkl. Zubehör</li>
          <li>Tauchmpumpe/ Chiemseepumpe</li>
          <li>Trennschleifer/ Säbelsäge</li>
          <li>uvm.</li>
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

export default HlfContent;
