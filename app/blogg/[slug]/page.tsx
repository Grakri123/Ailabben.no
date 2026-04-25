import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { supabase } from "@/lib/supabase"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Reveal } from "@/components/reveal"

export const revalidate = 120

interface BlogPostPageProps {
  params: { slug: string }
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
    return { title: "Blogginnlegg ikke funnet" }
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

  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.tittel,
    description: post.ingress,
    datePublished: post.dato,
    dateModified: post.created_at,
    author: { '@type': 'Organization', name: 'AI Labben', url: 'https://ailabben.no' },
    publisher: { '@type': 'Organization', name: 'AI Labben', url: 'https://ailabben.no' },
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

      <article className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="mb-12">
                <Link
                  href="/blogg"
                  className="inline-flex items-center gap-2 text-sm text-paper-3 hover:text-paper-0 transition-colors group"
                >
                  <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                  <span className="uppercase tracking-[0.18em] text-xs">Tilbake til journal</span>
                </Link>
              </div>

              <header className="mb-16">
                <p className="eyebrow eyebrow-line mb-6">{formatDate(post.dato)}</p>
                <h1 className="font-display text-display-lg text-paper-0 leading-[1.0] tracking-[-0.035em]">
                  {post.tittel}
                </h1>
                {post.ingress && (
                  <p className="mt-8 text-xl text-paper-2 leading-relaxed">
                    {post.ingress}
                  </p>
                )}
              </header>
            </Reveal>

            {post.featured_image && (
              <Reveal delay={0.1}>
                <div className="relative w-full aspect-[16/10] mb-16 overflow-hidden bg-ink-1 border border-ink-3">
                  <Image
                    src={post.featured_image}
                    alt={post.tittel}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                </div>
              </Reveal>
            )}

            <Reveal delay={0.15}>
              <div className="prose-editorial">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.innhold_md}
                </ReactMarkdown>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="mt-24 pt-16 border-t border-ink-3">
                <p className="eyebrow eyebrow-line mb-6">Neste steg</p>
                <h2 className="font-display text-display-md text-paper-0 leading-[1.05] max-w-2xl">
                  Klar for å implementere
                  <br />
                  <span className="text-paper-3">AI i din bedrift?</span>
                </h2>
                <p className="mt-6 text-lg text-paper-2 max-w-xl">
                  Vi hjelper bedrifter med å ta i bruk AI-teknologi på en
                  trygg og effektiv måte. Få en gratis konsultasjon.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/kontakt">
                      Kontakt oss
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </>
  )
}

export async function generateStaticParams() {
  const { data } = await supabase
    .from('blogginnlegg')
    .select('slug')
    .eq('publisert', true)

  return data?.map(post => ({ slug: post.slug })) || []
}
