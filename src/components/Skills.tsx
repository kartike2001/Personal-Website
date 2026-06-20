import { useState } from 'react'
import Section from './Section'
import { skillCategories } from '../data'

interface Props {
  selectedSkills: Set<string>
  onToggleSkill: (key: string) => void
  onClear: () => void
}

export default function Skills({ selectedSkills, onToggleSkill, onClear }: Props) {
  const [open, setOpen] = useState(true)
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null)

  const handleSkillClick = (key: string, hasInfo: boolean) => {
    onToggleSkill(key)
    if (hasInfo) {
      setExpandedSkill(prev => (prev === key ? null : key))
    }
  }

  return (
    <Section id="skills">
      <button className="section-heading" onClick={() => setOpen(o => !o)}>
        Skills
        <span className={`collapse-arrow ${open ? 'open' : 'closed'}`}>⏶</span>
      </button>

      {open && (
        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map(cat => (
            <div key={cat.label} className="skill-box">
              <h5 className="font-bold mb-3 text-center" style={{ color: 'var(--accent)' }}>
                {cat.label}
              </h5>
              <ul className="space-y-1">
                {cat.items.map(skill => {
                  const isSelected = selectedSkills.has(skill.key)
                  const isExpanded = expandedSkill === skill.key
                  return (
                    <li key={skill.key}>
                      <button
                        className={`skill-item w-full justify-center ${isSelected ? 'active' : ''}`}
                        style={{ color: isSelected ? 'var(--accent)' : 'var(--text)' }}
                        onClick={() => handleSkillClick(skill.key, !!skill.info)}
                      >
                        <span>{skill.name}</span>
                        {skill.info && (
                          <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>
                            {isExpanded ? '⇑' : '⇓'}
                          </span>
                        )}
                      </button>
                      {skill.info && isExpanded && (
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
        <p className="mt-4 text-sm" style={{ color: 'var(--muted)' }}>
          Filtering by:{' '}
          <span style={{ color: 'var(--accent)' }}>
            {[...selectedSkills].join(', ')}
          </span>
          {' — '}
          <button
            className="underline hover:no-underline"
            style={{ color: 'var(--hover)' }}
            onClick={onClear}
          >
            clear
          </button>
        </p>
      )}
    </Section>
  )
}
