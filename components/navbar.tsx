'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, Command } from "lucide-react"
import { CommandPalette } from "@/components/command-palette"

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
  const [isMac, setIsMac] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMac(typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform))
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "bg-ink-0/80 backdrop-blur-xl border-b border-ink-3"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center group">
          <span className="logo-text text-lg sm:text-xl text-paper-0 transition-opacity group-hover:opacity-80">
            AI LABBEN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-200 py-2",
                  isActive
                    ? "text-paper-0"
                    : "text-paper-2 hover:text-paper-0"
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-px left-0 right-0 h-px bg-paper-0" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <CommandPalette>
            <button
              className="inline-flex items-center gap-2 h-9 px-3 rounded-full border border-ink-3 bg-ink-1/60 text-paper-3 hover:text-paper-0 hover:border-ink-5 transition-colors text-xs"
              aria-label="Åpne kommandopalett"
            >
              <Command className="w-3.5 h-3.5" />
              <span className="font-mono tracking-tight">{isMac ? '⌘' : 'Ctrl'} K</span>
            </button>
          </CommandPalette>
          <Button asChild size="sm" className="h-9">
            <Link href="/kontakt">Kontakt oss</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 text-paper-0 rounded-full hover:bg-ink-2 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle meny"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-ink-3 bg-ink-0/95 backdrop-blur-xl">
          <nav className="container py-6 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block text-base font-medium py-3 px-2 transition-colors",
                    isActive
                      ? "text-paper-0"
                      : "text-paper-2 hover:text-paper-0"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                  Kontakt oss
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
