"use client"

import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

interface SocialLink {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/swilliams9772",
    icon: Github,
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/shaquille-williams-957970129/",
    icon: Linkedin,
    label: "LinkedIn"
  },
  {
    href: "https://twitter.com/swilliams9772",
    icon: Twitter,
    label: "Twitter"
  }
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shaquille Williams. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

