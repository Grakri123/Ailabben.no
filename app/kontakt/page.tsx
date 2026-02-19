import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Kontakt AI Labben – Produktstudioet bak AutoSEO og Lead Generator",
  description: "Kontakt AI Labben for å lære mer om våre produkter eller for å diskutere et skreddersydd AI-prosjekt. Ring 95 11 76 49 eller send oss en melding.",
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs />
      <div className="py-20">
        <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              La oss <span className="gradient-text">snakke sammen</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enten du vil vite mer om AutoSEO på autoseo.no, Lead Generator som kommer, eller ønsker å 
              diskutere et skreddersydd AI-prosjekt – vi vil gjerne høre fra deg.
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
                        Snakk direkte med oss om produktene eller prosjektet ditt
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
                  <li>✅ Gratis samtale om ditt behov eller produktidé</li>
                  <li>✅ Presentasjon av AutoSEO eller innblikk i hva som kommer med Lead Generator</li>
                  <li>✅ Konkrete innspill til et skreddersydd AI-prosjekt</li>
                  <li>✅ Transparent prising uten skjulte kostnader</li>
                  <li>✅ Profesjonell oppfølging gjennom hele prosessen</li>
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
    </>
  )
} 