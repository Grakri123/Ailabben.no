import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LeadWizard } from "@/components/lead-wizard"
import { TypewriterHero } from "@/components/typewriter-hero"
import { Spotlight } from "@/components/spotlight"
import { Reveal } from "@/components/reveal"
import { StatCounter, StatStatic } from "@/components/stat-counter"
import { ArrowUpRight, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "AI-drevne produkter og skreddersydde løsninger for bedrifter",
  description: "AI Labben er produktstudioet bak AutoSEO (autoseo.no), Lead Generator og skreddersydde løsninger. Vi bygger egne AI-drevne verktøy – hostet sikkert i EU.",
  keywords: [
    "AI Labben",
    "produktstudio",
    "AI-verktøy",
    "AutoSEO",
    "autoseo.no",
    "Lead Generator",
    "kunstig intelligens for bedrifter",
    "AI-drevne produkter",
    "skreddersydde AI-løsninger",
    "automatisering bedrift"
  ],
  openGraph: {
    title: "AI Labben – Produktstudio for AI-drevne verktøy",
    description: "Vi bygger og lanserer AI-drevne digitale produkter – egne verktøy som AutoSEO (autoseo.no) og Lead Generator, samt skreddersydde løsninger for bedrifter.",
  },
  twitter: {
    title: "AI Labben – Produktstudio for AI-drevne verktøy",
    description: "Vi bygger og lanserer AI-drevne digitale produkter – egne verktøy som AutoSEO (autoseo.no) og Lead Generator, samt skreddersydde løsninger for bedrifter.",
  },
}

