'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from './ThemeProvider'

interface Particle {
  x: number
  y: number
  radius: number
  opacity: number
  speedY: number
  speedX: number
  swaySpeed: number
  swayOffset: number
  color: string
}

function toRgbaPrefix(color: string): string {
  const hex = color.replace('#', '')
  const normalized = hex.length === 3
    ? hex.split('').map((part) => `${part}${part}`).join('')
    : hex

  if (normalized.length !== 6) return 'rgba(240, 244, 252, '

  const red = Number.parseInt(normalized.slice(0, 2), 16)
  const green = Number.parseInt(normalized.slice(2, 4), 16)
  const blue = Number.parseInt(normalized.slice(4, 6), 16)
  return `rgba(${red}, ${green}, ${blue}, `
}

const Snowflakes = () => {
  const { accentColor } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isEnabled, setIsEnabled] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    setIsClient(true)
    const saved = localStorage.getItem('lumen_particles_enabled')
    if (saved !== null) {
      setIsEnabled(saved === 'true')
    }
  }, [])

  const toggleSnow = () => {
    const nextState = !isEnabled
    setIsEnabled(nextState)
    localStorage.setItem('lumen_particles_enabled', String(nextState))
  }

  useEffect(() => {
    if (!isEnabled || !isClient) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent-primary')
      .trim()
    const accentRgba = toRgbaPrefix(accent)
    const colors = [accentRgba, accentRgba, accentRgba]

    const particleCount = Math.min(55, Math.floor(width / 24))
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.8 + Math.random() * 2.2,
        opacity: 0.15 + Math.random() * 0.55,
        speedY: 0.35 + Math.random() * 0.85,
        speedX: (Math.random() - 0.5) * 0.3,
        swaySpeed: 0.008 + Math.random() * 0.015,
        swayOffset: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    let time = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      time += 1

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.y += p.speedY
        p.x += Math.sin(time * p.swaySpeed + p.swayOffset) * 0.45 + p.speedX

        // Wrap around boundaries smoothly
        if (p.y > height + 10) {
          p.y = -10
          p.x = Math.random() * width
        }
        if (p.x > width + 10) p.x = -10
        if (p.x < -10) p.x = width + 10

        // Soft radial glow particle
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 2.5
        )
        gradient.addColorStop(0, `${p.color}${p.opacity})`)
        gradient.addColorStop(0.5, `${p.color}${p.opacity * 0.45})`)
        gradient.addColorStop(1, `${p.color}0)`)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Crisp core dot for crystal twinkle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 0.65, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${Math.min(1, p.opacity + 0.2)})`
        ctx.fill()
      }

      animationFrameRef.current = requestAnimationFrame(render)
    }

    animationFrameRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [accentColor, isEnabled, isClient])

  if (!isClient) return null

  return (
    <>
      {/* Background Canvas for silky smooth particles */}
      {isEnabled && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-40"
          style={{ opacity: 0.85 }}
        />
      )}

      {/* Discrete Technical HUD Toggle in Bottom Left Corner */}
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={toggleSnow}
          aria-label="Toggle snow particles"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase backdrop-blur-md transition-all duration-300 border border-white/[0.08] hover:border-white/25 bg-[#0a0d14]/75 text-gray-400 hover:text-white shadow-lg"
          title="Toggle ambient snow particles"
        >
          <span
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              isEnabled
                ? 'bg-sky-400 shadow-[0_0_6px_#38bdf8]'
                : 'bg-gray-600'
            }`}
          />
          <span>SNOW {isEnabled ? 'LIVE' : 'OFF'}</span>
        </button>
      </div>
    </>
  )
}

export default Snowflakes
