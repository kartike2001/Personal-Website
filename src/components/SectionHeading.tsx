import { useTypeOnVisible } from '../hooks/useTypeOnVisible'

interface Props {
  /** the shell command, e.g. "ls" */
  cmd: string
  /** optional argument(s), e.g. "~/skills" */
  arg?: string
  open: boolean
  onToggle: () => void
  /** optional trailing badge (e.g. match count) */
  badge?: string
}

/**
 * Section headings rendered as real shell commands — and they "execute"
 * (type themselves out) the first time they scroll into view.
 *   $ ls ~/skills▌  →  $ ls ~/skills  ▾
 */
export default function SectionHeading({ cmd, arg, open, onToggle, badge }: Props) {
  const full = arg ? `${cmd} ${arg}` : cmd
  const { ref, typed, done } = useTypeOnVisible<HTMLButtonElement>(full)

  const cmdPart = typed.slice(0, cmd.length)
  const argPart = typed.length > cmd.length ? typed.slice(cmd.length) : ''

  return (
    <button
      ref={ref}
      className="section-heading"
      onClick={onToggle}
      aria-expanded={open}
      aria-label={full}
    >
      <span className="ph-prompt">$</span>
      <span>
        <span className="ph-cmd">{cmdPart}</span>
        {argPart && <span className="ph-arg">{argPart}</span>}
      </span>
      {!done && <span className="type-caret" aria-hidden />}
      {done && badge && <span className="match-badge">{badge}</span>}
      {done && (
        <span className={`collapse-arrow ${open ? 'open' : 'closed'}`} aria-hidden>▾</span>
      )}
    </button>
  )
}
