import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Personvernerklæring - AI Labben",
  description: "Personvernerklæring for AI Labben. Les om hvordan vi behandler dine personopplysninger.",
}

export default function PersonvernPage() {
  return (
    <div className="py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl prose prose-lg">
          <h1 className="text-4xl font-bold tracking-tight mb-8">
            Personvernerklæring
          </h1>
          
          <p className="text-gray-600 mb-8">
            Sist oppdatert: {new Date().toLocaleDateString('nb-NO')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Hvem vi er</h2>
            <p>
              Granli Holding AS (org. nr. 931 211 404) driver nettsiden ailabben.no og tilbyr 
              AI-tjenester til norske bedrifter. Vi er behandlingsansvarlig for dine personopplysninger.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <strong>Kontaktinformasjon:</strong><br />
              Granli Holding AS<br />
              Daglig leder og personvernansvarlig: Kristian Granli<br />
              E-post: kristian@ailabben.no<br />
              Telefon: 95 11 76 49
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Hvilke opplysninger vi samler inn</h2>
            
            <h3 className="text-xl font-semibold mb-3">Kontaktskjema</h3>
            <p>Når du sender oss en henvendelse registrerer vi:</p>
            <ul>
              <li>Navn (obligatorisk)</li>
              <li>Bedriftsnavn (valgfritt)</li>
              <li>E-postadresse (obligatorisk)</li>
              <li>Din melding til oss (obligatorisk)</li>
              <li>Tidspunkt for henvendelsen</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Chatbot-samtaler</h3>
            <p>Vår AI-chatbot registrerer:</p>
            <ul>
              <li>Hele samtalehistorikken med deg</li>
              <li>Kontaktopplysninger du oppgir (navn, bedrift, e-post)</li>
              <li>Tidspunkt for samtalen</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Nettsidebruk</h3>
            <p>Vi samler automatisk inn:</p>
            <ul>
              <li>IP-adresse og generell stedsinformasjon</li>
              <li>Informasjon om nettleser og enhet</li>
              <li>Hvilke sider du besøker og hvor lenge</li>
              <li>Referansekilder (hvilken side du kom fra)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Hvorfor vi behandler opplysningene</h2>
            
            <h3 className="text-xl font-semibold mb-3">Kontakthenvendelser</h3>
            <p><strong>Formål:</strong> Besvare dine spørsmål og tilby våre tjenester</p>
            <p><strong>Rettslig grunnlag:</strong> Berettiget interesse i å drive virksomhet og ditt samtykke</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Markedsføring og salg</h3>
            <p><strong>Formål:</strong> Sende deg informasjon om våre tjenester, oppfølgingssamtaler og nyhetsbrev</p>
            <p><strong>Rettslig grunnlag:</strong> Berettiget interesse og ditt samtykke</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Forbedring av tjenester</h3>
            <p><strong>Formål:</strong> Analysere chatbot-samtaler for å forbedre våre AI-tjenester</p>
            <p><strong>Rettslig grunnlag:</strong> Berettiget interesse i å utvikle bedre tjenester</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Nettstedstatistikk</h3>
            <p><strong>Formål:</strong> Forstå hvordan nettsiden brukes og forbedre brukeropplevelsen</p>
            <p><strong>Rettslig grunnlag:</strong> Berettiget interesse</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Hvor lenge vi lagrer opplysningene</h2>
            <ul>
              <li><strong>Kontakthenvendelser:</strong> 30 dager</li>
              <li><strong>Chatbot-samtaler:</strong> 30 dager</li>
              <li><strong>Nettstedstatistikk:</strong> 24 måneder (anonymisert)</li>
            </ul>
            <p className="mt-4">
              Etter disse periodene slettes personopplysningene manuelt fra våre systemer. 
              Du kan når som helst be om raskere sletting ved å kontakte oss.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Hvem vi deler opplysninger med</h2>
            
            <h3 className="text-xl font-semibold mb-3">Tredjeparts-tjenester</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p><strong>Supabase (database):</strong> Servere i Sverige - EU/EØS</p>
              <p><strong>Mistral AI (chatbot):</strong> Servere i Frankrike - EU/EØS</p>
              <p><strong>Vercel (hosting og statistikk):</strong> Servere i EU/EØS</p>
              <p><strong>Våre egne servere:</strong> Helsinki, Finland - EU/EØS</p>
            </div>
            
            <p className="mt-4">
              Alle våre leverandører er lokalisert i EU/EØS og er underlagt GDPR. 
              Vi deler ikke personopplysninger med andre tredjeparter.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Framtidig Facebook-annonsering</h3>
            <p>
              Vi planlegger å implementere Facebook Pixel for målrettet annonsering. 
              Dette vil bli oppdatert i personvernerklæringen når det skjer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Dine rettigheter</h2>
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

            <p className="mt-4">
              For å utøve dine rettigheter, kontakt oss på kristian@ailabben.no eller ring 95 11 76 49.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Informasjonskapsler (cookies)</h2>
            <p>
              Vi bruker kun teknisk nødvendige cookies og Vercel Analytics for å forstå hvordan 
              nettsiden brukes. Disse krever ikke samtykke da de er nødvendige for driften.
            </p>
            <p className="mt-4">
              Når vi implementerer Facebook Pixel vil vi be om ditt samtykke for markedsføringscookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Datasikkerhet</h2>
            <p>
              Vi tar datasikkerhet på alvor og har implementert passende tekniske og organisatoriske 
              tiltak for å beskytte dine personopplysninger mot uautorisert tilgang, endring, 
              utlevering eller sletting.
            </p>
            <p className="mt-4">
              Alle data overføres kryptert (HTTPS/TLS) og lagres på sikre servere hos anerkjente 
              leverandører i EU/EØS.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Endringer i personvernerklæringen</h2>
            <p>
              Vi kan oppdatere denne personvernerklæringen fra tid til annen. Vesentlige endringer 
              vil bli kommunisert på nettsiden eller direkte til deg hvis vi har din kontaktinformasjon.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Klage til tilsynsmyndighetene</h2>
            <p>
              Hvis du mener vi behandler personopplysningene dine feil, kan du klage til Datatilsynet:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <strong>Datatilsynet</strong><br />
              Postboks 458 Sentrum, 0105 Oslo<br />
              Telefon: 22 39 69 00<br />
              E-post: postkasse@datatilsynet.no<br />
              Nettside: www.datatilsynet.no
            </div>
          </section>

          <div className="border-t pt-8 mt-12 text-sm text-gray-600">
            <p>
              Har du spørsmål om denne personvernerklæringen? 
              Kontakt oss på <a href="mailto:kristian@ailabben.no" className="text-orange-600 hover:text-orange-700">kristian@ailabben.no</a> 
              eller ring <a href="tel:+4795117649" className="text-orange-600 hover:text-orange-700">95 11 76 49</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 