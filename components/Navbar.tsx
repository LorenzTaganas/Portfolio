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
    { name: 'green' as const, colorClass: 'bg-[#10B981]' },
    { name: 'white' as const, colorClass: 'bg-[#FFFFFF]' },
    { name: 'blue' as const, colorClass: 'bg-[#3B82F6]' },
    { name: 'red' as const, colorClass: 'bg-[#EF4444]' },
    { name: 'orange' as const, colorClass: 'bg-[#F97316]' },
    { name: 'purple' as const, colorClass: 'bg-[#8B5CF6]' },
    { name: 'grey' as const, colorClass: 'bg-[#6B7280]' },
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navbar backdrop-blur-md shadow-md shadow-black/5' : 'bg-transparent'
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
                className="ml-1 p-2 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-purple-500/10 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer border-none outline-none select-none"
                aria-label="Choose Accent Color"
                title={`Accent: ${accentColor}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-palette">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                  <path d="M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
              </button>

              {isColorDropdownOpen && (
                <>
                  {/* Overlay to close dropdown */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsColorDropdownOpen(false)}
                  />

                  {/* Horizontal Pill Palette Popup matching user screenshot */}
                  <div className="absolute right-0 mt-3 bg-[#181920]/95 backdrop-blur-xl border border-gray-700/60 rounded-2xl px-4 py-3 shadow-2xl z-50 flex items-center gap-3.5">
                    {accentOptions.map((opt) => {
                      const isSelected = accentColor === opt.name
                      return (
                        <button
                          key={opt.name}
                          onClick={() => {
                            setAccentColor(opt.name)
                            setIsColorDropdownOpen(false)
                          }}
                          className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-200 ${opt.colorClass} ${isSelected
                            ? 'ring-2 ring-white ring-offset-2 ring-offset-[#181920] scale-110 shadow-lg'
                            : 'opacity-85 hover:opacity-100 hover:scale-110'
                            }`}
                          title={opt.name}
                          aria-label={opt.name}
                        />
                      )
                    })}
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
                    className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center border-2 transition-all duration-200 ${accentColor === opt.name
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
