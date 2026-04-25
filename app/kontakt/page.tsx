import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Reveal } from "@/components/reveal"
import { Spotlight } from "@/components/spotlight"

export const metadata: Metadata = {
  title: "Kontakt AI Labben – Produktstudioet bak AutoSEO og LeadFORGE",
  description:
    "Kontakt AI Labben for å lære mer om våre produkter eller for å diskutere et skreddersydd AI-prosjekt. Ring 95 11 76 49 eller send oss en melding.",
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs />

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 hero-grid" aria-hidden="true" />
        <Spotlight />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-0 pointer-events-none" aria-hidden="true" />

        <div className="container relative">
          <Reveal>
            <p className="eyebrow eyebrow-line mb-6">Kontakt</p>
            <h1 className="font-display text-display-xl text-paper-0 leading-[0.95] tracking-[-0.04em] max-w-5xl">
              La oss
              <br />
              <span className="shimmer-text">snakke sammen.</span>
            </h1>
            <p className="mt-10 text-lg sm:text-xl text-paper-2 leading-relaxed max-w-2xl">
              Enten du vil vite mer om AutoSEO, LeadFORGE som kommer, eller
              ønsker å diskutere et skreddersydd AI-prosjekt – vi vil gjerne høre fra deg.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 border-t border-ink-3">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Kontaktinfo */}
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow eyebrow-line mb-6">Direktelinjer</p>
                <h2 className="font-display text-display-md text-paper-0 leading-[1.05] mb-12">
                  Tre måter
                  <br />
                  <span className="text-paper-3">å nå oss på.</span>
                </h2>

                <div className="space-y-px bg-ink-3 border-y border-ink-3">
                  <ContactRow
                    icon={Phone}
                    eyebrow="Ring"
                    title="95 11 76 49"
                    description="Snakk direkte med oss om produktene eller prosjektet ditt."
                    href="tel:+4795117649"
                  />
                  <ContactRow
                    icon={Mail}
                    eyebrow="E-post"
                    title="kristian@ailabben.no"
                    description="Vi svarer som regel innen 24 timer."
                    href="mailto:kristian@ailabben.no"
                  />
                  <ContactRow
                    icon={MapPin}
                    eyebrow="Lokasjon"
                    title="Norge"
                    description="Basert i Norge. Serverer kunder over hele Norden."
                  />
                </div>

                <div className="mt-12 border border-ink-3 p-8 bg-ink-1">
                  <p className="eyebrow mb-6">Hva du kan forvente</p>
                  <ul className="space-y-3 text-sm text-paper-2">
                    <li className="flex gap-3"><span className="text-paper-3 font-mono">01</span><span>Gratis samtale om ditt behov eller produktidé</span></li>
                    <li className="flex gap-3"><span className="text-paper-3 font-mono">02</span><span>Presentasjon av AutoSEO eller innblikk i LeadFORGE</span></li>
                    <li className="flex gap-3"><span className="text-paper-3 font-mono">03</span><span>Konkrete innspill til et skreddersydd AI-prosjekt</span></li>
                    <li className="flex gap-3"><span className="text-paper-3 font-mono">04</span><span>Transparent prising uten skjulte kostnader</span></li>
                    <li className="flex gap-3"><span className="text-paper-3 font-mono">05</span><span>Profesjonell oppfølging gjennom hele prosessen</span></li>
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Skjema */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="border border-ink-3 bg-ink-1 p-8 lg:p-12">
                  <p className="eyebrow eyebrow-line mb-4">Send melding</p>
                  <h2 className="font-display text-display-sm text-paper-0 leading-tight mb-8">
                    Fortell oss hva
                    <br />
                    <span className="text-paper-3">du jobber med.</span>
                  </h2>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactRow({
  icon: Icon,
  eyebrow,
  title,
  description,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  eyebrow: string
  title: string
  description: string
  href?: string
}) {
  const inner = (
    <div className="bg-ink-0 p-6 lg:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 group transition-colors hover:bg-ink-1">
      <div className="md:col-span-2 flex md:items-center">
        <Icon className="w-5 h-5 text-paper-2 group-hover:text-paper-0 transition-colors" />
      </div>
      <div className="md:col-span-10">
        <p className="eyebrow mb-2">{eyebrow}</p>
        <p className="text-paper-0 font-display text-xl">{title}</p>
        <p className="mt-1 text-sm text-paper-2">{description}</p>
      </div>
    </div>
  )
  if (href) {
    return (
      <a href={href} className="block">
        {inner}
      </a>
    )
  }
  return inner
}
