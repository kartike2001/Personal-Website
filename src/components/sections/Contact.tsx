import { useState } from 'react'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import { contacts } from '../../data'

export default function Contact() {
  const [open, setOpen] = useState(true)

  return (
    <Section id="contact">
      <SectionHeading cmd="./contact" open={open} onToggle={() => setOpen(o => !o)} />

      {open && (
        <div className="terminal contact-terminal">
          <div className="terminal-bar">
            <span className="term-dot r" />
            <span className="term-dot y" />
            <span className="term-dot g" />
            <span className="term-title">reach me</span>
          </div>
          <div className="terminal-body contact-grid">
            {contacts.map(c => (
              <p key={c.href}>
                <span className="tprompt">$</span>{' '}
                <span style={{ color: 'var(--prompt)' }}>{c.cmd}</span>{' '}
                <a href={c.href} target="_blank" rel="noopener noreferrer">{c.label}</a>
              </p>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
