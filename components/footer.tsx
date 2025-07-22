import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo og beskrivelse */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold gradient-text">Ailabben</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Vi bygger skreddersydde AI-agenter for norske bedrifter. 
              Fra resepsjonister til fullautomatisert SEO – trygt og enkelt.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a 
                  href="tel:+4795117649"
                  className="hover:text-orange-600 transition-colors"
                >
                  95 11 76 49
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a 
                  href="mailto:hei@ailabben.no"
                  className="hover:text-orange-600 transition-colors"
                >
                  hei@ailabben.no
                </a>
              </div>
            </div>
          </div>

          {/* Navigasjon */}
          <div>
            <h3 className="font-semibold mb-4">Navigasjon</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-orange-600 transition-colors">
                  Hjem
                </Link>
              </li>
              <li>
                <Link href="/hva-vi-gjor" className="hover:text-orange-600 transition-colors">
                  Hva vi gjør
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="hover:text-orange-600 transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <a 
                  href="https://blogg.ailabben.no" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-600 transition-colors"
                >
                  Blogg
                </a>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-orange-600 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Tjenester */}
          <div>
            <h3 className="font-semibold mb-4">Tjenester</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Resepsjonist-agent</li>
              <li>E-postgenerering</li>
              <li>Leads-innsamling</li>
              <li>SEO automatisering</li>
              <li>Cold calling bots</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Ailabben. Alle rettigheter reservert.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/personvern" className="hover:text-orange-600 transition-colors">
              Personvern
            </Link>
            <Link href="/vilkar" className="hover:text-orange-600 transition-colors">
              Vilkår
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 