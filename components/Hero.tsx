"use client"

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'

interface ContactInfo {
  email: string
  phone: string
}

const contactInfo: ContactInfo = {
  email: "shaq.williams.ai@gmail.com",
  phone: "(917) 831-2482"
}

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

const socialLinks = [
  {
    href: "https://github.com/swilliams9772",
    icon: Github,
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/shaquille-williams-957970129/",
    icon: Linkedin,
    label: "LinkedIn"
  }
]

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 bg-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <motion.h1
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-primary sm:text-6xl"
          >
            Shaquille Williams
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 flex justify-center space-x-4"
          >
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {contactInfo.email}
            </a>
            <span className="text-muted-foreground">|</span>
            <a 
              href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {contactInfo.phone}
            </a>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Senior Software Engineer, AI Specialist, and Community Organizer specializing in machine learning, 
            generative AI, cybersecurity, and STEM education. Dedicated to developing AI-driven, open-source 
            tools for impactful, equitable social change.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
    </section>
  )
}

export default Hero

