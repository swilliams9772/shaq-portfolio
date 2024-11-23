"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Building2, Trophy, ChartBar } from 'lucide-react'

const experiences = [
  {
    role: 'Technical Program Director',
    company: 'Rose from Concrete',
    period: 'January 2021 - Present',
    description: [
      'Forged strategic partnerships with 40+ community centers across Brooklyn, deploying ML models to assess and optimize program reach',
      'Developed predictive models using Python, Scikit-learn, and Geopandas on GCP to impact over 20,000 NYC residents',
      'Led implementation of community-focused programs using AWS Lambda and Docker for scalable resource management',
      'Designed decentralized energy solutions and AI-powered monitoring tools for program sustainability',
    ],
    skills: ['Python', 'Machine Learning', 'AWS', 'Docker', 'GCP', 'Community Development'],
    impact: 'Positively impacted over 20,000 NYC residents through data-driven community programs',
    metrics: [
      { label: 'Community Centers', value: '40+' },
      { label: 'Residents Impacted', value: '20,000+' },
      { label: 'Team Size', value: '15' },
    ],
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    role: 'Lead AP Physics Teacher',
    company: 'Success Academy High School of the Liberal Arts',
    period: 'July 2019 - 2022',
    description: [
      'Applied advanced data analysis and statistical techniques in Python, optimizing lesson plans for 150+ students',
      'Awarded the "Teacher Excellence Award" for exceptional instructional strategies',
      'Led a team of 13 teachers, fostering a collaborative academic environment',
      'Integrated social and economic justice perspectives into physics curricula',
    ],
    skills: ['Leadership', 'Data Analysis', 'Education', 'Team Management', 'Curriculum Development'],
    impact: 'Significantly improved student performance outcomes and fostered STEM education',
    metrics: [
      { label: 'Students', value: '150+' },
      { label: 'Awards', value: '1' },
      { label: 'Team Size', value: '13' },
    ],
    color: 'from-green-500/20 to-lime-500/20'
  },
  {
    role: 'Risk/Quantitative Summer Analyst',
    company: 'BlackRock',
    period: 'June 2018 - August 2018',
    description: [
      'Automated data processing pipelines in Python and SQL, reducing manual effort by 30%',
      'Implemented ML algorithms for portfolio anomaly detection, saving $30,000 annually',
      'Finalist in firm-wide portfolio competition with highest active return in cohort',
      'Built visualization dashboards for data-driven decision making',
    ],
    skills: ['Python', 'SQL', 'Machine Learning', 'Financial Analysis', 'Data Visualization'],
    impact: 'Improved portfolio management accuracy for $98 Billion AUM',
    metrics: [
      { label: 'Savings', value: '$30,000' },
      { label: 'Portfolio Size', value: '$98 Billion' },
      { label: 'Competition', value: '1st' },
    ],
    color: 'from-red-500/20 to-orange-500/20'
  },
  {
    role: 'Program Manager Apprentice',
    company: 'NYC Mayor\'s Office of Operations',
    period: 'January 2017 - June 2017',
    description: [
      'Led UX/UI improvements and accessibility enhancements for city websites',
      'Collaborated on wireframes, user flows, and storyboards for intuitive interfaces',
      'Presented design concepts to stakeholders and incorporated feedback',
      'Improved resident engagement through user-centered design',
    ],
    skills: ['UI/UX Design', 'Project Management', 'Stakeholder Management', 'Public Sector'],
    impact: 'Enhanced accessibility and user experience of NYC digital resources',
    metrics: [
      { label: 'Websites', value: '100+' },
      { label: 'Residents Impacted', value: '100,000+' },
      { label: 'Stakeholders', value: '100+' },
    ],
    color: 'from-yellow-500/20 to-pink-500/20'
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="transform transition-all duration-300"
            >
              <Card className={`overflow-hidden bg-gradient-to-r ${exp.color}`}>
                <CardHeader className="border-b border-border/50">
                  <CardTitle className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-[2fr,1fr] gap-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Trophy className="h-5 w-5 mr-2 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.description.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i }}
                              className="flex items-start"
                            >
                              <span className="h-2 w-2 rounded-full bg-primary mt-2 mr-2" />
                              <span className="text-muted-foreground">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <ChartBar className="h-5 w-5 mr-2 text-primary" />
                          Impact Metrics
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {exp.metrics.map((metric, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 * i }}
                              className="bg-background/50 p-4 rounded-lg text-center"
                            >
                              <div className="text-2xl font-bold text-primary">{metric.value}</div>
                              <div className="text-sm text-muted-foreground">{metric.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <motion.div
                              key={skill}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge 
                                variant="outline"
                                className="bg-background/50 hover:bg-background transition-colors"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Overall Impact</h4>
                        <p className="text-muted-foreground">{exp.impact}</p>
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

export default Experience

