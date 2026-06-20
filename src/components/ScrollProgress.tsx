import { useEffect, useState } from 'react'

/**
 * A slim accent bar pinned to the top edge that fills with scroll depth,
 * plus a small [ NN% ] readout in the bottom-left corner.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? doc.scrollTop / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const pct = Math.round(progress * 100)

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="scroll-readout">{`[ ${String(pct).padStart(2, '0')}% ]`}</div>
    </>
  )
}
