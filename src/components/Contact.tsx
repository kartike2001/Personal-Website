import { useState } from 'react'
import Section from './Section'

export default function Contact() {
  const [open, setOpen] = useState(true)

  return (
    <Section id="contact">
      <button className="section-heading" onClick={() => setOpen(o => !o)}>
        Contact Me
        <span className={`collapse-arrow ${open ? 'open' : 'closed'}`}>⏶</span>
      </button>

      {open && (
        <ul className="space-y-2 list-disc list-inside" style={{ color: 'var(--text)' }}>
          <li>
            Email:{' '}
            <a href="mailto:kartike2001@gmail.com">
              kartike2001@gmail.com
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/kartike2001/" target="_blank" rel="noopener noreferrer">
              Kartike Chaurasia
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a href="https://github.com/kartike2001" target="_blank" rel="noopener noreferrer">
              kartike2001
            </a>
          </li>
        </ul>
      )}
    </Section>
  )
}
