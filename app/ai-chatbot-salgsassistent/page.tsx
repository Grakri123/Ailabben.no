import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { 
  MessageSquare, 
  ShoppingCart, 
  UserCheck, 
  Clock,
  ArrowRight,
  CheckCircle,
  Zap,
  HelpCircle,
  Search,
  UserX,
  Timer,
  XCircle,
  Sparkles,
  Database,
  Mail,
  Settings,
  Globe,
  Bot,
  Target
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI chatbot / salgsassistent | Aktiv selger 24/7",
  description: "AI-chatboten gir produktforslag, kvalifiserer leads og samler kontaktinfo. Jobber 24/7 for økt konvertering og bedre kundereise.",
  keywords: [
    "AI chatbot salgsassistent",
    "AI salgsassistent 24/7",
    "AI chatbot for nettside",
    "AI produktanbefalinger",
    "automatisert salgsassistent",
    "SMB AI chatbot"
  ],
  openGraph: {
    title: "AI chatbot / salgsassistent | Aktiv selger 24/7",
    description: "AI-chatboten gir produktforslag, kvalifiserer leads og samler kontaktinfo. Jobber 24/7 for økt konvertering og bedre kundereise.",
  },
}

const problems = [
  {
    icon: Search,
    text: "Ikke finner riktig produkt"
  },
  {
    icon: HelpCircle,
    text: "Ikke vet hva de skal velge"
  },
  {
    icon: Timer,
    text: "Ikke får svar raskt"
  },
  {
    icon: UserX,
    text: "Ikke blir fulgt opp"
  }
]

const features = [
  {
    icon: ShoppingCart,
    title: "Produktanbefalinger",
    description: "Gir relevante anbefalinger basert på kundens behov"
  },
  {
    icon: Target,
    title: "Kvalifiserte spørsmål",
    description: "Stiller de riktige spørsmålene for å forstå kunden"
  },
  {
    icon: UserCheck,
    title: "Genererer leads",
    description: "Samler inn leads med relevant informasjon automatisk"
  },
  {
    icon: Database,
    title: "Egen webapp",
    description: "Tar vare på all dialog i din egen private logg"
  },
  {
    icon: Clock,
    title: "Riktig timing",
    description: "Ber om kontaktinfo på det beste tidspunktet"
  },
  {
    icon: Bot,
    title: "Ekte medarbeider",
    description: "Jobber som en ekte selger, ikke en FAQ-bot"
  }
]

const integrations = [
  { name: "WordPress", icon: Globe },
  { name: "Shopify", icon: ShoppingCart },
  { name: "Webflow", icon: Globe },
  { name: "Custom Sites", icon: Settings },
  { name: "Supabase", icon: Database },
  { name: "CRM-systemer", icon: UserCheck },
  { name: "Mailchimp", icon: Mail },
  { name: "HubSpot", icon: Target },
]

const steps = [
  {
    number: "1",
    title: "Besøkende får hjelp i sanntid",
    description: "AI spør, veileder og foreslår produkter tilpasset kundens behov.",
    icon: MessageSquare
  },
  {
    number: "2",
    title: "AI fanger leads",
    description: "Navn, e-post, behov og produkter av interesse samles automatisk.",
    icon: UserCheck
  },
  {
    number: "3",
    title: "Data lagres i egen webapp",
    description: "Du kan følge opp uten å miste informasjon — alt på ett sted.",
    icon: Database
  }
]

export default function AIChatbotSalgsassistentPage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-50 via-orange-50 to-white py-20 sm:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <MessageSquare className="w-4 h-4" />
              AI-drevet salgsassistent
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-fade-in">
              <span className="gradient-text">AI-salgsassistent</span>
              <br />
              <span className="text-gray-900">som jobber for deg 24/7</span>
            </h1>
            
            <p className="text-lg sm:text-xl leading-8 text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              Dette er ikke en vanlig chatbot. Dette er en aktiv salgsassistent som hjelper kunder 
              med å finne riktig produkt, genererer kvalifiserte leads og forbedrer konverteringen på nettsiden.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600">
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
                Problemet – nettsider omsetter dårlig uten hjelp
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Besøkende som...
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
                <span className="font-semibold text-red-700">…forsvinner raskt.</span> Norske nettsider taper enorme verdier 
                fordi de <span className="font-semibold text-red-700">ikke har noen som tar imot kundene</span>.
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
              En AI som faktisk selger
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vår salgsassistent gjør jobben en ekte selger ville gjort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
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
            <div className="inline-block bg-gradient-to-r from-purple-500 to-orange-500 text-white px-8 py-4 rounded-2xl shadow-lg">
              <p className="text-xl font-semibold flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Resultatet: Flere leads, høyere konvertering, fornøyde kunder
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
              Fungerer med de fleste plattformer og verktøy
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-200 text-center hover:shadow-md hover:border-purple-200 transition-all group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-100 transition-colors">
                  <integration.icon className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
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
              Fra besøkende til kvalifisert lead på sekunder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-purple-300 to-orange-300" />
                )}
                
                <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow relative bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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
      <section className="py-20 bg-gradient-to-r from-purple-500 to-orange-500">
        <div className="container text-center">
          <div className="mx-auto max-w-3xl text-white">
            <MessageSquare className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Klar for å øke konverteringen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Se hvordan salgsassistenten kan øke konverteringen på nettsiden din.
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

