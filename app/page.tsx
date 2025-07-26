import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Bot, 
  Mail, 
  Users, 
  MessageSquare, 
  Search,
  ArrowRight,
  CheckCircle
} from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "Resepsjonist-agent",
    description: "AI-drevet resepsjonist som håndterer kundehenvendelser 24/7",
  },
  {
    icon: Mail,
    title: "E-postgenerering",
    description: "Automatisert generering av personlige og effektive e-poster",
  },
  {
    icon: Users,
    title: "Leads-innsamling",
    description: "Intelligent innsamling og kvalifisering av potensielle kunder",
  },
  {
    icon: MessageSquare,
    title: "Cold calling",
    description: "AI-agenter som håndterer kalde oppringninger profesjonelt",
  },
  {
    icon: Search,
    title: "SEO automatisering",
    description: "Fullautomatisert SEO og innholdsstrategi for din bedrift",
  },
]

const benefits = [
  "Skreddersydde løsninger for din bedrift",
  "Hostet trygt i EU med norsk support",
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
              <span className="gradient-text">Skreddersydde AI-agenter</span>
              <br />
              for din bedrift
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-8 max-w-3xl mx-auto">
              Fra resepsjonister og epostgenerering til fullautomatisert SEO – vi bygger 
              dine AI-løsninger. Trygt, enkelt og skreddersydd for norske bedrifter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link href="#kontakt">
                  Få en demo
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="text-lg px-8 py-4">
                <Link href="/hva-vi-gjor">
                  Les mer
                </Link>
              </Button>
            </div>
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
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
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
                Vi er seriegründere som kjenner utfordringene i norske SMB-er. 
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