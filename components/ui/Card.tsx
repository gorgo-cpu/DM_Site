import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClasses = hover 
    ? 'hover:-translate-y-1 hover:shadow-xl transition-all duration-300' 
    : ''
  
  return (
    <div
      className={`bg-primary-900/50 backdrop-blur-sm border border-primary-800 rounded-lg p-6 sm:p-8 shadow-md ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  )
}

