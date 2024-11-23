"use client"

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

// Dynamically import components to avoid hydration issues
const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Hero = dynamic(() => import('@/components/Hero'), { ssr: true })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: true })
const Experience = dynamic(() => import('@/components/Experience'), { ssr: true })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: true })
const CaseStudies = dynamic(() => import('@/components/CaseStudies'), { ssr: true })
const Publications = dynamic(() => import('@/components/Publications'), { ssr: true })
const Education = dynamic(() => import('@/components/Education'), { ssr: true })
const Contributions = dynamic(() => import('@/components/Contributions'), { ssr: true })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

const Loading = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <LoadingSpinner size="lg" />
  </div>
)

export default function PortfolioPage() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Loading />
  }

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
          <CaseStudies />
          <Publications />
          <Education />
          <Contributions />
          <Contact />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  )
}

