interface Props {
  selectedSkills: Set<string>
  onToggleSkill: (key: string) => void
  onClear: () => void
  matchCounts: { experience: number; projects: number }
}

export default function FilterBar({ selectedSkills, onToggleSkill, onClear, matchCounts }: Props) {
  if (selectedSkills.size === 0) return null

  const total = matchCounts.experience + matchCounts.projects

  return (
    <div
      className="navbar-shell sticky z-40 flex flex-wrap items-center gap-2 px-4 py-2 text-sm"
      style={{
        top: '56px',
        background: 'color-mix(in srgb, var(--surface) 92%, transparent)',
      }}
    >
      <span style={{ color: 'var(--prompt)', fontWeight: 700 }}>$ grep</span>

      {[...selectedSkills].map(skill => (
        <button
          key={skill}
          onClick={() => onToggleSkill(skill)}
          className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium transition-colors"
          style={{ background: 'var(--accent)', color: 'var(--bg)' }}
        >
          {skill} <span aria-hidden>✕</span>
        </button>
      ))}

      <span style={{ color: 'var(--muted)' }}>
        → {total} match{total !== 1 ? 'es' : ''}
        {' '}({matchCounts.experience} exp · {matchCounts.projects} proj)
      </span>

      <button
        onClick={onClear}
        className="ml-auto text-xs underline hover:no-underline"
        style={{ color: 'var(--hover)' }}
      >
        reset
      </button>
    </div>
  )
}
