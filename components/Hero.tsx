'use client'

import React, { useState, useEffect } from 'react'

const roles = [
  'Full Stack Engineer',
  'Frontend Specialist',
  'Backend Architect',
  'Mobile Developer',
  'Quality Assurance Engineer',
  'Salesforce Developer',
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
      timeout = setTimeout(
        () => setCharIndex((c) => c + 1),
        charIndex === target.length ? 2200 : 70
      )
      if (charIndex === target.length) {
        timeout = setTimeout(() => setIsDeleting(true), 2200)
      }
    } else if (isDeleting && charIndex >= 0) {
      setDisplayed(target.slice(0, charIndex))
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 35)
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
      const navHeight = 75
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden tech-grid-bg"
    >
      {/* Ambient Horizon Backlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[380px] bg-gradient-to-b from-sky-500/10 via-sky-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl w-full mx-auto z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Display Typography mirroring reference screenshot */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow with dash */}
            <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-gray-400 uppercase mb-5 animate-fade-in">
              <span className="w-6 h-[1px] bg-gray-500" />
              <span>FULL STACK ENGINEER & QA SPECIALIST</span>
            </div>

            {/* Huge Display Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.05] animate-slide-up">
              Lorenz
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-800 to-sky-600 dark:from-white dark:via-slate-200 dark:to-sky-300">
                Taganas.
              </span>
            </h1>

            {/* Typewriter Role Line */}
            <div className="mt-5 flex items-center gap-2 font-mono text-base sm:text-lg text-slate-800 dark:text-gray-300">
              <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                ACTIVE FOCUS ·
              </span>
              <span className="text-sky-600 dark:text-sky-400 font-semibold tracking-wide">
                {displayed}
              </span>
              <span className="w-1.5 h-4 bg-sky-600 dark:bg-sky-400 animate-blink-cursor" />
            </div>

            {/* Sub-chromatic System Description */}
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-xl font-light">
              Building full-stack digital products and enterprise software systems. Bridging robust software engineering with meticulous Quality Assurance testing, clean architecture, and precision design.
            </p>

            {/* Telemetry Tag Rack */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5 font-mono text-[11px]">
              <span className="px-3 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-gray-700 dark:text-gray-300">
                ● FULL STACK
              </span>
              <span className="px-3 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-gray-700 dark:text-gray-300">
                ● QA AUTOMATION
              </span>
              <span className="px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400">
                ● OPEN TO ROLES
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="flex items-center gap-2.5 px-6 py-3 rounded-lg bg-white text-black font-mono text-xs font-semibold tracking-wider hover:bg-sky-200 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
              >
                <span>EXPLORE WORK</span>
                <span>→</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.04] border border-white/[0.12] text-white font-mono text-xs tracking-wider hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300"
              >
                <span>INITIATE CONTACT</span>
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/[0.02] border border-white/[0.08] text-gray-400 hover:text-white font-mono text-xs tracking-wider hover:bg-white/[0.06] transition-all duration-300"
              >
                <span>DOSSIER (CV) ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Specimen Horizon Panel matching reference image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="horizon-panel w-full max-w-md rounded-2xl p-6 sm:p-7 border border-white/[0.1] shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between font-mono text-[11px] text-gray-400 tracking-wider mb-5">
                <span className="uppercase tracking-widest text-gray-400">HORIZON SPECIMEN</span>
                <span className="w-2 h-2 rounded-full bg-sky-400 beacon-online shadow-[0_0_8px_#38bdf8]" />
              </div>

              {/* Picture Frame with Hairline Inset Rim */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.12] bg-[#0c0e14] mb-5 group">
                <img
                  src="/profile.jpg"
                  alt="Lorenz Taganas Portrait"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11141c] via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-white/90">
                  <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                    ID: LT-2026
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-emerald-400">
                    ● QA TESTED
                  </span>
                </div>
              </div>

              {/* Specimen Info */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Software Engineer · Quality Lead
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mt-2 font-light">
                Specialized in full-stack web and mobile engineering, automated QA verification, and enterprise system reliability.
              </p>

              {/* Progress Bar from Screenshot */}
              <div className="mt-5 pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
                <div className="flex items-center justify-between font-mono text-[11px] text-gray-500 dark:text-gray-400 mb-2">
                  <span className="uppercase tracking-widest text-gray-500">SYSTEM READINESS</span>
                  <span className="text-slate-900 dark:text-white font-medium">98 / 100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-black/[0.08] dark:bg-white/[0.08] overflow-hidden mb-4">
                  <div className="h-full w-[98%] bg-gradient-to-r from-sky-500 to-sky-400 dark:from-sky-400 dark:to-white rounded-full" />
                </div>

                {/* Pill Toggles from Screenshot: Live / Quiet / Idle */}
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-black/[0.06] dark:bg-white/[0.08] text-slate-900 dark:text-white border border-black/10 dark:border-white/15">
                      Live
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
                      Quiet
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
                      Idle
                    </span>
                  </div>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">+04.6% ACCURACY</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Technical Telemetry Specimen strip */}
        <div className="mt-16 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-gray-500 uppercase tracking-widest select-none">
          <div className="flex items-center gap-4">
            <span>RADIAL SURFACE</span>
            <span>·</span>
            <span>1PX INSET RIM</span>
            <span>·</span>
            <span>70% HORIZON</span>
            <span>·</span>
            <span>RADIUS 7 / 14</span>
          </div>
          <div className="flex items-center gap-4">
            <span>EASE · CUBIC-BEZIER(.15,.83,.66,1)</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
