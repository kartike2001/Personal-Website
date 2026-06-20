import { useState } from 'react'
import Section from './Section'
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
      <button className="section-heading" onClick={() => setOpen(o => !o)}>
        Projects
        {selectedSkills.size > 0 && (
          <span className="ml-2 text-sm font-normal" style={{ color: 'var(--muted)' }}>
            ({visibleCount}/{projects.length})
          </span>
        )}
        <span className={`collapse-arrow ${open ? 'open' : 'closed'}`}>⏶</span>
      </button>

      {open && (
        <div>
          {filtered.map(({ proj, visible }) => (
            <div key={proj.title} className={`card-hacker ${!visible ? 'dimmed' : ''}`}>
              <h5 className="font-bold" style={{ color: 'var(--accent)' }}>
                {proj.title}
              </h5>
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-sm">
                  GitHub ↗
                </a>
              )}
              <p className="text-xs mt-1 mb-3" style={{ color: 'var(--accent-green)' }}>
                {proj.skills.join(' · ')}
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: 'var(--text)' }}>
                {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}
