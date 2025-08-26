'use client'

import * as React from 'react'
import { Header } from "@/components/header"

interface BlogLayoutProps {
  children: React.ReactNode
}

export function BlogLayout({ children }: BlogLayoutProps) {
  const [darkMode, setDarkMode] = React.useState(() => {
    // Initialize from localStorage if available, otherwise default to false (light mode)
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode')
      return savedMode !== null ? savedMode === 'true' : false
    }
    return false
  })

  React.useEffect(() => {
    // Apply the dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleToggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode.toString())
  }

  return (
    <div className={`min-h-screen flex flex-col w-full ${darkMode ? 'dark' : ''}`}>
      <Header 
        darkMode={darkMode} 
        onToggleDarkMode={handleToggleDarkMode} 
      />
      {children}
    </div>
  )
}
