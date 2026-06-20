import { useEffect, useRef, useState, ReactNode } from 'react'

interface Props {
  id: string
  children: ReactNode
  className?: string
}

export default function Section({ id, children, className = '' }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`section py-12 px-4 ${visible ? 'visible' : ''} ${className}`}
    >
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  )
}
