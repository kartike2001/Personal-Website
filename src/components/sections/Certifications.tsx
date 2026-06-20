import { useState } from 'react'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import { certifications } from '../../data'

export default function Certifications() {
  const [open, setOpen] = useState(true)

  return (
    <Section id="certifications">
      <SectionHeading cmd="ls" arg="~/certs" open={open} onToggle={() => setOpen(o => !o)} />

      {open && (
        <div className="grid sm:grid-cols-2 gap-2.5">
          {certifications.map(cert => (
            <a
              key={cert.label}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hacker !my-0 flex items-center gap-2.5"
              style={{ padding: '0.7rem 0.95rem' }}
            >
              <span style={{ color: 'var(--prompt)' }}>▸</span>
              <span style={{ color: 'var(--text)' }}>{cert.label}</span>
              <span className="ml-auto" style={{ color: 'var(--accent)', fontSize: '0.78rem' }}>↗</span>
            </a>
          ))}
        </div>
      )}
    </Section>
  )
}
