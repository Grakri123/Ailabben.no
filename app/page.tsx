import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LeadWizard } from "@/components/lead-wizard"
import { 
  Bot, 
  Mail, 
  Users, 
  MessageSquare, 
  Search,
  TrendingUp,
  Settings,
  ArrowRight,
  CheckCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Kunstig intelligens for bedrifter",
  description: "AI for bedrifter som vil automatisere kundeservice, e-post, dokumentasjon og SEO. Skreddersydde AI-løsninger for SMB – levert og hostet i EU.",
  keywords: [
    "ai for bedrifter",
    "ai løsninger bedrift",
    "kunstig intelligens for bedrifter",
    "ai agent",
    "ai kundeservice",
    "ai chatbot bedrift",
    "automatisering bedrift",
    "ai for småbedrifter",
    "ai for norske bedrifter"
  ],
  openGraph: {
    title: "Kunstig intelligens for bedrifter",
    description: "AI for bedrifter som vil automatisere kundeservice, e-post, dokumentasjon og SEO. Skreddersydde AI-løsninger for SMB – levert og hostet i EU.",
  },
  twitter: {
    title: "Kunstig intelligens for bedrifter",
    description: "AI for bedrifter som vil automatisere kundeservice, e-post, dokumentasjon og SEO. Skreddersydde AI-løsninger for SMB – levert og hostet i EU.",
  },
}

const services = [
  {
    icon: Bot,
    title: "Resepsjonist-agent",
    description: "AI-drevet resepsjonist som håndterer kundehenvendelser 24/7",
    href: null,
  },
  {
    icon: Mail,
    title: "AI E-post Kundeservice",
    description: "Automatiser innboksen — svar raskere, sorter smartere og spar tid",
    href: "/ai-epost-kundeservice",
  },
  {
    icon: Users,
    title: "Leads-innsamling",
    description: "Intelligent innsamling og kvalifisering av potensielle kunder",
    href: null,
  },
  {
    icon: MessageSquare,
    title: "Cold calling",
    description: "AI-agenter som håndterer kalde oppringninger profesjonelt",
    href: null,
  },
  {
    icon: Search,
    title: "SEO automatisering",
    description: "Fullautomatisert SEO og innholdsstrategi for din bedrift",
    href: null,
  },
  {
    icon: TrendingUp,
    title: "Markedsførings-agent",
    description: "AI-drevet markedsføring som optimaliserer kampanjer og konverteringer",
    href: null,
  },
  {
    icon: Settings,
    title: "Skreddersydde løsninger",
    description: "Fullstendig tilpassede AI-systemer bygget spesielt for din bedrift",
    href: null,
  },
]

const benefits = [
  "Skreddersydde løsninger for din bedrift",
      "Hostet trygt i EU",
  "Ingen langtidskontrakter eller skjulte kostnader",
  "Rask implementering og opplæring",
  "24/7 overvåkning og vedlikehold",
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-purple-50 py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              <span className="gradient-text">Skreddersydd Kunstig Intelligens</span>
              <br />
              for din bedrift
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-8 max-w-3xl mx-auto">
              Fra resepsjonister og epostgenerering til fullautomatisert SEO – vi bygger 
              dine AI-løsninger. Trygt, enkelt og skreddersydd for din bedrift.
            </p>
            <LeadWizard />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="tjenester">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Våre AI-løsninger
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi bygger intelligente agenter som automatiserer dine daglige oppgaver 
              og forbedrer kundeopplevelsen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const CardWrapper = service.href ? Link : 'div'
              const cardProps = service.href ? { href: service.href } : {}
              
              return (
                <CardWrapper key={index} {...cardProps} className={service.href ? 'block' : ''}>
                  <Card 
                    className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full ${service.href ? 'cursor-pointer hover:border-orange-200' : ''}`}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                      {service.href && (
                        <span className="text-orange-600 text-sm font-medium mt-2 inline-flex items-center">
                          Les mer <ArrowRight className="ml-1 w-4 h-4" />
                        </span>
                      )}
                    </CardHeader>
                  </Card>
                </CardWrapper>
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
                Vi er seriegründere som kjenner utfordringene i SMB-er. 
                Våre AI-løsninger er bygget for å fungere – ikke bare imponere.
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
                  <Bot size={80} className="text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">AI-agenter</h3>
                  <p className="text-gray-600">Bygget i Norge, for Norge</p>
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
              Klar for å komme i gang?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              La oss vise deg hvordan AI kan transformere din bedrift. 
              Få en gratis demo tilpasset dine behov.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4"
            >
              <Link href="/kontakt">
                Bestill demo nå
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 