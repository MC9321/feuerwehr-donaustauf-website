'use client';

import { PageLink, PageSection } from '@salzpate/react-ui';
import { JSX } from 'react';

function Spenden(): JSX.Element {
  return (
    <PageSection headline="Spenden" id="spenden">
      <div className="page-section pb-8">
        Die Kosten für die Ausbildung der Helfer sowie die Anschaffung und den Unterhalt der benötigten Ausrüstung trägt der Förderverein Freiwillige Feuerwehr Donaustauf e.V.. Um dieser Aufgabe nachkommen zu können, ist der Verein auch weiterhin auf Spenden angewiesen. Mit der Bereitstellung der Räumlichkeiten, vorhandener Einsatzfahrzeuge und Verbrauchsmaterial, trägt die Marktgemeinde ihren wertvollen Anteil zu dieser Einrichtung bei.
        <br />
        <br />
        Mit einer Überweisung auf das folgende Konto können auch Sie den First Responder unterstützen.
        <br />
        <br />
        <strong>Name:</strong> Freiwillige Feuerwehr Donaustauf e.V.<br />
        <strong>BIC:</strong> GENODEF1DST<br />
        <strong>IBAN:</strong> DE51 7506 2026 0000 018678<br />
        <strong>Bank:</strong> Raiffeisenbank Oberpfalz Süd eG<br />
        <strong>Verwendungszweck:</strong> First Responder

      </div>
    </PageSection>
  );
}

export default Spenden;
