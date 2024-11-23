"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const publications = [
  {
    title: 'Advances in Real-Time Voice Cloning: A Comprehensive Study',
    venue: 'International Conference on Machine Learning (ICML 2023)',
    date: 'July 2023',
    description: 'This paper presents novel techniques for improving the efficiency and quality of real-time voice cloning systems.',
    link: 'https://example.com/voice-cloning-paper',
  },
  {
    title: 'Optimizing Large Language Models for Edge Devices',
    venue: 'ACM Conference on Embedded Networked Sensor Systems (SenSys 2022)',
    date: 'November 2022',
    description: 'We propose a new method for deploying and running large language models on resource-constrained edge devices.',
    link: 'https://example.com/llm-edge-optimization',
  },
]

const talks = [
  {
    title: 'The Future of AI in Healthcare',
    event: 'TEDx Technology Summit',
    date: 'September 2023',
    description: 'An exploration of how AI is revolutionizing healthcare diagnostics and treatment planning.',
    videoLink: 'https://example.com/tedx-ai-healthcare',
  },
  {
    title: 'Building Scalable ML Infrastructure',
    event: 'PyData Global 2022',
    date: 'December 2022',
    description: 'A technical deep-dive into architecting ML infrastructure that can scale to support thousands of models.',
    slidesLink: 'https://example.com/pydata-ml-infrastructure-slides',
  },
]

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Publications & Talks</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Publications</h3>
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>{pub.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{pub.venue}</p>
                    <Badge>{pub.date}</Badge>
                    <p className="mt-4 mb-4">{pub.description}</p>
                    <Button asChild>
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">Read Paper</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Talks & Workshops</h3>
            {talks.map((talk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>{talk.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{talk.event}</p>
                    <Badge>{talk.date}</Badge>
                    <p className="mt-4 mb-4">{talk.description}</p>
                    {talk.videoLink && (
                      <Button asChild className="mr-4">
                        <a href={talk.videoLink} target="_blank" rel="noopener noreferrer">Watch Video</a>
                      </Button>
                    )}
                    {talk.slidesLink && (
                      <Button asChild variant="outline">
                        <a href={talk.slidesLink} target="_blank" rel="noopener noreferrer">View Slides</a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publications

