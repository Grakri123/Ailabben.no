import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Reveal } from "@/components/reveal"
import { Spotlight } from "@/components/spotlight"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Våre produkter og tjenester – AI Labben",
  description:
    "AI Labben bygger og drifter egne AI-drevne produkter som AutoSEO (autoseo.no) og LeadFORGE, og utvikler skreddersydde løsninger for bedrifter. Hostet sikkert i EU.",
}

const ownProducts = [
  {
    number: "01",
    title: "AutoSEO",
    badge: "Eget produkt",
    description:
      "Fullautomatisert SEO-innhold som bygger organisk trafikk over tid. Lansert av AI Labben.",
    details: [
      "Keyword-research og topic clusters",
      "Pilar- og cluster-artikler med automatisk internlinking",
      "Automatisk publisering til ditt CMS",
      "Rapportering og rangeringsoppfølging i egen portal",
    ],
    benefits: ["Organisk trafikk på autopilot", "Konsistent innholdsproduksjon", "Høyere Google-rangeringer"],
    href: "/autoseo",
    cta: "Les mer om AutoSEO",
  },
  {
    number: "02",
    title: "LeadFORGE",
    badge: "Kommer snart",
    description:
      "Under produksjon. Vi jobber med et verktøy for automatisert B2B-leadsgenerering – GDPR-vennlig og tilpasset norsk lov.",
    details: [
      "Skraper Brønnøysund, nettsider og bedriftsdata",
      "Analyserer kontekst og identifiserer produkt-fit",
      "Genererer relevante og personlige e-poster",
      "Holder seg innenfor norsk markedsføringslov",
    ],
    benefits: ["Mer kvalifiserte leads", "Mindre manuelt arbeid", "Kommer snart"],
    href: "/leadforge",
    cta: "Les mer om LeadFORGE",
  },
]

const customProduct = {
  number: "03",
  title: "Skreddersydde løsninger",
  badge: "På bestilling",
  description:
    "Vi bygger spesialtilpassede AI-drevne produkter for din bedrift – fra idé og krav til lansering og drift.",
  details: [
    "API-integrasjoner og interne dashboards",
    "Automatisering og dokumentgenerering",
    "RAG-systemer og salgsverktøy",
    "Komplette applikasjoner med moderne teknologi",
  ],
  benefits: ["Effektiv drift", "Skalerbar vekst", "Produkter som faktisk løser problemet"],
  href: "/skreddersydd-utvikling",
  cta: "Les mer om skreddersydde løsninger",
}

const process = [
  { number: "01", title: "Idé og krav", description: "Vi kartlegger behov og muligheter – og definerer hva produktet skal løse." },
  { number: "02", title: "Design og prototype", description: "Vi designer brukeropplevelsen og bygger en prototype for tidlig validering." },
  { number: "03", title: "Utvikling og lansering", description: "Vi bygger og lanserer produktet – smidig, trygt og med fokus på kvalitet." },
  { number: "04", title: "Drift og videreutvikling", description: "Kontinuerlig overvåkning, optimalisering og videreutvikling etter lansering." },
]

export default function ServicesPage() {
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
            <p className="eyebrow eyebrow-line mb-6">Hva vi gjør</p>
            <h1 className="font-display text-display-xl text-paper-0 leading-[0.95] tracking-[-0.04em] max-w-5xl">
              Produkter
              <br />
              <span className="shimmer-text">og tjenester.</span>
            </h1>
            <p className="mt-10 text-lg sm:text-xl text-paper-2 leading-relaxed max-w-2xl">
              Vi bygger og drifter egne AI-drevne verktøy, og utvikler
              skreddersydde løsninger for bedrifter som ønsker sitt eget
              AI-drevne produkt.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  La oss bygge noe sammen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Egne produkter */}
      <section className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Egne produkter</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-lg text-paper-0 leading-[1.0]">
                  Verktøy bygget
                  <br />
                  <span className="text-paper-3">fra grunnen av.</span>
                </h2>
                <p className="mt-6 text-lg text-paper-2 max-w-xl">
                  AI i kjernen, brukerfokusert design og profesjonell drift hostet i EU.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-px bg-ink-3 border-y border-ink-3">
            {ownProducts.map((product, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <article className="bg-ink-0 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-3">
                    <span className="font-mono text-sm text-paper-3">{product.number}</span>
                    <h3 className="mt-3 font-display text-display-sm text-paper-0 leading-tight">
                      {product.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-paper-3 font-medium">
                      <span className="w-1 h-1 rounded-full bg-paper-3" />
                      {product.badge}
                    </span>
                  </div>

                  <div className="lg:col-span-9">
                    <p className="text-lg text-paper-1 leading-relaxed mb-8">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <p className="eyebrow mb-4">Hva produktet gjør</p>
                        <ul className="space-y-2 text-sm text-paper-2">
                          {product.details.map((d, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="text-paper-3 font-mono">·</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="eyebrow mb-4">Fordeler</p>
                        <ul className="space-y-2 text-sm text-paper-2">
                          {product.benefits.map((b, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="text-paper-3 font-mono">·</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button asChild variant="secondary" size="sm">
                      <Link href={product.href}>
                        {product.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skreddersydde */}
      <section className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Skreddersydde løsninger</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-lg text-paper-0 leading-[1.0]">
                  For deg som
                  <br />
                  <span className="text-paper-3">vil ha noe eget.</span>
                </h2>
                <p className="mt-6 text-lg text-paper-2 max-w-xl">
                  For bedrifter som ønsker et AI-drevet produkt spesialbygd for sine behov. Vi tar deg fra idé til ferdig produkt i produksjon.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <article className="border border-ink-3 bg-ink-1 p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <span className="font-mono text-sm text-paper-3">{customProduct.number}</span>
                <h3 className="mt-3 font-display text-display-sm text-paper-0 leading-tight">
                  {customProduct.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-paper-3 font-medium">
                  <span className="w-1 h-1 rounded-full bg-paper-3" />
                  {customProduct.badge}
                </span>
              </div>

              <div className="lg:col-span-9">
                <p className="text-lg text-paper-1 leading-relaxed mb-8">
                  {customProduct.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="eyebrow mb-4">Hva vi kan bygge</p>
                    <ul className="space-y-2 text-sm text-paper-2">
                      {customProduct.details.map((d, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-paper-3 font-mono">·</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-4">Hva du får</p>
                    <ul className="space-y-2 text-sm text-paper-2">
                      {customProduct.benefits.map((b, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-paper-3 font-mono">·</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button asChild variant="secondary" size="sm">
                  <Link href={customProduct.href}>
                    {customProduct.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Prosess */}
      <section className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Slik jobber vi</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-lg text-paper-0 leading-[1.0]">
                  Fra idé
                  <br />
                  <span className="text-paper-3">til drift.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-3 border border-ink-3">
            {process.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="bg-ink-0 p-8 h-full">
                  <span className="font-mono text-sm text-paper-3">{step.number}</span>
                  <h3 className="mt-4 font-display text-xl text-paper-0 leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-paper-2 leading-relaxed">
                    {step.description}
                  </p>
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
                Klar for å ta i bruk
                <br />
                <span className="shimmer-text">et av produktene?</span>
              </h2>
              <p className="mt-8 text-xl text-paper-2 max-w-2xl leading-relaxed">
                Enten du vil prøve AutoSEO, høre om LeadFORGE som kommer,
                eller snakke om et skreddersydd prosjekt – vi er klare for en samtale.
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
