'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
  label: string
  eyebrow?: string
}

export function StatCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 1.4,
  decimals = 0,
  label,
  eyebrow,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(value * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-ink-3 pt-8"
    >
      {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
      <p className="font-display text-display-md text-paper-0 leading-none tabular-nums">
        {prefix}
        {display.toFixed(decimals)}
        {suffix}
      </p>
      <p className="mt-4 text-sm text-paper-2 leading-relaxed max-w-[20ch]">
        {label}
      </p>
    </motion.div>
  )
}

/**
 * Statisk variant for "verdier" som ikke er tall (f.eks. "EU", "GDPR").
 */
export function StatStatic({
  value,
  label,
  eyebrow,
}: {
  value: string
  label: string
  eyebrow?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-ink-3 pt-8"
    >
      {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
      <p className="font-display text-display-md text-paper-0 leading-none">
        {value}
      </p>
      <p className="mt-4 text-sm text-paper-2 leading-relaxed max-w-[20ch]">
        {label}
      </p>
    </motion.div>
  )
}
