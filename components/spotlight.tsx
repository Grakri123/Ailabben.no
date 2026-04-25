'use client'

import { useEffect, useRef } from 'react'

/**
 * Subtil radial-gradient som følger musepekeren. Brukes som dekorativ
 * overlay på heroseksjoner. Tegner ingenting på touch-enheter.
 */
export function Spotlight({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty('--mx', `${x}px`)
      el.style.setProperty('--my', `${y}px`)
    }
    const parent = el.parentElement
    parent?.addEventListener('mousemove', handler)
    return () => parent?.removeEventListener('mousemove', handler)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${className}`}
      style={{
        background:
          'radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), rgba(255,255,255,0.06), transparent 40%)',
      }}
    />
  )
}
