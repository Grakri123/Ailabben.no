import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { 
  Users, 
  Search,
  Settings,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Sparkles
} from "lucide-react"

export const metadata: Metadata = {
  title: "Våre produkter og tjenester – AI Labben",
  description: "AI Labben bygger og drifter egne AI-drevne produkter som AutoSEO (autoseo.no) og Lead Generator, og utvikler skreddersydde løsninger for bedrifter. Hostet sikkert i EU.",
}

const ownProducts = [
  {
    icon: Search,
    title: "AutoSEO",
    description: "Fullautomatisert SEO-innhold som bygger organisk trafikk over tid. Lanseret av AI Labben – les mer på www.autoseo.no.",
    details: [
      "Keyword-research og topic clusters",
      "Pilar- og cluster-artikler med automatisk internlinking",
      "Automatisk publisering til ditt CMS",
      "Rapportering og rangeringsoppfølging i egen portal",
    ],
    benefits: ["Organisk trafikk på autopilot", "Konsistent innholdsproduksjon", "Høyere Google-rangeringer"],
    href: "https://www.autoseo.no",
    external: true,
  },
  {
    icon: Users,
    title: "Lead Generator",
    description: "Under produksjon. Vi jobber med et verktøy for automatisiert B2B-leadsgenerering – GDPR-vennlig og tilpasset norsk lov. Kontakt oss for å høre mer om hva som kommer.",
    details: [
      "Skraper Brønnøysund, nettsider og bedriftsdata",
      "Analyserer kontekst og identifiserer produkt-fit",
      "Genererer relevante og personlige e-poster",
      "Holder seg innenfor norsk markedsføringslov",
    ],
    benefits: ["Mer kvalifiserte leads", "Mindre manuelt arbeid", "Kommer snart"],
    href: "/b2b-leads-generator",
  },
]

const customProduct = {
  icon: Settings,
  title: "Skreddersydde løsninger",
  description: "Vi bygger spesialtilpassede AI-drevne produkter for din bedrift – fra idé og krav til lansering og drift",
  details: [
    "API-integrasjoner og interne dashboards",
    "Automatisering og dokumentgenerering",
    "RAG-systemer og salgsverktøy",
    "Komplette applikasjoner med moderne teknologi",
  ],
  benefits: ["Effektiv drift", "Skalerbar vekst", "Produkter som faktisk løser problemet"],
  href: "/skreddersydd-utvikling"
}

const process = [
  {
    step: "1",
    title: "Idé og krav",
    description: "Vi kartlegger behov og muligheter – og definerer hva produktet skal løse.",
    icon: Users,
  },
  {
    step: "2",
    title: "Design og prototype",
    description: "Vi designer brukeropplevelsen og bygger en prototype for tidlig validering.",
    icon: Sparkles,
  },
  {
    step: "3",
    title: "Utvikling og lansering",
    description: "Vi bygger og lanserer produktet – smidig, trygt og med fokus på kvalitet.",
    icon: Zap,
  },
  {
    step: "4",
    title: "Drift og videreutvikling",
    description: "Kontinuerlig overvåkning, optimalisering og videreutvikling etter lansering.",
    icon: Shield,
  },
]

export default function ServicesPage() {
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
              Våre produkter
              <span className="gradient-text"> og tjenester</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-8 max-w-3xl mx-auto">
              Vi bygger og drifter egne AI-drevne verktøy, og utvikler skreddersydde 
              løsninger for bedrifter som ønsker sitt eget AI-drevne produkt.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/kontakt">
                La oss bygge noe sammen
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Own Products Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Egne produkter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Verktøy vi har bygget fra grunnen av – AI i kjernen, brukerfokusert design 
              og profesjonell drift hostet i EU.
            </p>
          </div>

          <div className="space-y-12">
            {ownProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-purple-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <product.icon className="w-8 h-8 text-orange-600" />
                    </div>
                      <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <CardTitle className="text-2xl">{product.title}</CardTitle>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-orange-100 text-orange-700">
                          {product.title === "Lead Generator" ? "Kommer snart" : "Eget produkt"}
                        </span>
                      </div>
                      <p className="text-gray-600 text-lg">{product.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-gray-900">Hva produktet gjør:</h4>
                      <ul className="space-y-2">
                        {product.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-gray-900">Fordeler for din bedrift:</h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    {product.external ? (
                      <Button asChild>
                        <a href={product.href} target="_blank" rel="noopener noreferrer">
                          Gå til autoseo.no
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button asChild>
                        <Link href={product.href}>
                          Les mer om {product.title}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Skreddersydde løsninger
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For bedrifter som ønsker et AI-drevet produkt spesialbygd for sine behov. 
              Vi tar deg fra idé til ferdig produkt i produksjon.
            </p>
          </div>

          <Card className="overflow-hidden max-w-4xl mx-auto">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-purple-50">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <customProduct.icon className="w-8 h-8 text-orange-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <CardTitle className="text-2xl">{customProduct.title}</CardTitle>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-100 text-purple-700">
                      På bestilling
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg">{customProduct.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900">Hva vi kan bygge:</h4>
                  <ul className="space-y-2">
                    {customProduct.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-gray-900">Hva du får:</h4>
                  <ul className="space-y-2">
                    {customProduct.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <Button asChild>
                  <Link href={customProduct.href}>
                    Les mer om skreddersydde løsninger
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Slik jobber vi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fra idé og krav til ferdig produkt i produksjon – en strukturert prosess 
              som sikrer kvalitet og resultater.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-purple-600">
        <div className="container text-center">
          <div className="mx-auto max-w-3xl text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Klar for å ta i bruk et av produktene?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Enten du vil prøve AutoSEO på autoseo.no, høre om Lead Generator som kommer, eller snakke om 
              et skreddersydd prosjekt – vi er klare for en samtale.
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