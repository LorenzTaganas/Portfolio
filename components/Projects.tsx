'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface Project {
  id: string
  specimenNumber: string
  title: string
  subtitle: string
  category: string
  description: string
  fullDescription: string
  tech: string[]
  github: string
  demo?: string
  image?: string
  progress: number
  status: 'Live' | 'Quiet' | 'Production' | 'Testing'
  purpose: 'Capstone' | 'Personal' | 'Academic'
  metric: string
  features: string[]
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 'adcore',
      specimenNumber: 'SPECIMEN · 01',
      title: 'ADCore',
      subtitle: 'E-Commerce Platform for Digital & Traditional Art',
      category: 'FULL STACK WEB',
      description:
        'Full-featured e-commerce ecosystem connecting artists and collectors with shopping cart, stripe payment flow, and curated artist profiles.',
      fullDescription:
        'ArtHub is a comprehensive online marketplace engineered to empower digital and traditional artists. Built with a performant MERN stack architecture, it supports end-to-end shopping journeys including real-time inventory management, artist portfolio showcases, secure customer authentication, and payment workflows.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TailwindCSS'],
      github: 'https://github.com/LorenzTaganas/Arthubb',
      image: '/projects/adcore.png',
      progress: 98,
      status: 'Production',
      purpose: 'Capstone',
      metric: '+99.2% Uptime',
      features: [
        'Secure multi-tier JWT authentication for buyers and verified artists',
        'Responsive shopping cart with dynamic tax and shipping calculations',
        'High-resolution art catalog with instant category & price range filtering',
        'Dedicated artist profile pages with direct artwork inquiry channels',
      ],
    },
    {
      id: 'jam-master',
      specimenNumber: 'SPECIMEN · 02',
      title: 'Jam Master',
      subtitle: 'Rhythm Beat Mobile Game Experience',
      category: 'MOBILE & GAME DEV',
      description:
        'Interactive mobile rhythm game featuring dynamic track gameplay, custom beat mapping, combo multipliers, and low-latency audio sync.',
      fullDescription:
        'Jam Master is an adrenaline-fueled mobile rhythm arcade game developed with Java and Firebase. Players hit tempo-synchronized notes across multi-lane tracks with reactive lighting cues, combo streaks, real-time leaderboard sync, and smooth 60fps gesture controls.',
      tech: ['Java', 'Android SDK', 'Firebase', 'Mobile Game Engine'],
      github: 'https://github.com/LorenzTaganas/Jam-Master-Mobile-app',
      image: '/projects/jam_master.jpg',
      progress: 100,
      status: 'Production',
      purpose: 'Academic',
      metric: '60 FPS Target',
      features: [
        'Multi-lane beat detection engine synchronized to custom soundtracks',
        'Streak combo multiplier system (x2, x3, Perfect!) with particle effects',
        'Firebase cloud database integration for global high-score leaderboards',
        'Haptic vibration feedback tuned for rhythm accuracy',
      ],
    },
    {
      id: 'student-mgmt',
      specimenNumber: 'SPECIMEN · 03',
      title: 'Acadex',
      subtitle: 'Academic Administration & Records Engine',
      category: 'ENTERPRISE WEB',
      description:
        'Comprehensive academic management portal for student records, automated GPA calculation, course enrollment, and attendance analytics.',
      fullDescription:
        'A mission-critical enterprise web platform tailored for university administration. It centralizes student dossiers, tracks semester-by-semester GPA trends with interactive charts, handles course enrollment workflows, and provides automated exportable grade reports.',
      tech: ['Python', 'Django', 'SQLite', 'Chart.js', 'Bootstrap'],
      github: 'https://github.com/LorenzTaganas/StudentManagementSystem',
      image: '/projects/acadex.png',
      progress: 80,
      status: 'Production',
      purpose: 'Academic',
      metric: '100% SLA',
      features: [
        'Role-based access control for Administrators, Instructors, and Students',
        'Automated GPA trend analytics and class standing computations',
        'Real-time student attendance monitoring with visual weekly breakdown charts',
        'Bulk CSV records import/export with schema validation',
      ],
    },
    {
      id: 'it-helpdesk',
      specimenNumber: 'SPECIMEN · 04',
      title: 'Support Hub',
      subtitle: 'Incident Resolution & SLA Tracking Platform',
      category: 'FULL STACK WEB',
      description:
        'Full-cycle IT service management system for ticketing queues, technician assignments, priority resolution metrics, and SLA monitoring.',
      fullDescription:
        'Engineered to streamline technical support operations, this ticketing suite empowers IT teams to triage incidents by severity, assign technicians automatically, track resolution velocity against strict SLAs, and maintain a centralized knowledge base.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST API'],
      github: 'https://github.com/LorenzTaganas/IT-Helpdesk-System.git',
      image: '/projects/supporthub.png',
      progress: 80,
      status: 'Live',
      purpose: 'Personal',
      metric: '94% SLA Met',
      features: [
        'Automated ticket prioritization matrix (Critical, High, Medium, Low)',
        'Technician assignment dashboard with active workload indicators',
        'Resolution velocity telemetry and interactive SLA compliance charts',
        'Incident activity audit log with timestamps and resolution summaries',
      ],
    },
    {
      id: 'portfolio',
      specimenNumber: 'SPECIMEN · 05',
      title: "Lorenz's Portfolio",
      subtitle: 'Interactive Developer & QA Portfolio',
      category: 'FRONTEND EXPERIENCE',
      description:
        'A responsive personal portfolio presenting full-stack engineering work, quality assurance experience, project case studies, and direct contact channels.',
      fullDescription:
        'This portfolio is a single-page Next.js experience built to present engineering work with a technical visual system. It combines responsive section layouts, theme and accent controls, project detail modals, ambient particles, and a protected contact workflow.',
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/LorenzTaganas/Portfolio.git',
      image: '/projects/portfolio.png',
      progress: 100,
      status: 'Live',
      purpose: 'Personal',
      metric: 'Responsive UI',
      features: [
        'Responsive single-page layout for engineering and QA case studies',
        'Light and dark themes with selectable accent-driven atmosphere',
        'Centered project inspection modal with internal scrolling',
        'Validated contact form with spam filtering and rate limiting',
      ],
    },
  ]

  // Close modal on Escape key press
  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Telemetry Eyebrow */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="telemetry-pill mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>PORTFOLIO SPECIMENS · V 2.0</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured <span className="text-sky-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base font-light">
            Engineered systems built with modern architecture. Click any specimen to inspect system details, visual mockups, and repository access.
          </p>
        </div>

        {/* Project Grid: Styled as Horizon Panels */}
        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedProject(project)
                }
              }}
              className="horizon-panel group cursor-pointer rounded-2xl p-7 flex flex-col justify-between border border-slate-200/80 dark:border-white/[0.08] hover:border-sky-500/40 dark:hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Top Horizon Header */}
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] text-gray-500 tracking-wider mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-800 dark:text-gray-300 font-semibold">{project.specimenNumber}</span>
                    <span className="text-gray-400 dark:text-gray-600">/</span>
                    <span className="text-gray-500 dark:text-gray-400 uppercase">{project.category}</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 shadow-[0_0_8px_#38bdf8] group-hover:scale-125 transition-transform" />
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-sky-600 dark:text-gray-400 uppercase tracking-wide mb-3">
                  {project.subtitle}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Bottom Telemetry & Progress */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] mt-4">
                {/* Progress bar matching reference screenshot */}
                <div className="flex items-center justify-between font-mono text-[11px] text-gray-600 dark:text-gray-400 mb-2">
                  <span className="tracking-widest uppercase text-gray-500">PROGRESS</span>
                  <span className="text-slate-900 dark:text-white font-medium">{project.progress} / 100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-black/[0.06] dark:bg-white/[0.06] overflow-hidden mb-5">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 to-sky-400 dark:from-sky-400 dark:to-cyan-200 rounded-full transition-all duration-700 group-hover:brightness-110"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>

                {/* Micro-pills and Inspection Cue */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider bg-sky-50 dark:bg-white/[0.04] border border-sky-200 dark:border-white/[0.08] text-sky-700 dark:text-sky-300 font-medium">
                      {project.status}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider bg-sky-50 dark:bg-white/[0.04] border border-sky-200 dark:border-white/[0.08] text-sky-700 dark:text-sky-300 font-medium">
                      {project.purpose}
                    </span>
                    <span className="px-2 py-1 rounded-md text-[10px] font-mono tracking-wider text-gray-500 dark:text-gray-400 bg-black/[0.03] dark:bg-white/[0.02]">
                      {project.metric}
                    </span>
                  </div>

                  {/* Click To Inspect Cue (No direct GitHub link on card, opens modal) */}
                  <div className="flex items-center gap-1.5 font-mono text-xs text-sky-600 dark:text-sky-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    <span className="tracking-wider">INSPECT SPECIMEN</span>
                    <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================================================
          INTERACTIVE SPECIMEN DETAIL MODAL (Fully adapts to Light & Dark Theme)
          ========================================================================== */}
      {selectedProject && typeof document !== 'undefined' && createPortal((
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-hidden animate-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setSelectedProject(null)}
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Frosted Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/70 dark:bg-[#040508]/85 backdrop-blur-xl transition-opacity"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal Container */}
          <div
            className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col rounded-2xl bg-white dark:bg-[#0e1118] border border-slate-200 dark:border-white/[0.14] shadow-2xl shadow-black/80 overflow-hidden z-10 animate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Luminous Top Horizon Accent Bar */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-sky-500 dark:via-sky-400 to-transparent" />

            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50/80 dark:bg-[#121620]/60">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 beacon-online shadow-[0_0_8px_#38bdf8]" />
                <span className="font-mono text-xs tracking-widest uppercase text-slate-700 dark:text-gray-300">
                  {selectedProject.specimenNumber} · {selectedProject.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-lg bg-slate-200/70 hover:bg-slate-300 dark:bg-white/[0.05] dark:hover:bg-white/[0.12] border border-slate-300/80 dark:border-white/[0.08] flex items-center justify-center text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-6 sm:p-8 space-y-6">
              {/* Project Image Banner Mockup */}
              <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-slate-200 dark:border-white/[0.1] bg-slate-100 dark:bg-[#07090e] shadow-md group">
                {selectedProject.image ? (
                  <>
                    <img
                      src={selectedProject.image}
                      alt={`${selectedProject.title} Interface Preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-[#0e1118] via-transparent to-transparent opacity-80 pointer-events-none" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-white">
                      <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                        UI SPECIMEN CAPTURE
                      </span>
                      <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/20 text-sky-300">
                        {selectedProject.metric}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_at_center,var(--accent-glow),transparent_65%)] px-6 text-center">
                    <span className="font-mono text-xs tracking-[0.3em] text-sky-600 dark:text-sky-300">PORTFOLIO SYSTEM</span>
                    <span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">LT<span className="text-sky-500">.</span>DEV</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-gray-400">Interactive frontend specimen</span>
                  </div>
                )}
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-mono text-sky-600 dark:text-sky-400 mt-1">
                  {selectedProject.subtitle}
                </p>
                <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mt-3 font-light">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Key Features Breakdown */}
              <div className="rounded-xl bg-slate-50 dark:bg-[#141824]/60 border border-slate-200 dark:border-white/[0.08] p-5">
                <h4 className="font-mono text-xs uppercase tracking-widest text-slate-700 dark:text-gray-400 mb-3 flex items-center gap-2 font-semibold dark:font-normal">
                  <span>✦</span> Key Architecture & Features
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-gray-300 font-light">
                      <span className="text-sky-600 dark:text-sky-400 mt-1 font-mono text-xs">▸</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-slate-700 dark:text-gray-400 mb-3 font-semibold dark:font-normal">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.1] text-slate-800 dark:text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with the Repository Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 sm:px-8 py-4 border-t border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#121620]/80">
              <span className="text-xs font-mono text-slate-500 dark:text-gray-500 hidden sm:inline-block">
                ESC or click outside to dismiss
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 dark:border-white/[0.12] text-xs font-mono tracking-wider text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/[0.05] transition-all"
                >
                  CLOSE
                </button>

                {/* Primary Repository Button as requested */}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button w-1/2 sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02]"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span>VIEW REPOSITORY ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ), document.body)}
    </section>
  )
}

export default Projects
