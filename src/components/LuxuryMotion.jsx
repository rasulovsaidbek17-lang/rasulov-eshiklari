import { useEffect, useState } from 'react'

export default function LuxuryMotion({ brand = 'RGI', replayKey = null }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(() => setLoaded(true), reduceMotion ? 0 : 950)
    return () => {
      window.clearTimeout(timer)
    }
  }, [replayKey])

  return (
    <LuxuryLoader brand={brand} completed={loaded} />
  )
}

export function LuxuryLoader({ brand = 'RGI', completed = false }) {
  return (
    <div className={`luxury-loader ${completed ? 'is-complete' : ''}`} aria-hidden="true">
      <div className="loader-ring" />
      <div className="loader-mark"><span>{brand}</span><i /><small>{brand === 'ESHIKLAR OLAMI' ? 'DOOR COLLECTION' : 'INTERIOR OBJECTS'}</small></div>
      <p></p>
      <div className="loader-progress"><span /></div>
    </div>
  )
}
