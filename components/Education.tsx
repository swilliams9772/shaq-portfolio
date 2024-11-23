"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Book, Award, Brain, Lightbulb } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

const educationData = [
  {
    degree: 'Bachelor of Science in Physics',
    institution: 'City College of New York',
    location: 'New York, New York',
    period: '2015 - 2019',
    details: 'Focus on Computational Physics and Data Science',
    gpa: '3.8',
    coursework: [
      { name: 'Machine Learning', grade: 'A' },
      { name: 'Data Structures', grade: 'A' },
      { name: 'Computational Physics', grade: 'A-' },
      { name: 'Network Science', grade: 'A' },
      { name: 'Data Visualization', grade: 'A' }
    ],
    achievements: [
      {
        title: 'Research Excellence',
        description: 'Applied advanced data analysis techniques to physics research projects',
        icon: Brain
      },
      {
        title: 'Technical Innovation',
        description: 'Developed computational models for complex physical systems',
        icon: Lightbulb
      },
      {
        title: 'Academic Leadership',
        description: 'Led physics study groups and mentored junior students',
        icon: Award
      }
    ],
    skills: [
      { name: 'Scientific Computing', level: 90 },
      { name: 'Data Analysis', level: 95 },
      { name: 'Mathematical Modeling', level: 85 },
      { name: 'Research Methods', level: 90 },
      { name: 'Problem Solving', level: 95 }
    ],
    color: 'from-blue-500/20 to-purple-500/20'
  }
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="transform transition-all duration-300"
            >
              <Card className={`overflow-hidden bg-gradient-to-r ${edu.color}`}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Book className="h-6 w-6 text-primary" />
                        <h3 className="text-2xl font-bold">{edu.degree}</h3>
                      </div>
                      <p className="text-lg text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                      <Badge variant="secondary" className="mt-2">GPA: {edu.gpa}</Badge>
                    </div>
                    <Badge variant="outline" className="text-lg">
                      {edu.period}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Key Coursework</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {edu.coursework.map((course, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex justify-between items-center bg-background/50 p-3 rounded-lg"
                            >
                              <span>{course.name}</span>
                              <Badge>{course.grade}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4">Skills Developed</h4>
                        <div className="space-y-4">
                          {edu.skills.map((skill, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="flex justify-between mb-1">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                              </div>
                              <Progress value={skill.level} className="h-2" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                        <div className="space-y-4">
                          {edu.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="bg-background/50 p-4 rounded-lg"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <achievement.icon className="h-5 w-5 text-primary" />
                                <h5 className="font-semibold">{achievement.title}</h5>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {achievement.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

