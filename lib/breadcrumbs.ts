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
  // Produkter
  "/autoseo": ["Hjem", "Produkter", "AutoSEO"],
  "/leadforge": ["Hjem", "Produkter", "LeadFORGE"],
  "/skreddersydd-utvikling": ["Hjem", "Produkter", "Skreddersydd Utvikling"],
}

export const breadcrumbPathMap: Record<string, string> = {
  "Hjem": "/",
  "Produkter": "/hva-vi-gjor",
  "Hva vi gjør": "/hva-vi-gjor",
  "Om oss": "/om-oss",
  "Kontakt": "/kontakt",
  "Blogg": "/blogg",
  "Personvern": "/personvern",
  "Vilkår og betingelser": "/vilkaar",
  // Produkter
  "AutoSEO": "/autoseo",
  "LeadFORGE": "/leadforge",
  "Skreddersydd Utvikling": "/skreddersydd-utvikling",
}

export function getBreadcrumbs(pathname: string, customTitle?: string): BreadcrumbItem[] {
  if (pathname.startsWith('/blogg/') && customTitle) {
    return [
      { name: "Hjem", path: "/" },
      { name: "Blogg", path: "/blogg" },
      { name: customTitle, path: pathname }
    ]
  }

  const breadcrumbNames = breadcrumbMap[pathname] || ["Hjem"]

  return breadcrumbNames.map((name, index) => {
    if (index === breadcrumbNames.length - 1) {
      return { name, path: pathname }
    }
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
