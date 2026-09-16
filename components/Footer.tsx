import React from 'react'

const GitHubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const LinkedInIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GmailIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHubIcon className="w-4 h-4" />,
      url: 'https://github.com/LorenzTaganas'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon className="w-4 h-4" />,
      url: 'https://www.linkedin.com/in/lorenz-taganas-bb4b25292/'
    },
    {
      name: 'Email',
      icon: <GmailIcon className="w-4 h-4" />,
      url: 'mailto:taganaslorenz81@gmail.com'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home', code: '01' },
    { name: 'About', href: '#about', code: '02' },
    { name: 'Projects', href: '#projects', code: '03' },
    { name: 'Journey', href: '#experience', code: '04' },
    { name: 'Contact', href: '#contact', code: '05' },
  ]

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#06070a] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-12 items-start">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center">
                <span className="text-[11px] font-mono text-white font-bold">▲</span>
              </div>
              <span className="font-mono text-xs font-semibold tracking-widest text-white uppercase">
                LORENZ TAGANAS
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              Crafted by Lorenz Taganas — Full Stack Developer & Quality Assurance Engineer. Engineered for resilience, visual elegance, and performance.
            </p>
            <div className="telemetry-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>RADIAL SURFACE · 1PX INSET RIM · 70% HORIZON</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-white mb-4">
              DIRECTORY
            </h3>
            <ul className="space-y-2 font-mono text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-600 text-[10px]">{link.code}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Dossier */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-white mb-4">
              CONNECT
            </h3>
            <div className="flex gap-2.5 mb-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/30 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.1] hover:border-white/30 text-xs font-mono text-white transition-all"
            >
              <span>DOWNLOAD RESUME</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-gray-500">
          <p>© {currentYear} Lorenz Taganas. All systems operational.</p>
          <p className="flex items-center gap-2">
            <span>NEXT.JS 16</span>
            <span>·</span>
            <span>TYPESCRIPT</span>
            <span>·</span>
            <span>TAILWIND</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
