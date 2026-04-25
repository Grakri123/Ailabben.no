import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Reveal } from "@/components/reveal"
import { Spotlight } from "@/components/spotlight"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Skreddersydd AI-utvikling | Tilpassede automasjonsløsninger",
  description: "Få skreddersydde AI- og automasjonsløsninger: API-integrasjoner, dashboards, RAG-systemer, dokumentgenerering og salgsverktøy.",
  keywords: [
    "skreddersydd AI utvikling",
    "AI automasjonsløsninger",
    "API integrasjoner AI",
    "AI system for SMB",
    "tilpassede AI løsninger",
    "RAG system utvikling"
  ],
  openGraph: {
    title: "Skreddersydd AI-utvikling | Tilpassede automasjonsløsninger",
    description: "Få skreddersydde AI- og automasjonsløsninger: API-integrasjoner, dashboards, RAG-systemer, dokumentgenerering og salgsverktøy.",
  },
}

const problems = [
  "Manuelle prosesser",
  "Duplikat-data",
  "Gamle systemer",
  "Manglende API-koblinger",
  "Ineffektiv arbeidsflyt",
]

const solutions = [
  { number: "01", title: "API-integrasjoner", description: "Kobler systemer sømløst sammen" },
  { number: "02", title: "Interne dashboards", description: "Visualiserer data og KPI-er i sanntid" },
  { number: "03", title: "Automatisering", description: "Erstatter manuelle prosesser med automatikk" },
  { number: "04", title: "Dokumentgenerering", description: "Automatisk generering av rapporter og dokumenter" },
  { number: "05", title: "RAG-systemer", description: "Intern AI-kunnskap basert på dine data" },
  { number: "06", title: "Salgsverktøy", description: "CRM-tilpasninger og salgsstøtte" },
  { number: "07", title: "Egen AI-infrastruktur", description: "Komplett AI-plattform for din bedrift" },
  { number: "08", title: "Komplette applikasjoner", description: "Full-stack løsninger fra bunn av" },
]

const integrations = ["Tripletex", "PowerOffice", "Shopify", "Outlook", "Teams", "Supabase", "CRM-systemer", "Interne databaser"]

const steps = [
  { number: "01", title: "Vi kartlegger behov", description: "Grundig analyse av dine utfordringer og ønsker." },
  { number: "02", title: "Lager prototype", description: "Rask utvikling av prototype for testing og godkjenning." },
  { number: "03", title: "Utvikler løsning", description: "Full utvikling med moderne teknologi og beste praksis." },
  { number: "04", title: "Setter opp drift", description: "Deployment, vedlikehold og overvåkning." },
  { number: "05", title: "Fortløpende forbedringer", description: "Kontinuerlig optimalisering og nye funksjoner." },
]

const pricing = [
  {
    title: "Prosjektbasert",
    description: "Fast pris for definerte prosjekter",
    points: ["Tilbud basert på omfang", "Klare milepæler", "Forutsigbare kostnader"],
  },
  {
    title: "Timepris",
    description: "Fleksibel løsning for løpende behov",
    points: ["Ad-hoc arbeid", "Vedlikehold", "Mindre tilpasninger"],
  },
]

