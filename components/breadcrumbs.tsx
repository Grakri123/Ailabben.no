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

  if (pathname === '/') {
    return null
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav
        aria-label="Breadcrumb"
        className={`bg-ink-0 border-b border-ink-3 ${className}`}
      >
        <div className="container py-4">
          <ol className="flex items-center space-x-1.5 text-xs uppercase tracking-[0.18em]">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1
              const isFirst = index === 0

              return (
                <li key={item.path} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight
                      className="w-3 h-3 text-paper-3 mx-2"
                      aria-hidden="true"
                    />
                  )}

                  {isLast ? (
                    <span className="text-paper-0 font-medium" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.path}
                      className="text-paper-3 hover:text-paper-0 transition-colors flex items-center gap-1.5"
                    >
                      {isFirst && <Home className="w-3 h-3" aria-hidden="true" />}
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
