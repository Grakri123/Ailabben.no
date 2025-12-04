import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { 
  Instagram, 
  Share2, 
  Calendar, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Image as ImageIcon,
  MessageSquare,
  Target,
  Clock,
  XCircle,
  BarChart3,
  Zap,
  Hash,
  FileText,
  Layout,
  RefreshCw,
  Award
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI SoMe-posting – Automatisk Instagram & Facebook | AI Labben",
  description: "Automatisert SoMe-posting med AI. Hold profilen aktiv uten stress. AI genererer og publiserer innlegg på faste intervaller. GDPR-vennlig og EU-hostet.",
  keywords: [
    "ai instagram",
    "ai facebook",
    "automatisk posting",
    "some automatisering",
    "instagram innlegg ai",
    "facebook posting ai",
    "sosiale medier ai",
    "innhold instagram",
    "markedsføring automatisering",
    "some strategi"
  ],
  openGraph: {
    title: "AI SoMe-posting – Automatisk Instagram & Facebook",
    description: "Automatisert SoMe-posting med AI. Hold profilen aktiv uten stress. AI genererer og publiserer innlegg på faste intervaller.",
  },
}

const problems = [
  {
    icon: Clock,
    text: "For sjelden"
  },
  {
    icon: XCircle,
    text: "Med dårlig kvalitet"
  },
  {
    icon: Target,
    text: "Uten strategi"
  },
  {
    icon: RefreshCw,
    text: "Uten variasjon"
  },
  {
    icon: MessageSquare,
    text: "Uten CTA"
  }
]

const features = [
  {
    icon: Calendar,
    title: "Tema-plan",
    description: "Strategisk planlegging av innhold over tid"
  },
  {
    icon: ImageIcon,
    title: "Tekst og bilde",
    description: "Genererer både copy og visuelle forslag"
  },
  {
    icon: Hash,
    title: "Hashtags",
    description: "Relevante hashtags for maksimal rekkevidde"
  },
  {
    icon: Share2,
    title: "Publisering",
    description: "Automatisk posting til dine kanaler"
  },
  {
    icon: Sparkles,
    title: "Automatisert variasjon",
    description: "Varierte innlegg som holder følgerne engasjert"
  },
  {
    icon: FileText,
    title: "Knyttes mot bloggmaskinen",
    description: "Gjenbruker og promoterer blogginnhold"
  }
]

const integrations = [
  { name: "Meta Business Suite", icon: Layout },
  { name: "Instagram", icon: Instagram },
  { name: "Facebook", icon: Share2 },
  { name: "Supabase", icon: BarChart3 },
]

const steps = [
  {
    number: "1",
    title: "Definer publiseringsfrekvens",
    description: "Bestem hvor ofte du vil poste og på hvilke plattformer.",
    icon: Calendar
  },
  {
    number: "2",
    title: "AI lager og planlegger",
    description: "Systemet genererer innhold og legger det i køen.",
    icon: Sparkles
  },
  {
    number: "3",
    title: "Alt publiseres automatisk",
    description: "Innlegg går live etter planen uten ditt bidrag.",
    icon: Share2
  },
  {
    number: "4",
    title: "Rapport i portalen",
    description: "Få oversikt over ytelse og engasjement.",
    icon: BarChart3
  }
]

export default function AISoMePage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-pink-50 via-purple-50 to-white py-20 sm:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Instagram className="w-4 h-4" />
              AI SoMe-automatisering
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-fade-in">
              <span className="gradient-text">Automatisert SoMe-posting</span>
              <br />
              <span className="text-gray-900">— hold profilen aktiv uten stress</span>
            </h1>
            
            <p className="text-lg sm:text-xl leading-8 text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              AI genererer og publiserer innlegg for deg på faste intervaller, 
              basert på din tone, dine produkter og din målgruppe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
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
                Problemet – bedrifter er ikke konsekvente
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                De fleste poster:
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
                <span className="font-semibold text-red-700">Algoritmen belønner konsistens</span>
                <br />
                — men de færreste klarer det. Uten regelmessig aktivitet, mister profilen din synlighet.
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
              AI som tar over hele prosessen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Systemet gjør alt arbeidet — du beholder kontrollen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Result highlight */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg">
              <p className="text-xl font-semibold flex items-center gap-2">
                <Award className="w-6 h-6" />
                Resultat: Aktiv profil → Mer tillit → Flere kunder
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
              Publiserer direkte til dine sosiale profiler
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-200 text-center hover:shadow-md hover:border-pink-200 transition-all group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-pink-100 transition-colors">
                  <integration.icon className="w-5 h-5 text-gray-600 group-hover:text-pink-600 transition-colors" />
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
              Fra stille profil til konsistent tilstedeværelse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-pink-300 to-purple-300" />
                )}
                
                <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow relative bg-white h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
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
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container text-center">
          <div className="mx-auto max-w-3xl text-white">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Klar for en aktiv SoMe-profil på autopilot?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Se hvordan AI kan holde profilen din aktiv uten at du løfter en finger.
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

