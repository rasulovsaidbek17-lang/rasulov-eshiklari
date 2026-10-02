import { useEffect } from 'react'

export default function ScrollExperience() {
  useEffect(() => {
    let frameId = 0
    const update = () => {
      const root = document.documentElement
      const total = root.scrollHeight - window.innerHeight
      const progress = total > 0 ? window.scrollY / total : 0
      root.style.setProperty('--scroll-progress', progress.toFixed(4))
      root.style.setProperty('--hero-parallax', `${Math.min(window.scrollY * 0.16, 90)}px`)
      frameId = 0
    }
    const onScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span />
    </div>
  )
}
