"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const educationData = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    year: '2020',
    details: 'Specialization in Machine Learning and Artificial Intelligence',
    achievements: [
      'Graduated with Honors',
      'Published research paper on Generative Adversarial Networks',
      'Teaching Assistant for Advanced Machine Learning course',
    ],
  },
  {
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'Massachusetts Institute of Technology',
    year: '2018',
    details: 'Minor in Data Science',
    achievements: [
      'Dean\'s List for all semesters',
      'Capstone project: Developed a real-time object detection system for autonomous vehicles',
      'President of the Artificial Intelligence Student Association',
    ],
  },
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
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <Badge variant="secondary">{edu.year}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{edu.details}</p>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
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

