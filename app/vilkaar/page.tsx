import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Vilkår og betingelser - AI Labben",
  description:
    "Vilkår og betingelser for AI Labbens AI-tjenester. Les om våre betingelser før du bestiller.",
}

export default function VilkaarPage() {
  return (
    <>
      <Breadcrumbs />

      <article className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <header className="mb-16">
                <p className="eyebrow eyebrow-line mb-6">
                  Sist oppdatert · {new Date().toLocaleDateString('nb-NO')}
                </p>
                <h1 className="font-display text-display-lg text-paper-0 leading-[1.0] tracking-[-0.035em]">
                  Vilkår og betingelser
                </h1>
              </header>
            </Reveal>

            <div className="prose-editorial">
              <h2>1. Generelle bestemmelser</h2>

              <h3>1.1 Hvem disse vilkårene gjelder for</h3>
              <p>
                Disse vilkårene regulerer forholdet mellom Granli Holding AS
                (org. nr. 931 211 404), heretter kalt &quot;AI Labben&quot;, &quot;vi&quot;
                eller &quot;oss&quot;, og våre kunder som kjøper AI-tjenester.
              </p>

              <h3>1.2 Aksept av vilkår</h3>
              <p>
                Ved å bruke våre tjenester eller inngå avtale med oss, aksepterer
                du disse vilkårene fullt ut. Hvis du ikke aksepterer vilkårene,
                kan du ikke bruke våre tjenester.
              </p>

              <h3>1.3 Endringer i vilkår</h3>
              <p>
                Vi forbeholder oss retten til å endre disse vilkårene med 30 dagers
                skriftlig varsel. Vesentlige endringer som påvirker pris eller
                tjenestens karakter krever separat avtale.
              </p>

              <h2>2. Våre tjenester</h2>

              <h3>2.1 AI-tjenester</h3>
              <p>AI Labben tilbyr følgende AI-løsninger til bedrifter:</p>
              <ul>
                <li>Resepsjonist-agenter (chat, telefon, e-post)</li>
                <li>E-postgenerering og markedsføring</li>
                <li>Leads-innsamling og kvalifisering</li>
                <li>Cold calling-agenter</li>
                <li>SEO-automatisering</li>
                <li>Kundeservice-automatisering</li>
              </ul>

              <h3>2.2 Teknisk plattform</h3>
              <p>
                Alle AI-agenter hostes på våre servere i Helsinki, Finland, med
                database-lagring hos Supabase i Sverige. AI-funksjonalitet leveres
                av Mistral AI (EU-servere).
              </p>

              <h3>2.3 Begrensninger</h3>
              <p>
                Vi tilbyr ikke AI-tjenester til virksomheter som håndterer særlig
                sensitive personopplysninger (helse, advokattjenester, finansielle
                rådgivningstjenester etc.). Vi forbeholder oss retten til å avslå
                kunder etter eget skjønn.
              </p>

              <h2>3. Pris og betalingsvilkår</h2>

              <h3>3.1 Prismodeller</h3>
              <p>Vi opererer med to hovedprismodeller:</p>

              <div className="border border-ink-3 bg-ink-1 p-6 my-8 not-prose">
                <p className="eyebrow mb-3">Alternativ 01 · Etableringsgebyr + månedlig</p>
                <ul className="text-sm text-paper-1 space-y-1.5 list-none pl-0">
                  <li>· Engangs etableringsgebyr for oppsett og konfigurasjon</li>
                  <li>· Månedlige hostingkostnader og driftsstøtte</li>
                  <li>· Ingen bindingstid</li>
                  <li>· 30 dagers oppsigelsestid</li>
                </ul>
              </div>

              <div className="border border-ink-3 bg-ink-1 p-6 my-8 not-prose">
                <p className="eyebrow mb-3">Alternativ 02 · Høyere månedspris uten etableringsgebyr</p>
                <ul className="text-sm text-paper-1 space-y-1.5 list-none pl-0">
                  <li>· Ingen etableringsgebyr</li>
                  <li>· Høyere månedlig pris som inkluderer oppsett</li>
                  <li>· Minimum 12 måneders bindingstid</li>
                  <li>· 30 dagers oppsigelsestid ved bindingsperiodens utløp</li>
                </ul>
              </div>

              <h3>3.2 Betalingsbetingelser</h3>
              <ul>
                <li>Etableringsgebyr faktureres ved kontraktsinngåelse</li>
                <li>Månedlige kostnader faktureres forskuddsvis</li>
                <li>Betalingsfrist: 14 dager fra fakturadato</li>
                <li>Ved forsinket betaling påløper forsinkelsesrente etter lov</li>
              </ul>

              <h3>3.3 Prisendringer</h3>
              <p>
                Vi kan justere priser med 60 dagers skriftlig varsel. Vesentlige
                prisøkninger (over 15% per år) gir deg rett til å si opp avtalen
                uten varselstid.
              </p>

              <h2>4. Kundens forpliktelser</h2>

              <h3>4.1 Informasjonsplikt</h3>
              <p>Kunden forplikter seg til å:</p>
              <ul>
                <li>Gi korrekt og fullstendig informasjon om virksomheten</li>
                <li>Informere om endringer som kan påvirke AI-tjenesten</li>
                <li>Gi nødvendig tilgang til systemer for integrering</li>
                <li>Følge våre instruksjoner for optimal drift</li>
              </ul>

              <h3>4.2 Ansvarlig bruk</h3>
              <p>Kunden er ansvarlig for at AI-agentene brukes i samsvar med:</p>
              <ul>
                <li>Gjeldende norsk og EU-lovgivning</li>
                <li>Markedsføringslov og personvernforordningen (GDPR)</li>
                <li>Etiske retningslinjer for AI-bruk</li>
                <li>Bransjespesifikke reguleringer</li>
              </ul>

              <h2>5. Dataansvar og eierskap</h2>

              <h3>5.1 Dataeierskap</h3>
              <p>
                Alle data som kunden mater inn i AI-systemene tilhører kunden.
                AI Labben har kun behandlerrolle og eier ikke kundens forretningsdata.
              </p>

              <h3>5.2 Samtaler og interaksjoner</h3>
              <p>
                Samtaler og interaksjoner med AI-agentene eies av AI Labben og kan
                brukes til:
              </p>
              <ul>
                <li>Forbedring av AI-modeller og tjenester</li>
                <li>Kvalitetssikring og support</li>
                <li>Anonymisert analyse og statistikk</li>
              </ul>

              <h3>5.3 Backup og datasikkerhet</h3>
              <p>
                Vi tar jevnlige backups av systemet, men kunden er ansvarlig for å
                sikre egne kritiske forretningsdata utenfor vårt system.
              </p>

              <h2>6. Tjenestens tilgjengelighet</h2>

              <h3>6.1 Oppetid</h3>
              <p>
                Vi streber etter høyest mulig oppetid, men kan ikke garantere 100%
                tilgjengelighet. Planlagt vedlikehold varsles minimum 24 timer i
                forveien.
              </p>

              <h3>6.2 Support</h3>
              <ul>
                <li>Teknisk support: Hverdager 09:00–17:00</li>
                <li>Kritiske feil: Respons innen 24 timer</li>
                <li>Vanlige henvendelser: Respons innen 48 timer</li>
              </ul>

              <h2>7. Ansvarsbegrensning</h2>

              <h3>7.1 AI-systemenes begrensninger</h3>
              <p>
                AI-teknologi er under utvikling og kan gjøre feil. AI Labben kan
                ikke holdes ansvarlig for:
              </p>
              <ul>
                <li>Feilaktige AI-responser eller beslutninger</li>
                <li>Tap av forretning grunnet AI-feil</li>
                <li>Konsekvenser av tekniske systemfeil</li>
                <li>Force majeure (strømbrudd, naturkatastrofer etc.)</li>
              </ul>

              <h3>7.2 Maksimalt erstatningsansvar</h3>
              <p>
                Vårt samlede erstatningsansvar overfor kunden er begrenset til tre
                måneder av kundens månedlige betaling for den berørte tjenesten.
              </p>

              <h3>7.3 Indirekte tap</h3>
              <p>
                Vi er ikke ansvarlige for indirekte tap som tapt omsetning, goodwill
                eller andre følgeskader.
              </p>

              <h2>8. Oppsigelse og avslutning</h2>

              <h3>8.1 Ordinær oppsigelse</h3>
              <ul>
                <li>30 dagers gjensidig oppsigelsestid</li>
                <li>Oppsigelse må skje skriftlig</li>
                <li>Tjenester faktureres til avtalens opphør</li>
              </ul>

              <h3>8.2 Mislighold</h3>
              <p>
                Ved vesentlig mislighold kan avtalen sies opp med umiddelbar virkning.
                Dette inkluderer manglende betaling etter purring og brudd på disse
                vilkårene.
              </p>

              <h3>8.3 Kundens data ved oppsigelse</h3>
              <p>
                Ved avslutning slettes kundens data innen 30 dager. Kunden må sikre
                eksport av ønskede data før avslutning.
              </p>

              <h2>9. Immaterielle rettigheter</h2>

              <h3>9.1 AI Labbens rettigheter</h3>
              <p>
                All programvare, AI-modeller og teknisk løsninger utviklet av AI
                Labben forblir vår eiendom. Kunden får kun bruksrett til tjenestene.
              </p>

              <h3>9.2 Kundens rettigheter</h3>
              <p>
                Kunden beholder alle rettigheter til egne data, innhold og
                forretningsinformasjon som prosesseres av våre AI-systemer.
              </p>

              <h2>10. Tvistløsning og lovvalg</h2>

              <h3>10.1 Lovvalg</h3>
              <p>
                Avtalen reguleres av norsk lov. Tvister løses ved norske domstoler
                med Oslo tingrett som verneting.
              </p>

              <h3>10.2 Megling</h3>
              <p>
                Vi oppfordrer til at tvister først forsøkes løst i minnelighet eller
                gjennom mekling før rettslige skritt.
              </p>

              <h2>11. Kontaktinformasjon</h2>
              <div className="border border-ink-3 bg-ink-1 p-6 my-8 not-prose">
                <p className="eyebrow mb-3">Granli Holding AS</p>
                <div className="text-sm text-paper-1 space-y-1">
                  <p>Organisasjonsnummer: 931 211 404</p>
                  <p>Daglig leder: Kristian Granli</p>
                  <p>E-post: kristian@ailabben.no</p>
                  <p>Telefon: 95 11 76 49</p>
                </div>
              </div>

              <hr />

              <p className="text-sm text-paper-3">
                Har du spørsmål om disse vilkårene? Kontakt oss på{' '}
                <a href="mailto:kristian@ailabben.no">kristian@ailabben.no</a> eller
                ring <a href="tel:+4795117649">95 11 76 49</a>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
