import { useEffect, useState } from 'react'

export default function LuxuryMotion() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(() => setLoaded(true), reduceMotion ? 0 : 950)
    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <LuxuryLoader completed={loaded} />
  )
}

export function LuxuryLoader({ completed = false }) {
  return (
    <div className={`luxury-loader ${completed ? 'is-complete' : ''}`} aria-hidden="true">
      <div className="loader-ring" />
      <div className="loader-mark"><span>RGI</span><i /><small>INTERIOR OBJECTS</small></div>
      <p>MAKONINGIZGA XARAKTER BERAMIZ</p>
      <div className="loader-progress"><span /></div>
    </div>
  )
}
