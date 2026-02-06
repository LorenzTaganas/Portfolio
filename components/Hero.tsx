import React from 'react'

const Hero = () => {
  return (
    <div className="pb-20 pt-10">
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Hi, I'm <span className="text-purple-500">Lorenz</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Quality Assurance Specialist & Developer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 px-4">
            Building full-stack applications and ensuring software quality through comprehensive testing.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
