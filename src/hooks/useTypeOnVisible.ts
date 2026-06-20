import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

/**
 * Types `text` out one character at a time the first time the returned ref
 * scrolls into view — so each section heading "executes" as you reach it.
 * Honors reduced-motion (shows the full text immediately).
 */
export function useTypeOnVisible(text: string, speed = 45) {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  })
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!inView || done) return

    let timer: ReturnType<typeof setTimeout>
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      setTyped(text)
      setDone(true)
      return
    }

    let i = 0
    const tick = () => {
      i++
      setTyped(text.slice(0, i))
      if (i >= text.length) {
        setDone(true)
        return
      }
      timer = setTimeout(tick, speed)
    }

    timer = setTimeout(tick, speed)

    return () => {
      clearTimeout(timer)
    }
  }, [done, inView, text, speed])

  return { ref, typed, done }
}
