"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heart, Users, Trophy, Target, ArrowRight, GitPullRequest, Star } from 'lucide-react'

const contributions = [
  {
    title: 'Open-Source Technologist',
    category: 'Community Projects',
    period: '2018 - Present',
    description: [
      'Led development of open-source data analysis tools for community organizations',
      'Contributed to ML, cybersecurity, and data science public repositories',
      'Promoted accessibility and transparency in community tech initiatives',
    ],
    impact: 'Empowered community organizations with data-driven decision making tools',
    metrics: [
      { label: 'GitHub Stars', value: '1000+' },
      { label: 'Pull Requests', value: '200+' },
      { label: 'Organizations', value: '40+' }
    ],
    achievements: [
      'Created widely-used open source tools',
      'Mentored new contributors',
      'Built active community around projects'
    ],
    color: 'from-blue-500/20 to-purple-500/20',
    icon: Heart
  },
  {
    title: 'Social Impact Hackathon Organizer',
    category: 'Community Engagement',
    period: '2020 - Present',
    description: [
      'Organized annual hackathons focused on social impact',
      'Provided training and resources to participants',
      'Generated solutions for education, health, and sustainability challenges',
    ],
    impact: 'Facilitated development of innovative solutions for community challenges',
    metrics: [
      { label: 'Participants', value: '500+' },
      { label: 'Projects', value: '100+' },
      { label: 'Partners', value: '20+' }
    ],
    achievements: [
      'Launched successful community initiatives',
      'Built partnerships with organizations',
      'Created lasting impact in communities'
    ],
    color: 'from-green-500/20 to-emerald-500/20',
    icon: Users
  }
]

const Contributions = () => {
  return (
    <section id="contributions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Professional Contributions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Making a difference through technology and community engagement
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contributions.map((contribution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="transform transition-all duration-300"
            >
              <Card className={`h-full bg-gradient-to-r ${contribution.color}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <contribution.icon className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-xl mb-1">{contribution.title}</CardTitle>
                        <p className="text-muted-foreground">{contribution.category}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-background/50">
                      {contribution.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Key Initiatives
                      </h4>
                      <ul className="space-y-2">
                        {contribution.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <ArrowRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-primary" />
                        Achievements
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {contribution.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background/50 p-3 rounded-lg"
                          >
                            {achievement}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Star className="h-5 w-5 text-primary" />
                        Impact Metrics
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        {contribution.metrics.map((metric, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background/50 p-4 rounded-lg text-center"
                          >
                            <div className="text-2xl font-bold text-primary">{metric.value}</div>
                            <div className="text-sm text-muted-foreground">{metric.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                        <GitPullRequest className="h-5 w-5" />
                        Overall Impact
                      </div>
                      <p className="text-muted-foreground">{contribution.impact}</p>
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

export default Contributions 