export default function SkreddersyddUtviklingPage() {
  return (
    <>
      <Breadcrumbs />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 hero-grid" aria-hidden="true" />
        <Spotlight />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-0 pointer-events-none" aria-hidden="true" />

        <div className="container relative">
          <Reveal>
            <p className="eyebrow eyebrow-line mb-6">Skreddersydd utvikling</p>
            <h1 className="font-display text-display-xl text-paper-0 leading-[0.95] tracking-[-0.04em] max-w-5xl">
              Bygget for deg.
              <br />
              <span className="shimmer-text">Helt fra grunnen.</span>
            </h1>
            <p className="mt-10 text-lg sm:text-xl text-paper-2 leading-relaxed max-w-2xl">
              For bedrifter som trenger noe helt eget. Vi bygger alt fra
              API-integrasjoner til full AI-infrastruktur — med et eget
              utviklingsteam.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  Kontakt oss
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#slik-fungerer-det">Se hvordan det fungerer</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem */}
      <section className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Problem</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-lg text-paper-0 leading-[1.0]">
                  Systemer
                  <br />
                  <span className="text-paper-3">snakker ikke sammen.</span>
                </h2>
                <p className="mt-6 text-lg text-paper-2 max-w-xl">
                  Mange bedrifter sliter med fragmenterte systemer som stopper vekst.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-ink-3 border border-ink-3">
            {problems.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-ink-0 p-8 h-full flex flex-col justify-between min-h-[140px]">
                  <span className="font-mono text-xs text-paper-3">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-paper-1 font-medium mt-4">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 border-l border-paper-0 pl-6 max-w-2xl">
              <p className="text-lg text-paper-1">
                <span className="text-paper-0 font-medium">Dette stopper vekst.</span>{' '}
                Uten moderne integrasjoner og automatisering, bruker du tid på
                repeterende oppgaver i stedet for å bygge bedriften.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Løsning */}
      <section className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Løsning</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-lg text-paper-0 leading-[1.0]">
                  Moderne, modulært,
                  <br />
                  <span className="text-paper-3">tilpasset deg.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-3 border border-ink-3">
            {solutions.map((s, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="bg-ink-0 p-8 h-full">
                  <span className="font-mono text-xs text-paper-3">{s.number}</span>
                  <h3 className="mt-4 font-display text-xl text-paper-0 leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-paper-2 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 border border-ink-3 bg-ink-1 p-8 max-w-2xl">
              <p className="eyebrow mb-3">EU-hosting</p>
              <h3 className="font-display text-2xl text-paper-0 leading-tight">
                All kode hostes i EU.
              </h3>
              <p className="mt-3 text-paper-2">
                Med moderne teknologi, beste praksis og full GDPR-kompatibilitet.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Integrasjoner */}
      <section className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Integrasjoner</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-md text-paper-0 leading-[1.05]">
                  Kobler seg til der
                  <br />
                  <span className="text-paper-3">dataene dine bor.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-wrap gap-2">
            {integrations.map((name, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <span className="inline-flex items-center px-4 py-2 border border-ink-3 text-sm text-paper-1 hover:border-paper-0 hover:bg-paper-0/[0.04] transition-all">
                  {name}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Slik fungerer det */}
      <section id="slik-fungerer-det" className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Slik fungerer det</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-lg text-paper-0 leading-[1.0]">
                  Fra idé til drift.
                  <br />
                  <span className="text-paper-3">Fem steg.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="border-t border-ink-3">
            {steps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-b border-ink-3">
                  <div className="lg:col-span-2">
                    <span className="font-mono text-sm text-paper-3">{step.number}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-2xl text-paper-0 leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-paper-2 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pris */}
      <section className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Pris</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-md text-paper-0 leading-[1.05]">
                  To prismodeller.
                  <br />
                  <span className="text-paper-3">Du velger.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-3 border border-ink-3">
            {pricing.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-ink-0 p-8 lg:p-10 h-full">
                  <h3 className="font-display text-2xl text-paper-0 leading-tight">{p.title}</h3>
                  <p className="mt-2 text-paper-2">{p.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-paper-2">
                    {p.points.map((pt, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-paper-3 font-mono">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 border-t border-ink-3 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50" aria-hidden="true" />
        <div className="container relative">
          <Reveal>
            <div className="max-w-4xl">
              <p className="eyebrow eyebrow-line mb-8">Neste steg</p>
              <h2 className="font-display text-display-xl text-paper-0 leading-[0.95]">
                Klar for noe
                <br />
                <span className="shimmer-text">helt eget?</span>
              </h2>
              <p className="mt-8 text-xl text-paper-2 max-w-2xl leading-relaxed">
                La oss bygge løsningen din – akkurat slik du trenger den.
              </p>
              <div className="mt-12">
                <Button asChild size="lg">
                  <Link href="/kontakt">
                    Kontakt oss
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
