export interface BreadcrumbItem {
  name: string
  path: string
}

export const breadcrumbMap: Record<string, string[]> = {
  "/": ["Hjem"],
  "/hva-vi-gjor": ["Hjem", "Hva vi gjør"],
  "/om-oss": ["Hjem", "Om oss"],
  "/kontakt": ["Hjem", "Kontakt"],
  "/blogg": ["Hjem", "Blogg"],
  "/personvern": ["Hjem", "Personvern"],
  "/vilkaar": ["Hjem", "Vilkår og betingelser"],
  // Tjenestesider
  "/b2b-leads-generator": ["Hjem", "Tjenester", "B2B Leads Generator"],
  "/ai-blogg": ["Hjem", "Tjenester", "AI Blogg / SEO-Automatisering"],
  "/rag-database": ["Hjem", "Tjenester", "RAG Database / Privat Bedrifts-AI"],
  "/skreddersydd-utvikling": ["Hjem", "Tjenester", "Skreddersydd Utvikling"],
}

// Mapper breadcrumb navn til paths
export const breadcrumbPathMap: Record<string, string> = {
  "Hjem": "/",
  "Tjenester": "/hva-vi-gjor",
  "Hva vi gjør": "/hva-vi-gjor",
  "Om oss": "/om-oss",
  "Kontakt": "/kontakt",
  "Blogg": "/blogg",
  "Personvern": "/personvern",
  "Vilkår og betingelser": "/vilkaar",
  // Tjenester
  "B2B Leads Generator": "/b2b-leads-generator",
  "AI Blogg / SEO-Automatisering": "/ai-blogg",
  "RAG Database / Privat Bedrifts-AI": "/rag-database",
  "Skreddersydd Utvikling": "/skreddersydd-utvikling",
}

export function getBreadcrumbs(pathname: string, customTitle?: string): BreadcrumbItem[] {
  // For blogginnlegg med custom title
  if (pathname.startsWith('/blogg/') && customTitle) {
    return [
      { name: "Hjem", path: "/" },
      { name: "Blogg", path: "/blogg" },
      { name: customTitle, path: pathname }
    ]
  }

  const breadcrumbNames = breadcrumbMap[pathname] || ["Hjem"]
  
  return breadcrumbNames.map((name, index) => {
    // Siste item får current path
    if (index === breadcrumbNames.length - 1) {
      return { name, path: pathname }
    }
    
    // Andre items får path fra mapping
    const path = breadcrumbPathMap[name] || "/"
    return { name, path }
  })
}

export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[], baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.path}`
    }))
  }
}

