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
    { name: 'white' as const, colorClass: 'accent-swatch-white', label: 'White / Black' },
    { name: 'blue' as const, colorClass: 'bg-[#38BDF8]', label: 'Cyan / Ice' },
    { name: 'green' as const, colorClass: 'bg-[#10B981]', label: 'Emerald' },
    { name: 'red' as const, colorClass: 'bg-[#F43F5E]', label: 'Rose' },
    { name: 'orange' as const, colorClass: 'bg-[#F97316]', label: 'Amber' },
    { name: 'purple' as const, colorClass: 'bg-[#A855F7]', label: 'Violet' },
    { name: 'grey' as const, colorClass: 'bg-[#94A3B8]', label: 'Slate' },
  ]

  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '#home', code: '01' },
    { name: 'About', href: '#about', code: '02' },
    { name: 'Projects', href: '#projects', code: '03' },
    { name: 'Journey', href: '#experience', code: '04' },
    { name: 'Contact', href: '#contact', code: '05' },
  ]

  // Update sliding indicator position whenever activeSection changes
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'experience', 'contact']
    const activeIndex = sections.indexOf(activeSection)
    const activeEl = itemRefs.current[activeIndex]
    const navEl = navRef.current
    if (activeEl && navEl) {
      const navRect = navEl.getBoundingClientRect()
      const elRect = activeEl.getBoundingClientRect()
      setIndicatorStyle({
        left: elRect.left - navRect.left + 12,
        width: elRect.width - 24,
        opacity: 1,
      })
    }
  }, [activeSection])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const navHeight = 75
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-navbar)] backdrop-blur-xl border-b border-[var(--rim-hairline)] shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-[var(--rim-hairline)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Mark (Lumen Edge Technical Monogram) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--radial-light)] border border-[var(--rim-hairline)] group-hover:border-[var(--rim-hairline-hover)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner">
              <span className="text-[11px] text-[var(--text-fore)] font-mono font-bold">▲</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-semibold tracking-widest text-[var(--text-fore)] uppercase">
                LORENZ TAGANAS
              </span>
              <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
                PORTFOLIO · DEV & QA
              </span>
            </div>
          </a>

          {/* Center / Right Telemetry Status Pill (Directly from reference screenshot) */}
          <div className="hidden xl:flex items-center gap-3 font-mono text-[11px] tracking-wider text-[var(--text-muted)] select-none">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--radial-light)] border border-[var(--rim-hairline)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 beacon-online shadow-[0_0_8px_#34d399]" />
              <span className="text-[var(--text-fore)] font-medium">SYSTEM ONLINE</span>
            </span>
            <span className="text-[var(--text-dim)]">·</span>
            <span>THEME · {theme.toUpperCase()}</span>
            <span className="text-[var(--text-dim)]">·</span>
            <span className="text-[var(--text-muted)]">V 2.4</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav ref={navRef} className="hidden md:flex items-center space-x-1 relative">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <a
                  key={item.name}
                  ref={(el) => {
                    itemRefs.current[index] = el
                  }}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 font-mono text-xs tracking-wider transition-colors duration-200 rounded-md ${
                    isActive
                      ? 'text-[var(--accent-primary)] font-medium'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <span className="text-[10px] text-gray-600 mr-1.5 font-normal">
                    {item.code}
                  </span>
                  {item.name}
                </a>
              )
            })}

            {/* Sliding Luminous Horizon Indicator */}
            <span
              className="absolute bottom-0 h-[2px] bg-[var(--accent-primary)] pointer-events-none rounded-full shadow-[0_0_8px_var(--accent-glow)]"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
                transition:
                  'left 0.35s cubic-bezier(0.16, 1, 0.3, 1), width 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease',
              }}
            />

            {/* Controls Divider */}
            <div className="w-[1px] h-4 bg-[var(--rim-hairline)] mx-2" />

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-[var(--text-muted)] hover:text-[var(--text-fore)] hover:bg-[var(--radial-light)] rounded-lg transition-all duration-200 border border-transparent hover:border-[var(--rim-hairline-hover)]"
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
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
                  className="w-4 h-4"
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
                  className="w-4 h-4"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>

            {/* Color Accent Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsColorDropdownOpen(!isColorDropdownOpen)}
                className="p-2 text-[var(--text-muted)] hover:text-[var(--text-fore)] hover:bg-[var(--radial-light)] rounded-lg transition-all duration-200 border border-transparent hover:border-[var(--rim-hairline-hover)] flex items-center justify-center"
                aria-label="Choose Accent Color"
                title={`Accent: ${accentColor}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3a9 9 0 0 1 0 18v-9h9" />
                </svg>
              </button>

              {isColorDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsColorDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 bg-[var(--bg-panel)]/95 backdrop-blur-2xl border border-[var(--rim-hairline)] rounded-xl px-3 py-2.5 shadow-2xl z-50 flex items-center gap-2.5">
                    {accentOptions.map((opt) => {
                      const isSelected = accentColor === opt.name
                      return (
                        <button
                          key={opt.name}
                          onClick={() => {
                            setAccentColor(opt.name)
                            setIsColorDropdownOpen(false)
                          }}
                          className={`w-5 h-5 rounded-full cursor-pointer transition-all duration-200 ${
                            opt.colorClass
                          } ${
                            isSelected
                              ? 'ring-2 ring-[var(--text-fore)] ring-offset-2 ring-offset-[var(--bg-panel)] scale-110 shadow-lg'
                              : 'opacity-70 hover:opacity-100 hover:scale-110'
                          }`}
                          title={opt.label}
                          aria-label={opt.name}
                        />
                      )
                    })}
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[var(--text-muted)] hover:text-[var(--text-fore)] p-2"
            aria-label="Open menu"
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

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-navbar)] backdrop-blur-2xl border-b border-[var(--rim-hairline)] px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-3 py-2 rounded-lg font-mono text-xs tracking-wider ${
                  isActive
                    ? 'bg-white/[0.08] text-white font-medium'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="text-gray-600 mr-2">{item.code}</span>
                {item.name}
              </a>
            )
          })}
          <div className="pt-3 border-t border-[var(--rim-hairline)] flex items-center justify-between">
            <button
              onClick={toggleTheme}
              className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text-fore)] flex items-center gap-2"
            >
              <span>THEME: {theme.toUpperCase()}</span>
            </button>
            <div className="flex gap-2">
              {accentOptions.map((opt) => (
                <button
                  key={opt.name}
                  onClick={() => setAccentColor(opt.name)}
                  className={`w-5 h-5 rounded-full ${opt.colorClass} ${
                    accentColor === opt.name ? 'ring-2 ring-white' : 'opacity-70'
                  }`}
                  aria-label={opt.name}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
