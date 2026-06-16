import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/LorenzTaganas'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/lorenz-taganas-bb4b25292/'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:taganaslorenz81@gmail.com'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center font-bold text-white text-[var(--accent-text)]">
                L
              </div>
              <span className="text-white font-semibold text-lg">Lorenz Taganas</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer & QA Specialist passionate about building quality applications and ensuring software excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-pink-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center text-2xl hover:bg-pink-500 hover:text-[var(--accent-text)] transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-[var(--text-secondary)]"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="/resume.pdf"
                download
                className="inline-block px-4 py-2 bg-pink-500 text-white rounded-lg text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Lorenz Taganas. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with <span className="text-pink-400">Next.js</span> & <span className="text-pink-400">TypeScript</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#home"
        className="absolute right-8 -top-6 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        ↑
      </a>
    </footer>
  )
}

export default Footer
