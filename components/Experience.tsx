"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    role: 'Senior AI Engineer',
    company: 'TechCorp',
    period: '2021 - Present',
    description: [
      'Led development of voice cloning system with 5000+ users',
      'Implemented DALL-E 2 in PyTorch, achieving state-of-the-art results',
      'Optimized YOLOv9 for real-time object detection, reaching 98% accuracy',
    ],
    skills: ['PyTorch', 'TensorFlow', 'Computer Vision', 'NLP'],
    impact: 'Increased AI product adoption by 200% within the first year',
  },
  {
    role: 'Machine Learning Engineer',
    company: 'AI Innovations',
    period: '2019 - 2021',
    description: [
      'Developed and deployed machine learning models for various business applications',
      'Implemented natural language processing solutions for chatbots and sentiment analysis',
      'Collaborated with cross-functional teams to integrate AI solutions into existing products',
    ],
    skills: ['Scikit-learn', 'Keras', 'NLTK', 'Spark'],
    impact: 'Reduced customer service response time by 40% through AI-powered chatbots',
  },
  {
    role: 'Data Scientist',
    company: 'DataTech Solutions',
    period: '2017 - 2019',
    description: [
      'Conducted data analysis and built predictive models for client projects',
      'Developed data visualization dashboards using Tableau and D3.js',
      'Implemented ETL pipelines for efficient data processing',
    ],
    skills: ['Python', 'R', 'SQL', 'Tableau', 'D3.js'],
    impact: 'Increased client revenue by 25% through data-driven decision making',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
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
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside mb-4 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                  <p className="text-sm font-semibold">
                    <span className="text-primary">Impact:</span> {exp.impact}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

