'use client';

import { JSX } from 'react';
import { ContactCard, PageSection } from '@salzpate/react-ui';

interface ContactContentProps {
  subSection?: boolean;
}

function ContactContent({ subSection }: Readonly<ContactContentProps>): JSX.Element {
  return (
    <PageSection headline="Kontakt" id="kontakt" subSection={subSection} className="page-section">
      <div>Hast du Fragen rund um die Feuerwehr Donaustauf? Wir versenden keine Ärmelabzeichen an Sammler.</div>
      <div className="my-6 grid auto-rows-fr grid-cols-1 gap-6 sm:my-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <ContactCard
            name="Christopher Möck"
            position="Federführender Kommandant"
            imageSrc="/assets/images/contact/moeck3.jpg"
            email="kommandant@feuerwehr-donaustauf.de"
            emailHref="mailto:kommandant@feuerwehr-donaustauf.de"
            phone="+49 151 19146666"
            street="Taxisstr. 2"
            town="93093 Donaustauf"
          />
        </div>
        <div>
          <ContactCard
            name="Patrick Schrödel"
            position="Stellvertretender Kommandant"
            imageSrc="/assets/images/contact/schrdel.jpg"
            email="stellv.kommandant@feuerwehr-donaustauf.de"
            emailHref="mailto:stellv.kommandant@feuerwehr-donaustauf.de"
            phone="+49 175 1657839"
            street="Gregor-Mendel-Str. 5"
            town="93093 Donaustauf"
          />
        </div>
        <div>
          <ContactCard
            name="Tobias Müller"
            position="Vorsitzender"
            imageSrc="/assets/images/contact/foto_folgt_demnaechst.png"
            email="vorsitzender@feuerwehr-donaustauf.de"
            emailHref="mailto:vorsitzender@feuerwehr-donaustauf.de"
            phone="+49 176 64211895"
            street="Baronstr. 81"
            town="93093 Donaustauf"
          />
        </div>
        <div>
          <ContactCard
            name="Wolfgang Jaumann"
            position="Stellvertretender Vorsitzender"
            imageSrc="/assets/images/contact/foto_folgt_demnaechst.png"
            email="vorsitzender@feuerwehr-donaustauf.de"
            emailHref="mailto:vorsitzender@feuerwehr-donaustauf.de"
            phone="+49 176 64211895"
            street="Burgstr. 18"
            town="93093 Donaustauf"
          />
        </div>
        <div>
          <ContactCard
            name="Stefanie Jobst"
            position="Jugendwärtin"
            imageSrc="/assets/images/contact/foto_folgt_demnaechst.png"
            email="jugend@feuerwehr-donaustauf.de"
            emailHref="mailto:jugend@feuerwehr-donaustauf.de"
            street="Gregor-Mendel-Str. 5"
            town="93093 Donaustauf"
          />
        </div>
        <div>
          <ContactCard
            name="Feuerwehrgerätehaus"
            imageSrc="/assets/images/contact/feuerwehrgertehaus.jpg"
            email="feuerwehr@feuerwehr-donaustauf.de"
            emailHref="mailto:feuerwehr@feuerwehr-donaustauf.de"
            phone="+49 9403 8205"
            fax="+49 9403 952390"
            street="Regensburger Str. 9"
            town="93093 Donaustauf"
          />
        </div>
      </div>
    </PageSection>
  );
}

export default ContactContent;
