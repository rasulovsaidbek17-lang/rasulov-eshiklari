import { useEffect, useRef } from 'react'

// Adds the `in-view` class to any [data-reveal] descendant once it enters
// the viewport, powering the site's restrained fade-up motion.
export function useReveal(dep = []) {
  const scopeRef = useRef(null)

  useEffect(() => {
    const scope = scopeRef.current
    if (!scope) return
    const items = scope.querySelectorAll('[data-reveal]')
    items.forEach((el) => {
      el.classList.add('reveal')
      el.classList.add(`reveal-${el.dataset.reveal || 'up'}`)
    })
    if (!items.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dep)

  return scopeRef
}
