'use client';

import { FfPageSection } from '@/components/FfPageSection';
import FunctionCard from '@/components/FunctionCard';
import { JSX } from 'react';

function Vorstandschaft(): JSX.Element {
  return (
    <FfPageSection headline="Vorstandschaft" id="vorstandschaft">
      <FunctionCard role="Vorsitzender" name="Tobias Müller" leadership className="mb-4" />
      <FunctionCard role="Stellvertretender Vorsitzender" name="Wolfgang Jaumann" leadership className="mb-4" />
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <FunctionCard role="Schriftführer" name="Andreas Piwonka" />
        <FunctionCard role="Kassenwart" name="Martin Sendlbeck" />
        <FunctionCard role="Kommandant" name="Christopher Möck" />
        <FunctionCard role="Beisitzerin" name="Stefanie Jobst" />
        <FunctionCard role="Beisitzer" name="Michael Wagner" />
        <FunctionCard role="Beisitzer" name="Ronny Krammer" />
        <FunctionCard role="Beisitzer" name="Patrick Schrödel" />
        <FunctionCard role="Beisitzer" name="Jonas Klöckers" />
      </div>
    </FfPageSection>
  );
}

export default Vorstandschaft;
