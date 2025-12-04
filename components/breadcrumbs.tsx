'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { getBreadcrumbs, generateBreadcrumbSchema } from "@/lib/breadcrumbs"

interface BreadcrumbsProps {
  customTitle?: string
  className?: string
}

export function Breadcrumbs({ customTitle, className = "" }: BreadcrumbsProps) {
  const pathname = usePathname()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ailabben.no'
  
  const breadcrumbs = getBreadcrumbs(pathname, customTitle)
  const schema = generateBreadcrumbSchema(breadcrumbs, baseUrl)

  // Ikke vis breadcrumbs på forsiden
  if (pathname === '/') {
    return null
  }

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className={`bg-gray-50 border-b border-gray-200 ${className}`}>
        <div className="container py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1
              const isFirst = index === 0

              return (
                <li key={item.path} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true" />
                  )}
                  
                  {isLast ? (
                    <span className="text-gray-900 font-medium" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.path}
                      className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-1"
                    >
                      {isFirst && <Home className="w-4 h-4" aria-hidden="true" />}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}

