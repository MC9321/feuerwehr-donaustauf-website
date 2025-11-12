'use client';

import ContactCard from '@/components/ContactCard/ContactCard';
import { FfPageSection } from '@/components/FfPageSection';
import { JSX } from 'react';

function Jugend(): JSX.Element {
  return (
    <article>
      <FfPageSection headline="Jugendfeuerwehr" id="jugend" className="pb-6 sm:pb-8">
        <div>
          Unsere Jugendgruppe nimmt Mädchen und Jungen zwischen 13 und 16 Jahren auf. Wenn Du Interesse hast, schau bei uns vorbei – wir freuen uns auf Dich! Die Jugendgruppe trifft sich alle zwei Wochen donnerstags um 18 Uhr im Gerätehaus.
          Die Übungsabende verbinden feuerwehrtechnische Ausbildung mit gemeinsamer Freizeit und Teamaktivitäten. In der Regel dauern die Übungen 1,5 bis 2 Stunden – länger ist meist nicht nötig, denn Abwechslung und Motivation stehen im
          Vordergrund.
        </div>
        <div className="mt-2">
          Die Ausbildung deckt viele Themen des Feuerwehralltags ab: Brandbekämpfung, technische Hilfeleistung, Funktechnik, Organisation innerhalb der Feuerwehr, Brandschutzerziehung und Erste Hilfe. So erhalten die Jugendlichen einen
          umfassenden Einblick in die Aufgaben der Feuerwehr.
        </div>
        <div>Die Inhalte werden abwechslungsreich in Theorie und Praxis vermittelt. Schwierigkeit und Umfang richten sich nach Alter und Leistungsstand der Teilnehmenden, damit alle mit Freude und Sicherheit lernen können.</div>
        <div className="mt-2">
          Ziel der Ausbildung ist es, die Jugendlichen Schritt für Schritt an den aktiven Feuerwehrdienst heranzuführen. Dabei spielt auch der Gemeinschaftsgedanke eine zentrale Rolle – Zusammenhalt, Teamgeist und gegenseitige Unterstützung
          machen unsere Gruppe stark.
        </div>
      </FfPageSection>
      <FfPageSection headline="Gemeinschaft und Aktivitäten" id="aktivitaeten" level="h2" className="bg-gray-200 pb-6 sm:pb-8 dark:bg-gray-900">
        <div>Neben der feuerwehrtechnischen Ausbildung kommen Spaß und Teamgeist natürlich nicht zu kurz. In ihrem eigenen Jugendzimmer können unsere Jugendlichen gemeinsam Kicker spielen oder das Video- und Fernsehgerät nutzen.</div>
        <div className="mt-2">
          Regelmäßig stehen auch gemeinsame Unternehmungen auf dem Programm – etwa Kinobesuche, spannende Ausflüge wie Canyoning oder andere Freizeitaktionen. Ein besonderes Highlight soll bald wieder aufleben: das beliebte Zeltlager, das
          lange Zeit fester Bestandteil des Jahresprogramms war.
        </div>
        <div className="mt-2">
          Auch der sogenannte Berufsfeuerwehrtag (BF-Tag) ist ein fester Bestandteil unseres Kalenders. Dabei verbringen die Jugendlichen eine Nacht im Gerätehaus und erleben einen Tag voller spannender, realitätsnaher Übungseinsätze.
        </div>
        <div className="mt-2">
          Seit über zehn Jahren engagiert sich unsere Jugendfeuerwehr außerdem bei der traditionellen Christbaumsammlung im Januar – eine Aktion, die jedes Jahr aufs Neue großen Anklang findet. Vielleicht bist du beim nächsten Mal schon
          selbst mit dabei!
        </div>
      </FfPageSection>
      <FfPageSection headline="Jugendwarte" id="jugendwarte" level="h2" className="pb-6 sm:pb-8">
        <div>Die Jugendarbeit und Ausbildung unserer Jugendgruppe liegt in den Händen der Jugendwarte. Weitere Ausbilder aus der aktiven Mannschaft unterstützen bei Bedarf.</div>
        <div className="my-6 grid auto-rows-fr grid-cols-1 gap-6 sm:my-8 sm:grid-cols-2">
          <ContactCard name="Stefanie Jobst" role="Jugendwartin" imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/c_thumb,h_200,w_200/v1762602468/foto_folgt_demnaechst_pxkcwp.png" email="jugend@feuerwehr-donaustauf.de" />
          <ContactCard name="Michael Wagner" role="Jugendwart" imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/c_thumb,h_200,w_200/v1762602468/foto_folgt_demnaechst_pxkcwp.png" email="jugend@feuerwehr-donaustauf.de" />
        </div>
      </FfPageSection>
    </article>
  );
}

export default Jugend;
