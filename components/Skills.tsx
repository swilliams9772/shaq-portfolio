"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 'Expert', years: 5 },
      { name: 'JavaScript', level: 'Expert', years: 4 },
      { name: 'TypeScript', level: 'Expert', years: 3 },
      { name: 'SQL', level: 'Advanced', years: 4 },
      { name: 'Java', level: 'Intermediate', years: 2 },
      { name: 'Go', level: 'Intermediate', years: 1 },
    ],
    icon: '💻',
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'TensorFlow', level: 'Expert', years: 3 },
      { name: 'PyTorch', level: 'Expert', years: 3 },
      { name: 'Scikit-Learn', level: 'Expert', years: 4 },
      { name: 'Hugging Face', level: 'Advanced', years: 2 },
      { name: 'OpenCV', level: 'Advanced', years: 3 },
      { name: 'Flask', level: 'Advanced', years: 3 },
      { name: 'Django', level: 'Advanced', years: 3 },
      { name: 'React', level: 'Advanced', years: 3 },
      { name: 'Node.js', level: 'Advanced', years: 3 },
    ],
    icon: '🔧',
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS Lambda', level: 'Expert', years: 3 },
      { name: 'AWS EC2', level: 'Expert', years: 3 },
      { name: 'Docker', level: 'Expert', years: 4 },
      { name: 'Kubernetes', level: 'Advanced', years: 3 },
      { name: 'Terraform', level: 'Advanced', years: 2 },
      { name: 'Jenkins', level: 'Intermediate', years: 2 },
    ],
    icon: '☁️',
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      { name: 'GANs', level: 'Expert', years: 3 },
      { name: 'Reinforcement Learning', level: 'Expert', years: 3 },
      { name: 'NLP', level: 'Expert', years: 4 },
      { name: 'Voice Cloning', level: 'Advanced', years: 2 },
      { name: 'Transformers', level: 'Advanced', years: 2 },
      { name: 'Computer Vision', level: 'Advanced', years: 3 },
    ],
    icon: '🤖',
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 'Expert', years: 4 },
      { name: 'MySQL', level: 'Advanced', years: 3 },
      { name: 'MongoDB', level: 'Advanced', years: 3 },
      { name: 'Redis', level: 'Intermediate', years: 2 },
    ],
    icon: '🗄️',
  },
  {
    category: 'Hardware & IoT',
    skills: [
      { name: 'Arduino', level: 'Advanced', years: 3 },
      { name: 'Raspberry Pi', level: 'Advanced', years: 3 },
      { name: 'RF Systems', level: 'Intermediate', years: 2 },
      { name: 'Embedded Systems', level: 'Advanced', years: 3 },
    ],
    icon: '🔌',
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert':
      return 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
    case 'Advanced':
      return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20'
    case 'Intermediate':
      return 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20'
    default:
      return 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20'
  }
}

const getProgressValue = (level: string) => {
  switch (level) {
    case 'Expert':
      return 100
    case 'Advanced':
      return 75
    case 'Intermediate':
      return 50
    default:
      return 25
  }
}

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredCategories = skillCategories.map(category => ({
    ...category,
    skills: category.skills.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesLevel = selectedLevel === 'all' || skill.level === selectedLevel
      return matchesSearch && matchesLevel
    })
  })).filter(category => 
    selectedCategory === 'all' || 
    category.category === selectedCategory
  )

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search skills..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Tabs defaultValue="all" className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all" onClick={() => setSelectedLevel('all')}>All</TabsTrigger>
                <TabsTrigger value="Expert" onClick={() => setSelectedLevel('Expert')}>Expert</TabsTrigger>
                <TabsTrigger value="Advanced" onClick={() => setSelectedLevel('Advanced')}>Advanced</TabsTrigger>
                <TabsTrigger value="Intermediate" onClick={() => setSelectedLevel('Intermediate')}>Intermediate</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((category, index) => (
              category.skills.length > 0 && (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  layout
                >
                  <Card className="h-full transform transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">{category.icon}</span>
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                            onHoverStart={() => setHoveredSkill(skill.name)}
                            onHoverEnd={() => setHoveredSkill(null)}
                          >
                            <Badge
                              className={cn(
                                "cursor-pointer transition-all duration-300",
                                getLevelColor(skill.level),
                                hoveredSkill === skill.name && "scale-110"
                              )}
                              variant="outline"
                            >
                              {skill.name}
                              {hoveredSkill === skill.name && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="absolute -bottom-12 left-0 bg-background border rounded-md p-2 shadow-lg w-48 z-50"
                                >
                                  <div className="text-xs space-y-1">
                                    <p>Level: {skill.level}</p>
                                    <p>Experience: {skill.years} years</p>
                                    <Progress value={getProgressValue(skill.level)} className="h-1" />
                                  </div>
                                </motion.div>
                              )}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          className="mt-8 flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2">
            <Badge className={getLevelColor('Expert')} variant="outline">Expert</Badge>
            <span className="text-sm text-muted-foreground">4+ years</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getLevelColor('Advanced')} variant="outline">Advanced</Badge>
            <span className="text-sm text-muted-foreground">2-4 years</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getLevelColor('Intermediate')} variant="outline">Intermediate</Badge>
            <span className="text-sm text-muted-foreground">1-2 years</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

