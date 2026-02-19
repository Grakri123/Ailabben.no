import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { 
  Users, 
  Search, 
  Mail, 
  Target,
  ArrowRight,
  CheckCircle,
  Zap,
  FileSearch,
  Building2,
  UserSearch,
  MessageSquare,
  Clock,
  Sparkles,
  Database,
  Settings,
  Shield,
  Filter,
  Send,
  TrendingUp,
  Briefcase
} from "lucide-react"

export const metadata: Metadata = {
  title: "Lead Generator | Under produksjon – AI Labben",
  description: "Lead Generator er under produksjon. Vi bygger et verktøy for automatisiert B2B-leadsgenerering – GDPR-vennlig og tilpasset norsk lov. Kontakt oss for å høre mer om hva som kommer.",
  keywords: [
    "Lead Generator",
    "B2B leads generator AI",
    "automatisert prospektering",
    "AI generering leads",
    "GDPR vennlig leads",
    "Brønnøysund scraping",
    "under produksjon"
  ],
  openGraph: {
    title: "Lead Generator | Under produksjon – AI Labben",
    description: "Vi bygger Lead Generator – automatisiert B2B-leadsgenerering. Kontakt oss for å høre mer om hva som kommer.",
  },
}

const problems = [
  {
    icon: Building2,
    text: "Finne riktige selskaper"
  },
  {
    icon: FileSearch,
    text: "Hente nøkkelinfo"
  },
  {
    icon: UserSearch,
    text: "Finne riktig kontaktperson"
  },
  {
    icon: Mail,
    text: "Skrive e-poster"
  },
  {
    icon: MessageSquare,
    text: "Følge opp"
  }
]

const features = [
  {
    icon: Database,
    title: "Skraper Brreg + nettsider",
    description: "Automatisk innhenting av bedriftsdata fra offentlige kilder"
  },
  {
    icon: Search,
    title: "Analyserer kontekst",
    description: "Forstår bedriftens behov og potensial basert på data"
  },
  {
    icon: Target,
    title: "Identifiserer produkt-fit",
    description: "Matcher din løsning med bedrifter som faktisk trenger den"
  },
  {
    icon: Mail,
    title: "Lager relevante e-poster",
    description: "Genererer svært personlige og kontekstuelle meldinger"
  },
  {
    icon: MessageSquare,
    title: "Genererer dialog",
    description: "Håndterer kommunikasjon på dine vegne"
  },
  {
    icon: Shield,
    title: "GDPR-kompatibel",
    description: "Holder seg innenfor norsk markedsføringslov"
  }
]

const integrations = [
  { name: "Outlook", icon: Mail },
  { name: "Gmail", icon: Mail },
  { name: "Supabase", icon: Database },
  { name: "CRM-systemer", icon: Briefcase },
  { name: "Automatiseringsverktøy", icon: Zap },
]

const steps = [
  {
    number: "1",
    title: "Legg inn kriterier",
    description: "Definer bransje, størrelse og behov for målbedrifter.",
    icon: Filter
  },
  {
    number: "2",
    title: "AI finner og kvalifiserer",
    description: "Systemet skraper data og identifiserer de beste bedriftene.",
    icon: Search
  },
  {
    number: "3",
    title: "Genererer personlige e-poster",
    description: "AI skriver skreddersydde meldinger for hver bedrift.",
    icon: Mail
  },
  {
    number: "4",
    title: "Du godkjenner utsending",
    description: "Full kontroll før noe sendes — du bestemmer.",
    icon: CheckCircle
  },
  {
    number: "5",
    title: "Leads kommer i innboksen",
    description: "Motta svar og følg opp kvalifiserte leads.",
    icon: TrendingUp
  }
]

export default function B2BLeadsGeneratorPage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 via-purple-50 to-white py-20 sm:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Clock className="w-4 h-4" />
              Under produksjon
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-fade-in">
              <span className="gradient-text">Lead Generator</span>
              <br />
              <span className="text-gray-900">— kommer snart</span>
            </h1>
            
            <p className="text-lg sm:text-xl leading-8 text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              Vi jobber med et verktøy for automatisiert B2B-leadsgenerering: skraper Brønnøysund og nettsider, 
              analyserer produkt-fit og sender personlige e-poster – GDPR-vennlig og tilpasset norsk markedsføringslov. 
              Kontakt oss for å høre mer om hva som kommer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Link href="/kontakt">
                  Kontakt oss – få beskjed om lansering
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
                Problemet – salgsteam drukner i research
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Manuelt arbeid er tungt:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-white p-5 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{problem.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border border-red-100">
              <p className="text-gray-700 text-center flex items-center justify-center gap-2 flex-wrap">
                <span className="font-semibold text-red-700">Dette tar timer</span>
                <span>—</span>
                <span className="font-semibold text-green-700 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  AI bruker sekunder
                </span>
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
              AI-drevet prospektering
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Systemet gjør dette automatisk eller semi-automatisk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional feature: Automation modes */}
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fullautomatisk</h3>
                    <p className="text-sm text-gray-600">
                      AI sender alt på autopilot innenfor dine rammer
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Semi-automatisk</h3>
                    <p className="text-sm text-gray-600">
                      Du godkjenner hver sending før den går ut
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Result highlight */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg">
              <p className="text-xl font-semibold flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Resultatet: Mer kvalifiserte leads, mindre manuelt arbeid
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
              Kobles sømløst til dine eksisterende verktøy
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-200 text-center hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 transition-colors">
                  <integration.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
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
              Fra tomme hender til full pipeline på timer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300" />
                )}
                
                <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow relative bg-white h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container text-center">
          <div className="mx-auto max-w-3xl text-white">
            <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Vil du høre mer om Lead Generator?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Vi jobber med lansering. Kontakt oss for å få beskjed om hva som kommer og når det er klart.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              <Link href="/kontakt">
                Kontakt oss
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

