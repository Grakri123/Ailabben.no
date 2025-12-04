import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react"
import { supabase } from "@/lib/supabase"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Breadcrumbs } from "@/components/breadcrumbs"

// Revalidate individual blog posts every 2 minutes for faster updates
export const revalidate = 120

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

async function getBlogPost(slug: string) {
  const { data, error } = await supabase
    .from('blogginnlegg')
    .select('*')
    .eq('slug', slug)
    .eq('publisert', true)
    .single()

  if (error) {
    console.error('Blog post fetch error:', error)
    return null
  }

  if (!data) {
    console.log('No blog post found for slug:', slug)
    return null
  }

  return data
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: "Blogginnlegg ikke funnet",
    }
  }

  return {
    title: post.tittel,
    description: post.ingress,
    openGraph: {
      title: post.tittel,
      description: post.ingress,
      type: 'article',
      publishedTime: post.dato,
      authors: ['AI Labben'],
      images: post.featured_image ? [{
        url: post.featured_image,
        width: 1200,
        height: 630,
        alt: post.tittel,
      }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.tittel,
      description: post.ingress,
      images: post.featured_image ? [post.featured_image] : undefined,
    }
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('nb-NO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.tittel,
    description: post.ingress,
    datePublished: post.dato,
    dateModified: post.created_at,
    author: {
      '@type': 'Organization',
      name: 'AI Labben',
      url: 'https://ailabben.no'
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI Labben',
      url: 'https://ailabben.no'
    },
    ...(post.featured_image && {
      image: {
        '@type': 'ImageObject',
        url: post.featured_image,
        width: 1200,
        height: 630
      }
    })
  }

  return (
    <>
      <Breadcrumbs customTitle={post.tittel} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Back to blog */}
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/blogg">
                  <ArrowLeft className="mr-2" size={16} />
                  Tilbake til bloggen
                </Link>
              </Button>
            </div>

            {/* Featured Image */}
            {post.featured_image && (
              <div className="relative w-full h-64 sm:h-80 lg:h-96 mb-12 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={post.featured_image}
                  alt={post.tittel}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority
                />
              </div>
            )}

            {/* Article header */}
            <header className="mb-12">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar size={16} className="mr-2" />
                {formatDate(post.dato)}
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 leading-tight">
                {post.tittel}
              </h1>
            </header>

            {/* Article content */}
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-orange-600">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.innhold_md}
              </ReactMarkdown>
            </div>

            {/* Call to action */}
            <div className="mt-16 border-t pt-12">
              <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-8 rounded-2xl text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Klar for å implementere AI i din bedrift?
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Vi hjelper bedrifter med å ta i bruk AI-teknologi på en 
                  trygg og effektiv måte. Få en gratis konsultasjon i dag.
                </p>
                <Button asChild size="lg">
                  <Link href="/kontakt">
                    Få en gratis demo
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

// Optional: Generate static params for better performance
export async function generateStaticParams() {
  const { data } = await supabase
    .from('blogginnlegg')
    .select('slug')
    .eq('publisert', true)

  return data?.map(post => ({
    slug: post.slug,
  })) || []
} 