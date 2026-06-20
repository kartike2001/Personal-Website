import { useState } from 'react'

const BASE = import.meta.env.BASE_URL

const NAV_LINKS = [
  { label: 'About',           id: 'about' },
  { label: 'Skills',          id: 'skills' },
  { label: 'Experience',      id: 'experience' },
  { label: 'Projects',        id: 'projects' },
  { label: 'Leadership',      id: 'leadershipexperience' },
  { label: 'Certifications',  id: 'certifications' },
  { label: 'Contact',         id: 'contact' },
]

interface Props {
  activeSection: string
  theme: 'dark' | 'light'
}

export default function Navbar({ activeSection, theme }: Props) {
  const [open, setOpen] = useState(false)

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const navBg = theme === 'dark' ? 'bg-black' : 'bg-[#8cbce1]'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${navBg} border-b border-[var(--border)] transition-colors duration-400`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[var(--accent)] p-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`nav-link-hacker font-bold text-sm ${activeSection === id ? 'active-section' : ''}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a href="https://github.com/kartike2001" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img
              src={`${BASE}${theme === 'dark' ? 'githubwhite.png' : 'github-icon.png'}`}
              alt="GitHub"
              width={26}
              height={26}
            />
          </a>
          <a href="https://www.linkedin.com/in/kartike2001/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={`${BASE}linkedin-icon.png`} alt="LinkedIn" width={26} height={26} />
          </a>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className={`md:hidden ${navBg} border-t border-[var(--border)] px-4 pb-3`}>
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`nav-link-hacker text-sm w-full text-left ${activeSection === id ? 'active-section' : ''}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
