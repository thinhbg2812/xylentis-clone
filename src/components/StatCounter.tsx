import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  value: string
  label: string
  suffix?: string
}

export default function StatCounter({ value, label, suffix }: StatCounterProps) {
  const [display, setDisplay] = useState(value)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true
          // Extract numeric part
          const numMatch = value.match(/[\d.]+/)
          if (numMatch) {
            const target = parseFloat(numMatch[0])
            const prefix = value.slice(0, value.indexOf(numMatch[0]))
            const suffixPart = value.slice(
              value.indexOf(numMatch[0]) + numMatch[0].length,
            )
            const duration = 1500
            const start = performance.now()

            const animate = (now: number) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              // Ease out cubic
              const eased = 1 - Math.pow(1 - progress, 3)
              const current = target * eased

              if (target % 1 === 0) {
                setDisplay(`${prefix}${Math.round(current)}${suffixPart}`)
              } else {
                setDisplay(
                  `${prefix}${current.toFixed(1)}${suffixPart}`,
                )
              }

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setDisplay(value)
              }
            }

            requestAnimationFrame(animate)
          }
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl font-bold text-[var(--lagoon-deep)] sm:text-3xl">
        {display}
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="mt-1 text-xs font-medium text-[var(--sea-ink-soft)]">
        {label}
      </div>
    </div>
  )
}
