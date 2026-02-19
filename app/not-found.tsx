import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search, Mail, Sparkles } from "lucide-react"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Siden finnes ikke | 404",
  description: "Siden du leter etter finnes ikke. Gå tilbake til forsiden eller utforsk våre tjenester.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section with gradient background */}
      <section className="bg-gradient-to-b from-orange-50 to-purple-50 py-20 sm:py-32 flex-1">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            {/* Large 404 number with gradient */}
            <div className="mb-8">
              <h1 className="text-8xl sm:text-9xl font-bold mb-4">
                <span className="gradient-text">404</span>
              </h1>
            </div>

            {/* Icon decoration */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-200 to-purple-200 rounded-full flex items-center justify-center">
                <Search className="w-10 h-10 text-orange-600" />
              </div>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-gray-900">
              Oops! Siden finnes ikke
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Siden du leter etter kan ha blitt flyttet, slettet eller aldri eksistert. 
              Ikke bekymre deg – la oss hjelpe deg videre!
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/">
                  <Home className="mr-2" size={20} />
                  Gå til forsiden
                </Link>
              </Button>
              <BackButton />
            </div>

            {/* Quick links section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">
                Populære sider
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link 
                  href="/hva-vi-gjor" 
                  className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-200 transition-colors">
                    <Sparkles className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                      Hva vi gjør
                    </div>
                    <div className="text-sm text-gray-600">
                      Våre AI-løsninger
                    </div>
                  </div>
                </Link>
                <Link 
                  href="/kontakt" 
                  className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-200 transition-colors">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                      Kontakt oss
                    </div>
                    <div className="text-sm text-gray-600">
                      Kontakt oss
                    </div>
                  </div>
                </Link>
                <Link 
                  href="/blogg" 
                  className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors">
                    <Search className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                      Blogg
                    </div>
                    <div className="text-sm text-gray-600">
                      Artikler og nyheter
                    </div>
                  </div>
                </Link>
                <Link 
                  href="/om-oss" 
                  className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-200 transition-colors">
                    <Sparkles className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                      Om oss
                    </div>
                    <div className="text-sm text-gray-600">
                      Hvem er vi?
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
