import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
// import { Chatbot } from "@/components/chatbot" // Midlertidig deaktivert

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Skreddersydde AI-agenter for din bedrift | Ailabben",
    template: "%s | Ailabben"
  },
  description: "Fra resepsjonister og epostgenerering til fullautomatisert SEO – vi bygger dine AI-løsninger. Skreddersydd og hostet i EU.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: '64x64' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '64x64', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
  },
  keywords: ["AI-agenter", "kunstig intelligens", "automatisering", "chatbots", "Norge", "SMB", "bedrift"],
  authors: [{ name: "Ailabben" }],
  creator: "Ailabben",
  publisher: "Ailabben",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ailabben.no'),
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://ailabben.no",
    siteName: "Ailabben",
    title: "Skreddersydde AI-agenter for din bedrift",
    description: "Fra resepsjonister og epostgenerering til fullautomatisert SEO – vi bygger dine AI-løsninger",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skreddersydde AI-agenter for din bedrift",
    description: "Fra resepsjonister og epostgenerering til fullautomatisert SEO – vi bygger dine AI-løsninger",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=rJxRYTOoLlEzrwwSHrKJiqxiKsznFzvo0veIWKYELoc', // Legg til riktig verifikasjonskode
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ofa8sxj.css" />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        {/* <Chatbot /> Midlertidig deaktivert */}
        <Analytics />
        
        {/* Schema.org Organization markup */}
        <Script 
          id="schema-organization" 
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ailabben",
            "url": "https://ailabben.no",
            "logo": "https://ailabben.no/images/logos/AI Labben ikon 64x64.svg",
            "description": "Vi bygger skreddersydde AI-agenter for bedrifter. Fra resepsjonister og epostgenerering til fullautomatisert SEO – trygt og enkelt.",
            "email": "kristian@ailabben.no",
            "telephone": "+4795117649",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Disenåvegen 35",
              "addressLocality": "Skarnes",
              "postalCode": "2100",
              "addressCountry": "NO"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+4795117649",
              "email": "kristian@ailabben.no",
              "contactType": "customer service",
              "availableLanguage": ["nb", "no"]
            },
            "sameAs": []
          })}
        </Script>

        <Script
          src="https://chatailabben.ailabben.no/widget.js"
          strategy="afterInteractive"
        />
        <Script id="ai-chatbot-init" strategy="afterInteractive">
          {`AIChatbot.init();`}
        </Script>
      </body>
    </html>
  )
} 