const products = [
  {
    number: "01",
    title: "AutoSEO",
    description:
      "Fullautomatisert SEO-blogg som bygger organisk trafikk – pilar- og cluster-artikler på autopilot.",
    badge: "Eget produkt",
    href: "https://www.autoseo.no",
    external: true,
  },
  {
    number: "02",
    title: "Lead Generator",
    description:
      "Automatisert B2B-leadsgenerering med AI – under produksjon. GDPR-vennlig og tilpasset norsk lov.",
    badge: "Kommer snart",
    href: "/b2b-leads-generator",
  },
  {
    number: "03",
    title: "Skreddersydde løsninger",
    description:
      "Spesialtilpassede AI-drevne produkter for din bedrift – fra idé og krav til lansering og drift.",
    badge: "På bestilling",
    href: "/skreddersydd-utvikling",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center pt-16 pb-24">
        {/* Bakgrunns-grid + spotlight */}
        <div className="absolute inset-0 hero-grid" aria-hidden="true" />
        <div className="absolute inset-0 hero-noise opacity-50" aria-hidden="true" />
        <Spotlight />

        {/* Vignett nederst – fader inn i seksjonen under */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-0 pointer-events-none"
          aria-hidden="true"
        />

        <div className="container relative z-10">
          <div className="max-w-5xl">
            <p className="eyebrow eyebrow-line mb-8 animate-fade-in">
              Oslo · Produktstudio · Est. 2024
            </p>

            <TypewriterHero
              prefix="Vi bygger"
              highlight="AI-drevne verktøy"
              startDelay={500}
              speed={70}
            />

            <div className="mt-12 max-w-2xl space-y-2 animate-fade-in-up" style={{ animationDelay: '2.6s' }}>
              <p className="text-lg sm:text-xl text-paper-1 leading-relaxed">
                Vi utvikler AI-drevne digitale produkter.
              </p>
              <p className="text-lg sm:text-xl text-paper-2 leading-relaxed">
                Egne. Skreddersydde. Hostet i EU.
              </p>
            </div>

            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: '2.9s' }}
            >
              <Button asChild size="lg">
                <Link href="#produkter">
                  Se hva vi bygger
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/kontakt">La oss snakke</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Lead wizard ---------- */}
      <section className="py-24 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <p className="eyebrow eyebrow-line mb-6">Start her</p>
              <h2 className="font-display text-display-lg text-paper-0 leading-[1.0] tracking-[-0.035em]">
                Hva trenger du hjelp med?
              </h2>
              <p className="mt-6 text-lg text-paper-2 max-w-xl">
                Svar på noen korte spørsmål, så foreslår vi en retning og tar
                kontakt med en konkret idé.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <LeadWizard />
          </Reveal>
        </div>
      </section>

      {/* ---------- Produkter (editorial-rader, ikke kort) ---------- */}
      <section className="py-32 border-t border-ink-3" id="produkter">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Hva vi har bygget</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-lg text-paper-0 leading-[1.0] tracking-[-0.035em]">
                  Tre spor.
                  <br />
                  <span className="text-paper-3">Samme håndverk.</span>
                </h2>
                <p className="mt-6 text-lg text-paper-2 max-w-xl">
                  Egne produkter du kan ta i bruk i dag, og skreddersydde
                  løsninger for bedrifter som vil ha sitt eget AI-drevne verktøy.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="border-t border-ink-3">
            {products.map((product, idx) => (
              <ProductRow
                key={idx}
                number={product.number}
                title={product.title}
                description={product.description}
                badge={product.badge}
                href={product.href}
                external={product.external}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Stats / hvorfor oss ---------- */}
      <section className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Hvorfor oss</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-lg text-paper-0 leading-[1.0] tracking-[-0.035em]">
                  Vi er seriegründere.
                  <br />
                  <span className="text-paper-3">Vi bygger ikke for å imponere.</span>
                </h2>
                <p className="mt-6 text-lg text-paper-2 max-w-xl">
                  Vi har levert produkter fra idé til drift. Vi vet hva som
                  faktisk skaper verdi – og hva som bare ser bra ut på en demo.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <StatStatic
              eyebrow="Hosting"
              value="EU"
              label="All data behandles og lagres innenfor EU/EØS."
            />
            <StatStatic
              eyebrow="Compliance"
              value="GDPR"
              label="Fullt kompatibel og tilpasset norsk lov."
            />
            <StatCounter
              eyebrow="Overvåkning"
              value={24}
              suffix="/7"
              label="Kontinuerlig drift og videreutvikling etter lansering."
            />
            <StatStatic
              eyebrow="Bygget i"
              value="Norge"
              label="Lite team. Tett oppfølging. Ingen langtidskontrakter."
            />
          </div>
        </div>
      </section>

      {/* ---------- CTA – full-bleed ---------- */}
      <section className="py-40 border-t border-ink-3 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50" aria-hidden="true" />
        <div className="container relative">
          <Reveal>
            <div className="max-w-4xl">
              <p className="eyebrow eyebrow-line mb-8">Neste steg</p>
              <h2 className="font-display text-display-xl text-paper-0 leading-[0.95] tracking-[-0.04em]">
                La oss bygge
                <br />
                <span className="shimmer-text">noe sammen.</span>
              </h2>
              <p className="mt-8 text-xl text-paper-2 max-w-2xl leading-relaxed">
                Enten du vil ta i bruk ett av våre produkter eller ønsker et
                skreddersydd AI-drevet verktøy – vi vil gjerne høre om prosjektet
                ditt.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/kontakt">
                    Kontakt oss
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="mailto:kristian@ailabben.no">kristian@ailabben.no</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

interface ProductRowProps {
  number: string
  title: string
  description: string
  badge: string
  href: string
  external?: boolean
  index: number
}

function ProductRow({ number, title, description, badge, href, external, index }: ProductRowProps) {
  const content = (
    <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-b border-ink-3 transition-colors hover:bg-ink-1/40 -mx-6 px-6">
      <div className="lg:col-span-2 flex items-center">
        <span className="text-paper-3 font-mono text-sm tracking-tight">{number}</span>
      </div>

      <div className="lg:col-span-4 flex flex-col justify-center">
        <h3 className="font-display text-display-sm text-paper-0 leading-tight">
          {title}
        </h3>
        <span className="mt-2 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-paper-3 font-medium">
          <span className="w-1 h-1 rounded-full bg-paper-3" />
          {badge}
        </span>
      </div>

      <div className="lg:col-span-5 flex items-center">
        <p className="text-paper-2 text-base leading-relaxed">{description}</p>
      </div>

      <div className="lg:col-span-1 flex items-center justify-end">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-ink-3 text-paper-2 group-hover:border-paper-0 group-hover:text-paper-0 group-hover:bg-paper-0/[0.04] transition-all duration-300">
          {external ? (
            <ArrowUpRight className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </span>
      </div>
    </div>
  )

  if (external) {
    return (
      <Reveal delay={index * 0.08}>
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      </Reveal>
    )
  }

  return (
    <Reveal delay={index * 0.08}>
      <Link href={href} className="block">
        {content}
      </Link>
    </Reveal>
  )
}
