import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadWizard } from "@/components/lead-wizard"
import { 
  Users, 
  Search,
  Settings,
  ArrowRight,
  CheckCircle,
  Database,
  Sparkles
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI-drevne produkter og skreddersydde løsninger for bedrifter",
  description: "AI Labben er produktstudioet bak Auto SEO, Lead Generator og flere AI-drevne verktøy. Vi bygger egne produkter og skreddersydde løsninger – hostet sikkert i EU.",
  keywords: [
    "AI Labben",
    "produktstudio",
    "AI-verktøy",
    "Auto SEO",
    "Lead Generator",
    "kunstig intelligens for bedrifter",
    "AI-drevne produkter",
    "skreddersydde AI-løsninger",
    "automatisering bedrift"
  ],
  openGraph: {
    title: "AI Labben – Produktstudio for AI-drevne verktøy",
    description: "Vi bygger og lanserer AI-drevne digitale produkter – egne verktøy som Auto SEO og Lead Generator, samt skreddersydde løsninger for bedrifter.",
  },
  twitter: {
    title: "AI Labben – Produktstudio for AI-drevne verktøy",
    description: "Vi bygger og lanserer AI-drevne digitale produkter – egne verktøy som Auto SEO og Lead Generator, samt skreddersydde løsninger for bedrifter.",
  },
}

const products = [
  {
    icon: Search,
    title: "Auto SEO",
    description: "Fullautomatisert SEO-blogg som bygger organisk trafikk – pilar- og cluster-artikler på autopilot",
    href: "/ai-blogg",
    badge: "Eget produkt",
  },
  {
    icon: Users,
    title: "Lead Generator",
    description: "Automatisert B2B-leadsgenerering med AI — GDPR-vennlig og tilpasset norsk markedsføringslov",
    href: "/b2b-leads-generator",
    badge: "Eget produkt",
  },
  {
    icon: Database,
    title: "Privat Bedrifts-AI",
    description: "Din egen interne AI trent på bedriftens dokumenter — semantisk søk og sikker EU-hosting",
    href: "/rag-database",
    badge: "Eget produkt",
  },
  {
    icon: Settings,
    title: "Skreddersydde løsninger",
    description: "Vi bygger spesialtilpassede AI-drevne produkter for din bedrift – fra idé til lansering og drift",
    href: "/skreddersydd-utvikling",
    badge: "På bestilling",
  },
]

const benefits = [
  "Profesjonelt utviklede produkter med AI i kjernen",
  "Hostet sikkert i EU – fullt GDPR-kompatibelt",
  "Ingen langtidskontrakter eller skjulte kostnader",
  "Rask implementering og tett oppfølging",
  "24/7 overvåkning og kontinuerlig videreutvikling",
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-purple-50 py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-widest mb-4">
              Produktstudio
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Vi bygger{" "}
              <span className="gradient-text">AI-drevne verktøy</span>
              <br />
              som former fremtiden for arbeid
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-4 max-w-3xl mx-auto">
              Vi utvikler og lanserer digitale produkter med kunstig intelligens – 
              våre egne og dine. Fra Auto SEO og Lead Generator til skreddersydde 
              løsninger for din bedrift.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Utviklet av oss: <strong>Auto SEO</strong>, <strong>Lead Generator</strong> og flere i emning
            </p>
            <LeadWizard />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20" id="produkter">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Våre produkter og tjenester
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gjennomtenkte AI-verktøy vi har bygget fra grunnen av – og skreddersydde 
              løsninger for bedrifter som ønsker sitt eget AI-drevne produkt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {products.map((product, index) => {
              const cardContent = (
                <Card 
                  className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full ${product.href ? 'cursor-pointer hover:border-orange-200' : ''}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <product.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      {product.badge && (
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-orange-100 text-orange-700">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                    {product.href && (
                      <span className="text-orange-600 text-sm font-medium mt-2 inline-flex items-center">
                        Les mer <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    )}
                  </CardHeader>
                </Card>
              )
              
              return product.href ? (
                <Link key={index} href={product.href} className="block">
                  {cardContent}
                </Link>
              ) : (
                <div key={index}>
                  {cardContent}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Hvorfor velge AI Labben?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Vi er seriegründere som har bygget produkter fra idé til lansering og drift. 
                Vår erfaring med hele produktreisen gjør at vi vet hva som trengs for at et 
                AI-drevet verktøy faktisk skaper verdi.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-purple-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Sparkles size={80} className="text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Produktstudio</h3>
                  <p className="text-gray-600">Bygget i Norge, for verden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-purple-600" id="kontakt">
        <div className="container text-center">
          <div className="mx-auto max-w-3xl text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              La oss bygge noe sammen
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Enten du vil ta i bruk ett av våre produkter eller ønsker et 
              skreddersydd AI-drevet verktøy – vi vil gjerne høre om prosjektet ditt.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4"
            >
              <Link href="/kontakt">
                Kontakt oss for å lære mer
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 