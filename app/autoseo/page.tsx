import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Reveal } from "@/components/reveal"
import { Spotlight } from "@/components/spotlight"
import { ArrowRight, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "AutoSEO – Automatisert SEO-publisering for bedrifter",
  description:
    "AutoSEO genererer og publiserer kontinuerlig SEO-optimalisert innhold som bygger organisk synlighet og trafikk. Bygget av AI Labben for SMB-bedrifter som vil bygge synlighet uten SEO-arbeid.",
  keywords: [
    "AutoSEO",
    "autoseo.no",
    "automatisert SEO",
    "SEO-publisering",
    "AI generert blogginnhold",
    "pilar cluster artikler",
    "keyword research AI",
    "organisk trafikk",
    "SMB SEO"
  ],
  openGraph: {
    title: "AutoSEO – Automatisert SEO-publisering for bedrifter",
    description: "Kontinuerlig SEO-innhold på autopilot. Bygger organisk synlighet over tid – uten manuelt arbeid.",
  },
}

const problems = [
  "Keyword-research",
  "Pilarinnlegg",
  "Cluster-artikler",
  "Publiseringsplan",
  "Konsistens over tid",
]

const features = [
  {
    number: "01",
    title: "Kontinuerlig publisering",
    description:
      "AutoSEO analyserer, genererer og publiserer SEO-innhold på autopilot, uten manuelt arbeid.",
  },
  {
    number: "02",
    title: "Målrettet innhold",
    description:
      "Systemet identifiserer relevante søk og tema i din bransje og produserer innhold basert på dette.",
  },
  {
    number: "03",
    title: "Organisk vekst",
    description:
      "Bygg synlighet og trafikk over tid gjennom konsistent, søkeoptimalisert innholdsproduksjon.",
  },
  {
    number: "04",
    title: "Spar tid og ressurser",
    description:
      "Ingen behov for innholdsprodusenter eller SEO-eksperter. AutoSEO håndterer hele prosessen.",
  },
  {
    number: "05",
    title: "Skalerbar publisering",
    description:
      "Fra noen artikler i måneden til hundrevis – samme verktøy, samme kvalitet, ingen manuell flaskehals.",
  },
  {
    number: "06",
    title: "Ingen oppsett",
    description:
      "Ingen teknisk ekspertise nødvendig. Vi setter alt opp og du får en blogg som vokser av seg selv.",
  },
]

const stats = [
  { eyebrow: "Live eksempel", value: "48", label: "Artikler publisert i pilotperioden" },
  { eyebrow: "Resultat", value: "+340%", label: "Organisk trafikk over 12 måneder" },
  { eyebrow: "Drift", value: "12 mnd", label: "Kjøretid uten manuell oppfølging" },
]

const integrations = ["WordPress", "Webflow", "Shopify", "Custom CMS", "Google Search Console", "Supabase"]

const steps = [
  { number: "01", title: "Vi kartlegger bransjen din", description: "AutoSEO analyserer søkemønstre, konkurrenter og temaer som faktisk genererer trafikk i din bransje." },
  { number: "02", title: "Lager pilar- og cluster-plan", description: "Innhold struktureres i pilar-artikler og støttende cluster-artikler – nøyaktig slik Google belønner." },
  { number: "03", title: "AI genererer artikler", description: "Skriver SEO-optimaliserte artikler med riktig struktur, lengde og kvalitet for hver tema." },
  { number: "04", title: "Publiserer på autopilot", description: "Innholdet publiseres rett til ditt CMS i henhold til en fast publiseringsrytme." },
  { number: "05", title: "Du måler resultatene", description: "Full oversikt i egen portal – hva som rangerer, hva som driver trafikk, hva som leverer." },
]

export default function AutoSEOPage() {
  return (
    <>
      <Breadcrumbs />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 hero-grid" aria-hidden="true" />
        <Spotlight />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-0 pointer-events-none" aria-hidden="true" />

        <div className="container relative">
          <Reveal>
            <p className="eyebrow eyebrow-line mb-6">Eget produkt · autoseo.no</p>
            <h1 className="font-display text-display-xl text-paper-0 leading-[0.95] tracking-[-0.04em] max-w-5xl">
              AutoSEO.
              <br />
              <span className="shimmer-text">SEO-publisering på autopilot.</span>
            </h1>
            <p className="mt-10 text-lg sm:text-xl text-paper-2 leading-relaxed max-w-2xl">
              AutoSEO genererer og publiserer kontinuerlig SEO-optimalisert innhold
              som bygger organisk synlighet og trafikk til bedriften din – uten
              SEO-arbeid og uten manuell innsats.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <a href="https://www.autoseo.no" target="_blank" rel="noopener noreferrer">
                  Gå til autoseo.no
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </a>
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
                  SEO krever
                  <br />
                  <span className="text-paper-3">konsistent arbeid.</span>
                </h2>
                <p className="mt-6 text-lg text-paper-2 max-w-xl">
                  Få SMB-bedrifter klarer å holde tempoet over tid – og uten konsistent innhold forblir nettsiden usynlig i søkemotorene.
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
                <span className="text-paper-0 font-medium">Det er for mye å holde styr på.</span>{' '}
                <span className="text-paper-2">AutoSEO tar hele kjeden – fra keyword til publisert artikkel.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hva du får */}
      <section className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Hva du får</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-lg text-paper-0 leading-[1.0]">
                  Et komplett system
                  <br />
                  <span className="text-paper-3">for automatisert SEO.</span>
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
        </div>
      </section>

      {/* Live eksempel / stats */}
      <section className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Live eksempel</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-lg text-paper-0 leading-[1.0]">
                  Resultater
                  <br />
                  <span className="text-paper-3">fra første pilot.</span>
                </h2>
                <p className="mt-6 text-lg text-paper-2 max-w-xl">
                  Tall fra en norsk SMB som har kjørt AutoSEO i 12 måneder uten manuell oppfølging.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border-t border-ink-3 pt-8">
                  <p className="eyebrow mb-6">{s.eyebrow}</p>
                  <p className="font-display text-display-md text-paper-0 leading-none">{s.value}</p>
                  <p className="mt-4 text-sm text-paper-2 leading-relaxed max-w-[24ch]">{s.label}</p>
                </div>
              </Reveal>
            ))}
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
                  <span className="text-paper-3">til publisert artikkel.</span>
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
                <span className="shimmer-text">som vokser måned for måned.</span>
              </h2>
              <p className="mt-8 text-xl text-paper-2 max-w-2xl leading-relaxed">
                Få demo av AutoSEO eller se prising på autoseo.no.
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
