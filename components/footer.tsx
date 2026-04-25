import Link from "next/link"
import { Mail, Phone, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-ink-0 border-t border-ink-3 mt-32">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Logo og credo */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <span className="logo-text text-xl text-paper-0">AI LABBEN</span>
            </Link>
            <p className="text-paper-2 max-w-md mb-6 leading-relaxed">
              Et lite produktstudio i Norge. Vi bygger AI-drevne digitale produkter
              – egne og skreddersydde – hostet i EU.
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="tel:+4795117649"
                className="inline-flex items-center gap-2 text-paper-2 hover:text-paper-0 transition-colors w-fit group"
              >
                <Phone size={14} />
                <span>95 11 76 49</span>
              </a>
              <a
                href="mailto:kristian@ailabben.no"
                className="inline-flex items-center gap-2 text-paper-2 hover:text-paper-0 transition-colors w-fit group"
              >
                <Mail size={14} />
                <span>kristian@ailabben.no</span>
              </a>
            </div>
          </div>

          {/* Navigasjon */}
          <div className="md:col-span-3">
            <h3 className="eyebrow mb-5">Naviger</h3>
            <ul className="space-y-3 text-sm">
              <FooterLink href="/">Hjem</FooterLink>
              <FooterLink href="/hva-vi-gjor">Hva vi gjør</FooterLink>
              <FooterLink href="/om-oss">Om oss</FooterLink>
              <FooterLink href="/blogg">Blogg</FooterLink>
              <FooterLink href="/kontakt">Kontakt</FooterLink>
            </ul>
          </div>

          {/* Produkter */}
          <div className="md:col-span-4">
            <h3 className="eyebrow mb-5">Produkter</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.autoseo.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-paper-2 hover:text-paper-0 transition-colors group"
                >
                  AutoSEO
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <FooterLink href="/b2b-leads-generator">Lead Generator</FooterLink>
              <FooterLink href="/rag-database">RAG-database</FooterLink>
              <FooterLink href="/skreddersydd-utvikling">Skreddersydd utvikling</FooterLink>
              <FooterLink href="/ai-blogg">AI-blogg</FooterLink>
            </ul>
          </div>
        </div>

        {/* Stort credo */}
        <div className="border-t border-ink-3 pt-16 mb-16">
          <p className="font-display text-display-md text-paper-0 max-w-3xl leading-[0.95] tracking-tight">
            Bygget i Norge.
            <br />
            <span className="text-paper-3">Hostet i EU.</span>
          </p>
        </div>

        {/* Bunn-rad */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-paper-3">
          <p>© {new Date().getFullYear()} Ailabben. Alle rettigheter reservert.</p>
          <div className="flex space-x-6">
            <Link href="/personvern" className="hover:text-paper-0 transition-colors">
              Personvern
            </Link>
            <Link href="/vilkaar" className="hover:text-paper-0 transition-colors">
              Vilkår
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-paper-2 hover:text-paper-0 transition-colors"
      >
        {children}
      </Link>
    </li>
  )
}
