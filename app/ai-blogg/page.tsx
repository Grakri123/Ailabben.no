import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { 
  FileText, 
  Search, 
  TrendingUp, 
  Calendar,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Link2,
  Layout,
  BarChart3,
  Sparkles,
  Database,
  Settings,
  Globe,
  PenTool,
  Clock,
  RefreshCw,
  ListChecks,
  BookOpen
} from "lucide-react"

export const metadata: Metadata = {
  title: "AutoSEO – Automatisert SEO-blogg fra AI Labben | autoseo.no",
  description: "AutoSEO er AI Labbens verktøy for fullautomatisert SEO-blogg: keyword-research, pilar- og cluster-artikler, publisering og rapportering. Les mer på www.autoseo.no.",
  keywords: [
    "AutoSEO",
    "autoseo.no",
    "AI blogg",
    "SEO automasjon",
    "AI generert blogginnhold",
    "pilar cluster artikler",
    "keyword research AI",
    "automatisk publisering SEO"
  ],
  openGraph: {
    title: "AutoSEO – Automatisert SEO-blogg fra AI Labben | autoseo.no",
    description: "AutoSEO er AI Labbens verktøy for fullautomatisert SEO-blogg. Les mer på www.autoseo.no.",
  },
}

const problems = [
  {
    icon: Search,
    text: "Keyword-research"
  },
  {
    icon: FileText,
    text: "Pilarinnlegg"
  },
  {
    icon: BookOpen,
    text: "Clusterinnlegg"
  },
  {
    icon: Calendar,
    text: "Publiseringsplan"
  },
  {
    icon: RefreshCw,
    text: "Konsistens"
  }
]

const features = [
  {
    icon: Search,
    title: "Keyword-research",
    description: "Automatisk analyse av søkeord og konkurransesituasjon"
  },
  {
    icon: Target,
    title: "Topic clusters",
    description: "Strukturert planlegging av pilar og støtteartikler"
  },
  {
    icon: PenTool,
    title: "Pilar-/cluster-artikler",
    description: "Generering av høykvalitets SEO-optimalisert innhold"
  },
  {
    icon: Link2,
    title: "Automatisk internlinking",
    description: "Smart lenking mellom artikler for bedre SEO"
  },
  {
    icon: Calendar,
    title: "Publiseringsplan",
    description: "Fast rytme på publisering for kontinuerlig vekst"
  },
  {
    icon: Database,
    title: "Lagring i CMS",
    description: "Direkte publisering til ditt CMS-system"
  }
]

const integrations = [
  { name: "WordPress", icon: Globe },
  { name: "Webflow", icon: Layout },
  { name: "Supabase", icon: Database },
  { name: "Custom CMS", icon: Settings },
  { name: "Google Search Console", icon: BarChart3 },
]

const steps = [
  {
    number: "1",
    title: "AI analyserer søkeord",
    description: "Finner de beste søkeordene for din bransje og målgruppe.",
    icon: Search
  },
  {
    number: "2",
    title: "Lager pilar-plan",
    description: "Strukturerer innhold i pilar og støttende cluster-artikler.",
    icon: ListChecks
  },
  {
    number: "3",
    title: "Genererer artikler",
    description: "Skriver SEO-optimaliserte artikler med riktig struktur og kvalitet.",
    icon: PenTool
  },
  {
    number: "4",
    title: "Publiserer automatisk",
    description: "Legger ut innhold i henhold til publiseringsplanen.",
    icon: Calendar
  },
  {
    number: "5",
    title: "Rapportering i egen portal",
    description: "Full oversikt over publisert innhold og resultater.",
    icon: BarChart3
  }
]

export default function AIBloggPage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 via-blue-50 to-white py-20 sm:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <FileText className="w-4 h-4" />
              Bygget av AI Labben
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-fade-in">
              <span className="gradient-text">AutoSEO</span>
              <br />
              <span className="text-gray-900">– automatisk SEO-blogg som bygger autoritet og rangerer høyt</span>
            </h1>
            
            <p className="text-lg sm:text-xl leading-8 text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              AutoSEO er vårt AI-drevne verktøy for pilar- og cluster-blogging med nøkkelord-analyse og faste intervaller. 
              Gir deg organisk trafikk uten manuelt arbeid. Les mer på{" "}
              <a href="https://www.autoseo.no" className="text-orange-600 font-medium hover:underline" target="_blank" rel="noopener noreferrer">www.autoseo.no</a>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                <a href="https://www.autoseo.no" target="_blank" rel="noopener noreferrer">
                  Gå til autoseo.no
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link href="/kontakt">
                  Kontakt oss
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
                Problemet – innholdsproduksjon tar tid
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                SEO krever:
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
                <span className="font-semibold text-red-700">De fleste SMB klarer ikke holde tempoet.</span>
                <br />
                Uten konsistent innhold forblir nettsiden usynlig i søkemotorene.
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
              Fullautomatisert bloggmaskin
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Systemet gjør alt — du beholder full kontroll og kvalitetssjekk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional feature: Control */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Full kontroll og kvalitetssjekk</h3>
                <p className="text-gray-600">
                  Godkjenn artikler før publisering eller la alt gå automatisk — du bestemmer.
                </p>
              </div>
            </div>
          </div>

          {/* Result highlight */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg">
              <p className="text-xl font-semibold flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Resultatet: Organisk trafikk som vokser måned for måned
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
              Publiserer direkte til ditt CMS-system
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-200 text-center hover:shadow-md hover:border-green-200 transition-all group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-100 transition-colors">
                  <integration.icon className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors" />
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
              Fra keyword-analyse til ferdig publisert innhold
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-green-300 to-blue-300" />
                )}
                
                <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow relative bg-white h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
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
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="container text-center">
          <div className="mx-auto max-w-3xl text-white">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Klar for organisk trafikk på autopilot?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              AutoSEO gir deg en blogg som skaper trafikk automatisk. Les mer på{" "}
              <a href="https://www.autoseo.no" className="underline font-medium hover:opacity-90" target="_blank" rel="noopener noreferrer">autoseo.no</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <a href="https://www.autoseo.no" target="_blank" rel="noopener noreferrer">
                  Gå til autoseo.no
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                <Link href="/kontakt">
                  Kontakt oss
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

