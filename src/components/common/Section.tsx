import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
import { Element } from 'react-scroll'

interface Props {
  id: string
  children: ReactNode
  className?: string
}

export default function Section({ id, children, className = '' }: Props) {
  const { ref, inView } = useInView({
    threshold: 0.08,
    triggerOnce: true,
  })

  return (
    <Element name={id}>
      <section
        id={id}
        ref={ref}
        className={`section py-12 px-4 ${inView ? 'visible' : ''} ${className}`}
        style={{ scrollMarginTop: '164px' }}
      >
        <div className="max-w-4xl mx-auto">{children}</div>
      </section>
    </Element>
  )
}
