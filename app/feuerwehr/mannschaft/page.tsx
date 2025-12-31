'use client';

import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import FunctionCard from '@/components/FunctionCard';

function Mannschaft(): JSX.Element {
  return (
    <FfPageSection headline="Mannschaft" id="mannschaft">
      <FunctionCard role="Kommandant" name="Christopher Möck" leadership className="mb-4" />
      <FunctionCard role="Stellvertretender Kommandant" name="Patrick Schrödel" leadership className="mb-4" />
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <section className="flex flex-col gap-4" aria-labelledby="first-responder-heading">
          <FunctionCard role="First Responder" leadership />
          <FunctionCard role="Leiter First Responder" name="Christopher Möck" />
          <FunctionCard role="Stellver. Leiter First Responder" name="Patrick Schrödel" />
          <FunctionCard role="MP Beauftragter" name="Patrick Schrödel" />
        </section>
        <section className="flex flex-col gap-4" aria-labelledby="loeschzug-heading">
          <FunctionCard role="Löschzug" leadership />
          <FunctionCard role="Zugführer" name="Wolfgang Weigert" />
          <FunctionCard role="Gruppenführer">
            <ul>
              <li>Andreas Piwonka</li>
              <li>Bernhard Weiherer</li>
              <li>Florian Geisler</li>
              <li>Thomas Weigert</li>
              <li>Tobias Müller</li>
            </ul>
          </FunctionCard>
          <FunctionCard role="Jugendwartin" name="Stefanie Jobst" />
        </section>
        <section className="flex flex-col gap-4" aria-labelledby="fachbereiche-heading">
          <FunctionCard role="Fachbereiche" leadership />
          <FunctionCard role="PSA">
            <ul>
              <li>Sieglinde Eigenstetter</li>
              <li>Stefanie Schirm</li>
            </ul>
          </FunctionCard>
          <FunctionCard role="ELO">
            <ul>
              <li>Daniel Möck</li>
              <li>Florian Geisler</li>
            </ul>
          </FunctionCard>
          <FunctionCard role="Wasserdienst">
            <ul>
              <li>Bernhard Weiherer</li>
              <li>Wolfgang Weigert</li>
              <li>Thomas Weigert</li>
            </ul>
          </FunctionCard>
          <FunctionCard role="Geräte">
            <ul>
              <li>Andreas Piwonka</li>
              <li>Maximilian Semmelmann</li>
            </ul>
          </FunctionCard>
          <FunctionCard role="Atemschutz" name="Florian Kauscher" />
          <FunctionCard role="IT, EDV und Verwaltung">
            <ul>
              <li>Markus Walter</li>
              <li>Klöckers Jonas</li>
              <li>Michael Wagner</li>
            </ul>
          </FunctionCard>
        </section>
      </div>
    </FfPageSection>
  );
}

export default Mannschaft;
