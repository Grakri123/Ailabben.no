import { MetadataRoute } from 'next'

// Revalidate sitemap every hour to include new blog posts
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ailabben.no'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/om-oss`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hva-vi-gjor`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogg`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // Tjenestesider
    {
      url: `${baseUrl}/ai-epost-kundeservice`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-chatbot-salgsassistent`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ]

  // Try to get blog posts from Supabase, but handle gracefully if env vars are missing
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

  return [...staticPages, ...blogPages]
} 