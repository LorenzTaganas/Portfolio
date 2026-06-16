'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 dark:bg-black/80 light:bg-white/80 backdrop-blur-md shadow-lg shadow-purple-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">
              L
            </div>
            <span className="text-white dark:text-white light:text-gray-900 font-semibold text-lg hidden sm:block">Lorenz Taganas</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-purple-500/10 rounded-lg transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-purple-500/10 rounded-lg transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            
            <a
              href="/resume.pdf"
              download
              className="ml-4 px-6 py-2 bg-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 dark:bg-black/95 light:bg-white/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-purple-500/10 rounded-lg transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-full text-left px-3 py-2 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-purple-500/10 rounded-lg transition-all duration-300"
            >
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            
            <a
              href="/resume.pdf"
              download
              className="block px-3 py-2 mt-2 bg-pink-500 text-white rounded-lg text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
