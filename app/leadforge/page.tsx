import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Reveal } from "@/components/reveal"
import { Spotlight } from "@/components/spotlight"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "LeadFORGE | Under produksjon – AI Labben",
  description:
    "LeadFORGE er under produksjon. Vi bygger et verktøy for automatisert B2B-leadsgenerering – GDPR-vennlig og tilpasset norsk lov. Kontakt oss for å høre mer om hva som kommer.",
  keywords: [
    "LeadFORGE",
    "B2B leads generator AI",
    "automatisert prospektering",
    "AI generering leads",
    "GDPR vennlig leads",
    "Brønnøysund scraping",
    "under produksjon"
  ],
  openGraph: {
    title: "LeadFORGE | Under produksjon – AI Labben",
    description: "Vi bygger LeadFORGE – automatisert B2B-leadsgenerering. Kontakt oss for å høre mer om hva som kommer.",
  },
}

const problems = [
  "Finne riktige selskaper",
  "Hente nøkkelinfo",
  "Finne riktig kontaktperson",
  "Skrive e-poster",
  "Følge opp",
]

const features = [
  { number: "01", title: "Skraper Brreg + nettsider", description: "Automatisk innhenting av bedriftsdata fra offentlige kilder" },
  { number: "02", title: "Analyserer kontekst", description: "Forstår bedriftens behov og potensial basert på data" },
  { number: "03", title: "Identifiserer produkt-fit", description: "Matcher din løsning med bedrifter som faktisk trenger den" },
  { number: "04", title: "Lager relevante e-poster", description: "Genererer svært personlige og kontekstuelle meldinger" },
  { number: "05", title: "Genererer dialog", description: "Håndterer kommunikasjon på dine vegne" },
  { number: "06", title: "GDPR-kompatibel", description: "Holder seg innenfor norsk markedsføringslov" },
]

const integrations = ["Outlook", "Gmail", "Supabase", "CRM-systemer", "Automatiseringsverktøy"]

const steps = [
  { number: "01", title: "Legg inn kriterier", description: "Definer bransje, størrelse og behov for målbedrifter." },
  { number: "02", title: "AI finner og kvalifiserer", description: "Systemet skraper data og identifiserer de beste bedriftene." },
  { number: "03", title: "Genererer personlige e-poster", description: "AI skriver skreddersydde meldinger for hver bedrift." },
  { number: "04", title: "Du godkjenner utsending", description: "Full kontroll før noe sendes — du bestemmer." },
  { number: "05", title: "Leads kommer i innboksen", description: "Motta svar og følg opp kvalifiserte leads." },
]

export default function LeadForgePage() {
  return (
    <>
      <Breadcrumbs />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 hero-grid" aria-hidden="true" />
        <Spotlight />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-0 pointer-events-none" aria-hidden="true" />

        <div className="container relative">
          <Reveal>
            <p className="eyebrow eyebrow-line mb-6">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-paper-0 mr-2 animate-pulse" />
              Under produksjon
            </p>
            <h1 className="font-display text-display-xl text-paper-0 leading-[0.95] tracking-[-0.04em] max-w-5xl">
              LeadFORGE
              <br />
              <span className="shimmer-text">— kommer snart.</span>
            </h1>
            <p className="mt-10 text-lg sm:text-xl text-paper-2 leading-relaxed max-w-2xl">
              Vi jobber med et verktøy for automatisert B2B-leadsgenerering: skraper
              Brønnøysund og nettsider, analyserer produkt-fit og sender personlige
              e-poster – GDPR-vennlig og tilpasset norsk markedsføringslov.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  Få beskjed om lansering
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
                  Salgsteam drukner
                  <br />
                  <span className="text-paper-3">i research.</span>
                </h2>
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
                <span className="text-paper-0 font-medium">Dette tar timer.</span>{' '}
                <span className="text-paper-2">AI bruker sekunder.</span>
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
                  AI-drevet
                  <br />
                  <span className="text-paper-3">prospektering.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-3 border border-ink-3">
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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-3 border border-ink-3">
            <Reveal>
              <div className="bg-ink-0 p-8 h-full">
                <p className="eyebrow mb-3">Modus 01</p>
                <h3 className="font-display text-xl text-paper-0 leading-tight">Fullautomatisk</h3>
                <p className="mt-3 text-sm text-paper-2">AI sender alt på autopilot innenfor dine rammer.</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="bg-ink-0 p-8 h-full">
                <p className="eyebrow mb-3">Modus 02</p>
                <h3 className="font-display text-xl text-paper-0 leading-tight">Semi-automatisk</h3>
                <p className="mt-3 text-sm text-paper-2">Du godkjenner hver sending før den går ut.</p>
              </div>
            </Reveal>
          </div>
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
                  Kobles sømløst
                  <br />
                  <span className="text-paper-3">til verktøyene dine.</span>
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
                  Fra tomme hender
                  <br />
                  <span className="text-paper-3">til full pipeline.</span>
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
                Vil du høre
                <br />
                <span className="shimmer-text">når det er klart?</span>
              </h2>
              <p className="mt-8 text-xl text-paper-2 max-w-2xl leading-relaxed">
                Vi jobber med lansering. Kontakt oss for å få beskjed om hva som
                kommer og når det er klart.
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
