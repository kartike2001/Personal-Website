import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react'

const SCRAMBLE_CHARS = '!<>-_\\/[]{}=+*^?#@%01'

interface Props {
  text: string
  className?: string
  style?: CSSProperties
  /** ms to wait before the intro decrypt starts (sync with reveal) */
  startDelay?: number
}

/**
 * Renders text that "decrypts" out of random characters — settling each glyph
 * at a slightly different frame. Runs once on mount and again on hover.
 * Width is preserved throughout (every slot always shows a glyph), so a
 * multi-line name never reflows mid-animation. Honors reduced-motion.
 */
export default function ScrambleText({ text, className, style, startDelay = 0 }: Props) {
  const [display, setDisplay] = useState(text)
  const rafRef = useRef<number>()
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const run = useCallback(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(text)
      return
    }
    cancelAnimationFrame(rafRef.current!)
    // each non-space glyph settles to its real value at a randomized frame
    const queue = text.split('').map(char => ({
      char,
      end: char === ' ' ? 0 : Math.floor(Math.random() * 22) + 8,
    }))
    let frame = 0
    const tick = () => {
      let out = ''
      let settled = 0
      for (const q of queue) {
        if (q.char === ' ') { out += ' '; settled++; continue }
        if (frame >= q.end) { out += q.char; settled++ }
        else out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
      }
      setDisplay(out)
      frame++
      if (settled < queue.length) rafRef.current = requestAnimationFrame(tick)
      else setDisplay(text)
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [text])

  useEffect(() => {
    timeoutRef.current = setTimeout(run, startDelay)
    return () => {
      clearTimeout(timeoutRef.current)
      cancelAnimationFrame(rafRef.current!)
    }
  }, [run, startDelay])

  return (
    <span className={className} style={{ ...style, cursor: 'default' }} onMouseEnter={run} aria-label={text}>
      {display}
    </span>
  )
}
