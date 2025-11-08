import { JSX } from 'react';

import SpendenContent from '@/features/SpendenContent';
import { FfPageSection } from '@/components/FfPageSection';

function FirstResponderSpenden(): JSX.Element {
  return (
    <>
      <FfPageSection headline="First Responder" id="responder" className="pb-6 sm:pb-8">
        <h2 className="text-xl font-medium tracking-tight text-heading uppercase sm:text-2xl lg:text-3xl dark:text-heading-dark">Sie rufen den Rettungsdienst und ein Feuerwehreinsatzfahrzeug kommt?!...</h2>
        <div className="pt-4 text-sm font-light sm:pt-6 lg:pt-8 lg:text-base lg:font-normal">
          Das Zauberwort lautet First Responder, was so viel bedeutet wie &quot;erste Antwort&quot; oder &quot;erste Reaktion&quot;. Für die Freiwillige Feuerwehr Donaustauf steht dies für die qualifizierte medizinische Erstversorgung im
          Notfall.
        </div>
        <div className="mt-2">
          Das Ziel der First Responder ist es, das so genannte therapiefreie Intervall – also die Zeit zwischen Absetzen des Notrufs und Eintreffen des Rettungsdienstes – möglichst kurz zu halten. Dadurch erhöhen sich die Erfolgsaussichten
          für die Behandlung der Patienten deutlich. In der Zeit zwischen dem Eintritt des Notfalls und dem Eintreffen des Rettungsdienstes sollen die Betroffenen nicht ausschließlich auf zufällig geleistete Erste Hilfe angewiesen sein,
          sondern eine fachgerechte und sachkundige Erstversorgung erhalten.
        </div>
        <div>Die Inhalte werden abwechslungsreich in Theorie und Praxis vermittelt. Schwierigkeit und Umfang richten sich nach Alter und Leistungsstand der Teilnehmenden, damit alle mit Freude und Sicherheit lernen können.</div>
        <div className="mt-2">
          Die First Responder der Freiwilligen Feuerwehr Donaustauf werden bei medizinischen Notfällen in der Verwaltungsgemeinschaft alarmiert. Sie überbrücken die Zeit bis zum Eintreffen der parallel alarmierten Rettungswagen oder
          Notarzteinsatzfahrzeuge aus Regensburg oder Wörth.
        </div>
        <div className="mt-2">Alle Mitglieder unserer First Responder Einheit verfügen mindestens über den Sanitätslehrgang San A+B sowie weitere Zusatzausbildungen und Einweisungen im Umgang mit speziellen Medizinprodukten.</div>
      </FfPageSection>
      <FfPageSection headline="Ablauf eines First Responder Einsatzes" id="einsatz" subSection className="bg-gray-200 pb-6 sm:pb-8 dark:bg-gray-900">
        <div>
          <ul className="pl-8">
            <li className="list-disc">Notruf bei der Leitstelle Regensburg über die 112</li>
            <li className="list-disc">Die Leitstelle alarmiert den nächsten freien Rettungswagen und/oder Notarzteinsatzfahrzeug und die First Responder</li>
            <li className="list-disc">Die Feuerwehrkameraden besetzen ein Feuerwehreinsatzfahrzeug, melden sich über Funk bei der Leitstelle und rücken aus</li>
            <li className="list-disc">Eintreffen an der Einsatzstelle</li>
            <li className="list-disc">Einleiten der medizinischen Erstversorgung</li>
            <li className="list-disc">Qualifizierte Übergabe des Patienten an den Rettungsdienst</li>
          </ul>
        </div>
      </FfPageSection>
      <SpendenContent subSection />
    </>
  );
}

export default FirstResponderSpenden;
