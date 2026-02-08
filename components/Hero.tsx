import React from 'react'

const Hero = () => {
  return (
    <div id="home" className="relative pb-20 pt-10">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-black to-blue-900/20 light:from-purple-200/30 light:via-white light:to-blue-200/30 animate-pulse"></div>
      
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="text-center">
          {/* Animated greeting */}
          <div className="mb-4 animate-fade-in">
            <span className="text-purple-400 light:text-purple-600 text-lg md:text-xl">👋 Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white light:text-gray-900 animate-slide-up">
            Hi, I'm <span className="bg-linear-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Lorenz</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 light:text-gray-600 mb-4 animate-slide-up">
            Quality Assurance Specialist & Developer
          </p>
          
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 light:text-purple-600 text-sm">
              🧪 QA Testing
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 light:text-blue-600 text-sm">
              💻 Full Stack
            </span>
            <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-400 light:text-pink-600 text-sm">
              📱 Mobile Dev
            </span>
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 light:text-cyan-600 text-sm">
              ☁️ Salesforce
            </span>
          </div>
          
          <p className="text-lg text-gray-400 light:text-gray-600 max-w-2xl mx-auto mb-8 px-4 leading-relaxed">
            Building full-stack applications and ensuring software quality through comprehensive testing.
          </p>
          
          <div className="flex gap-4 justify-center animate-fade-in flex-wrap px-4">
            <a 
              href="#projects" 
              className="group px-8 py-4 bg-linear-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                View My Work
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a 
              href="#contact" 
              className="group px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="group px-8 py-4 border-2 border-purple-500 text-purple-400 light:text-purple-600 light:border-purple-600 rounded-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                📄 Resume
              </span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-500 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
