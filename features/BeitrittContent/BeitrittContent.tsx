'use client';

import { FfPageSection } from '@/components/FfPageSection';
import { ButtonLink, MoreLink } from '@salzpate/react-ui';
import { JSX } from 'react';

interface BeitrittContentProps {
  subSection?: boolean;
  showContact?: boolean;
}

function BeitrittContent({ subSection, showContact = true }: Readonly<BeitrittContentProps>): JSX.Element {
  return (
    <FfPageSection headline="Mitglied werden – Mach mit bei unserer Feuerwehr!" subSection={subSection} id="beitritt">
      <div className="page-section pb-8">
        <div>Sie interessieren sich für eine Mitgliedschaft in unserer Feuerwehr?</div>
        <div>Ganz gleich, ob Sie aktiv mit anpacken oder uns auf andere Weise unterstützen möchten – bei uns finden Sie die passende Möglichkeit, die sich gut mit Ihren persönlichen und beruflichen Umständen vereinbaren lässt.</div>
        <div className="mt-8 mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-xl lg:font-medium dark:text-secondary-dark">Fördernde Mitgliedschaft</h3>
            <div className="mb-2">Sie möchten die Feuerwehr unterstützen, können jedoch nicht am aktiven Dienst (Übungen und Einsätzen) teilnehmen?</div>
            <div>Werden Sie förderndes Mitglied und helfen Sie uns ideell und finanziell, unsere wichtige Arbeit weiterzuführen.</div>
          </div>
          <div>
            <h3 className="mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-xl lg:font-medium dark:text-secondary-dark">Aktiver Feuerwehrdienst</h3>
            <div className="mb-2">Sie möchten selbst aktiv werden?</div>
            <div className="mb-2">Dann besuchen Sie uns! Unsere Übungs- und Feuerwehrabende zusammen mit der Jugend finden jeden Donnerstag ab 19:00 Uhr statt.</div>
            <div>Schauen Sie einfach unverbindlich vorbei, lernen Sie unser Gerätehaus und unsere Fahrzeuge kennen, kommen Sie mit unseren Kameradinnen und Kameraden ins Gespräch und erleben Sie den Feuerwehralltag hautnah.</div>
          </div>
          <div>
            <h3 className="mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-xl lg:font-medium dark:text-secondary-dark">Jugendfeuerwehr</h3>
            <div className="mb-2">
              Auch für den Nachwuchs ist gesorgt! Mädchen und Jungen ab 12 Jahren treffen sich alle zwei Wochen donnerstags ab 18:00 Uhr zu den Jugendfeuerwehrübungen oder zum Feuerwehrtag ab 19:00 zusammen mit der aktiven Mannschaft.
            </div>
            <div>Kommen Sie einfach vorbei – wir freuen uns auf alle, die mitmachen wollen.</div>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-xl lg:font-medium dark:text-secondary-dark">Beitrittserklärung</h3>
          <div className="mb-4">Über den folgenden Link gelangen Sie direkt zu unserer Beitrittserklärung. Bitte senden Sie das ausgefüllte und unterschriebene Formular an unsere Adresse.</div>
          <div className="mt-4">
            <ButtonLink href="/assets/Beitritt.pdf" target="_blank" className="flex w-75 items-center">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
                  <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
                </svg>
              </span>
              <span>Beitrittserklärung öffnen</span>
            </ButtonLink>
          </div>
        </div>
        {showContact && (
          <MoreLink href="/kontakt" linkText="Kontakt">
            Sollten Sie Fragen haben, wenden Sie sich einfach an folgende Ansprechpartner:
          </MoreLink>
        )}
      </div>
    </FfPageSection>
  );
}

export default BeitrittContent;
