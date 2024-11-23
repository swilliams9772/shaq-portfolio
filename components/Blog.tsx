"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    title: 'Demystifying Transformer Architecture: A Deep Dive',
    date: 'October 15, 2023',
    excerpt: 'In this post, we break down the Transformer architecture, explaining its components and why it\'s so powerful for NLP tasks.',
    tags: ['Machine Learning', 'NLP', 'Transformers'],
    link: '/blog/demystifying-transformer-architecture',
  },
  {
    title: 'Ethical Considerations in AI Development',
    date: 'September 28, 2023',
    excerpt: 'As AI becomes more prevalent, it\'s crucial to consider the ethical implications. This post explores key ethical considerations in AI development.',
    tags: ['AI Ethics', 'Responsible AI'],
    link: '/blog/ethical-considerations-in-ai',
  },
  {
    title: 'Optimizing PyTorch Performance: Tips and Tricks',
    date: 'August 5, 2023',
    excerpt: 'Learn how to squeeze every ounce of performance out of your PyTorch models with these optimization techniques.',
    tags: ['PyTorch', 'Performance Optimization'],
    link: '/blog/optimizing-pytorch-performance',
  },
]

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-2">{post.date}</p>
                  <p className="mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="p-6 pt-0
">
                  <Button asChild>
                    <a href={post.link}>Read More</a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <a href="/blog">View All Posts</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Blog

