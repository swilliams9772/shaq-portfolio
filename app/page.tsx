import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import Publications from '@/components/Publications'
import Blog from '@/components/Blog'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function PortfolioPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <CaseStudies />
          <Testimonials />
          <Publications />
          <Blog />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

