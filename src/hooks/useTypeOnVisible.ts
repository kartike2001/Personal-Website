import { useEffect, useRef, useState } from 'react'

/**
 * Types `text` out one character at a time the first time the returned ref
 * scrolls into view — so each section heading "executes" as you reach it.
 * Honors reduced-motion (shows the full text immediately).
 */
export function useTypeOnVisible<T extends HTMLElement>(text: string, speed = 45) {
  const ref = useRef<T>(null)
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let timer: ReturnType<typeof setTimeout>
    let started = false
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return
        started = true
        obs.disconnect()
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
      },
      { threshold: 0.6 },
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      clearTimeout(timer)
    }
  }, [text, speed])

  return { ref, typed, done }
}
