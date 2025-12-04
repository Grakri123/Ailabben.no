import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Bot, 
  Mail, 
  Users, 
  MessageSquare, 
  Search,
  TrendingUp,
  Settings,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Zap
} from "lucide-react"

export const metadata: Metadata = {
  title: "Hva vi gjør - AI-løsninger for bedrifter",
  description: "Vi bygger skreddersydde AI-agenter: resepsjonister, e-postgenerering, leads-innsamling, cold calling og SEO automatisering.",
}

const services = [
  {
    icon: Bot,
    title: "AI-resepsjonist",
    description: "24/7 kundeservice som aldri sover",
    details: [
      "Besvarer kundehenvendelser øyeblikkelig",
      "Håndterer bookinger og avtaler",
      "Videresender komplekse saker til riktig person",
      "Lærer av hver samtale for bedre service",
    ],
    benefits: ["Redusert responstid", "Lavere kostnader", "Bedre kundeopplevelse"],
    href: null
  },
  {
    icon: Mail,
    title: "AI E-post Kundeservice",
    description: "Automatiser innboksen — svar raskere, sorter smartere",
    details: [
      "Sorterer nyhetsbrev, spam og irrelevante meldinger",
      "Klassifiserer avsender (kunde, leverandør, lead)",
      "Lager utkast til svar direkte i kladd-mappen",
      "Logger alt i din egen private webapp",
    ],
    benefits: ["Mer tid til viktig arbeid", "Raskere responstid", "Full kontroll"],
    href: "/ai-epost-kundeservice"
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot / Salgsassistent",
    description: "En aktiv salgsassistent som jobber for deg 24/7",
    details: [
      "Gir produktanbefalinger basert på kundens behov",
      "Stiller kvalifiserte spørsmål for å forstå kunden",
      "Genererer leads med relevant informasjon",
      "Ber om kontaktinfo på riktig tidspunkt",
    ],
    benefits: ["Flere kvalifiserte leads", "Høyere konvertering", "Fornøyde kunder"],
    href: "/ai-chatbot-salgsassistent"
  },
  {
    icon: Users,
    title: "B2B Leads Generator",
    description: "Automatisert leadsgenerering — GDPR-vennlig og effektiv",
    details: [
      "Skraper Brønnøysund, nettsider og bedriftsdata",
      "Analyserer kontekst og identifiserer produkt-fit",
      "Lager svært relevante og personlige e-poster",
      "Holder seg innenfor norsk markedsføringslov",
    ],
    benefits: ["Mer kvalifiserte leads", "Mindre manuelt arbeid", "GDPR-kompatibel"],
    href: "/b2b-leads-generator"
  },
  {
    icon: MessageSquare,
    title: "Cold calling AI",
    description: "Profesjonelle oppringninger som fungerer",
    details: [
      "Naturlig stemme som låter menneskelig",
      "Tilpassede samtaler for hver prospect",
      "Avtaler møter og demos automatisk",
      "Detaljerte rapporter om hver samtale",
    ],
    benefits: ["Konsekvent kvalitet", "Ingen dårlige dager", "Skalerbar salg"],
    href: null
  },
  {
    icon: Search,
    title: "SEO automatisering",
    description: "Fullautomatisert innholdsstrategi",
    details: [
      "Automatisk keyword-research og innholdsplanlegging",
      "Genererer SEO-optimalisert innhold",
      "Bygger backlinks naturlig og trygt",
      "Overvåker konkurrenter og tilpasser strategi",
    ],
    benefits: ["Høyere Google-rangeringer", "Mer organisk trafikk", "Lavere markedsføringskostnader"],
    href: null
  },
  {
    icon: TrendingUp,
    title: "Markedsførings-agent",
    description: "AI-drevet markedsføring som optimaliserer kampanjer",
    details: [
      "Analyserer markedsdata og kundeadferd",
      "Optimaliserer annonse-budsjetter automatisk",
      "Tilpasser kampanjer basert på ytelse",
      "Genererer detaljerte markedsføringsrapporter",
    ],
    benefits: ["Bedre ROI på annonser", "Automatisk optimalisering", "Databaserte beslutninger"],
    href: null
  },
  {
    icon: Settings,
    title: "Skreddersydde løsninger",
    description: "Fullstendig tilpassede AI-systemer for din bedrift",
    details: [
      "Utvikling av unike AI-løsninger for dine behov",
      "Integrering med eksisterende systemer",
      "Omfattende testing og kvalitetssikring",
      "Dedikert support og vedlikehold",
    ],
    benefits: ["Perfekt tilpasset din bedrift", "Kompetitiv fordel", "Langsiktig partnerskap"],
    href: null
  },
]

const process = [
  {
    step: "1",
    title: "Behovsanalyse",
    description: "Vi kartlegger dine utfordringer og muligheter gjennom en grundig samtale.",
    icon: Users,
  },
  {
    step: "2", 
    title: "Skreddersøm",
    description: "Vi designer og bygger AI-løsningen som passer perfekt til din bedrift.",
    icon: Bot,
  },
  {
    step: "3",
    title: "Implementering",
    description: "Smidig utrulling med minimal forstyrrelse av din daglige drift.",
    icon: Zap,
  },
  {
    step: "4",
    title: "Oppfølging",
          description: "Kontinuerlig optimalisering og kompetent support for best mulig resultater.",
    icon: Shield,
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-orange-50 py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              AI-løsninger som 
              <span className="gradient-text"> faktisk fungerer</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-8 max-w-3xl mx-auto">
              Vi bygger ikke AI for å imponere. Vi bygger AI som løser reelle problemer 
              og gir målbare resultater for bedrifter.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/kontakt">
                Se hva vi kan gjøre for deg
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Våre tjenester
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fra kundeservice til salg og markedsføring – vi automatiserer prosessene 
              som tar mest tid i din bedrift.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-purple-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <service.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <p className="text-gray-600 text-lg">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-gray-900">Hva løsningen gjør:</h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
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
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {service.href && (
                    <div className="mt-6 pt-6 border-t">
                      <Button asChild>
                        <Link href={service.href}>
                          Les mer om {service.title}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Slik jobber vi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fra første samtale til ferdig løsning – en strukturert prosess 
              som sikrer resultater.
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
              Klar for å automatisere din bedrift?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              La oss vise deg konkrete eksempler på hvordan AI kan spare tid 
              og penger i din bedrift. Gratis demo, ingen forpliktelser.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4"
            >
              <Link href="/kontakt">
                Bestill gratis demo
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 