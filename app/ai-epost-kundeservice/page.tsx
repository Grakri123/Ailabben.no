import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Mail, 
  Clock, 
  Filter, 
  MessageSquare, 
  Brain,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Inbox,
  Send,
  FolderOpen,
  Bell,
  Database,
  Settings,
  Sparkles
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI E-post Kundeservice – Automatiser innboksen | AI Labben",
  description: "Automatiser e-postkundeservice med AI. Sorter, klassifiser og svar på e-poster automatisk. Sikker EU-hosting, integrasjon med Gmail og Outlook 365.",
  keywords: [
    "ai e-post",
    "automatisk e-postsvar",
    "e-post kundeservice",
    "ai innboks",
    "e-post automatisering",
    "gmail automatisering",
    "outlook ai",
    "kundeservice automatisering",
    "ai for e-post",
    "e-post sortering ai"
  ],
  openGraph: {
    title: "AI E-post Kundeservice – Automatiser innboksen",
    description: "Automatiser e-postkundeservice med AI. Sorter, klassifiser og svar på e-poster automatisk. Sikker EU-hosting.",
  },
}

const problems = [
  {
    icon: Filter,
    text: "Å sortere nyhetsbrev, spam og irrelevante meldinger"
  },
  {
    icon: MessageSquare,
    text: "Å vurdere hvem som må få svar"
  },
  {
    icon: Send,
    text: "Å skrive svar på standard henvendelser"
  },
  {
    icon: FolderOpen,
    text: "Å finne igjen tidligere dialoger og tråder"
  }
]

const features = [
  {
    icon: Filter,
    title: "Sorterer automatisk",
    description: "Nyhetsbrev, spam og irrelevante meldinger flyttes ut av veien"
  },
  {
    icon: Mail,
    title: "Klassifiserer avsender",
    description: "Kunde, leverandør, lead eller intern — AI-en vet forskjellen"
  },
  {
    icon: Brain,
    title: "Vurderer behov",
    description: "Avgjør om en e-post trenger svar eller bare arkivering"
  },
  {
    icon: Send,
    title: "Lager utkast",
    description: "Intelligente svarutkast rett i kladd-mappen din"
  },
  {
    icon: Zap,
    title: "Auto-svar (valgfritt)",
    description: "Kan sende raske standard-svar selv ved behov"
  },
  {
    icon: Shield,
    title: "Unngår misforståelser",
    description: "Holder seg unna komplekse tråder automatisk"
  }
]

const integrations = [
  { name: "Gmail", icon: Mail },
  { name: "Outlook / Microsoft 365", icon: Mail },
  { name: "Supabase database", icon: Database },
  { name: "Bedriftens CRM", icon: Settings },
  { name: "n8n / Zapier", icon: Zap },
  { name: "Teams / Slack", icon: Bell }
]

const steps = [
  {
    number: "1",
    title: "Analyse av e-poster",
    description: "Agenten klassifiserer alle innkommende e-poster etter kategori og behov.",
    icon: Brain
  },
  {
    number: "2",
    title: "Automatiserte handlinger",
    description: "Sortering, SPAM-filtrering og flytting til riktige mapper.",
    icon: Filter
  },
  {
    number: "3",
    title: "Utkast eller autosvar",
    description: "AI genererer intelligente svar ut fra tidligere dialoger og instrukser.",
    icon: Send
  },
  {
    number: "4",
    title: "Læring over tid",
    description: "Systemet blir mer presist jo mer det brukes.",
    icon: TrendingUp
  }
]

export default function AIEpostKundeservicePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-orange-50 via-purple-50 to-white py-20 sm:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Mail className="w-4 h-4" />
              AI-drevet e-postløsning
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-fade-in">
              <span className="gradient-text">AI-drevet e-postkundeservice</span>
              <br />
              <span className="text-gray-900">for norske bedrifter</span>
            </h1>
            
            <p className="text-lg sm:text-xl leading-8 text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              Automatiser innboksen — svar raskere, sorter smartere og bruk mindre tid på rutinearbeid. 
              AI Labben leverer en sikker, EU-hostet løsning som jobber i Gmail og Outlook 365.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
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
                Problemet – e-post tar for mye tid
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                De fleste bedrifter bruker flere timer hver dag på:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
              <p className="text-gray-700 text-center">
                <span className="font-semibold text-red-700">Dette stjeler tid</span> fra salg, produksjon og kundebehandling — 
                og kan føre til <span className="font-semibold text-red-700">tapte kunder</span> når ingen rekker å svare raskt nok.
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
              AI som håndterer e-postene for deg
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vår AI-epostagent fungerer som en digital kundebehandler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional feature: Logging */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-6 rounded-2xl border border-purple-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Logger alt i din egen webapp</h3>
                <p className="text-gray-600">
                  Full oversikt over hva AI-en gjør, med mulighet til å korrigere og godkjenne handlinger.
                </p>
              </div>
            </div>
          </div>

          {/* Result highlight */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-lg">
              <p className="text-xl font-semibold flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Resultatet: Mer tid til viktig arbeid — mindre tid i innboksen
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
              Kobles sømløst til systemene du allerede bruker
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-200 text-center hover:shadow-md hover:border-orange-200 transition-all group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-100 transition-colors">
                  <integration.icon className="w-5 h-5 text-gray-600 group-hover:text-orange-600 transition-colors" />
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
              Fire enkle steg til en smartere innboks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-orange-300 to-purple-300" />
                )}
                
                <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow relative bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-purple-600">
        <div className="container text-center">
          <div className="mx-auto max-w-3xl text-white">
            <Inbox className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Klar for en smartere innboks?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              La oss vise deg hvordan AI kan ta over innboksen din uten at du mister kontrollen.
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

