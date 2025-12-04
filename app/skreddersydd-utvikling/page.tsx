import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Code, 
  Workflow, 
  Database, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Settings,
  FileText,
  BarChart3,
  Link2,
  Zap,
  Copy,
  HardDrive,
  RefreshCw,
  XCircle,
  Users,
  Layout,
  Briefcase,
  Cloud,
  FileSearch,
  ShoppingCart,
  Mail,
  Shield
} from "lucide-react"

export const metadata: Metadata = {
  title: "Skreddersydd Utvikling – AI & Automatisering for SMB | AI Labben",
  description: "Skreddersydde AI- og automasjonsløsninger for SMB. API-integrasjoner, dashboards, RAG-systemer og komplette applikasjoner. EU-hostet og moderne teknologi.",
  keywords: [
    "skreddersydd utvikling",
    "custom utvikling",
    "api integrasjon",
    "automatisering",
    "dashboard utvikling",
    "ai infrastruktur",
    "systemintegrasjon",
    "software utvikling smb",
    "tripletex integrasjon",
    "utviklingsteam"
  ],
  openGraph: {
    title: "Skreddersydd Utvikling – AI & Automatisering for SMB",
    description: "Skreddersydde AI- og automasjonsløsninger for SMB. API-integrasjoner, dashboards, RAG-systemer og komplette applikasjoner.",
  },
}

const problems = [
  {
    icon: RefreshCw,
    text: "Manuelle prosesser"
  },
  {
    icon: Copy,
    text: "Duplikat-data"
  },
  {
    icon: HardDrive,
    text: "Gamle systemer"
  },
  {
    icon: XCircle,
    text: "Manglende API-koblinger"
  },
  {
    icon: Workflow,
    text: "Ineffektiv arbeidsflyt"
  }
]

const solutions = [
  {
    icon: Link2,
    title: "API-integrasjoner",
    description: "Kobler systemer sømløst sammen"
  },
  {
    icon: BarChart3,
    title: "Interne dashboards",
    description: "Visualiserer data og KPI-er i sanntid"
  },
  {
    icon: Zap,
    title: "Automatisering",
    description: "Erstatter manuelle prosesser med automatikk"
  },
  {
    icon: FileText,
    title: "Dokumentgenerering",
    description: "Automatisk generering av rapporter og dokumenter"
  },
  {
    icon: Database,
    title: "RAG-systemer",
    description: "Intern AI-kunnskap basert på dine data"
  },
  {
    icon: Briefcase,
    title: "Salgsverktøy",
    description: "CRM-tilpasninger og salgsstøtte"
  },
  {
    icon: Cloud,
    title: "Egen AI-infrastruktur",
    description: "Komplett AI-plattform for din bedrift"
  },
  {
    icon: Layout,
    title: "Komplette applikasjoner",
    description: "Full-stack løsninger fra bunn av"
  }
]

const integrations = [
  { name: "Tripletex", icon: Briefcase },
  { name: "PowerOffice", icon: Settings },
  { name: "Shopify", icon: ShoppingCart },
  { name: "Outlook", icon: Mail },
  { name: "Teams", icon: Users },
  { name: "Supabase", icon: Database },
  { name: "CRM-systemer", icon: Briefcase },
  { name: "Interne databaser", icon: HardDrive },
]

const steps = [
  {
    number: "1",
    title: "Vi kartlegger behov",
    description: "Grundig analyse av dine utfordringer og ønsker.",
    icon: FileSearch
  },
  {
    number: "2",
    title: "Lager prototype",
    description: "Rask utvikling av prototype for testing og godkjenning.",
    icon: Code
  },
  {
    number: "3",
    title: "Utvikler løsning",
    description: "Full utvikling med moderne teknologi og beste praksis.",
    icon: Settings
  },
  {
    number: "4",
    title: "Setter opp drift",
    description: "Deployment, vedlikehold og overvåkning.",
    icon: Cloud
  },
  {
    number: "5",
    title: "Fortløpende forbedringer",
    description: "Kontinuerlig optimalisering og nye funksjoner.",
    icon: TrendingUp
  }
]

export default function SkreddersyddUtviklingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-cyan-50 via-blue-50 to-white py-20 sm:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Code className="w-4 h-4" />
              Skreddersydd Utvikling
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-fade-in">
              <span className="gradient-text">Skreddersydde AI- og automasjonsløsninger</span>
              <br />
              <span className="text-gray-900">for SMB</span>
            </h1>
            
            <p className="text-lg sm:text-xl leading-8 text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              For bedrifter som trenger noe helt eget. Vi bygger alt fra API-integrasjoner 
              til full AI-infrastruktur — med et eget utviklingsteam.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                <Link href="/kontakt">
                  Bestill demo
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link href="#slik-fungerer-det">
                  Se hvordan det fungerer
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Problemet – systemer snakker ikke sammen
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mange bedrifter sliter med:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-3 bg-white p-5 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <p className="text-gray-700 font-medium text-sm text-center">{problem.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border border-red-100">
              <p className="text-gray-700 text-center">
                <span className="font-semibold text-red-700">Dette stopper vekst.</span>
                <br />
                Uten moderne integrasjoner og automatisering, bruker du tid på repeterende oppgaver i stedet for å bygge bedriften.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Løsningen
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Moderne og effektiv utvikling
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi bygger skreddersydde løsninger med moderne teknologi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* EU hosting highlight */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl border border-cyan-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">All kode hostes i EU</h3>
                <p className="text-gray-600">
                  Med moderne teknologi, beste praksis og full GDPR-kompatibilitet.
                </p>
              </div>
            </div>
          </div>

          {/* Result highlight */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg">
              <p className="text-xl font-semibold flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Resultatet: Effektiv drift, skalerbar vekst, moderne systemer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Integrasjoner
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi integrerer med de systemene du bruker
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-200 text-center hover:shadow-md hover:border-cyan-200 transition-all group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-100 transition-colors">
                  <integration.icon className="w-5 h-5 text-gray-600 group-hover:text-cyan-600 transition-colors" />
                </div>
                <p className="text-sm font-medium text-gray-700">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-20" id="slik-fungerer-det">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Slik fungerer det
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fra idé til ferdig løsning i produksjon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-cyan-300 to-blue-300" />
                )}
                
                <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow relative bg-white h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Pris og oppsett
              </h2>
              <p className="text-lg text-gray-600">
                Fleksible priser tilpasset ditt prosjekt
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-cyan-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
                  <CardTitle className="text-xl text-center">Prosjektbasert</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    Fast pris for definerte prosjekter
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Tilbud basert på omfang</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Klare milepæler</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Forutsigbare kostnader</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardTitle className="text-xl text-center">Timepris</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    Fleksibel løsning for løpende behov
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Ad-hoc arbeid</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Vedlikehold</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Mindre tilpasninger</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="container text-center">
          <div className="mx-auto max-w-3xl text-white">
            <Code className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Klar for en skreddersydd løsning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              La oss bygge din løsning — akkurat slik du trenger den.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
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

import { TrendingUp } from "lucide-react"

