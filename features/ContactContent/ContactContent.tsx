'use client';

import { JSX } from 'react';

import ModernContactCard from '@/components/ContactCard/ContactCard';
import { FfPageSection } from '@/components/FfPageSection';
import FfLogoSvgIcon from '@/components/SvgIcons/FfLogoSvgIcon';

interface ContactContentProps {
  level?: 'h1' | 'h2' | 'h3';
}

function ContactContent({ level }: Readonly<ContactContentProps>): JSX.Element {
  return (
    <FfPageSection headline="Kontakt" id="kontakt" level={level} className="page-section relative">
      <div>Hast du Fragen rund um die Feuerwehr Donaustauf? Wir versenden keine Ärmelabzeichen an Sammler.</div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-9">
        <FfLogoSvgIcon className="h-full w-full max-w-2xl" aria-hidden="true" />
      </div>
      <div className="relative z-2 my-6 grid auto-rows-fr grid-cols-1 gap-6 sm:my-8 sm:grid-cols-2 lg:grid-cols-2">
        <ModernContactCard
          name="Christopher Möck"
          role="Federführender Kommandant"
          imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/c_thumb,h_200,w_200/v1762602470/moeck_rkchhz.jpg"
          email="kommandant@feuerwehr-donaustauf.de"
          phone="+49 151 19146666"
          street="Taxisstr. 2"
          town="93093 Donaustauf"
        />
        <ModernContactCard
          name="Patrick Schrödel"
          role="Stellvertretender Kommandant"
          imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/c_thumb,h_200,w_200/v1762602471/schroedel_te1lze.jpg"
          email="stellv.kommandant@feuerwehr-donaustauf.de"
          phone="+49 175 1657839"
          street="Gregor-Mendel-Str. 5"
          town="93093 Donaustauf"
        />
        <ModernContactCard
          name="Tobias Müller"
          role="Vorsitzender"
          imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/c_thumb,h_200,w_200/v1762602468/foto_folgt_demnaechst_pxkcwp.png"
          email="vorsitzender@feuerwehr-donaustauf.de"
          phone="+49 176 64211895"
          street="Baronstr. 81"
          town="93093 Donaustauf"
        />
        <ModernContactCard
          name="Wolfgang Jaumann"
          role="Stellvertretender Vorsitzender"
          imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/c_thumb,h_200,w_200/v1762602468/foto_folgt_demnaechst_pxkcwp.png"
          email="vorsitzender@feuerwehr-donaustauf.de"
          phone="+49 176 64211895"
          street="Burgstr. 18"
          town="93093 Donaustauf"
        />
        <ModernContactCard
          name="Stefanie Jobst"
          role="Jugendwartin"
          imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/c_thumb,h_200,w_200/v1762602468/foto_folgt_demnaechst_pxkcwp.png"
          email="jugend@feuerwehr-donaustauf.de"
          phone=""
          street="Gregor-Mendel-Str. 5"
          town="93093 Donaustauf"
        />
        <ModernContactCard
          name="Feuerwehrgerätehaus"
          role=""
          imageSrc="https://res.cloudinary.com/dzirm6srd/image/upload/c_thumb,h_200,w_200/v1762602468/feuerwehrgertehaus_h0irmq.jpg"
          email="feuerwehr@feuerwehr-donaustauf.de"
          phone="+49 9403 8205"
          street="Regensburger Str. 9"
          town="93093 Donaustauf"
        />
      </div>
    </FfPageSection>
  );
}

export default ContactContent;
