import { useState } from 'react'
import Section from './Section'
import { awards } from '../data'

export default function About() {
  const [open, setOpen] = useState(true)

  return (
    <Section id="about">
      <button className="section-heading" onClick={() => setOpen(o => !o)}>
        About Me
        <span className={`collapse-arrow ${open ? 'open' : 'closed'}`}>⏶</span>
      </button>

      {open && (
        <div>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--text)' }}>
            I'm Kartike, a Computer Science graduate from the University at Buffalo, recognized for
            academic excellence as a Tau Beta Pi member — the Engineering Honors Society, extended
            only to the top eighth of the junior class.
          </p>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--text)' }}>
            My software development passion grew during my Qarik Group internship. As Head Teaching
            Assistant for Data Structures and Algorithms, I restructured programming assignments,
            built automated testing systems, and led weekly tutorials for 40+ students.
          </p>
          <p className="mb-6 leading-relaxed" style={{ color: 'var(--text)' }}>
            Beyond technology, I'm dedicated to community engagement. As a Resident Advisor and
            Student Engagement Ambassador, I foster an inclusive learning environment and help
            students connect with opportunities across campus.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-bold mb-2" style={{ color: 'var(--accent)' }}>Awards</h5>
              <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--text)' }}>
                {awards.map(a => <li key={a}>{a}</li>)}
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-2" style={{ color: 'var(--accent)' }}>Education</h5>
              <p className="font-semibold" style={{ color: 'var(--text)' }}>University at Buffalo — May 2024</p>
              <p style={{ color: 'var(--text)' }}>
                B.S. Computer Science<br />
                Concentration: Artificial Intelligence<br />
                Minor: Mathematics
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1" style={{ color: 'var(--text)' }}>
                <li>GPA: 3.84 / 4.00</li>
                <li>Tau Beta Pi — Engineering Honors Society</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
