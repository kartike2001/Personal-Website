import { useState, useEffect, useRef } from 'react'

export function useTypingAnimation(phrases: string[], typingSpeed = 50, deletingSpeed = 35, pauseMs = 1200) {
  const [displayed, setDisplayed] = useState('')
  const phraseIndex = useRef(0)
  const charIndex = useRef(0)
  const isDeleting = useRef(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function tick() {
      const phrase = phrases[phraseIndex.current]

      if (isDeleting.current) {
        charIndex.current--
        setDisplayed(phrase.substring(0, charIndex.current))
        if (charIndex.current === 0) {
          isDeleting.current = false
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length
          timer = setTimeout(tick, pauseMs)
          return
        }
        timer = setTimeout(tick, deletingSpeed)
      } else {
        charIndex.current++
        setDisplayed(phrase.substring(0, charIndex.current))
        if (charIndex.current === phrase.length) {
          isDeleting.current = true
          timer = setTimeout(tick, pauseMs)
          return
        }
        timer = setTimeout(tick, typingSpeed)
      }
    }

    timer = setTimeout(tick, pauseMs)
    return () => clearTimeout(timer)
  }, [phrases, typingSpeed, deletingSpeed, pauseMs])

  return displayed
}
