"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const caseStudies = [
  {
    title: 'Optimizing Voice Cloning for Real-Time Applications',
    description: 'An in-depth look at the challenges and solutions in developing a real-time voice cloning system.',
    impact: 'Reduced inference time by 75% while maintaining high voice similarity.',
    technologies: ['PyTorch', 'CUDA', 'TensorRT'],
    link: '/case-studies/voice-cloning-optimization',
  },
  {
    title: 'Scaling Machine Learning Infrastructure for a Fortune 500 Company',
    description: 'How we designed and implemented a scalable ML infrastructure to support thousands of models in production.',
    impact: 'Increased model deployment speed by 10x and reduced operational costs by 40%.',
    technologies: ['Kubernetes', 'MLflow', 'Apache Airflow'],
    link: '/case-studies/ml-infrastructure-scaling',
  },
]

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <p className="mb-4"><strong>Impact:</strong> {study.impact}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild>
                    <a href={study.link}>Read Full Case Study</a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

