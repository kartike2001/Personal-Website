import { useState } from 'react'
import Section from './Section'
import SectionHeading from './SectionHeading'
import { projects } from '../data'

interface Props {
  selectedSkills: Set<string>
  onMatchCount: (n: number) => void
}

export default function Projects({ selectedSkills, onMatchCount }: Props) {
  const [open, setOpen] = useState(true)

  const filtered = projects.map(proj => ({
    proj,
    visible:
      selectedSkills.size === 0 ||
      proj.skills.some(s => selectedSkills.has(s)),
  }))

  const visibleCount = filtered.filter(f => f.visible).length
  setTimeout(() => onMatchCount(visibleCount), 0)

  return (
    <Section id="projects">
      <SectionHeading
        cmd="ls"
        arg="~/projects"
        open={open}
        onToggle={() => setOpen(o => !o)}
        badge={selectedSkills.size > 0 ? `${visibleCount}/${projects.length}` : undefined}
      />

      {open && (
        <div>
          {filtered.map(({ proj, visible }) => (
            <div
              key={proj.title}
              className={`card-hacker ${!visible ? 'dimmed' : ''} ${visible && selectedSkills.size > 0 ? 'matched' : ''}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h5 className="card-title">{proj.title}</h5>
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="link-ext">
                    github ↗
                  </a>
                )}
              </div>
              <div className="chip-row mt-2 mb-3.5">
                {proj.skills.map(s => (
                  <span key={s} className={`chip ${selectedSkills.has(s) ? 'lit' : ''}`}>{s}</span>
                ))}
              </div>
              <ul className="term-list" style={{ color: 'var(--text)' }}>
                {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}
