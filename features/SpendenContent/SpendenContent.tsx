'use client';

import { ButtonLink } from '@salzpate/react-ui';
import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import PayPalSvgIcon from '@/components/SvgIcons/PayPalSvgIcon';

interface SpendenContentProps {
  level?: 'h1' | 'h2' | 'h3';
}

function SpendenContent({ level }: Readonly<SpendenContentProps>): JSX.Element {
  return (
    <FfPageSection headline="Spenden" level={level} id="spenden">
      <div className="page-section pb-8">
        Die Ausbildung der Helferinnen und Helfer sowie die Anschaffung und Wartung der notwendigen Ausrüstung werden vollständig durch den Förderverein Freiwillige Feuerwehr Donaustauf e.V. finanziert. Um diese wichtige Aufgabe auch
        künftig erfüllen zu können, ist der Verein weiterhin auf Spenden angewiesen.
        <br />
        <br />
        Die Marktgemeinde Donaustauf unterstützt diese Einrichtung in wertvoller Weise durch die Bereitstellung von Räumlichkeiten, Einsatzfahrzeugen und Verbrauchsmaterialien.
        <br />
        <br />
        Mit einer Spende über PayPal oder auf das unten angegebene Konto können auch Sie einen Beitrag leisten und den First Responder unterstützen.
        <br />
        <br />
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <h3 className="mb-4">Spende per Überweisung:</h3>
            <strong>Name:</strong> Freiwillige Feuerwehr Donaustauf e.V.
            <br />
            <strong>BIC:</strong> GENODEF1DST
            <br />
            <strong>IBAN:</strong> DE51 7506 2026 0000 018678
            <br />
            <strong>Bank:</strong> Raiffeisenbank Oberpfalz Süd eG
            <br />
            <strong>Verwendungszweck:</strong> First Responder
          </div>
          <div className="mt-6 w-full md:mt-0 md:w-1/2">
            <h3 className="mb-4">Spende per PayPal:</h3>
            <ButtonLink href="https://www.paypal.com/donate/?hosted_button_id=ZFLWENFMK2CVG" target="_blank" className="flex w-50 items-center">
              <span className="mr-2">
                <PayPalSvgIcon height={14} width={14} />
              </span>
              <span>Jetzt Spenden</span>
            </ButtonLink>
          </div>
        </div>
      </div>
    </FfPageSection>
  );
}

export default SpendenContent;
