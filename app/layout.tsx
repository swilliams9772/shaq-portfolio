import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Shaquille Williams | AI Engineer & Community Builder',
    template: '%s | Shaquille Williams'
  },
  description: 'Senior Software Engineer and AI Specialist with expertise in machine learning, full-stack development, and community tech initiatives.',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'Software Development',
    'Community Tech',
    'Python',
    'TensorFlow',
    'PyTorch',
    'Full Stack',
    'Voice Cloning',
    'Social Impact'
  ],
  authors: [{ name: 'Shaquille Williams' }],
  creator: 'Shaquille Williams',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shaquillewilliams.com',
    title: 'Shaquille Williams | AI Engineer & Community Builder',
    description: 'Senior Software Engineer and AI Specialist focused on AI-driven solutions for social impact.',
    siteName: 'Shaquille Williams Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaquille Williams | AI Engineer & Community Builder',
    description: 'Senior Software Engineer and AI Specialist focused on AI-driven solutions for social impact.',
    creator: '@swilliams9772'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
