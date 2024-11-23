import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© 2023 John Doe. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

