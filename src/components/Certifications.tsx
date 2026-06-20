import { useState } from 'react'
import Section from './Section'
import { certifications } from '../data'

export default function Certifications() {
  const [open, setOpen] = useState(true)

  return (
    <Section id="certifications">
      <button className="section-heading" onClick={() => setOpen(o => !o)}>
        Certificates &amp; Badges
        <span className={`collapse-arrow ${open ? 'open' : 'closed'}`}>⏶</span>
      </button>

      {open && (
        <ul className="space-y-2 list-disc list-inside" style={{ color: 'var(--text)' }}>
          {certifications.map(cert => (
            <li key={cert.label}>
              <a href={cert.href} target="_blank" rel="noopener noreferrer">
                {cert.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
