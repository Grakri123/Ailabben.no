'use client'

import { useState, useEffect, useRef } from 'react'

interface TypewriterHeroProps {
  prefix: string
  highlight: string
  speed?: number
  startDelay?: number
}

/**
 * Editorial hero med:
 *  - Typing-effekt på "highlight"-ordet (etter prefix er satt)
 *  - Blinkende cursor mens man skriver
 *  - Når ferdig: cursor blir værende, og shimmer-animasjonen kjører kontinuerlig
 */
export function TypewriterHero({
  prefix,
  highlight,
  speed = 70,
  startDelay = 600,
}: TypewriterHeroProps) {
  const [typed, setTyped] = useState('')
  const [phase, setPhase] = useState<'waiting' | 'typing' | 'done'>('waiting')
  const indexRef = useRef(0)

  useEffect(() => {
    const startTimer = setTimeout(() => setPhase('typing'), startDelay)
    return () => clearTimeout(startTimer)
  }, [startDelay])

  useEffect(() => {
    if (phase !== 'typing') return
    if (indexRef.current >= highlight.length) {
      setPhase('done')
      return
    }
    const t = setTimeout(() => {
      setTyped(highlight.slice(0, indexRef.current + 1))
      indexRef.current += 1
    }, speed + (Math.random() * 50 - 25))
    return () => clearTimeout(t)
  }, [phase, typed, highlight, speed])

  return (
    <h1 className="font-display text-display-xl text-paper-0 leading-[0.95] tracking-[-0.04em]">
      <span className="block">{prefix}</span>
      <span className="block mt-1 sm:mt-2">
        <span className={phase === 'done' ? 'shimmer-text' : 'text-paper-0'}>
          {typed}
        </span>
        <span
          className="tw-cursor inline-block ml-1"
          style={{
            height: '0.85em',
            width: '0.05em',
            verticalAlign: '-0.05em',
            background: '#FAFAFA',
          }}
          aria-hidden="true"
        />
      </span>
    </h1>
  )
}
