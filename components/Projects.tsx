"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Github, ExternalLink, Play, Pause, Search, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'Voice Cloning System',
    category: 'Audio Processing',
    difficulty: 5,
    completionDate: '2023-05-15',
    teamSize: 3,
    technologies: ['PyTorch', 'FastAPI', 'React'],
    impact: '5000+ active users',
    github: 'https://github.com/username/voice-cloning',
    demo: 'https://voice-clone-demo.com',
    challenges: 'Optimizing model for real-time inference on consumer hardware',
    achievements: 'Featured in AI research conference',
    videoPreview: 'https://example.com/voice-cloning-preview.mp4',
    description: 'A cutting-edge voice cloning system that allows users to create synthetic voices that sound remarkably similar to a target speaker. This project leverages deep learning techniques to analyze and reproduce the unique characteristics of a person\'s voice.',
    featured: true,
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  {
    title: 'DALL-E 2 PyTorch Implementation',
    category: 'Generative AI',
    difficulty: 5,
    completionDate: '2023-03-01',
    teamSize: 2,
    technologies: ['PyTorch', 'CUDA', 'Docker'],
    impact: 'Open-source project with 1000+ stars on GitHub',
    github: 'https://github.com/username/dalle-pytorch',
    challenges: 'Scaling training to large datasets, optimizing inference speed',
    achievements: 'Achieved state-of-the-art results on image generation benchmarks',
    videoPreview: 'https://example.com/dalle-preview.mp4',
    description: 'An efficient PyTorch implementation of the DALL-E 2 model, capable of generating high-quality images from textual descriptions. This project focuses on optimizing the model for faster inference and improved scalability.',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  {
    title: 'Wikipedia Connection Finder',
    category: 'Network Analysis',
    difficulty: 4,
    completionDate: '2022-11-30',
    teamSize: 1,
    technologies: ['Python', 'NetworkX', 'Flask'],
    impact: '10k+ monthly users',
    github: 'https://github.com/username/wiki-connection-finder',
    demo: 'https://wiki-connections.com',
    challenges: 'Efficiently traversing large graph structures',
    achievements: 'Featured on ProductHunt',
    videoPreview: 'https://example.com/wiki-connection-preview.mp4',
    description: 'A web application that finds the shortest path between two Wikipedia articles, showcasing the interconnectedness of knowledge. This project utilizes graph theory and efficient algorithms to quickly navigate the vast network of Wikipedia pages.',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  {
    title: 'NYC Education Analytics',
    category: 'Data Science',
    difficulty: 4,
    completionDate: '2022-09-15',
    teamSize: 4,
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Tableau'],
    impact: '20% improvement in educational outcomes',
    github: 'https://github.com/username/nyc-edu-analytics',
    challenges: 'Cleaning and integrating data from multiple sources',
    achievements: 'Presented findings to NYC Department of Education',
    videoPreview: 'https://example.com/nyc-edu-preview.mp4',
    description: 'A comprehensive data analysis project that examines various factors affecting educational outcomes in New York City schools. This project involves data cleaning, statistical analysis, and machine learning to identify key areas for improvement in the education system.',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  {
    title: 'Multi-Agent RL Environment',
    category: 'Reinforcement Learning',
    difficulty: 5,
    completionDate: '2023-01-20',
    teamSize: 2,
    technologies: ['Python', 'TensorFlow', 'OpenAI Gym'],
    impact: 'Used in multiple research papers',
    github: 'https://github.com/username/multi-agent-rl',
    challenges: 'Designing scalable and flexible environment for various RL scenarios',
    achievements: 'Cited in a major RL textbook',
    videoPreview: 'https://example.com/multi-agent-rl-preview.mp4',
    description: 'A flexible and scalable environment for multi-agent reinforcement learning research. This project provides a framework for developing and testing various RL algorithms in complex, multi-agent scenarios, contributing to advancements in cooperative and competitive AI behaviors.',
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
]

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [filter, setFilter] = useState({ category: 'All', technology: 'All', difficulty: 'All' })
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState('date')
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  const filteredAndSortedProjects = projects
    .filter(project => 
      (filter.category === 'All' || project.category === filter.category) &&
      (filter.technology === 'All' || project.technologies.includes(filter.technology)) &&
      (filter.difficulty === 'All' || project.difficulty === parseInt(filter.difficulty)) &&
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'date':
          return new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime()
        case 'difficulty':
          return b.difficulty - a.difficulty
        case 'impact':
          return b.impact.localeCompare(a.impact)
        default:
          return 0
      }
    })

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredAndSortedProjects.slice(indexOfFirstProject, indexOfLastProject)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const technologies = ['All', ...new Set(projects.flatMap(p => p.technologies))]
  const difficulties = ['All', ...new Set(projects.map(p => p.difficulty.toString()))]

  const featuredProject = projects.find(p => p.featured)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        {featuredProject && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Featured Project</h3>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-video">
                  <video
                    src={featuredProject.videoPreview}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    autoPlay
                  />
                </div>
                <div className="p-6">
                  <CardTitle className="mb-2">{featuredProject.title}</CardTitle>
                  <Badge className="mb-4">{featuredProject.category}</Badge>
                  <p className="text-muted-foreground mb-4">{featuredProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild>
                      <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                    {featuredProject.demo && (
                      <Button asChild variant="outline">
                        <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        <div className="flex flex-wrap gap-4 mb-8">
          <Select onValueChange={(value) => setFilter(prev => ({ ...prev, category: value }))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setFilter(prev => ({ ...prev, technology: value }))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Technology" />
            </SelectTrigger>
            <SelectContent>
              {technologies.map((tech) => (
                <SelectItem key={tech} value={tech}>{tech}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setFilter(prev => ({ ...prev, difficulty: value }))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              {difficulties.map((difficulty) => (
                <SelectItem key={difficulty} value={difficulty}>{difficulty === 'All' ? 'All' : `★`.repeat(parseInt(difficulty))}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => setSortOption(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="difficulty">Difficulty</SelectItem>
              <SelectItem value="impact">Impact</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex-grow">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col h-full"
            >
              <Card 
                className="h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <Badge>{project.category}</Badge>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="relative aspect-video mb-4">
                    <video
                      src={project.videoPreview}
                      className="w-full h-full object-cover rounded-md"
                      loop
                      muted
                      playsInline
                      onMouseEnter={() => setActiveVideo(project.title)}
                      onMouseLeave={() => setActiveVideo(null)}
                    />
                    <AnimatePresence>
                      {activeVideo === project.title && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
                        >
                          {activeVideo === project.title ? (
                            <Pause className="w-12 h-12 text-white" />
                          ) : (
                            <Play className="w-12 h-12 text-white" />
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <p className="text-muted-foreground mb-2">Difficulty: {'★'.repeat(project.difficulty)}</p>
                  <p className="text-m
uted-foreground mb-2">Completed: {project.completionDate}</p>
                  <p className="text-muted-foreground mb-4">Team Size: {project.teamSize}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" size="sm" className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <span className="mx-4 flex items-center">
            Page {currentPage} of {Math.ceil(filteredAndSortedProjects.length / projectsPerPage)}
          </span>
          <Button
            variant="outline"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastProject >= filteredAndSortedProjects.length}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedProject.title}</DialogTitle>
                  <DialogDescription>{selectedProject.category}</DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                    <TabsTrigger value="demo">Interactive Demo</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <video
                          src={selectedProject.videoPreview}
                          className="w-full aspect-video object-cover rounded-md"
                          controls
                          loop
                          muted
                          playsInline
                        />
                      </div>
                      <div>
                        <p className="mb-4">{selectedProject.description}</p>
                        <p className="mb-2"><strong>Impact:</strong> {selectedProject.impact}</p>
                        <p className="mb-2"><strong>Challenges:</strong> {selectedProject.challenges}</p>
                        <p className="mb-4"><strong>Achievements:</strong> {selectedProject.achievements}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {selectedProject.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">{tech}</Badge>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <Button asChild>
                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" /> GitHub
                            </a>
                          </Button>
                          {selectedProject.demo && (
                            <Button asChild variant="outline">
                              <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="gallery">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedProject.images.map((image, index) => (
                        <img key={index} src={image} alt={`${selectedProject.title} screenshot ${index + 1}`} className="w-full h-auto rounded-md" />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="demo">
                    <div className="aspect-video">
                      <iframe
                        src={selectedProject.demo}
                        className="w-full h-full rounded-md"
                        title={`${selectedProject.title} Interactive Demo`}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default Projects

