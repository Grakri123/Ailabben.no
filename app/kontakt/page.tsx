import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Kontakt oss - Få en gratis demo av våre AI-løsninger",
  description: "Kontakt AI Labben for en gratis demo av våre AI-agenter. Ring 95 11 76 49 eller send oss en melding.",
}

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              La oss <span className="gradient-text">snakke sammen</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi tilbyr gratis demo og konsultasjon for å finne den AI-løsningen 
              som passer best for din bedrift.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kontaktinformasjon */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Kontaktinformasjon</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Ring oss</h3>
                      <p className="text-gray-600 mb-2">
                        Snakk direkte med en av våre AI-eksperter
                      </p>
                      <a 
                        href="tel:+4795117649"
                        className="text-orange-600 font-medium hover:text-orange-700"
                      >
                        95 11 76 49
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Send e-post</h3>
                      <p className="text-gray-600 mb-2">
                        Vi svarer som regel innen 24 timer
                      </p>
                      <a 
                        href="mailto:kristian@ailabben.no"
                        className="text-orange-600 font-medium hover:text-orange-700"
                      >
                        kristian@ailabben.no
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Lokasjon</h3>
                      <p className="text-gray-600">
                        Basert i Norge<br />
                        Serverer kunder over hele Norden
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Hva du kan forvente:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✅ Gratis konsultasjon og behovsanalyse</li>
                  <li>✅ Demo tilpasset din bransje og utfordringer</li>
                  <li>✅ Konkrete forslag til AI-implementering</li>
                  <li>✅ Transparent prising uten skjulte kostnader</li>
                  <li>✅ Norsk support og oppfølging</li>
                </ul>
              </div>
            </div>

            {/* Kontaktskjema */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send oss en melding</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 