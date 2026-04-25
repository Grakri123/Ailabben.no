import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowRight } from "lucide-react"
import { BackButton } from "@/components/back-button"
import { Spotlight } from "@/components/spotlight"

export const metadata: Metadata = {
  title: "Siden finnes ikke | 404",
  description:
    "Siden du leter etter finnes ikke. Gå tilbake til forsiden eller utforsk våre tjenester.",
  robots: { index: false, follow: false },
}

const quickLinks = [
  { href: "/hva-vi-gjor", title: "Hva vi gjør", caption: "Våre AI-løsninger" },
  { href: "/kontakt", title: "Kontakt", caption: "Send oss en melding" },
  { href: "/blogg", title: "Journal", caption: "Artikler og innsikter" },
  { href: "/om-oss", title: "Om oss", caption: "Hvem er vi?" },
]

export default function NotFound() {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center py-24">
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />
      <Spotlight />

      <div className="container relative">
        <div className="max-w-4xl">
          <p className="eyebrow eyebrow-line mb-8">Feil 404</p>

          <h1 className="font-display text-[clamp(7rem,18vw,16rem)] text-paper-0 leading-none tracking-[-0.05em]">
            <span className="shimmer-text">404</span>
          </h1>

          <h2 className="mt-8 font-display text-display-md text-paper-0 leading-[1.05]">
            Siden finnes ikke.
          </h2>
          <p className="mt-6 text-lg text-paper-2 max-w-xl leading-relaxed">
            Siden du leter etter kan ha blitt flyttet, slettet eller aldri eksistert.
            La oss hjelpe deg videre.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="mr-2 w-4 h-4" />
                Forsiden
              </Link>
            </Button>
            <BackButton />
          </div>

          <div className="mt-20 border-t border-ink-3 pt-12">
            <p className="eyebrow mb-8">Populære sider</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink-3 border border-ink-3">
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="bg-ink-0 p-6 group hover:bg-ink-1 transition-colors flex items-center justify-between"
                >
                  <div>
                    <p className="text-paper-0 font-medium">{l.title}</p>
                    <p className="text-sm text-paper-3 mt-1">{l.caption}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-paper-3 group-hover:text-paper-0 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
