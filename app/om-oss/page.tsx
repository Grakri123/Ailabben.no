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
  ArrowRight 
} from "lucide-react"

export const metadata: Metadata = {
  title: "Om oss - Seriegründere som bygger AI-løsninger for bedrifter",
  description: "Vi kjenner utfordringene i SMB-er og bygger AI-løsninger som faktisk fungerer. Trygt hostet i EU.",
}

const values = [
  {
    icon: Shield,
    title: "Trygghet først",
    description: "Alle våre løsninger er hostet i EU og følger GDPR-kravene til punkt og prikke.",
  },
  {
    icon: Users,
    title: "Menneskelig tilnærming",
    description: "AI skal forsterke mennesker, ikke erstatte dem. Vi fokuserer på løsninger som gjør jobben din enklere.",
  },
  {
    icon: Target,
    title: "Resultater som teller",
    description: "Ingen fancy tech for teknologiens skyld. Vi bygger kun løsninger som gir målbare resultater for din bedrift.",
  },
  {
    icon: Zap,
    title: "Rask implementering",
    description: "Fra idé til produksjon på uker, ikke måneder. Vi forstår at bedrifter trenger raske løsninger.",
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Vi bygger AI som 
              <span className="gradient-text"> faktisk fungerer</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-8 max-w-3xl mx-auto">
              Vi er seriegründere som kjenner utfordringene i SMB-er. 
              Målet vårt er å hjelpe bedrifter inn i AI-revolusjonen på en trygg og praktisk måte.
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
                  Som seriegründere har vi selv kjent på utfordringene med å drive 
                  SMB-er. Vi vet hvor vanskelig det kan være å holde tritt 
                  med teknologisk utvikling samtidig som man skal fokusere på kjernevirksomheten.
                </p>
                <p>
                  Derfor startet vi AI Labben. Vi bygger AI-løsninger som er skreddersydd 
                  for bedrifter – ikke generiske verktøy som krever månedsvis 
                  med tilpasning, men løsninger som fungerer fra dag én.
                </p>
                <p>
                  Våre AI-agenter er bygget for å integreres sømløst i eksisterende 
                  arbeidsflyter, og alle våre tjenester leveres med kompetent support 
                  og personlig oppfølging.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-200 via-purple-200 to-orange-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Users size={100} className="text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">SMB-er</h3>
                  <p className="text-gray-600 px-4">Bygget av gründere, for gründere</p>
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
              Ingen hype, bare nytte. Vi fokuserer på det som faktisk fungerer 
                              for bedrifter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              Vi bygger ikke AI for å imponere investorer eller vise frem fancy teknologi. 
              Vi bygger AI som løser reelle problemer for bedrifter.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  🏢 Lokal kontekst
                </h3>
                <p className="text-gray-600">
                  Vi forstår forretningskultur, regelverk og kundeforventninger. 
                  Våre løsninger er tilpasset lokale forhold fra grunnen av.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  🛡️ EU-hosting
                </h3>
                <p className="text-gray-600">
                  Alle data behandles og lagres i EU i henhold til GDPR. 
                  Ingen data sendes til USA eller andre land med usikker personvernlovgivning.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  🚀 Gründererfaring
                </h3>
                <p className="text-gray-600">
                  Som seriegründere vet vi hvor viktig det er med løsninger som 
                  faktisk fungerer og gir ROI fra dag én.
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
              Klar for å ta steget inn i AI-fremtiden?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Vi hjelper deg med å navigere AI-landskapet og finne de løsningene 
              som gir mest verdi for din bedrift.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4"
            >
              <Link href="/kontakt">
                Start samtalen
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 