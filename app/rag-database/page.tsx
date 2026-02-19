import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { 
  Database, 
  Search, 
  Lock, 
  Zap,
  ArrowRight,
  CheckCircle,
  FileText,
  FolderOpen,
  Sheet,
  Mail,
  BookOpen,
  Settings,
  Sparkles,
  Shield,
  FileSearch,
  MessageSquare,
  Upload,
  Brain,
  RefreshCw,
  Users,
  HardDrive,
  Cloud
} from "lucide-react"

export const metadata: Metadata = {
  title: "RAG database | Privat AI for bedriften din",
  description: "Semantisk søk i egne dokumenter med hybrid vektor-database. Egen AI trent på bedriftens info — EU-hostet og GDPR-kompatibel.",
  keywords: [
    "RAG database",
    "privat AI bedrift",
    "hybrid vektor database",
    "semantisk søk",
    "internt oppslagsverk AI",
    "RAG system"
  ],
  openGraph: {
    title: "RAG database | Privat AI for bedriften din",
    description: "Semantisk søk i egne dokumenter med hybrid vektor-database. Egen AI trent på bedriftens info — EU-hostet og GDPR-kompatibel.",
  },
}

const problems = [
  {
    icon: FileText,
    text: "PDF-er"
  },
  {
    icon: FolderOpen,
    text: "Teams-mapper"
  },
  {
    icon: Sheet,
    text: "Excel-ark"
  },
  {
    icon: Mail,
    text: "E-poster"
  },
  {
    icon: BookOpen,
    text: "Interne håndbøker"
  },
  {
    icon: Settings,
    text: "Systemer som ikke snakker sammen"
  }
]

const features = [
  {
    icon: MessageSquare,
    title: "Semantisk søk",
    description: "Spør med naturlig språk — få presise svar"
  },
  {
    icon: Database,
    title: "Vektor-database",
    description: "Forstår kontekst og mening, ikke bare nøkkelord"
  },
  {
    icon: Brain,
    title: "Hybrid-søk",
    description: "Kombinerer semantikk med tall, datoer og referanser"
  },
  {
    icon: Lock,
    title: "Strengt avgrenset tilgang",
    description: "Rollebasert tilgang til sensitiv informasjon"
  },
  {
    icon: FileSearch,
    title: "Full logging",
    description: "Sporbarhet på alle oppslag og interaksjoner"
  },
  {
    icon: Shield,
    title: "Sikker EU-hosting",
    description: "GDPR-kompatibel lagring i EU/EØS"
  }
]

const examples = [
  {
    question: "Hva er våre priser for X?",
    icon: FileText
  },
  {
    question: "Hva er prosedyren for Y?",
    icon: BookOpen
  },
  {
    question: "Hva står i kontrakten med kunde Z?",
    icon: FileSearch
  }
]

const integrations = [
  { name: "PDF-mapper", icon: FileText },
  { name: "SharePoint / OneDrive", icon: Cloud },
  { name: "Supabase", icon: Database },
  { name: "Teams", icon: Users },
  { name: "Dropbox", icon: HardDrive },
]

const steps = [
  {
    number: "1",
    title: "Dokumenter lastes inn",
    description: "Importer eksisterende dokumenter fra mapper og systemer.",
    icon: Upload
  },
  {
    number: "2",
    title: "Data vektoriseres",
    description: "Innholdet konverteres til semantiske vektorer for AI-forståelse.",
    icon: Brain
  },
  {
    number: "3",
    title: "Hybrid-modell bygges",
    description: "Kombinerer semantisk søk med tradisjonelt søk for best resultat.",
    icon: Database
  },
  {
    number: "4",
    title: "Ansatte bruker AI",
    description: "Tilgang via portal eller chatbot — spør med naturlig språk.",
    icon: MessageSquare
  },
  {
    number: "5",
    title: "Kontinuerlig oppdatering",
    description: "Nye dokumenter synkroniseres automatisk.",
    icon: RefreshCw
  }
]

export default function RAGDatabasePage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50 via-purple-50 to-white py-20 sm:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Database className="w-4 h-4" />
              Privat Bedrifts-AI
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-fade-in">
              <span className="gradient-text">Din egen interne AI</span>
              <br />
              <span className="text-gray-900">— trent på bedriftens dokumenter</span>
            </h1>
            
            <p className="text-lg sm:text-xl leading-8 text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              Hybrid RAG-system med vektor-database + semantisk søk. 
              Gir ansatte rask tilgang til interne regler, priser, prosedyrer og tekniske dokumenter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                <Link href="/kontakt">
                  Kontakt oss
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
                Problemet – informasjon er spredd og vanskelig å finne
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                I mange bedrifter ligger viktig informasjon i:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
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
                <span className="font-semibold text-red-700">Dette gir feil, misforståelser og tidstyver.</span>
                <br />
                Ansatte bruker timer på å lete etter informasjon som burde vært tilgjengelig på sekunder.
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
              Et privat AI-oppslagsverk
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Systemet ditt inkluderer alt du trenger for intern kunnskap
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Example questions */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-center mb-6 text-gray-900">
              Den svarer på spørsmål som:
            </h3>
            <div className="space-y-3">
              {examples.map((example, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-xl border border-indigo-100 flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <example.icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <p className="text-gray-700 font-medium italic">&ldquo;{example.question}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>

          {/* Result highlight */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg">
              <p className="text-xl font-semibold flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Resultatet: Raskere beslutninger, færre feil, mer produktivitet
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
              Kobler seg til der dokumentene allerede ligger
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-200 text-center hover:shadow-md hover:border-indigo-200 transition-all group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-100 transition-colors">
                  <integration.icon className="w-5 h-5 text-gray-600 group-hover:text-indigo-600 transition-colors" />
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
              Fra dokumentkaos til intelligent kunnskapsbase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300" />
                )}
                
                <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow relative bg-white h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
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
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="container text-center">
          <div className="mx-auto max-w-3xl text-white">
            <Database className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Klar for en intern AI som kjenner din bedrift?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Se hvordan en intern AI kan spare hundrevis av timer.
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

