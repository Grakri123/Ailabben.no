// Sitemap index that points to all sub-sitemaps
export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ailabben.no'

  return [
    {
      url: `${baseUrl}/sitemap-pages.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-blog.xml`,
      lastModified: new Date(),
    },
  ]
} 