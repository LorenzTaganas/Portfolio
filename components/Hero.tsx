'use client'

import React, { useState, useEffect } from 'react'

const roles = [
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',
  'Mobile Developer',
  'UI/UX Designer',
  'Salesforce Developer',
  'Software Tester',
]

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const target = roles[currentRole]
    let timeout: NodeJS.Timeout

    if (!isDeleting && charIndex <= target.length) {
      setDisplayed(target.slice(0, charIndex))
      timeout = setTimeout(() => setCharIndex((c) => c + 1), charIndex === target.length ? 1800 : 75)
      if (charIndex === target.length) {
        timeout = setTimeout(() => setIsDeleting(true), 1800)
      }
    } else if (isDeleting && charIndex >= 0) {
      setDisplayed(target.slice(0, charIndex))
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40)
      if (charIndex === 0) {
        setIsDeleting(false)
        setCurrentRole((r) => (r + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentRole])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const navHeight = 70
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navHeight
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="relative w-full px-4 pt-28 pb-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-6xl flex-col items-center justify-between">
        <div className="grid md:grid-cols-12 gap-12 items-center w-full my-auto">

          {/* Text Content */}
          <div className="md:col-span-7 text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1">
            <h1 className="text-4xl font-bold tracking-tight text-white light:text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up leading-tight">
              Hi, I&apos;m <span className="text-pink-500">Lorenz</span>
            </h1>

            {/* Typewriter Role */}
            <p className="mt-4 text-xl text-gray-300 md:text-2xl animate-slide-up font-medium flex items-center flex-wrap gap-x-2">
              <span>I am a</span>
              <span className="text-pink-400">{displayed}</span>
              <span className="inline-block w-0.5 h-6 bg-pink-400 animate-blink-cursor" />
            </p>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-400 light:text-gray-600 max-w-xl">
              Building full-stack applications and ensuring software quality through comprehensive testing.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in w-full">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="group rounded-lg bg-pink-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-pink-400 hover:shadow-lg hover:shadow-pink-500/30 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="group rounded-lg border-2 border-purple-500 px-6 py-3 font-medium text-purple-300 transition-all duration-300 hover:bg-purple-500 transform hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="group rounded-lg border-2 border-purple-500 px-6 py-3 font-medium text-purple-300 transition-all duration-300 hover:bg-purple-500/10 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">📄 Resume</span>
              </a>
            </div>
          </div>

          {/* Picture Content */}
          <div className="md:col-span-5 flex justify-center order-1 md:order-2 animate-fade-in">
            <div className="relative group w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[400px]">
              {/* Outer Decorative Gradient Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 opacity-30 blur-sm group-hover:opacity-75 transition duration-500 group-hover:duration-200" />

              {/* Floating accent background glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />

              {/* Main Image Wrapper */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-purple-500/20 bg-gray-900 shadow-2xl transition duration-500 transform group-hover:scale-[1.02] group-hover:rotate-1">
                <img
                  src="/profile.jpg"
                  alt="Lorenz Taganas Portrait"
                  className="w-full h-full object-cover object-top transition duration-500 filter brightness-95 group-hover:brightness-100"
                />

                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

        </div>

        {/* Scrollable Indicator Mark (Non-clickable visual mark) */}
        <div className="mt-8 pt-4 flex justify-center animate-fade-in pointer-events-none select-none">
          <div className="flex flex-col items-center gap-2 opacity-80">
            <span className="text-xs font-semibold uppercase tracking-widest text-pink-400">
              Scroll Down
            </span>
            {/* Animated Mouse & Chevron Icon */}
            <div className="relative w-6 h-10 rounded-full border-2 border-pink-400/60 flex justify-center p-1.5">
              <div className="w-1.5 h-2.5 bg-pink-400 rounded-full animate-bounce" />
            </div>
            <svg
              className="w-4 h-4 text-pink-400 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

