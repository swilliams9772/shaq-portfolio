"use client"

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface ClientIconProps {
  Icon: LucideIcon
  className?: string
}

export const ClientIcon = ({ Icon, className }: ClientIconProps) => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <Icon className={className} />
} 