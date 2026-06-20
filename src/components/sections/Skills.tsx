import { useState } from 'react'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import { skillCategories } from '../../data'

interface Props {
  selectedSkills: Set<string>
  onToggleSkill: (key: string) => void
  onClear: () => void
}

export default function Skills({ selectedSkills, onToggleSkill, onClear }: Props) {
  const [open, setOpen] = useState(true)

  return (
    <Section id="skills">
      <SectionHeading cmd="ls" arg="~/skills" open={open} onToggle={() => setOpen(o => !o)} />
      <p className="text-sm mb-5" style={{ color: 'var(--muted)' }}>
        Click any skill to filter experience &amp; projects by it.
      </p>

      {open && (
        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map(cat => (
            <div key={cat.label} className="skill-box">
              <h5 className="skill-box-title">{cat.label}</h5>
              <ul className="space-y-1">
                {cat.items.map(skill => {
                  const isSelected = selectedSkills.has(skill.key)
                  return (
                    <li key={skill.key}>
                      <button
                        className={`skill-item ${isSelected ? 'active' : ''}`}
                        onClick={() => onToggleSkill(skill.key)}
                      >
                        <span className="skill-name">{skill.name}</span>
                        {skill.info && (
                          <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>
                            {isSelected ? '−' : '+'}
                          </span>
                        )}
                      </button>
                      {skill.info && isSelected && (
                        <div className="skill-info mt-1">
                          {skill.info}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      )}

      {selectedSkills.size > 0 && (
        <p className="mt-5 text-sm" style={{ color: 'var(--muted)' }}>
          <span className="ph-prompt">$</span> grep{' '}
          <span style={{ color: 'var(--accent)' }}>
            {[...selectedSkills].join(' ')}
          </span>
          {' — '}
          <button
            className="underline hover:no-underline"
            style={{ color: 'var(--accent)' }}
            onClick={() =>
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            jump to matches ↓
          </button>
          {' · '}
          <button
            className="underline hover:no-underline"
            style={{ color: 'var(--hover)' }}
            onClick={onClear}
          >
            reset
          </button>
        </p>
      )}
    </Section>
  )
}
