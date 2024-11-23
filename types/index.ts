import { JSX as JSXTypes } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements extends JSXTypes.IntrinsicElements {}
  }
}

export interface BaseProps {
  children?: React.ReactNode
  className?: string
}

export interface Project {
  title: string
  category: string
  difficulty: number
  completionDate: string
  teamSize: number
  technologies: string[]
  impact: string
  github: string
  demo?: string
  challenges: string
  achievements: string
  description: string
  featured?: boolean
  images?: string[]
  videoPreview?: string
}

export interface Publication {
  title: string
  type: string
  date: string
  description: string
  link: string
}

export interface Workshop {
  title: string
  event: string
  date: string
  description: string
  materials: string
}

export interface OpenSourceProject {
  title: string
  description: string
  github: string
  stars: string
}

export interface Skill {
  name: string
  level: 'Expert' | 'Advanced' | 'Intermediate'
  years: number
}

export interface SkillCategory {
  category: string
  skills: Skill[]
  icon: string
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string[]
  skills: string[]
  impact: string
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  details: string
  coursework: string[]
  achievements: string[]
  skills: string[]
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href: string | null
}

export interface SocialLink {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}

export interface NavItem {
  name: string
  href: string
} 