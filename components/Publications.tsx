"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Book, Presentation, Github, ExternalLink, Calendar, Award } from 'lucide-react'

const publications = [
  {
    title: 'Mastering Kubernetes (Third Edition)',
    type: 'Book',
    date: '2023',
    description: 'Comprehensive guide on Docker and Kubernetes solutions for production environments and open-source communities.',
    link: 'https://example.com/mastering-kubernetes',
  },
  {
    title: 'Machine Learning for Cybersecurity',
    type: 'Tutorial Series',
    date: '2023',
    description: 'Practical tutorials on building ethical, secure systems for social justice applications using machine learning.',
    link: 'https://example.com/ml-cybersecurity',
  },
  {
    title: 'Hands-On Web Scraping with Python',
    type: 'Educational Content',
    date: '2022',
    description: 'Comprehensive guide on web scraping techniques, including specialized crawlers for social and historical content preservation.',
    link: 'https://example.com/web-scraping-guide',
  },
  {
    title: 'Practical Applications of GANs in Social Impact Projects',
    type: 'Research Paper',
    date: '2023',
    description: 'Comprehensive study on using GANs for social good, including case studies and implementation guidelines.',
    link: 'https://example.com/gans-social-impact',
  },
  {
    title: 'Building Ethical AI Systems',
    type: 'Tutorial Series',
    date: '2023',
    description: 'Guide to developing AI systems with built-in ethical considerations and social responsibility.',
    link: 'https://example.com/ethical-ai',
  },
]

const workshops = [
  {
    title: 'GraphNR Workshop 2023',
    event: 'Network Science Conference',
    date: 'September 2023',
    description: 'Hands-on workshop covering network analysis fundamentals, practical applications, and simulations for social network analysis.',
    materials: 'https://example.com/graphnr-workshop',
  },
  {
    title: 'Hacktivism & Digital Security',
    event: 'Community Tech Summit',
    date: 'July 2023',
    description: 'Workshop on digital tools for activism, covering secure communication, ethical hacking, and digital privacy.',
    materials: 'https://example.com/hacktivism-workshop',
  },
  {
    title: 'AI for Social Impact',
    event: 'Tech4Good Conference',
    date: 'May 2023',
    description: 'Workshop on leveraging AI and ML for community development and social justice initiatives.',
    materials: 'https://example.com/ai-social-impact',
  },
  {
    title: 'Reinforcement Learning for Social Good',
    event: 'AI4Social Conference',
    date: 'August 2023',
    description: 'Workshop on applying RL techniques to solve social challenges and improve community outcomes.',
    materials: 'https://example.com/rl-social-good',
  },
  {
    title: 'Community-Centered Tech Development',
    event: 'Tech4Justice Summit',
    date: 'June 2023',
    description: 'Hands-on workshop on building technology solutions that prioritize community needs and social impact.',
    materials: 'https://example.com/community-tech',
  },
]

const openSource = [
  {
    title: 'Ultimate-Dork',
    description: 'Web vulnerability detection tool with advanced security features.',
    github: 'https://github.com/swilliams9772/ultimate-dork',
    stars: '500+',
  },
  {
    title: 'OmniParser',
    description: 'Dynamic data parsing tool for streamlining workflows in data-heavy projects.',
    github: 'https://github.com/swilliams9772/omniparser',
    stars: '300+',
  },
  {
    title: 'MARE (Multi-Agent RL Environment)',
    description: 'Educational framework for reinforcement learning applications.',
    github: 'https://github.com/swilliams9772/mare',
    stars: '400+',
  },
]

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Publications & Contributions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Book className="h-6 w-6 text-primary" />
              Publications
            </h3>
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="transform transition-all duration-300"
              >
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{pub.title}</CardTitle>
                      <Badge 
                        variant="outline" 
                        className="bg-primary/10 text-primary"
                      >
                        {pub.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      {pub.date}
                    </div>
                    <p className="text-muted-foreground mb-4">{pub.description}</p>
                    <Button asChild>
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Read Publication
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Presentation className="h-6 w-6 text-primary" />
              Workshops & Talks
            </h3>
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="transform transition-all duration-300"
              >
                <Card className="bg-gradient-to-r from-secondary/5 to-primary/5">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{workshop.title}</CardTitle>
                      <Badge 
                        variant="outline"
                        className="bg-secondary/10 text-secondary-foreground"
                      >
                        {workshop.event}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      {workshop.date}
                    </div>
                    <p className="text-muted-foreground mb-4">{workshop.description}</p>
                    <div className="flex gap-4">
                      <Button asChild variant="outline">
                        <a 
                          href={workshop.materials} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Materials
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <h3 className="text-2xl font-semibold flex items-center gap-2 mt-8">
              <Github className="h-6 w-6 text-primary" />
              Open Source Projects
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {openSource.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="transform transition-all duration-300"
                >
                  <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-semibold">{project.title}</h4>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                        </div>
                        <Badge 
                          variant="outline"
                          className="flex items-center gap-1"
                        >
                          <Award className="h-3 w-3" />
                          {project.stars}
                        </Badge>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View on GitHub
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publications

