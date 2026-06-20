import { useState } from 'react'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import { awards } from '../../data'

export default function About() {
  const [open, setOpen] = useState(true)

  return (
    <Section id="about">
      <SectionHeading cmd="cat" arg="about.md" open={open} onToggle={() => setOpen(o => !o)} />

      {open && (
        <div>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--text)' }}>
            I'm Kartike, a Site Reliability Engineer on Coinbase's Identity and Access Management
            team. I work on authorization, authentication, identity lifecycle systems, and the
            reliability foundations that keep high-volume security infrastructure dependable.
          </p>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--text)' }}>
            My recent work focuses on modernizing access-control platforms, improving service
            resilience, building self-healing workflows, and shipping Golang infrastructure for
            identity data, event streams, and fine-grained permission enforcement.
          </p>
          <p className="mb-6 leading-relaxed" style={{ color: 'var(--text)' }}>
            Before Coinbase, I graduated from the University at Buffalo with a B.S. in Computer
            Science and a Mathematics minor. I also served as Head Teaching Assistant for Data
            Structures and Algorithms, where I built automated testing systems and supported
            hundreds of students through core CS coursework.
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
