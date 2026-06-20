import { useState, useCallback } from 'react'
import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'
import Navbar from './components/layout/Navbar'
import Hero from './components/hero/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import FilterBar from './components/layout/FilterBar'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Leadership from './components/sections/Leadership'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import ThemeToggle from './components/layout/ThemeToggle'
import ScrollProgress from './components/layout/ScrollProgress'

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
      <ScrollProgress />
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
