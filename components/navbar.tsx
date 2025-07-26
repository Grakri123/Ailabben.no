'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Hjem", href: "/" },
  { name: "Hva vi gjør", href: "/hva-vi-gjor" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Blogg", href: "/blogg" },
  { name: "Kontakt", href: "/kontakt" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200",
      isScrolled 
        ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40" 
        : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">AI Labben</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-orange-600",
                pathname === item.href
                  ? "text-orange-600"
                  : "text-foreground/80"
              )}

            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild>
            <Link href="/kontakt">Få en demo</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block text-sm font-medium transition-colors hover:text-orange-600",
                  pathname === item.href
                    ? "text-orange-600"
                    : "text-foreground/80"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3">
              <Button asChild className="w-full">
                <Link href="/kontakt">Få en demo</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
} 