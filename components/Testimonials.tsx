"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Dr. Emily Chen',
    role: 'CTO, AI Innovations Inc.',
    avatar: '/placeholder.svg?height=100&width=100',
    content: 'John\'s expertise in AI and machine learning is truly exceptional. His contributions to our voice cloning project were invaluable and helped us achieve breakthrough results.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Data Scientist, TechCorp',
    avatar: '/placeholder.svg?height=100&width=100',
    content: 'Working with John was a game-changer for our team. His deep understanding of complex ML algorithms and ability to implement them efficiently set new standards for our projects.',
  },
  {
    name: 'Sarah Thompson',
    role: 'VP of Engineering, DataTech Solutions',
    avatar: '/placeholder.svg?height=100&width=100',
    content: 'John\'s work on our data pipeline optimization was outstanding. His innovative approach not only solved our immediate challenges but also set us up for future scalability.',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

