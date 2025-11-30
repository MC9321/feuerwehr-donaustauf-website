'use client';

import { JSX } from 'react';

import { FfPageSection } from '@/components/FfPageSection';
import CloudinaryImageGalleryImage from '@/components/Image/CloudinaryImageGallery';
import CloudinaryPageImage from '@/components/Image/CloudinaryPageImage';
import { ImageData } from '@/components/ImageOverlay/types/imageOverlayTypes';

interface GrossbrandJagdschlossContentProps {
  images?: ImageData[];
}

function GrossbrandJagdschlossContent({ images }: Readonly<GrossbrandJagdschlossContentProps>): JSX.Element {
  return (
    <article>
      <FfPageSection headline="Großbrand am 06.10.2025" id="grossbrand">
        <div className="pt-4 text-sm font-light sm:pt-6 md:inline-flex lg:pt-8 lg:text-base lg:font-normal">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <div className="font-bold">Kommandant dankt nach Großbrand allen Einsatzkräften</div>
            <div className="mt-2">
              <span className="font-bold">Donaustauf, 08. Oktober 2025</span> – Nach dem verheerenden Brand des Jagdschlosses Thiergarten am 06. Oktober 2025 spricht der Kommandant der Feuerwehr Donaustauf und Einsatzleiter des Großbrandes,
              Christopher Möck, allen beteiligten Organisationen und Einsatzkräften seinen tief empfundenen Dank aus.
            </div>
            <div className="mt-2">
              „Initial waren wir nur zusammen mit der Feuerwehr Sulzbach zu einem Kleinbrand, einem Flächenbrand im Freien, alarmiert“, so Möck. „Bereits auf der Anfahrt sah ich, dass es sich um ein massives Brandereignis handelte. Zunächst
              ging ich davon aus, dass der Wald in voller Ausdehnung brennt und erhöhte daher bereits während der Anfahrt auf ‚Waldbrand groß‘. Vor Ort angekommen, zeigte sich jedoch: Das Jagdschloss selbst stand in Vollbrand, daraufhin
              habe ich bei der Integrierten Leitstelle eine Alarmstufenerhöhung auf B6 veranlasst. „– eine Entscheidung, die sich im Nachhinein als absolut richtig herausgestellt hat“, erklärt Einsatzleiter Möck.
            </div>
            <div className="mt-2">
              Entgegen mancher Pressemeldungen war dies nicht die höchste Alarmstufe, jedoch bereits eine sehr hohe. Zwei weitere Stufen hätten noch folgen können. Mit der gewählten Stufe B6 wurden zusätzlich rund 6.000 Liter Löschwasser,
              20 Pressluftatmer, acht Löschgruppen (à neun Einsatzkräfte) sowie das Technische Hilfswerk (THW) und der Alarmbeamte des Landratsamtes hinzugezogen.
            </div>
            <div className="mt-2">
              Möck war als Erster am Objekt und erkundete die Lage zunächst allein, während sein Fahrer und die Feuerwehr Sulzbach noch damit beschäftigt waren, das Tor zum Golfplatz aufzubrechen.: „Ich konnte mich durch eine Lücke im Tor
              zwängen und lief zum Schloss. Die Szenerie war unheimlich – die Hitze, der Rauch, das lodernde Feuer. Etwa zwei bis drei Minuten war ich allein, bevor die ersten Kräfte eintrafen“, schildert Möck.
            </div>
            <div className="mt-2">
              In enger Abstimmung mit dem Gruppenführer der örtlich zuständigen Feuerwehr Sulzbach konnten die ersten Maßnahmen gezielt eingeleitet werden. Besonders wertvoll war dabei die hervorragende Ortskenntnis des Kameraden der
              Feuerwehr Sulzbach.
            </div>
            <div className="mt-2">
              Ein wesentliches Problem war die Wasserversorgung: Vor Ort gibt es lediglich eine Zisterne, die bestehenden privaten Hydranten am Objekt gaben aber kein Wasser ab. Es mussten daher zwei Schlauchleitungen von jeweils rund einem
              Kilometer Länge vom Otterbach zum Brandobjekt verlegt werden. Hinzu kamen die beengten Platzverhältnisse und die schwierige Zufahrt. Schon zu Beginn wurde ein sogenannter Bereitstellungsraum vor der Hammermühle eingerichtet,
              hier warteten die Fahrzeuge und wurden nur auf Abruf einzeln zum Objekt beordert. So konnte verhindert werden, dass sich Kräfte gegenseitig behindern.
            </div>
            <div className="mt-2">
              Kurz nach seinem Eintreffen waren das Donaustaufer Hilfeleistungslöschfahrzeug (HLF) sowie zwei Fahrzeuge der Feuerwehr Tegernheim vor Ort und begannen mit den Löschmaßnahmen zum Schutz des angrenzenden Gebäudes. Über mehrere
              Stunden kämpften mehr als 250 Einsatzkräfte verschiedenster Organisationen gemeinsam gegen die Flammen. Der Einsatz verlief hochprofessionell und ohne Zwischenfälle.
            </div>
            <div className="mt-2">
              Während das historische Schloss selbst nicht mehr gerettet werden konnte, gelang es den Einsatzkräften, das angrenzende Gebäude mit dem Golfshop sowie die umliegende Vegetation vollständig zu schützen. Das Feuer konnte rasch
              unter Kontrolle gebracht und die Löschwasserversorgung in kürzester Zeit aufgebaut werden.
            </div>
            <div className="mt-2">
              „Was mich besonders beeindruckt hat, war das perfekte Zusammenspiel aller Beteiligten. Alle Einheiten und Einheitsführer haben wie Zahnräder ineinandergegriffen – ohne Hektik, ohne Diskussionen, ohne Eigendynamik. Jeder
              wusste, was zu tun ist. Dieses organisationsübergreifende, kameradschaftliche Arbeiten war beispielhaft. Ich bin sehr stolz auf die gesamte Blaulichtfamilie“, so Möck. Trotz der schwierigen Bedingungen – Nachtzeit, steiles
              Gelände und enorme Hitzeentwicklung – verlief der Einsatz ohne Verletzte unter den Feuerwehrdienstleistenden.
            </div>
            <div className="mt-2">
              Am Morgen wurde beruflich bedingt ein Wechsel der Einsatzleitung vorgenommen und stellvertretender Kommandant Patrick Schrödel übernahm die Einsatzleitung von Christopher Möck. Ab diesem Zeitpunkt begannen die
              Nachlöscharbeiten, die weiterhin viel Fachwissen, Erfahrung und Entscheidungskraft erforderten. „Ich konnte mich auf meinen Stellvertreter blind verlassen und konnte beruhigt nach Hause fahren“, so Möck.
            </div>
            <div className="mt-2">
              Zu diesem Zeitpunkt war der Brand zwar unter Kontrolle, aber das Feuer noch nicht gelöscht: So lagen im Erdgeschoss flächig etwa 1,5 bis 2 m Brandschutt und glimmende Holzteile, die es endgültig zu löschen galt. „Am Morgen
              alarmierte ich die Löschwasserkomponente des Landkreises Regensburg – mehrere Tanklöschfahrzeuge mit insgesamt rund 10.000 Litern Wasser“, berichtet Schrödel. „Diese Fahrzeuge brachten im Pendelverkehr Wasser aus einem
              Hydranten im Ortsgebiet Sulzbach zur Zisterne. Das war notwendig, da ich zwei Drehleitern angefordert hatte, die einen enorm hohen Wasserverbrauch haben.“ Um eine Brandwache über mehrere Tage zu vermeiden, wurde über mehrere
              Stunden eine große Menge Wasser auf die rauchende Ruine abgegeben. Die erneute Inbetriebnahme der Schlauchleitung vom Otterbach hätte im Verhältnis mehr Personal erfordert und wäre auch nicht so leistungsfähig gewesen. Die
              Koordination des Pendelverkehrs stellte eine weitere Herausforderung dar: Die enge Zufahrtsstraße ließ kein Kreuzen der Fahrzeuge zu, gleichzeitig durfte die Zisterne als Pufferspeicher nicht leer werden“, so Schrödel. „Dank
              der hervorragenden Abschnittsleitung durch Wolfgang Weigert und Michael Wagner lief alles reibungslos.“
            </div>
            <div className="mt-2">
              Um ein sicheres und effizientes Arbeiten sicherzustellen, wurde sowohl der THW-Baufachberater als auch die Feuerwehr-Drohne des Landkreises von Schrödel zur Einsatzstelle beordert. Während der Experte vom THW die
              Standfestigkeit der Außenmauern zum Schutz der eingesetzten Kräfte beurteilte, konnte die Landkreisdrohne die Löscherfolge mit ihrer integrierten Wärmebildkamera live überwachen. „Wir hatten in jedem Drehleiterkorb einen Mann,
              der in Echtzeit ein Wärmebild der Drohne über dem Objekt angezeigt bekam und so gezielt löschen konnte, das war genial“, so Schrödel.
            </div>
            <div className="mt-2">
              Großes Lob hatten die Einsatzleiter insgesamt für die Schlagkraft der Kräfte des Landkreises Regensburg: „Der Landkreis ist perfekt aufgestellt – das geländegängige Fahrzeug, das Fahrzeug der Unterstützungsgruppe-Örtliche
              Einsatzleitung oder die Drohne – alle waren bei diesem Einsatz unersetzbar. Das Bedienpersonal der genannten Einheiten war spitze“, ergänzt Möck.
            </div>
            <div className="mt-2">
              Dank der entschlossenen und überlegten Vorgehensweise von Schrödel konnte die Einsatzstelle schließlich nach 35 Stunden Einsatz am Dienstag „kalt“ übergeben werden. „Dank des überlegten und zielgerichteten Handelns konnten wir
              den eingesetzten Kräften viele Stunden ehrenamtlicher Arbeit ersparen“, so Möck.
            </div>
            <div className="mt-2">
              Besonderer Dank gilt auch dem Bayerischen Roten Kreuz Regensburg mit seinen Fachdiensten und dem Einsatzleiter Rettungsdienst Pompetzki Jos, der die Feuerwehr tatkräftig unterstützte: „Der Rettungsdienst hielt uns den Rücken
              frei, versorgte uns hervorragend und sicherte unsere Einsatzkräfte medizinisch ab. Sogar eine Feldküche wurde aufgebaut – der Kaffee und die warmen Mahlzeiten kamen genau zur richtigen Zeit. Hut ab vor dieser Leistung“, so
              Möck. Auch für die beengten Zuwegungen hatten die Retter vorgesorgt: An der Einsatzstelle standen zwei Quads mit Anhänger und Liege bereit, die dann etwaige Verletzte in etwas Entfernung an einen Rettungswagen übergeben
              hätten.
            </div>
            <div className="mt-2">
              Auch das Technische Hilfswerk (THW) war von Beginn an eng in den Einsatz eingebunden: „Die Fachberater des THW waren mit ihrem Wissen und ihrer Erfahrung eine wertvolle Unterstützung. Es war ein gutes Gefühl zu wissen, dass im
              Hintergrund das nötige Fachwissen und Gerät verfügbar war“, erklärt Möck. Das THW kam in der Nacht auch für Ausleuchtarbeiten zum Einsatz. Der THW-Baufachberater war ebenfalls zweimal anwesend und gab uns Informationen, die
              wir selbst nicht hätten einschätzen können.
            </div>
            <div className="mt-2">
              Insgesamt waren 48 Fahrzeuge von 19 Feuerwehren plus 15 Fahrzeuge des Rettungsdienstes am Einsatz beteiligt. Sämtliche Kräfte sammelten sich diszipliniert im Bereitstellungsraum – kein Fahrzeug fuhr ohne Anforderung zur
              Einsatzstelle. „Dieses hohe Maß an Professionalität, Disziplin und Zusammenarbeit hat mich tief beeindruckt“, so der abschließende Dank von Einsatzleiter Möck. „Dieser Einsatz hat gezeigt: Wenn die richtigen Menschen zur
              richtigen Zeit am richtigen Ort sind, funktioniert die Kette – und zwar gemeinsam, über alle Organisationsgrenzen hinweg.“
            </div>
            <div className="mt-2">
              Auch die Unterstützungsgruppe Örtliche Einsatzleitung (UG ÖEL) war in diesem Einsatz ein wichtiger Faktor. Die Kameradinnen und Kameraden haben hervorragende Arbeit geleistet und mich enorm entlastet“, lobt Möck. „Jeder
              Einzelne vor Ort hat dazu beigetragen, dass der Einsatz so erfolgreich verlaufen ist“. Ebenso bin ich unserem Kreisbrandrat Johann Bornschlegl sehr dankbar. Er war eine große Unterstützung – wir waren uns in allen
              Entscheidungen einig und haben eng zusammengearbeitet. Hans hat mir den Rücken freigehalten und mich mit seiner Erfahrung unglaublich unterstützt.“
            </div>
            <div className="mt-2">
              Nicht zu vergessen ist die alarmauslösende Stelle: Die Disponenten der ILS Regensburg haben ebenfalls großartige Arbeit geleistet und maßgeblich zum reibungslosen Ablauf des Einsatzes beigetragen. „Die Zusammenarbeit und
              Unterstützung der Kameraden in der ILS war perfekt – dafür möchte ich mich herzlich bedanken!“
            </div>
            <div className="mt-2 mb-4">
              Obwohl keine Menschen verletzt wurden, war der Einsatz emotional belastend: „Der Verlust dieses historischen Gebäudes, das Teil unserer Ortsgeschichte ist, hat uns alle bewegt. Der Gedanke, dass der Golfclub sein Zuhause
              verloren hat, hat uns erschüttert“, resümiert Möck. Auch gibt es bei der Feuerwehr eine Parallele zum aktuellen Einsatz: Das Jagdschloss Thiergarten von der fürstlichen Familie Thurn und Taxis 1885 als Ersatzbau für das Jahr
              1880 beim Marktbrand zum Opfer gefallende Sommerschloss Donaustauf errichtet. Auch damals schon im Löscheinsatz: Die Feuerwehren aus Donaustauf und Umgebung.
            </div>
          </div>
          <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
            <CloudinaryPageImage src="grossbrand_am_06102025_1_vo2wyo" width={405} height={227} alt="Großbrand am 06.10.2025 1" className="mb-4" enableOverlay imageSeries={images} imageIndex={0}>
              Brand des Jagdschlosses Thiergarten
            </CloudinaryPageImage>
          </div>
        </div>
      </FfPageSection>
      <FfPageSection id="stats" headline="Einsatzstatistik" level="h2" className="bg-gray-200 pb-6 sm:pb-8 dark:bg-gray-900">
        <h3 className="mt-2 text-lg font-bold">Zeiten</h3>
        <ul className="mt-2 list-disc pl-8">
          <li>
            <span className="font-bold">Alarmierung:</span> 06.10.2025, 00:34 Uhr
          </li>
          <li>
            <span className="font-bold">Einsatzende:</span> 07.10.2025, 12:25 Uhr
          </li>
          <li>
            <span className="font-bold">Dauer:</span> knapp 36 Stunden (35 Stunden 51 Minuten) (Ohne Zeit für Reparaturen, Einsatzberichte und Wiederherstellung)
          </li>
        </ul>
        <h3 className="mt-2 text-lg font-bold">Führung / Unterstützung</h3>
        <ul className="mt-2 list-disc pl-8">
          <li>
            <span className="font-bold">Kreisbrandrat:</span> Johann Bornschlegl
          </li>
          <li>
            <span className="font-bold">Kreisbrandmeister:</span> Martin Bosl
          </li>
          <li>
            <span className="font-bold">Kreisbrandinspektor:</span> Georg Koller
          </li>
        </ul>
        <h3 className="mt-2 text-lg font-bold">Ressourcen</h3>
        <ul className="mt-2 list-disc pl-8">
          <li>
            <span className="font-bold">Geschätzter Löschwasserverbrauch:</span> ca. 800.000 Liter
          </li>
          <li>
            <span className="font-bold">Schlauchleitungslänge:</span> ca. 2.500 Meter
          </li>
          <li>
            <span className="font-bold">Anzahl Schläuche:</span> ca. 150
          </li>
          <li>
            <span className="font-bold">Feuerwehr-Donaustauf allein:</span> 33 Einsatzkräfte mit 506,13 Stunden (ohne andere Feuerwehren)
          </li>
        </ul>
        <h3 className="mt-2 text-lg font-bold">Beteiligte Kräfte</h3>
        <ul className="mt-2 list-disc pl-8">
          <li>
            <span className="font-bold">Feuerwehren:</span> 19
          </li>
          <li>
            <span className="font-bold">Feuerwehrfahrzeuge:</span> insgesamt 48 über die gesamte Einsatzzeit verteilt
          </li>
          <li>
            <span className="font-bold">Rettungsdienstfahrzeuge:</span> 17
          </li>
        </ul>
        <h3 className="mt-2 text-lg font-bold">Feuerwehren</h3>
        <ul className="mt-2 list-disc pl-8">
          <li>FF Altenthann</li>
          <li>FF Bach</li>
          <li>FF Barbing</li>
          <li>FF Burgweintin</li>
          <li>FF Demling</li>
          <li>FF Donaustauf</li>
          <li>FF Geisling</li>
          <li>FF Lappersdorf</li>
          <li>FF Lichtenwald</li>
          <li>FF Neutraubling</li>
          <li>FF Pfaffenfang</li>
          <li>FF Regendorf</li>
          <li>BF Regensburg</li>
          <li>FF Sarching</li>
          <li>FF Sulzbach</li>
          <li>FF Tegernheim</li>
          <li>FF Wald (Cham)</li>
          <li>FF Wenzenbach</li>
          <li>FF Wörth</li>
          <li>Kater Regensburg 12/1</li>
        </ul>
        <h3 className="mt-2 text-lg font-bold">Technisches Hilfswerk (THW)</h3>
        <ul className="mt-2 list-disc pl-8">
          <li>THW Wörth</li>
          <li>THW Laaber</li>
          <li>THW-Fachberater</li>
          <li>THW-Baufachberater</li>
        </ul>
        <h3 className="mt-2 text-lg font-bold">BRK / SEG Einheiten</h3>
        <ul className="mt-2 mb-4 list-disc pl-8">
          <li>SEG Betreuung BRK Regensburg</li>
          <li>SEG Transport BRK Regensburg</li>
          <li>SEG Verpflegung BRK Regensburg</li>
          <li>SEG Motorradstreife BRK Regensburg (Quads)</li>
          <li>Rettungswägen BRK Regensburg</li>
          <li>SEG Technik und Sicherheit BRK Regensburg</li>
          <li>BRK Wörth</li>
          <li>BRK Regensburg</li>
          <li>BRK Regenstauf</li>
        </ul>
      </FfPageSection>
      {images && (
        <FfPageSection id="bilder" headline="Eindrücke" level="h2" className="pb-6 sm:pb-8">
          <CloudinaryImageGalleryImage imageSeries={images} />
        </FfPageSection>
      )}
    </article>
  );
}

export default GrossbrandJagdschlossContent;
