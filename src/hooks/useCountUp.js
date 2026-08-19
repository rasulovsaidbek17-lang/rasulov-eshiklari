import { useEffect, useRef, useState } from 'react'

// Animates a numeric value from 0 to `end` once the element scrolls into view.
// Used for the About section stats (10+, 500+, 100%) to add a refined,
// professional micro-interaction rather than static numbers.
export function useCountUp(end, { duration = 1400, suffix = '' } = {}) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            // ease-out cubic for a natural deceleration
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(end * eased))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return { ref, display: `${value}${suffix}` }
}
