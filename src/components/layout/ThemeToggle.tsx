const BASE = import.meta.env.BASE_URL

interface Props {
  theme: 'dark' | 'light'
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label="Toggle theme"
    >
      <img
        src={`${BASE}${theme === 'dark' ? 'sun.png' : 'moon.png'}`}
        alt={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        width={28}
        height={28}
      />
    </button>
  )
}
