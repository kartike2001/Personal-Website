export interface SkillEntry {
  name: string
  key: string
  info?: string
}

export interface SkillCategory {
  label: string
  items: SkillEntry[]
}

export interface ExperienceEntry {
  title: string
  org: string
  period: string
  github?: string
  skills: string[]
  subsections: { heading?: string; bullets: string[] }[]
}

export interface ProjectEntry {
  title: string
  github?: string
  skills: string[]
  bullets: string[]
}

export interface LeadershipEntry {
  title: string
  org: string
  period: string
  skills: string[]
  bullets: string[]
}

export interface CertEntry {
  label: string
  href: string
}

export interface ContactEntry {
  cmd: string
  label: string
  href: string
}
