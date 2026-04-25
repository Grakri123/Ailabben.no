'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import {
  Search,
  Home,
  Sparkles,
  Users,
  FileText,
  Mail,
  Phone,
  ArrowUpRight,
  Code,
  TrendingUp,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type CommandItem = {
  id: string
  label: string
  group: string
  icon: React.ComponentType<{ className?: string }>
  href?: string
  external?: boolean
  action?: () => void
  keywords?: string
}

const ITEMS: CommandItem[] = [
  // Naviger
  { id: 'home', label: 'Hjem', group: 'Naviger', icon: Home, href: '/', keywords: 'forside start' },
  { id: 'services', label: 'Hva vi gjør', group: 'Naviger', icon: Sparkles, href: '/hva-vi-gjor', keywords: 'tjenester produkter' },
  { id: 'about', label: 'Om oss', group: 'Naviger', icon: Users, href: '/om-oss', keywords: 'team historie' },
  { id: 'blog', label: 'Blogg', group: 'Naviger', icon: FileText, href: '/blogg', keywords: 'artikler innsikter' },
  { id: 'contact', label: 'Kontakt', group: 'Naviger', icon: Mail, href: '/kontakt', keywords: 'kontakt skjema melding' },

  // Produkter
  { id: 'autoseo-site', label: 'AutoSEO – autoseo.no', group: 'Produkter', icon: TrendingUp, href: 'https://www.autoseo.no', external: true, keywords: 'seo blogg innhold ekstern' },
  { id: 'autoseo', label: 'AutoSEO – produktside', group: 'Produkter', icon: FileText, href: '/autoseo', keywords: 'seo blogg innhold les mer' },
  { id: 'leadforge', label: 'LeadFORGE', group: 'Produkter', icon: Users, href: '/leadforge', keywords: 'b2b leads prospektering generator' },
  { id: 'custom', label: 'Skreddersydd utvikling', group: 'Produkter', icon: Code, href: '/skreddersydd-utvikling', keywords: 'tilpasset bygg' },

  // Direkte handlinger
  { id: 'call', label: 'Ring oss – 95 11 76 49', group: 'Handlinger', icon: Phone, href: 'tel:+4795117649', external: true },
  { id: 'email', label: 'Send e-post – kristian@ailabben.no', group: 'Handlinger', icon: Mail, href: 'mailto:kristian@ailabben.no', external: true },
]

const OPEN_EVENT = 'ailabben:open-command-palette'

export function openCommandPalette() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(OPEN_EVENT))
  }
}

interface CommandPaletteProps {
  /**
   * Når brukt med children opptrer komponenten som en trigger-wrapper:
   * et klikk på children åpner paletten. Uten children mounter vi kun
   * den globale lytteren + selve dialogen (én instans i layout).
   */
  children?: React.ReactNode
}

export function CommandPalette({ children }: CommandPaletteProps) {
  const isTrigger = !!children

  if (isTrigger) {
    return (
      <button
        type="button"
        onClick={openCommandPalette}
        className="contents"
        aria-label="Åpne kommandopalett"
      >
        {children}
      </button>
    )
  }

  return <CommandPaletteRoot />
}

function CommandPaletteRoot() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    const onCustom = () => setOpen(true)

    window.addEventListener('keydown', onKey)
    window.addEventListener(OPEN_EVENT, onCustom as EventListener)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener(OPEN_EVENT, onCustom as EventListener)
    }
  }, [])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
      setActiveIndex(0)
    }
  }, [open])

  const filtered = ITEMS.filter((item) => {
    const q = query.toLowerCase().trim()
    if (!q) return true
    return (
      item.label.toLowerCase().includes(q) ||
      item.group.toLowerCase().includes(q) ||
      (item.keywords?.toLowerCase().includes(q) ?? false)
    )
  })

  const grouped = filtered.reduce<Record<string, CommandItem[]>>((acc, item) => {
    if (!acc[item.group]) acc[item.group] = []
    acc[item.group].push(item)
    return acc
  }, {})

  const flatList = Object.values(grouped).flat()

  const runItem = useCallback((item: CommandItem) => {
    setOpen(false)
    if (item.action) {
      item.action()
      return
    }
    if (item.href) {
      if (item.external) {
        window.open(item.href, '_blank', 'noopener,noreferrer')
      } else {
        router.push(item.href)
      }
    }
  }, [router])

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, flatList.length - 1))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    }
    if (e.key === 'Enter') {
      e.preventDefault()
      const item = flatList[activeIndex]
      if (item) runItem(item)
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-4"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Kommandopalett"
    >
      <div className="absolute inset-0 bg-ink-0/80 backdrop-blur-md animate-fade-in" />

      <div
        className="relative w-full max-w-xl bg-ink-1 border border-ink-4 rounded-md shadow-2xl overflow-hidden animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 border-b border-ink-3">
          <Search className="w-4 h-4 text-paper-3 flex-shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActiveIndex(0)
            }}
            onKeyDown={onKeyDown}
            placeholder="Søk eller gå til..."
            className="flex-1 h-12 bg-transparent text-paper-0 placeholder:text-paper-3 focus:outline-none text-sm"
          />
          <kbd className="hidden sm:block text-[10px] font-mono uppercase tracking-wider text-paper-3 border border-ink-3 rounded px-1.5 py-0.5">
            Esc
          </kbd>
        </div>

        <div className="max-h-[50vh] overflow-y-auto py-2">
          {Object.keys(grouped).length === 0 ? (
            <div className="px-6 py-12 text-center text-paper-3 text-sm">
              Ingen treff for &ldquo;{query}&rdquo;
            </div>
          ) : (
            Object.entries(grouped).map(([group, items]) => (
              <div key={group} className="py-1">
                <div className="px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-paper-3">
                  {group}
                </div>
                {items.map((item) => {
                  const flatIdx = flatList.indexOf(item)
                  const isActive = flatIdx === activeIndex
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => runItem(item)}
                      onMouseEnter={() => setActiveIndex(flatIdx)}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                        isActive
                          ? 'bg-ink-3 text-paper-0'
                          : 'text-paper-1 hover:bg-ink-2'
                      )}
                    >
                      <Icon className="w-4 h-4 text-paper-3 flex-shrink-0" />
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.external && (
                        <ArrowUpRight className="w-3.5 h-3.5 text-paper-3" />
                      )}
                    </button>
                  )
                })}
              </div>
            ))
          )}
        </div>

        <div className="border-t border-ink-3 px-4 py-2 flex items-center justify-between text-[10px] text-paper-3 font-mono uppercase tracking-wider">
          <div className="flex items-center gap-3">
            <span><kbd className="border border-ink-3 rounded px-1 mr-1">↑↓</kbd>naviger</span>
            <span><kbd className="border border-ink-3 rounded px-1 mr-1">↵</kbd>velg</span>
          </div>
          <span>AI Labben</span>
        </div>
      </div>
    </div>
  )
}
