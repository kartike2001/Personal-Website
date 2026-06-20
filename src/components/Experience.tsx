import { useState } from 'react'
import Section from './Section'
import SectionHeading from './SectionHeading'
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
      <SectionHeading
        cmd="cat"
        arg="experience.log"
        open={open}
        onToggle={() => setOpen(o => !o)}
        badge={selectedSkills.size > 0 ? `${visibleCount}/${experience.length}` : undefined}
      />

      {open && (
        <div>
          {filtered.map(({ job, visible }) => (
            <div
              key={job.title}
              className={`card-hacker ${!visible ? 'dimmed' : ''} ${visible && selectedSkills.size > 0 ? 'matched' : ''}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h5 className="card-title">{job.title}</h5>
                {job.github && (
                  <a href={job.github} target="_blank" rel="noopener noreferrer" className="link-ext">
                    github ↗
                  </a>
                )}
              </div>
              <p className="card-meta mt-0.5 mb-2.5">
                {job.org} · {job.period}
              </p>
              <div className="chip-row mb-3.5">
                {job.skills.map(s => (
                  <span key={s} className={`chip ${selectedSkills.has(s) ? 'lit' : ''}`}>{s}</span>
                ))}
              </div>
              {job.subsections.map((sub, i) => (
                <div key={i}>
                  {sub.heading && (
                    <h6 className="eyebrow mt-3 mb-1.5">{sub.heading}</h6>
                  )}
                  <ul className="term-list" style={{ color: 'var(--text)' }}>
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
