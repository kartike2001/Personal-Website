import { useTypingAnimation } from '../hooks/useTypingAnimation'
import ScrambleText from './ScrambleText'
import { subtitles } from '../data'

const BASE = import.meta.env.BASE_URL

interface Props {
  theme: 'dark' | 'light'
}

/**
 * Hero = one live terminal window that boots itself into existence.
 * Lines reveal in sequence (staggered delays); the role line keeps
 * typing live via the rotating subtitle animation.
 */
export default function Hero({ theme }: Props) {
  const typed = useTypingAnimation(subtitles)

  const bgImage = theme === 'dark' ? `${BASE}hero-dark.gif` : `${BASE}hero-light.gif`
  const profileImg = theme === 'dark' ? `${BASE}Kartike.jpg` : `${BASE}Kartike2.jpg`

  return (
    <header
      className="relative flex flex-col items-center justify-center px-4 pt-28 pb-20 min-h-[100svh] overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* readability scrim + bottom fade into the page */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(180deg, rgba(10,14,20,0.45) 0%, rgba(10,14,20,0.30) 45%, var(--bg) 100%)'
            : 'linear-gradient(180deg, rgba(233,237,242,0.35) 0%, rgba(233,237,242,0.25) 45%, var(--bg) 100%)',
        }}
      />

      <div className="relative z-10 w-full flex flex-col items-center gap-7">
        {/* The terminal window */}
        <div className="terminal">
          <div className="terminal-bar">
            <span className="term-dot r" />
            <span className="term-dot y" />
            <span className="term-dot g" />
            <span className="term-title">kartike@portfolio: ~/about</span>
          </div>

          <div className="terminal-body">
            <div className="flex flex-col-reverse sm:flex-row sm:items-start gap-6 sm:gap-10">
              {/* boot log */}
              <div className="flex-1 min-w-0">
                <p className="boot-line" style={{ animationDelay: '0.2s' }}>
                  <span className="tprompt">kartike@portfolio</span>
                  <span className="tpath">:~/about$</span> <span className="tcmd">whoami</span>
                </p>
                <h1
                  className="boot-line"
                  style={{
                    animationDelay: '0.7s',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(1.35rem, 3.6vw, 1.95rem)',
                    fontWeight: 800,
                    color: 'var(--bright)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.22,
                    margin: '0.55rem 0 1.4rem',
                  }}
                >
                  <ScrambleText text="Kartike Chaurasia" startDelay={850} />
                </h1>

                <p className="boot-line" style={{ animationDelay: '1.2s' }}>
                  <span className="tprompt">kartike@portfolio</span>
                  <span className="tpath">:~/about$</span>{' '}
                  <span className="tcmd">cat role.txt</span>
                </p>
                <p
                  className="caret boot-line"
                  style={{
                    animationDelay: '1.5s',
                    color: 'var(--accent)',
                    fontWeight: 500,
                    minHeight: '1.4em',
                    margin: '0.5rem 0 1.6rem',
                    fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                  }}
                >
                  {typed}
                </p>

                <p className="boot-line tout" style={{ animationDelay: '2s' }}>
                  <span className="tprompt">kartike@portfolio</span>
                  <span className="tpath">:~/about$</span>{' '}
                  <span style={{ color: 'var(--muted)' }}>./open --docs</span>
                </p>

                <div
                  className="boot-line flex gap-3 flex-wrap"
                  style={{ animationDelay: '2.3s', marginTop: '0.9rem' }}
                >
                  <a href={`${BASE}resume.pdf`} target="_blank" rel="noopener noreferrer" className="btn-hacker">
                    resume.pdf
                  </a>
                  <a href={`${BASE}LORs.pdf`} target="_blank" rel="noopener noreferrer" className="btn-hacker">
                    letters.pdf
                  </a>
                </div>
              </div>

              {/* avatar — framed as a file preview */}
              <figure
                className="boot-line shrink-0 self-center sm:self-start"
                style={{ animationDelay: '0.4s', margin: 0 }}
              >
                <img
                  src={profileImg}
                  alt="Kartike Chaurasia"
                  className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                  style={{
                    width: 'clamp(120px, 30vw, 168px)',
                    height: 'clamp(120px, 30vw, 168px)',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--glow)',
                  }}
                />
                <figcaption
                  className="text-center mt-2"
                  style={{ fontSize: '0.68rem', color: 'var(--muted)' }}
                >
                  ./kartike.jpg
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <p
          className="boot-line text-xs tracking-widest"
          style={{ animationDelay: '2.7s', color: 'var(--muted)' }}
        >
          ▼ scroll to continue
        </p>
      </div>
    </header>
  )
}
