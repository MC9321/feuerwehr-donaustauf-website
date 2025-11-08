'use client';

import { JSX } from 'react';
import { ContactCard } from '@salzpate/react-ui';
import { FfPageSection } from '@/components/FfPageSection';

interface ContactContentProps {
  subSection?: boolean;
}

function ContactContent({ subSection }: Readonly<ContactContentProps>): JSX.Element {
  return (
    <FfPageSection headline="Kontakt" id="kontakt" subSection={subSection} className="page-section">
      <div>Hast du Fragen rund um die Feuerwehr Donaustauf? Wir versenden keine Ärmelabzeichen an Sammler.</div>
      <div className="my-6 grid auto-rows-fr grid-cols-1 gap-6 sm:my-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <ContactCard
            name="Christopher Möck"
            position="Federführender Kommandant"
            imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/v1762602470/moeck_rkchhz.jpg"
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
            imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/v1762602471/schroedel_te1lze.jpg"
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
            imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/v1762602468/foto_folgt_demnaechst_pxkcwp.png"
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
            imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/v1762602468/foto_folgt_demnaechst_pxkcwp.png"
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
            position="Jugendwartin"
            imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/v1762602468/foto_folgt_demnaechst_pxkcwp.png"
            email="jugend@feuerwehr-donaustauf.de"
            emailHref="mailto:jugend@feuerwehr-donaustauf.de"
            street="Gregor-Mendel-Str. 5"
            town="93093 Donaustauf"
          />
        </div>
        <div>
          <ContactCard
            name="Feuerwehrgerätehaus"
            imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/v1762602468/feuerwehrgertehaus_h0irmq.jpg"
            email="feuerwehr@feuerwehr-donaustauf.de"
            emailHref="mailto:feuerwehr@feuerwehr-donaustauf.de"
            phone="+49 9403 8205"
            fax="+49 9403 952390"
            street="Regensburger Str. 9"
            town="93093 Donaustauf"
          />
        </div>
      </div>
    </FfPageSection>
  );
}

export default ContactContent;
