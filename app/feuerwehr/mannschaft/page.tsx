'use client';

import { FfPageSection } from '@/components/FfPageSection';
import FunctionCard from '@/components/FunctionCard';
import { JSX } from 'react';

function Mannschaft(): JSX.Element {
  return (
    <FfPageSection headline="Vorstandschaft" id="vorstandschaft">
      <FunctionCard role="Kommandant" name="Christopher Möck" leadership className="mb-4" />
      <FunctionCard role="Stellvertretender Kommandant" name="Patrick Schrödel" leadership className="mb-4" />
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <FunctionCard role="First Responder" leadership />
          <FunctionCard role="Leiter First Responder" name="Christopher Möck" />
          <FunctionCard role="Stellver. Leiter First Responder" name="Patrick Schrödel" />
          <FunctionCard role="MP Beauftragter" name="Patrick Schrödel" />
        </div>
        <div className="flex flex-col gap-4">
          <FunctionCard role="Löschzug" leadership />
          <FunctionCard role="Zugführer" name="Wolfgang Weigert" />
          <FunctionCard role="Gruppenführer">
            <div>Andreas Piwonka</div>
            <div>Bernhard Weiherer</div>
            <div>Florian Geisler</div>
            <div>Thomas Weigert</div>
            <div>Tobias Müller</div>
          </FunctionCard>
          <FunctionCard role="Jugendwartin" name="Stefanie Jobst" />
        </div>
        <div className="flex flex-col gap-4">
          <FunctionCard role="Fachbereiche" leadership />
          <FunctionCard role="PSA">
            <div>Sieglinde Eigenstetter</div>
            <div>Stefanie Schirm</div>
          </FunctionCard>
          <FunctionCard role="ELO">
            <div>Daniel Möck</div>
            <div>Florian Geisler</div>
          </FunctionCard>
          <FunctionCard role="Wasserdienst">
            <div>Bernhard Weiherer</div>
            <div>Wolfgang Weigert</div>
            <div>Thomas Weigert</div>
          </FunctionCard>
          <FunctionCard role="Geräte">
            <div>Andreas Piwonka</div>
            <div>Maximilian Semmelmann</div>
          </FunctionCard>
          <FunctionCard role="Atemschutz" name="Florian Kauscher" />
          <FunctionCard role="Wasserdienst">
            <div>Markus Walter</div>
            <div>Klöckers Jonas</div>
            <div>Michael Wagner</div>
          </FunctionCard>
        </div>
      </div>
    </FfPageSection>
  );
}

export default Mannschaft;
