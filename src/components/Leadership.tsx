import { useState } from 'react'
import Section from './Section'
import SectionHeading from './SectionHeading'
import { leadership } from '../data'

export default function Leadership() {
  const [open, setOpen] = useState(true)

  return (
    <Section id="leadershipexperience">
      <SectionHeading cmd="cat" arg="leadership.log" open={open} onToggle={() => setOpen(o => !o)} />

      {open && (
        <div>
          {leadership.map(role => (
            <div key={role.title} className="card-hacker">
              <h5 className="card-title">{role.title}</h5>
              <p className="card-meta mt-0.5 mb-2.5">
                {role.org} · {role.period}
              </p>
              <div className="chip-row mb-3.5">
                {role.skills.map(s => <span key={s} className="chip">{s}</span>)}
              </div>
              <ul className="term-list" style={{ color: 'var(--text)' }}>
                {role.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}
