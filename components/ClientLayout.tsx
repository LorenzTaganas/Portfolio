'use client'

import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Snowflakes from './Snowflakes'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let currentY = window.scrollY
    let targetY = window.scrollY
    let isAnimating = false
    const ease = 0.095

    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement
      if (target && target.closest('.overflow-y-auto, .overflow-scroll')) return

      e.preventDefault()
      targetY += e.deltaY * 0.95
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      targetY = Math.max(0, Math.min(targetY, maxScroll))

      if (!isAnimating) {
        isAnimating = true
        requestAnimationFrame(smoothStep)
      }
    }

    const smoothStep = () => {
      const diff = targetY - currentY
      currentY += diff * ease

      window.scrollTo(0, Math.round(currentY))

      if (Math.abs(diff) > 0.5) {
        requestAnimationFrame(smoothStep)
      } else {
        currentY = targetY
        window.scrollTo(0, targetY)
        isAnimating = false
      }
    }

    const syncScroll = () => {
      if (!isAnimating) {
        currentY = window.scrollY
        targetY = window.scrollY
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('scroll', syncScroll, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', syncScroll)
    }
  }, [])

  return (
    <>
      <Snowflakes />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

