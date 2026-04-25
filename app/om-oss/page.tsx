import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Reveal } from "@/components/reveal"
import { Spotlight } from "@/components/spotlight"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Om oss – Produktstudioet bak AutoSEO og Lead Generator",
  description:
    "AI Labben er et produktstudio grunnlagt av seriegründere. Vi bygger og lanserer AI-drevne verktøy og skreddersydde løsninger – med kvalitet, brukerfokus og EU-hosting.",
}

const values = [
  {
    number: "01",
    title: "Innovasjon med hensikt",
    description:
      "Vi eksperimenterer, validerer og lanserer produkter som løser reelle problemer – ikke teknologi for teknologiens skyld.",
  },
  {
    number: "02",
    title: "Produktkvalitet",
    description:
      "Hvert produkt vi bygger er gjennomtenkt fra design til drift. Vi er håndverkere i AI-feltet og leverer ikke halvferdige løsninger.",
  },
  {
    number: "03",
    title: "Brukerfokusert design",
    description:
      "AI skal forsterke mennesker, ikke erstatte dem. Vi designer produkter som er enkle å bruke og gir verdi fra dag én.",
  },
  {
    number: "04",
    title: "Trygghet og GDPR",
    description:
      "Alle produkter og tjenester er hostet i EU og følger GDPR-kravene til punkt og prikke. Alltid.",
  },
  {
    number: "05",
    title: "Bærekraftige forretningsmodeller",
    description:
      "Vi bygger produkter med langsiktig verdi – for brukerne, for kundene og for selskapet.",
  },
]

const differentiators = [
  {
    eyebrow: "Erfaring",
    title: "Produktreisen i ryggraden",
    body:
      "Som seriegründere har vi bygget produkter fra idé til lansering og drift. Vi kjenner hele reisen og vet hva som skal til for at et produkt faktisk lykkes.",
  },
  {
    eyebrow: "Trygghet",
    title: "Hostet i EU",
    body:
      "Alle produkter og data behandles og lagres i EU i henhold til GDPR. Ingen data sendes til USA eller land med usikker personvernlovgivning.",
  },
  {
    eyebrow: "Fokus",
    title: "AI i kjernen",
    body:
      "AI er ikke et tillegg – det er kjernen i alle produktene vi lager. Vi holder oss faglig oppdatert og bruker teknologien der den faktisk gir verdi.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 hero-grid" aria-hidden="true" />
        <Spotlight />
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-0 pointer-events-none"
          aria-hidden="true"
        />

        <div className="container relative">
          <Reveal>
            <p className="eyebrow eyebrow-line mb-6">Om oss</p>
            <h1 className="font-display text-display-xl text-paper-0 leading-[0.95] tracking-[-0.04em] max-w-5xl">
              Vi bygger produkter som
              <br />
              <span className="shimmer-text">kombinerer AI med håndverk.</span>
            </h1>
            <p className="mt-10 text-lg sm:text-xl text-paper-2 leading-relaxed max-w-2xl">
              AI Labben er produktstudioet bak AutoSEO, Lead Generator og
              fremtidige AI-drevne verktøy. Vi eksperimenterer, validerer og
              lanserer produkter som gjør arbeidshverdagen bedre.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  La oss snakke
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Misjon */}
      <section className="py-32 border-t border-ink-3">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow eyebrow-line mb-6">Vår misjon</p>
                <h2 className="font-display text-display-md text-paper-0 leading-[1.05]">
                  Verktøy som
                  <br />
                  <span className="text-paper-3">faktisk brukes.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.1}>
                <div className="space-y-6 text-lg text-paper-1 leading-relaxed">
                  <p>
                    Vi startet AI Labben for å eksperimentere med og lansere egne
                    verktøy som forbedrer bedrifters arbeidshverdag. Som seriegründere
                    kjenner vi hele produktreisen – fra idé og validering til
                    utvikling, lansering og drift.
                  </p>
                  <p className="text-paper-2">
                    Den erfaringen gjør at vi vet hva som trengs for at et produkt
                    faktisk skaper verdi. AI er alltid en del av verktøykassen
                    – ikke et mål i seg selv, men et middel for å bygge bedre
                    produkter.
                  </p>
                  <p className="text-paper-2">
                    Vi tilbyr to spor: egne produkter som AutoSEO og Lead Generator
                    som du kan ta i bruk i dag, og skreddersydde løsninger for
                    bedrifter som ønsker et spesialbygd AI-drevet produkt.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Verdier */}
      <section className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
              <div className="lg:col-span-4">
                <p className="eyebrow eyebrow-line mb-6">Verdier</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-display-lg text-paper-0 leading-[1.0]">
                  Fem prinsipper.
                  <br />
                  <span className="text-paper-3">Ingen forhandling.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="border-t border-ink-3">
            {values.map((value, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-b border-ink-3">
                  <div className="lg:col-span-2">
                    <span className="font-mono text-sm text-paper-3">{value.number}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-2xl text-paper-0 leading-tight">
                      {value.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-paper-2 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-32 border-t border-ink-3">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl mb-20">
              <p className="eyebrow eyebrow-line mb-6">Hvorfor vi er annerledes</p>
              <h2 className="font-display text-display-lg text-paper-0 leading-[1.0]">
                Vi bygger ikke for
                <br />
                <span className="text-paper-3">å imponere.</span>
              </h2>
              <p className="mt-6 text-lg text-paper-2">
                Vi er et produktstudio som lever av å lage verktøy folk faktisk
                bruker – og det preger alt vi gjør.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-3 border border-ink-3">
            {differentiators.map((d, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="bg-ink-0 p-8 lg:p-10 h-full">
                  <p className="eyebrow mb-6">{d.eyebrow}</p>
                  <h3 className="font-display text-2xl text-paper-0 leading-tight mb-4">
                    {d.title}
                  </h3>
                  <p className="text-paper-2 leading-relaxed">{d.body}</p>
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
                Nysgjerrig på hva vi
                <br />
                <span className="shimmer-text">kan bygge sammen?</span>
              </h2>
              <p className="mt-8 text-xl text-paper-2 max-w-2xl leading-relaxed">
                Kontakt AI Labben – produktstudioet bak AutoSEO, Lead Generator
                og dine fremtidige verktøy.
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
