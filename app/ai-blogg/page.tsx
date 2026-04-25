import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Reveal } from "@/components/reveal"
import { Spotlight } from "@/components/spotlight"
import { ArrowRight, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "AutoSEO – Automatisert SEO-blogg fra AI Labben | autoseo.no",
  description:
    "AutoSEO er AI Labbens verktøy for fullautomatisert SEO-blogg: keyword-research, pilar- og cluster-artikler, publisering og rapportering. Les mer på www.autoseo.no.",
  keywords: [
    "AutoSEO",
    "autoseo.no",
    "AI blogg",
    "SEO automasjon",
    "AI generert blogginnhold",
    "pilar cluster artikler",
    "keyword research AI",
    "automatisk publisering SEO"
  ],
  openGraph: {
    title: "AutoSEO – Automatisert SEO-blogg fra AI Labben | autoseo.no",
    description: "AutoSEO er AI Labbens verktøy for fullautomatisert SEO-blogg.",
  },
}

const problems = [
  "Keyword-research",
  "Pilarinnlegg",
  "Clusterinnlegg",
  "Publiseringsplan",
  "Konsistens",
]

const features = [
  { number: "01", title: "Keyword-research", description: "Automatisk analyse av søkeord og konkurransesituasjon." },
  { number: "02", title: "Topic clusters", description: "Strukturert planlegging av pilar og støtteartikler." },
  { number: "03", title: "Pilar-/cluster-artikler", description: "Generering av høykvalitets SEO-optimalisert innhold." },
  { number: "04", title: "Automatisk internlinking", description: "Smart lenking mellom artikler for bedre SEO." },
  { number: "05", title: "Publiseringsplan", description: "Fast rytme på publisering for kontinuerlig vekst." },
  { number: "06", title: "Lagring i CMS", description: "Direkte publisering til ditt CMS-system." },
]

const integrations = ["WordPress", "Webflow", "Supabase", "Custom CMS", "Google Search Console"]

const steps = [
  { number: "01", title: "AI analyserer søkeord", description: "Finner de beste søkeordene for din bransje og målgruppe." },
  { number: "02", title: "Lager pilar-plan", description: "Strukturerer innhold i pilar og støttende cluster-artikler." },
  { number: "03", title: "Genererer artikler", description: "Skriver SEO-optimaliserte artikler med riktig struktur og kvalitet." },
  { number: "04", title: "Publiserer automatisk", description: "Legger ut innhold i henhold til publiseringsplanen." },
  { number: "05", title: "Rapportering i egen portal", description: "Full oversikt over publisert innhold og resultater." },
]

export default function AIBloggPage() {
  return (
    <>
      <Breadcrumbs />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 hero-grid" aria-hidden="true" />
        <Spotlight />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-0 pointer-events-none" aria-hidden="true" />

        <div className="container relative">
          <Reveal>
            <p className="eyebrow eyebrow-line mb-6">Bygget av AI Labben</p>
            <h1 className="font-display text-display-xl text-paper-0 leading-[0.95] tracking-[-0.04em] max-w-5xl">
              AutoSEO.
              <br />
              <span className="shimmer-text">SEO-blogg på autopilot.</span>
            </h1>
            <p className="mt-10 text-lg sm:text-xl text-paper-2 leading-relaxed max-w-2xl">
              AutoSEO er vårt AI-drevne verktøy for pilar- og cluster-blogging
              med nøkkelord-analyse og faste intervaller. Gir deg organisk trafikk
              uten manuelt arbeid.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <a href="https://www.autoseo.no" target="_blank" rel="noopener noreferrer">
                  Gå til autoseo.no
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/kontakt">Kontakt oss</Link>
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
                  Innholdsproduksjon
                  <br />
                  <span className="text-paper-3">tar tid.</span>
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
                <span className="text-paper-0 font-medium">De fleste SMB klarer ikke holde tempoet.</span>{' '}
                <span className="text-paper-2">Uten konsistent innhold forblir nettsiden usynlig i søkemotorene.</span>
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
                  Fullautomatisert
                  <br />
                  <span className="text-paper-3">bloggmaskin.</span>
                </h2>
                <p className="mt-6 text-lg text-paper-2 max-w-xl">
                  Systemet gjør alt — du beholder full kontroll og kvalitetssjekk.
                </p>
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
            <div className="border border-ink-3 bg-ink-1 p-8 max-w-2xl">
              <p className="eyebrow mb-3">Full kontroll</p>
              <h3 className="font-display text-2xl text-paper-0 leading-tight">
                Godkjenn artikler før publisering — eller la alt gå automatisk.
              </h3>
              <p className="mt-3 text-paper-2">Du bestemmer.</p>
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
                  Publiserer direkte
                  <br />
                  <span className="text-paper-3">til ditt CMS.</span>
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
                  Fra keyword
                  <br />
                  <span className="text-paper-3">til publisert innhold.</span>
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
                Organisk trafikk
                <br />
                <span className="shimmer-text">på autopilot.</span>
              </h2>
              <p className="mt-8 text-xl text-paper-2 max-w-2xl leading-relaxed">
                AutoSEO gir deg en blogg som skaper trafikk automatisk.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <a href="https://www.autoseo.no" target="_blank" rel="noopener noreferrer">
                    Gå til autoseo.no
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/kontakt">Kontakt oss</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
