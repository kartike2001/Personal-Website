import { useState } from 'react'
import Section from './Section'
import SectionHeading from './SectionHeading'

const CONTACTS = [
  { cmd: 'mail', label: 'kartike2001@gmail.com', href: 'mailto:kartike2001@gmail.com' },
  { cmd: 'ssh', label: 'linkedin.com/in/kartike2001', href: 'https://www.linkedin.com/in/kartike2001/' },
  { cmd: 'git', label: 'github.com/kartike2001', href: 'https://github.com/kartike2001' },
]

export default function Contact() {
  const [open, setOpen] = useState(true)

  return (
    <Section id="contact">
      <SectionHeading cmd="./contact" open={open} onToggle={() => setOpen(o => !o)} />

      {open && (
        <div className="terminal" style={{ maxWidth: '640px' }}>
          <div className="terminal-bar">
            <span className="term-dot r" />
            <span className="term-dot y" />
            <span className="term-dot g" />
            <span className="term-title">reach me</span>
          </div>
          <div className="terminal-body space-y-2.5">
            {CONTACTS.map(c => (
              <p key={c.href}>
                <span className="tprompt">$</span>{' '}
                <span style={{ color: 'var(--prompt)' }}>{c.cmd}</span>{' '}
                <a href={c.href} target="_blank" rel="noopener noreferrer">{c.label}</a>
              </p>
            ))}
            <p style={{ color: 'var(--muted)' }}>
              <span className="caret">{' '}</span>
            </p>
          </div>
        </div>
      )}
    </Section>
  )
}
