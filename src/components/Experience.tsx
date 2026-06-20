import { useState } from 'react'
import Section from './Section'
import { experience } from '../data'

interface Props {
  selectedSkills: Set<string>
  onMatchCount: (n: number) => void
}

export default function Experience({ selectedSkills, onMatchCount }: Props) {
  const [open, setOpen] = useState(true)

  const filtered = experience.map(job => ({
    job,
    visible:
      selectedSkills.size === 0 ||
      job.skills.some(s => selectedSkills.has(s)),
  }))

  const visibleCount = filtered.filter(f => f.visible).length
  setTimeout(() => onMatchCount(visibleCount), 0)

  return (
    <Section id="experience">
      <button className="section-heading" onClick={() => setOpen(o => !o)}>
        Relevant Work Experience
        {selectedSkills.size > 0 && (
          <span className="ml-2 text-sm font-normal" style={{ color: 'var(--muted)' }}>
            ({visibleCount}/{experience.length})
          </span>
        )}
        <span className={`collapse-arrow ${open ? 'open' : 'closed'}`}>⏶</span>
      </button>

      {open && (
        <div>
          {filtered.map(({ job, visible }) => (
            <div key={job.title} className={`card-hacker ${!visible ? 'dimmed' : ''}`}>
              <h5 className="font-bold" style={{ color: 'var(--accent)' }}>
                {job.title}
              </h5>
              <p className="text-sm mb-1" style={{ color: 'var(--muted)' }}>
                {job.org} · {job.period}
              </p>
              {job.github && (
                <a href={job.github} target="_blank" rel="noopener noreferrer" className="text-sm">
                  GitHub ↗
                </a>
              )}
              <p className="text-xs mt-1 mb-3" style={{ color: 'var(--accent-green)' }}>
                {job.skills.join(' · ')}
              </p>
              {job.subsections.map((sub, i) => (
                <div key={i}>
                  {sub.heading && (
                    <h6 className="font-semibold mt-2 mb-1" style={{ color: 'var(--text)' }}>
                      {sub.heading}
                    </h6>
                  )}
                  <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: 'var(--text)' }}>
                    {sub.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}
