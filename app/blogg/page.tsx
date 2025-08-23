import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { supabase } from "@/lib/supabase"

export const metadata: Metadata = {
  title: "Blogg - AI-innsikter og tips for bedrifter",
  description: "Les våre artikler om AI, automatisering og hvordan teknologi kan hjelpe din bedrift.",
}

// Revalidate the page every 2 minutes for faster blog updates
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
    <div className="py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              <span className="gradient-text">AI-innsikter</span> og tips
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Følg med på de siste trendene innen AI og automatisering, 
              og lær hvordan teknologi kan transformere din bedrift.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">
                Ingen blogginnlegg publisert ennå.
              </p>
              <p className="text-sm text-gray-500">
                Kom tilbake senere for spennende artikler om AI og automatisering!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Card 
                  key={post.id} 
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Featured Image */}
                  {post.featured_image && (
                    <div className="relative w-full h-48 bg-gray-100">
                      <Image
                        src={post.featured_image}
                        alt={post.tittel}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar size={16} className="mr-2" />
                      {formatDate(post.dato)}
                    </div>
                    <CardTitle className="text-xl line-clamp-2">
                      {post.tittel}
                    </CardTitle>
                    <CardDescription className="text-base line-clamp-3">
                      {post.ingress}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" asChild className="p-0 h-auto">
                      <Link href={`/blogg/${post.slug}`}>
                        Les mer
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">
                Interessert i AI for din bedrift?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Ikke vent på at konkurrentene skal komme først. 
                La oss vise deg hvordan AI kan gi din bedrift et forsprang.
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
    </div>
  )
} 