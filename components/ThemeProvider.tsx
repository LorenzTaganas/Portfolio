'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'
export type AccentColor = 'green' | 'white' | 'blue' | 'red' | 'orange' | 'purple' | 'grey'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  accentColor: AccentColor
  setAccentColor: (color: AccentColor) => void
  cycleAccentColor: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const accentColors: AccentColor[] = ['blue', 'green', 'white', 'red', 'orange', 'purple', 'grey']

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [accentColor, setAccentColor] = useState<AccentColor>('blue')

  useEffect(() => {
    // 1. Load Theme
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('light', savedTheme === 'light')
    } else {
      document.documentElement.classList.remove('light')
    }

    // 2. Load Accent Color
    const savedAccent = localStorage.getItem('accentColor') as AccentColor | null
    if (savedAccent && accentColors.includes(savedAccent)) {
      setAccentColor(savedAccent)
      applyAccentClass(savedAccent)
    } else {
      applyAccentClass('blue')
    }
  }, [])

  const applyAccentClass = (accent: AccentColor) => {
    document.documentElement.classList.remove(
      'accent-green',
      'accent-white',
      'accent-blue',
      'accent-red',
      'accent-orange',
      'accent-purple',
      'accent-grey',
      'accent-pink',
      'accent-emerald',
      'accent-cyan',
      'accent-amber'
    )
    document.documentElement.classList.add(`accent-${accent}`)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('light', newTheme === 'light')
  }

  const handleSetAccentColor = (color: AccentColor) => {
    setAccentColor(color)
    localStorage.setItem('accentColor', color)
    applyAccentClass(color)
  }

  const cycleAccentColor = () => {
    const currentIndex = accentColors.indexOf(accentColor)
    const nextIndex = (currentIndex + 1) % accentColors.length
    const nextAccent = accentColors[nextIndex]
    
    handleSetAccentColor(nextAccent)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accentColor, setAccentColor: handleSetAccentColor, cycleAccentColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
