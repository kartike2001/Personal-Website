import { useState } from 'react'
import Section from './Section'
import SectionHeading from './SectionHeading'
import { awards } from '../data'

export default function About() {
  const [open, setOpen] = useState(true)

  return (
    <Section id="about">
      <SectionHeading cmd="cat" arg="about.md" open={open} onToggle={() => setOpen(o => !o)} />

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

          <div className="grid md:grid-cols-2 gap-4">
            <div className="skill-box">
              <h5 className="skill-box-title">~/awards</h5>
              <ul className="term-list">
                {awards.map(a => <li key={a}>{a}</li>)}
              </ul>
            </div>

            <div className="skill-box">
              <h5 className="skill-box-title">~/education</h5>
              <p className="font-bold" style={{ color: 'var(--bright)' }}>University at Buffalo — May 2024</p>
              <p className="text-sm" style={{ color: 'var(--text)' }}>
                B.S. Computer Science<br />
                Concentration: Artificial Intelligence<br />
                Minor: Mathematics
              </p>
              <ul className="term-list mt-2">
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
