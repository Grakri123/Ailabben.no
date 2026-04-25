import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Personvernerklæring - AI Labben",
  description:
    "Personvernerklæring for AI Labben. Les om hvordan vi behandler dine personopplysninger.",
}

export default function PersonvernPage() {
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
                  Personvernerklæring
                </h1>
              </header>
            </Reveal>

            <div className="prose-editorial">
              <h2>1. Hvem vi er</h2>
              <p>
                Granli Holding AS (org. nr. 931 211 404) driver nettsiden ailabben.no
                og tilbyr AI-tjenester til bedrifter. Vi er behandlingsansvarlig for
                dine personopplysninger.
              </p>
              <div className="border border-ink-3 bg-ink-1 p-6 my-8 not-prose">
                <p className="eyebrow mb-3">Kontaktinformasjon</p>
                <div className="text-sm text-paper-1 space-y-1">
                  <p>Granli Holding AS</p>
                  <p>Daglig leder og personvernansvarlig: Kristian Granli</p>
                  <p>E-post: kristian@ailabben.no</p>
                  <p>Telefon: 95 11 76 49</p>
                </div>
              </div>

              <h2>2. Hvilke opplysninger vi samler inn</h2>

              <h3>Kontaktskjema</h3>
              <p>Når du sender oss en henvendelse registrerer vi:</p>
              <ul>
                <li>Navn (obligatorisk)</li>
                <li>Bedriftsnavn (valgfritt)</li>
                <li>E-postadresse (obligatorisk)</li>
                <li>Din melding til oss (obligatorisk)</li>
                <li>Tidspunkt for henvendelsen</li>
              </ul>

              <h3>Chatbot-samtaler</h3>
              <p>Vår AI-chatbot registrerer:</p>
              <ul>
                <li>Hele samtalehistorikken med deg</li>
                <li>Kontaktopplysninger du oppgir (navn, bedrift, e-post)</li>
                <li>Tidspunkt for samtalen</li>
              </ul>

              <h3>Nettsidebruk</h3>
              <p>Vi samler automatisk inn:</p>
              <ul>
                <li>IP-adresse og generell stedsinformasjon</li>
                <li>Informasjon om nettleser og enhet</li>
                <li>Hvilke sider du besøker og hvor lenge</li>
                <li>Referansekilder (hvilken side du kom fra)</li>
              </ul>

              <h2>3. Hvorfor vi behandler opplysningene</h2>

              <h3>Kontakthenvendelser</h3>
              <p><strong>Formål:</strong> Besvare dine spørsmål og tilby våre tjenester</p>
              <p><strong>Rettslig grunnlag:</strong> Berettiget interesse i å drive virksomhet og ditt samtykke</p>

              <h3>Markedsføring og salg</h3>
              <p><strong>Formål:</strong> Sende deg informasjon om våre tjenester, oppfølgingssamtaler og nyhetsbrev</p>
              <p><strong>Rettslig grunnlag:</strong> Berettiget interesse og ditt samtykke</p>

              <h3>Forbedring av tjenester</h3>
              <p><strong>Formål:</strong> Analysere chatbot-samtaler for å forbedre våre AI-tjenester</p>
              <p><strong>Rettslig grunnlag:</strong> Berettiget interesse i å utvikle bedre tjenester</p>

              <h3>Nettstedstatistikk</h3>
              <p><strong>Formål:</strong> Forstå hvordan nettsiden brukes og forbedre brukeropplevelsen</p>
              <p><strong>Rettslig grunnlag:</strong> Berettiget interesse</p>

              <h2>4. Hvor lenge vi lagrer opplysningene</h2>
              <ul>
                <li><strong>Kontakthenvendelser:</strong> 30 dager</li>
                <li><strong>Chatbot-samtaler:</strong> 30 dager</li>
                <li><strong>Nettstedstatistikk:</strong> 24 måneder (anonymisert)</li>
              </ul>
              <p>
                Etter disse periodene slettes personopplysningene manuelt fra våre
                systemer. Du kan når som helst be om raskere sletting ved å kontakte oss.
              </p>

              <h2>5. Hvem vi deler opplysninger med</h2>

              <h3>Tredjeparts-tjenester</h3>
              <div className="border border-ink-3 bg-ink-1 p-6 my-8 not-prose">
                <p className="eyebrow mb-3">Leverandører i EU/EØS</p>
                <div className="text-sm text-paper-1 space-y-2">
                  <p><strong className="text-paper-0">Supabase</strong> (database) – Servere i Sverige</p>
                  <p><strong className="text-paper-0">Mistral AI</strong> (chatbot) – Servere i Frankrike</p>
                  <p><strong className="text-paper-0">Vercel</strong> (hosting og statistikk) – Servere i EU/EØS</p>
                  <p><strong className="text-paper-0">Egne servere</strong> – Helsinki, Finland</p>
                </div>
              </div>

              <p>
                Alle våre leverandører er lokalisert i EU/EØS og er underlagt GDPR.
                Vi deler ikke personopplysninger med andre tredjeparter.
              </p>

              <h3>Framtidig Facebook-annonsering</h3>
              <p>
                Vi planlegger å implementere Facebook Pixel for målrettet annonsering.
                Dette vil bli oppdatert i personvernerklæringen når det skjer.
              </p>

              <h2>6. Dine rettigheter</h2>
              <p>Du har følgende rettigheter knyttet til dine personopplysninger:</p>
              <ul>
                <li><strong>Rett til informasjon:</strong> Få informasjon om hvordan vi behandler dine opplysninger</li>
                <li><strong>Rett til innsyn:</strong> Se hvilke opplysninger vi har om deg</li>
                <li><strong>Rett til retting:</strong> Få rettet feilaktige opplysninger</li>
                <li><strong>Rett til sletting:</strong> Få slettet dine opplysninger</li>
                <li><strong>Rett til begrensning:</strong> Begrense hvordan vi behandler opplysningene</li>
                <li><strong>Rett til dataportabilitet:</strong> Få utlevert dine opplysninger i et strukturert format</li>
                <li><strong>Rett til motsettelse:</strong> Motsette deg behandling basert på berettiget interesse</li>
              </ul>
              <p>
                For å utøve dine rettigheter, kontakt oss på <a href="mailto:kristian@ailabben.no">kristian@ailabben.no</a> eller ring 95 11 76 49.
              </p>

              <h2>7. Informasjonskapsler (cookies)</h2>
              <p>
                Vi bruker kun teknisk nødvendige cookies og Vercel Analytics for å
                forstå hvordan nettsiden brukes. Disse krever ikke samtykke da de er
                nødvendige for driften.
              </p>
              <p>
                Når vi implementerer Facebook Pixel vil vi be om ditt samtykke for
                markedsføringscookies.
              </p>

              <h2>8. Datasikkerhet</h2>
              <p>
                Vi tar datasikkerhet på alvor og har implementert passende tekniske
                og organisatoriske tiltak for å beskytte dine personopplysninger mot
                uautorisert tilgang, endring, utlevering eller sletting.
              </p>
              <p>
                Alle data overføres kryptert (HTTPS/TLS) og lagres på sikre servere
                hos anerkjente leverandører i EU/EØS.
              </p>

              <h2>9. Endringer i personvernerklæringen</h2>
              <p>
                Vi kan oppdatere denne personvernerklæringen fra tid til annen.
                Vesentlige endringer vil bli kommunisert på nettsiden eller direkte
                til deg hvis vi har din kontaktinformasjon.
              </p>

              <h2>10. Klage til tilsynsmyndighetene</h2>
              <p>
                Hvis du mener vi behandler personopplysningene dine feil, kan du
                klage til Datatilsynet:
              </p>
              <div className="border border-ink-3 bg-ink-1 p-6 my-8 not-prose">
                <p className="eyebrow mb-3">Datatilsynet</p>
                <div className="text-sm text-paper-1 space-y-1">
                  <p>Postboks 458 Sentrum, 0105 Oslo</p>
                  <p>Telefon: 22 39 69 00</p>
                  <p>E-post: postkasse@datatilsynet.no</p>
                  <p>Nettside: www.datatilsynet.no</p>
                </div>
              </div>

              <hr />

              <p className="text-sm text-paper-3">
                Har du spørsmål om denne personvernerklæringen? Kontakt oss på{' '}
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
