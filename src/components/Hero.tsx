import { useTypingAnimation } from '../hooks/useTypingAnimation'
import { subtitles } from '../data'

const BASE = import.meta.env.BASE_URL

interface Props {
  theme: 'dark' | 'light'
}

export default function Hero({ theme }: Props) {
  const typed = useTypingAnimation(subtitles)

  const bgImage = theme === 'dark' ? `${BASE}hero-dark.gif` : `${BASE}hero-light.gif`
  const profileImg = theme === 'dark' ? `${BASE}Kartike.jpg` : `${BASE}Kartike2.jpg`

  return (
    <header
      className="relative flex flex-col items-center justify-center text-center pt-32 pb-24 min-h-[100svh]"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-4 px-4">
        <img
          src={profileImg}
          alt="Kartike Chaurasia"
          className="hero-image w-1/4 rounded-full border-4 transition-transform duration-300 hover:scale-105"
          style={{ borderColor: 'var(--accent)' }}
        />

        <h1
          className="glitch font-display text-white mt-4"
          style={{ fontSize: 'clamp(0.9rem, 3vw, 2.2rem)', letterSpacing: '-0.5px', textShadow: '0 0 20px rgba(0,252,253,0.6)' }}
          data-text="KARTIKE CHAURASIA"
        >
          KARTIKE CHAURASIA
        </h1>

        <p
          className="typing-cursor text-xl font-bold text-white mt-1 min-h-[2rem]"
          style={{ textShadow: '0 0 12px rgba(0,252,253,0.5)', fontFamily: 'var(--font-body)' }}
        >
          {typed}
        </p>

        <div className="flex gap-4 mt-4 flex-wrap justify-center">
          <a
            href={`${BASE}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hacker"
          >
            Resume
          </a>
          <a
            href={`${BASE}LORs.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hacker"
          >
            Letters of Recommendation
          </a>
        </div>
      </div>
    </header>
  )
}
