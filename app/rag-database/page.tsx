import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Reveal } from "@/components/reveal"
import { Spotlight } from "@/components/spotlight"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "RAG database | Privat AI for bedriften din",
  description:
    "Semantisk søk i egne dokumenter med hybrid vektor-database. Egen AI trent på bedriftens info — EU-hostet og GDPR-kompatibel.",
  keywords: [
    "RAG database",
    "privat AI bedrift",
    "hybrid vektor database",
    "semantisk søk",
    "internt oppslagsverk AI",
    "RAG system"
  ],
  openGraph: {
    title: "RAG database | Privat AI for bedriften din",
    description: "Semantisk søk i egne dokumenter med hybrid vektor-database.",
  },
}

const problems = [
  "PDF-er",
  "Teams-mapper",
  "Excel-ark",
  "E-poster",
  "Interne håndbøker",
  "Systemer som ikke snakker sammen",
]

const features = [
  { number: "01", title: "Semantisk søk", description: "Spør med naturlig språk — få presise svar." },
  { number: "02", title: "Vektor-database", description: "Forstår kontekst og mening, ikke bare nøkkelord." },
  { number: "03", title: "Hybrid-søk", description: "Kombinerer semantikk med tall, datoer og referanser." },
  { number: "04", title: "Strengt avgrenset tilgang", description: "Rollebasert tilgang til sensitiv informasjon." },
  { number: "05", title: "Full logging", description: "Sporbarhet på alle oppslag og interaksjoner." },
  { number: "06", title: "Sikker EU-hosting", description: "GDPR-kompatibel lagring i EU/EØS." },
]

const examples = [
  "Hva er våre priser for X?",
  "Hva er prosedyren for Y?",
  "Hva står i kontrakten med kunde Z?",
]

const integrations = ["PDF-mapper", "SharePoint / OneDrive", "Supabase", "Teams", "Dropbox"]

const steps = [
  { number: "01", title: "Dokumenter lastes inn", description: "Importer eksisterende dokumenter fra mapper og systemer." },
  { number: "02", title: "Data vektoriseres", description: "Innholdet konverteres til semantiske vektorer for AI-forståelse." },
  { number: "03", title: "Hybrid-modell bygges", description: "Kombinerer semantisk søk med tradisjonelt søk for best resultat." },
  { number: "04", title: "Ansatte bruker AI", description: "Tilgang via portal eller chatbot — spør med naturlig språk." },
  { number: "05", title: "Kontinuerlig oppdatering", description: "Nye dokumenter synkroniseres automatisk." },
]

export default function RAGDatabasePage() {
  return (
    <>
      <Breadcrumbs />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 hero-grid" aria-hidden="true" />
        <Spotlight />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-0 pointer-events-none" aria-hidden="true" />

        <div className="container relative">
          <Reveal>
            <p className="eyebrow eyebrow-line mb-6">Privat bedrifts-AI</p>
            <h1 className="font-display text-display-xl text-paper-0 leading-[0.95] tracking-[-0.04em] max-w-5xl">
              Din egen AI,
              <br />
              <span className="shimmer-text">trent på bedriftens dokumenter.</span>
            </h1>
            <p className="mt-10 text-lg sm:text-xl text-paper-2 leading-relaxed max-w-2xl">
              Hybrid RAG-system med vektor-database og semantisk søk. Gir ansatte
              rask tilgang til interne regler, priser, prosedyrer og tekniske
              dokumenter.
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
                  Informasjon er
                  <br />
                  <span className="text-paper-3">spredd og vanskelig å finne.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-ink-3 border border-ink-3">
            {problems.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="bg-ink-0 p-6 h-full flex flex-col justify-between min-h-[120px]">
                  <span className="font-mono text-xs text-paper-3">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-paper-1 font-medium mt-3 text-sm">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 border-l border-paper-0 pl-6 max-w-2xl">
              <p className="text-lg text-paper-1">
                <span className="text-paper-0 font-medium">Dette gir feil, misforståelser og tidstyver.</span>{' '}
                <span className="text-paper-2">Ansatte bruker timer på å lete etter informasjon som burde vært tilgjengelig på sekunder.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Løsning</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-lg text-paper-0 leading-[1.0]">
                  Et privat
                  <br />
                  <span className="text-paper-3">AI-oppslagsverk.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-3 border border-ink-3 mb-16">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-ink-0 p-8 h-full">
                  <span className="font-mono text-xs text-paper-3">{f.number}</span>
                  <h3 className="mt-4 font-display text-xl text-paper-0 leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm text-paper-2 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="eyebrow mb-6">Eksempler på spørsmål</p>
            <div className="space-y-2">
              {examples.map((ex, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="border border-ink-3 bg-ink-1 p-5 hover:border-ink-5 transition-colors">
                    <p className="font-display text-lg text-paper-1 italic">
                      &ldquo;{ex}&rdquo;
                    </p>
                  </div>
                </Reveal>
              ))}
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
                  <span className="text-paper-3">dokumentene ligger.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-wrap gap-2">
            {integrations.map((name, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <span className="inline-flex items-center px-4 py-2 border border-ink-3 text-sm text-paper-1 hover:border-paper-0 hover:bg-paper-0/[0.04] transition-all">
                  {name}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="slik-fungerer-det" className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Slik fungerer det</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-lg text-paper-0 leading-[1.0]">
                  Fra dokumentkaos
                  <br />
                  <span className="text-paper-3">til kunnskapsbase.</span>
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

      {/* CTA */}
      <section className="py-40 border-t border-ink-3 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50" aria-hidden="true" />
        <div className="container relative">
          <Reveal>
            <div className="max-w-4xl">
              <p className="eyebrow eyebrow-line mb-8">Neste steg</p>
              <h2 className="font-display text-display-xl text-paper-0 leading-[0.95]">
                En intern AI som
                <br />
                <span className="shimmer-text">kjenner din bedrift.</span>
              </h2>
              <p className="mt-8 text-xl text-paper-2 max-w-2xl leading-relaxed">
                Se hvordan en intern AI kan spare hundrevis av timer.
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
