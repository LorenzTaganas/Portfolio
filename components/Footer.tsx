import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/LorenzTaganas',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/lorenz-taganas-bb4b25292/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:taganaslorenz81@gmail.com',
      color: 'hover:text-purple-400'
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
    <footer className="relative bg-linear-to-b from-black to-gray-950 light:from-gray-50 light:to-white border-t border-gray-800 light:border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center font-bold text-white">
                L
              </div>
              <span className="text-white light:text-gray-900 font-semibold text-lg">Lorenz Taganas</span>
            </div>
            <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed">
              Full Stack Developer & QA Specialist passionate about building quality applications and ensuring software excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white light:text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 light:text-gray-600 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white light:text-gray-900 font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`w-12 h-12 bg-gray-800 light:bg-gray-200 rounded-lg flex items-center justify-center text-2xl hover:bg-gray-700 light:hover:bg-gray-300 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
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
                className="inline-block px-4 py-2 bg-linear-to-r from-purple-500 to-pink-600 text-white rounded-lg text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 light:border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 light:text-gray-600 text-sm">
              © {currentYear} Lorenz Taganas. All rights reserved.
            </p>
            <p className="text-gray-500 light:text-gray-600 text-sm">
              Built with <span className="text-purple-400">Next.js</span> & <span className="text-blue-400">TypeScript</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#home"
        className="absolute right-8 -top-6 w-12 h-12 bg-linear-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        ↑
      </a>
    </footer>
  )
}

export default Footer
