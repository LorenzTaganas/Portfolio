'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from './ThemeProvider'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isColorDropdownOpen, setIsColorDropdownOpen] = useState(false)
  const { theme, toggleTheme, accentColor, setAccentColor } = useTheme()
  const navRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })

  const accentOptions = [
    { name: 'default' as const, colorClass: 'bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-500' },
    { name: 'pink' as const, colorClass: 'bg-[#FF79C6]' },
    { name: 'emerald' as const, colorClass: 'bg-[#10B981]' },
    { name: 'cyan' as const, colorClass: 'bg-[#06B6D4]' },
    { name: 'orange' as const, colorClass: 'bg-[#F97316]' },
    { name: 'purple' as const, colorClass: 'bg-[#8B5CF6]' },
    { name: 'amber' as const, colorClass: 'bg-[#F59E0B]' },
  ]

  const [activeSection, setActiveSection] = useState('home')

  // Update sliding indicator position whenever activeSection changes
  useEffect(() => {
    const navItems = ['home', 'about', 'projects', 'experience', 'contact']
    const activeIndex = navItems.indexOf(activeSection)
    const activeEl = itemRefs.current[activeIndex]
    const navEl = navRef.current
    if (activeEl && navEl) {
      const navRect = navEl.getBoundingClientRect()
      const elRect = activeEl.getBoundingClientRect()
      setIndicatorStyle({
        left: elRect.left - navRect.left + elRect.width / 2 - 8, // center a 16px bar
        width: 16,
        opacity: 1,
      })
    }
  }, [activeSection])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          if (id) {
            setActiveSection(id)
          }
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)
    
    const sections = ['home', 'about', 'projects', 'experience', 'contact']
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const navHeight = 70
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - navHeight
      const startPosition = window.scrollY
      const distance = targetPosition - startPosition
      const duration = 750
      let startTime: number | null = null

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      }

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        const easeProgress = easeInOutCubic(progress)

        window.scrollTo(0, startPosition + distance * easeProgress)

        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll)
        } else {
          // Trigger section arrival highlight/pulse animation
          element.classList.remove('section-active-pulse')
          void element.offsetWidth
          element.classList.add('section-active-pulse')
          setTimeout(() => {
            element.classList.remove('section-active-pulse')
          }, 1000)
        }
      }

      requestAnimationFrame(animateScroll)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navbar backdrop-blur-md shadow-md shadow-black/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">
              L
            </div>
            <span className="text-white dark:text-white light:text-gray-900 font-semibold text-lg hidden sm:block">Lorenz Taganas</span>
          </a>

          {/* Desktop Navigation */}
          <div ref={navRef} className="hidden md:flex items-center space-x-1 relative">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                ref={(el) => { itemRefs.current[index] = el }}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-4 py-2 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-purple-500/10 rounded-lg transition-all duration-300"
              >
                {item.name}
              </a>
            ))}

            {/* Sliding active indicator */}
            <span
              className="absolute bottom-1.5 h-0.5 rounded-full bg-pink-500 pointer-events-none"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
                transition: 'left 0.35s cubic-bezier(0.4,0,0.2,1), width 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease',
              }}
            />
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-purple-500/10 rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>
            
            {/* Paint Selector Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setIsColorDropdownOpen(!isColorDropdownOpen)}
                className="ml-4 p-2.5 bg-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center cursor-pointer border-none outline-none select-none"
                aria-label="Choose Accent Color"
                title={`Accent: ${accentColor}`}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5"
                >
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.63-.77 1.63-1.7 0-.45-.18-.85-.46-1.2-.29-.34-.47-.79-.47-1.27 0-1.1.9-2 2-2h1.7c5.5 0 10-4.1 10-9.6C22 5.2 17.5 2 12 2Z"/>
                </svg>
              </button>

              {isColorDropdownOpen && (
                <>
                  {/* Invisible overlay to close dropdown */}
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsColorDropdownOpen(false)} 
                  />
                  
                  {/* Floating Color Menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-navbar backdrop-blur-xl border border-border-color rounded-xl p-3 shadow-2xl z-50 flex flex-col gap-2">
                    <span className="text-[10px] uppercase font-bold text-gray-400 px-1 tracking-wider">Choose Accent</span>
                    <div className="grid grid-cols-4 gap-2">
                      {accentOptions.map((opt) => (
                        <button
                          key={opt.name}
                          onClick={() => {
                            setAccentColor(opt.name)
                            setIsColorDropdownOpen(false)
                          }}
                          className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center border-2 transition-all duration-200 ${
                            accentColor === opt.name 
                              ? 'border-white scale-110 shadow-md' 
                              : 'border-transparent hover:scale-105'
                          } ${opt.colorClass}`}
                          title={opt.name === 'default' ? 'Default Theme' : opt.name}
                        >
                          {accentColor === opt.name && (
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
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
        <div className="md:hidden bg-navbar backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative block px-3 py-2 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-purple-500/10 rounded-lg transition-all duration-300"
                >
                  {isActive && (
                    <span className="absolute left-1 top-1/2 -translate-y-1/2 w-1 h-4 bg-pink-500 rounded-full" />
                  )}
                  {item.name}
                </a>
              )
            })}
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-full text-left px-3 py-2 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-purple-500/10 rounded-lg transition-all duration-300 flex items-center gap-2.5 cursor-pointer border-none outline-none select-none"
            >
              {theme === 'dark' ? (
                <>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-4 h-4"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                  <span>Dark Mode</span>
                </>
              )}
            </button>

            {/* Mobile Accent Selector Grid */}
            <div className="px-3 py-2 space-y-2 border-t border-border-color mt-1">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block">Accent Color</span>
              <div className="flex flex-wrap gap-2.5">
                {accentOptions.map((opt) => (
                  <button
                    key={opt.name}
                    onClick={() => setAccentColor(opt.name)}
                    className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center border-2 transition-all duration-200 ${
                      accentColor === opt.name 
                        ? 'border-white scale-110 shadow-md' 
                        : 'border-transparent'
                    } ${opt.colorClass}`}
                    aria-label={opt.name}
                  >
                    {accentColor === opt.name && (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
