"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const skillCategories = [
  {
    category: 'Audio Processing & Voice Technology',
    skills: ['Real-time voice cloning', 'TTS technology', 'Speaker diarization', 'Whisper-based transcription'],
  },
  {
    category: 'Machine Learning & AI',
    skills: ['Generative AI (GANs)', 'Computer Vision', 'NLP', 'Transformers'],
  },
  {
    category: 'Network Analysis',
    skills: ['Social network analysis', 'Graph analytics', 'Community detection'],
  },
  {
    category: 'Web Scraping & Data Collection',
    skills: ['Scrapy', 'Selenium', 'Custom crawlers'],
  },
  {
    category: 'Data Science & Analysis',
    skills: ['Educational data analysis', 'Text analytics', 'Sentiment analysis'],
  },
  {
    category: 'Cybersecurity',
    skills: ['Vulnerability detection', 'IoT security', 'Ethical hacking'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-muted-foreground">{skill}</li>
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

export default Skills

