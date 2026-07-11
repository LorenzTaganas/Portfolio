'use client'

import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Snowflakes from './Snowflakes'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Snowflakes />
      <Navbar />
      {children}
      <Footer />

      {/* Floating Sticky Scroll to Top Button on lower right */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-pink-500 text-[var(--accent-text)] rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:bg-pink-400 hover:scale-110 active:scale-95 hover:shadow-pink-500/30 ${
          isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <span className="text-xl font-bold">↑</span>
      </button>
    </>
  )
}
