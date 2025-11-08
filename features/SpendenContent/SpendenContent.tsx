'use client';

import { FfPageSection } from '@/components/FfPageSection';
import { ButtonLink } from '@salzpate/react-ui';
import { JSX } from 'react';

interface SpendenContentProps {
  subSection?: boolean;
}

function SpendenContent({ subSection }: Readonly<SpendenContentProps>): JSX.Element {
  return (
    <FfPageSection headline="Spenden" subSection={subSection} id="spenden">
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
                <svg xmlns="http://www.w3.org/2000/svg" height={14} width={14} viewBox="0 0 512 512">
                  <path
                    d="M424.81,148.79c-.43,2.76-.93,5.58-1.49,8.48-19.17,98-84.76,131.8-168.54,131.8H212.13a20.67,20.67,0,0,0-20.47,17.46L169.82,444.37l-6.18,39.07a10.86,10.86,0,0,0,9.07,12.42,10.72,10.72,0,0,0,1.7.13h75.65a18.18,18.18,0,0,0,18-15.27l.74-3.83,14.24-90,.91-4.94a18.16,18.16,0,0,1,18-15.3h11.31c73.3,0,130.67-29.62,147.44-115.32,7-35.8,3.38-65.69-15.16-86.72A72.27,72.27,0,0,0,424.81,148.79Z"
                    fill="currentColor"
                  />
                  <path
                    d="M385.52,51.09C363.84,26.52,324.71,16,274.63,16H129.25a20.75,20.75,0,0,0-20.54,17.48l-60.55,382a12.43,12.43,0,0,0,10.39,14.22,12.58,12.58,0,0,0,1.94.15h89.76l22.54-142.29-.7,4.46a20.67,20.67,0,0,1,20.47-17.46h42.65c83.77,0,149.36-33.86,168.54-131.8.57-2.9,1.05-5.72,1.49-8.48h0C410.94,98.06,405.19,73.41,385.52,51.09Z"
                    fill="currentColor"
                  />
                </svg>
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
