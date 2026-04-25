import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Reveal } from "@/components/reveal"
import { Spotlight } from "@/components/spotlight"

export const metadata: Metadata = {
  title: "Blogg - AI-innsikter og tips for bedrifter",
  description:
    "Les våre artikler om AI, automatisering og hvordan teknologi kan hjelpe din bedrift.",
}

export const revalidate = 120

async function getBlogPosts() {
  const { data, error } = await supabase
    .from('blogginnlegg')
    .select('id, slug, tittel, ingress, dato, created_at, featured_image')
    .eq('publisert', true)
    .order('dato', { ascending: false })

  if (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }

  return data || []
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('nb-NO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <>
      <Breadcrumbs />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 hero-grid" aria-hidden="true" />
        <Spotlight />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-0 pointer-events-none" aria-hidden="true" />

        <div className="container relative">
          <Reveal>
            <p className="eyebrow eyebrow-line mb-6">Journal</p>
            <h1 className="font-display text-display-xl text-paper-0 leading-[0.95] tracking-[-0.04em] max-w-5xl">
              Innsikter
              <br />
              <span className="shimmer-text">fra studioet.</span>
            </h1>
            <p className="mt-10 text-lg sm:text-xl text-paper-2 leading-relaxed max-w-2xl">
              Følg med på trender innen AI og automatisering, og lær hvordan
              teknologi kan transformere din bedrift.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Liste */}
      <section className="py-24 border-t border-ink-3">
        <div className="container">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="eyebrow mb-4">Ingen innlegg ennå</p>
              <p className="text-paper-2">
                Kom tilbake senere for spennende artikler om AI og automatisering.
              </p>
            </div>
          ) : (
            <div className="border-t border-ink-3">
              {posts.map((post, idx) => (
                <Reveal key={post.id} delay={idx * 0.04}>
                  <Link
                    href={`/blogg/${post.slug}`}
                    className="group block border-b border-ink-3 py-10 hover:bg-ink-1/40 transition-colors -mx-6 px-6"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                      <div className="lg:col-span-2">
                        <p className="eyebrow">{formatDate(post.dato)}</p>
                      </div>

                      {post.featured_image && (
                        <div className="lg:col-span-3 lg:order-3">
                          <div className="relative w-full aspect-[4/3] overflow-hidden bg-ink-1">
                            <Image
                              src={post.featured_image}
                              alt={post.tittel}
                              fill
                              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                              sizes="(max-width: 1024px) 100vw, 25vw"
                            />
                          </div>
                        </div>
                      )}

                      <div className={post.featured_image ? "lg:col-span-7" : "lg:col-span-10"}>
                        <h2 className="font-display text-2xl sm:text-3xl text-paper-0 leading-tight tracking-tight group-hover:text-paper-0">
                          {post.tittel}
                        </h2>
                        <p className="mt-4 text-paper-2 leading-relaxed line-clamp-3 max-w-2xl">
                          {post.ingress}
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 text-sm text-paper-2 group-hover:text-paper-0 transition-colors">
                          <span>Les artikkel</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}

          {/* CTA */}
          <Reveal>
            <div className="mt-32 border border-ink-3 bg-ink-1 p-10 lg:p-16">
              <p className="eyebrow eyebrow-line mb-6">Klar for noe konkret?</p>
              <h2 className="font-display text-display-md text-paper-0 leading-[1.05] max-w-2xl">
                Interessert i AI
                <br />
                <span className="text-paper-3">for din bedrift?</span>
              </h2>
              <p className="mt-6 text-lg text-paper-2 max-w-xl">
                Ikke vent på at konkurrentene skal komme først. La oss vise deg
                hvordan AI kan gi din bedrift et forsprang.
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
      </section>
    </>
  )
}
