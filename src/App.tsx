import { useState, useCallback } from 'react'
import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import FilterBar from './components/FilterBar'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'

const SECTION_IDS = [
  'about', 'skills', 'experience', 'projects',
  'leadershipexperience', 'certifications', 'contact',
]

export default function App() {
  const { theme, toggle } = useTheme()
  const activeSection = useActiveSection(SECTION_IDS)
  const [selectedSkills, setSelectedSkills] = useState<Set<string>>(new Set())
  const [expMatchCount, setExpMatchCount] = useState(0)
  const [projMatchCount, setProjMatchCount] = useState(0)

  const toggleSkill = useCallback((key: string) => {
    setSelectedSkills(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }, [])

  const clearAllSkills = useCallback(() => {
    setSelectedSkills(new Set())
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} theme={theme} />
      <FilterBar
        selectedSkills={selectedSkills}
        onToggleSkill={toggleSkill}
        onClear={clearAllSkills}
        matchCounts={{ experience: expMatchCount, projects: projMatchCount }}
      />
      <Hero theme={theme} />
      <main style={{ paddingTop: '56px' }}>
        <About />
        <Skills selectedSkills={selectedSkills} onToggleSkill={toggleSkill} onClear={clearAllSkills} />
        <Experience selectedSkills={selectedSkills} onMatchCount={setExpMatchCount} />
        <Projects selectedSkills={selectedSkills} onMatchCount={setProjMatchCount} />
        <Leadership />
        <Certifications />
        <Contact />
      </main>
      <ThemeToggle theme={theme} onToggle={toggle} />
    </>
  )
}
