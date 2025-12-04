import { MetadataRoute } from 'next'

// Revalidate every hour to include new blog posts
export const revalidate = 3600

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ailabben.no'

  let blogPages: MetadataRoute.Sitemap = []
  
  try {
    // Only try to connect to Supabase if env vars are available
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const { createClient } = await import('@supabase/supabase-js')
      
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      )

      const { data: posts } = await supabase
        .from('blogginnlegg')
        .select('slug, dato, created_at')
        .eq('publisert', true)

      blogPages = posts?.map(post => ({
        url: `${baseUrl}/blogg/${post.slug}`,
        lastModified: new Date(post.created_at),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })) || []
    }
  } catch (error) {
    console.warn('Could not fetch blog posts for sitemap:', error)
    // Continue with empty blog pages array
  }

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified?.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}

