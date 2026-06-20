import { useState } from 'react'
import Section from './Section'
import { leadership } from '../data'

export default function Leadership() {
  const [open, setOpen] = useState(true)

  return (
    <Section id="leadershipexperience">
      <button className="section-heading" onClick={() => setOpen(o => !o)}>
        Leadership Experience
        <span className={`collapse-arrow ${open ? 'open' : 'closed'}`}>⏶</span>
      </button>

      {open && (
        <div>
          {leadership.map(role => (
            <div key={role.title} className="card-hacker">
              <h5 className="font-bold" style={{ color: 'var(--accent)' }}>
                {role.title}
              </h5>
              <p className="text-sm mb-1" style={{ color: 'var(--muted)' }}>
                {role.org} · {role.period}
              </p>
              <p className="text-xs mb-3" style={{ color: 'var(--accent-green)' }}>
                {role.skills.join(' · ')}
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: 'var(--text)' }}>
                {role.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}
