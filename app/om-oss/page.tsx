import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { 
  Shield, 
  Users, 
  Target, 
  Zap,
  Lightbulb,
  ArrowRight 
} from "lucide-react"

export const metadata: Metadata = {
  title: "Om oss – Produktstudioet bak AutoSEO og Lead Generator",
  description: "AI Labben er et produktstudio grunnlagt av seriegründere. Vi bygger og lanserer AI-drevne verktøy og skreddersydde løsninger – med kvalitet, brukerfokus og EU-hosting.",
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovasjon med hensikt",
    description: "Vi eksperimenterer, validerer og lanserer produkter som løser reelle problemer – ikke teknologi for teknologiens skyld.",
  },
  {
    icon: Target,
    title: "Produktkvalitet",
    description: "Hvert produkt vi bygger er gjennomtenkt fra design til drift. Vi er håndverkere i AI-feltet og leverer ikke halvferdige løsninger.",
  },
  {
    icon: Users,
    title: "Brukerfokusert design",
    description: "AI skal forsterke mennesker, ikke erstatte dem. Vi designer produkter som er enkle å bruke og gir verdi fra dag én.",
  },
  {
    icon: Shield,
    title: "Trygghet og GDPR",
    description: "Alle produkter og tjenester er hostet i EU og følger GDPR-kravene til punkt og prikke. Alltid.",
  },
  {
    icon: Zap,
    title: "Bærekraftige forretningsmodeller",
    description: "Vi bygger produkter med langsiktig verdi – for brukerne, for kundene og for selskapet.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-orange-50 py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-widest mb-4">
              Produktstudio
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Vi bygger produkter som kombinerer
              <span className="gradient-text"> AI med brukerfokusert design</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-8 max-w-3xl mx-auto">
              AI Labben er produktstudioet bak AutoSEO (autoseo.no), Lead Generator og fremtidige 
              AI-drevne verktøy. Vi eksperimenterer, validerer og lanserer produkter 
              som gjør arbeidshverdagen bedre.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/kontakt">
                La oss snakke sammen
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Vår misjon
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Vi startet AI Labben for å kunne eksperimentere med og lansere egne 
                  verktøy som forbedrer bedrifters arbeidshverdag. Som seriegründere 
                  kjenner vi hele produktreisen – fra idé og validering til utvikling, 
                  lansering og drift.
                </p>
                <p>
                  Den erfaringen gjør at vi vet hva som trengs for at et produkt faktisk 
                  skaper verdi. AI er alltid en del av verktøykassen – ikke et mål i seg 
                  selv, men et middel for å bygge bedre produkter.
                </p>
                <p>
                  Vi tilbyr to spor: egne produkter som AutoSEO og Lead Generator som 
                  du kan ta i bruk i dag, og skreddersydde løsninger for bedrifter som 
                  ønsker et spesialbygd AI-drevet produkt.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-200 via-purple-200 to-orange-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Lightbulb size={100} className="text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Produktstudio</h3>
                  <p className="text-gray-600 px-4">Bygget av gründere, for alle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Våre verdier
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi er håndverkere i AI-feltet. Vi leverer gjennomtenkte produkter – 
              ikke hype, men ekte verdi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Hvorfor vi er annerledes
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Vi bygger ikke AI for å imponere. Vi er et produktstudio som lever av 
              å lage verktøy folk faktisk bruker – og det preger alt vi gjør.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  🏗️ Produkterfaring
                </h3>
                <p className="text-gray-600">
                  Som seriegründere har vi bygget produkter fra idé til lansering. 
                  Vi kjenner hele reisen og vet hva som skal til for at et produkt 
                  faktisk lykkes.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  🛡️ EU-hosting
                </h3>
                <p className="text-gray-600">
                  Alle produkter og data behandles og lagres i EU i henhold til GDPR. 
                  Ingen data sendes til USA eller land med usikker personvernlovgivning.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  🎯 AI i kjernen
                </h3>
                <p className="text-gray-600">
                  AI er ikke et tillegg – det er kjernen i alle produktene vi lager. 
                  Vi holder oss faglig oppdatert og bruker teknologien der den 
                  faktisk gir verdi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="container text-center">
          <div className="mx-auto max-w-3xl text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Nysgjerrig på hva vi kan bygge sammen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontakt AI Labben – produktstudioet bak AutoSEO, Lead Generator 
              og dine fremtidige verktøy.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4"
            >
              <Link href="/kontakt">
                La oss snakke om prosjektet ditt
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 