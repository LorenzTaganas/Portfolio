import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative w-full px-4 pt-28 pb-20">
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-5xl items-center justify-center">
        <div className="w-full max-w-3xl text-center">
          <div className="mb-5 animate-fade-in">
            <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white light:text-gray-900 md:text-7xl animate-slide-up">
            Hi, I&apos;m <span className="text-pink-500">Lorenz</span>
          </h1>

          <p className="mt-5 text-xl text-gray-300 md:text-2xl animate-slide-up">
            Quality Assurance Specialist & Developer
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              🧪 QA Testing
            </span>
            <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              💻 Full Stack
            </span>
            <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              📱 Mobile Dev
            </span>
            <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              ☁️ Salesforce
            </span>
          </div>

          <p className="mx-auto mt-8 max-w-2xl px-4 text-lg leading-relaxed text-gray-400 light:text-gray-600">
            Building full-stack applications and ensuring software quality through comprehensive testing.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 px-4 animate-fade-in">
            <a
              href="#projects"
              className="group rounded-lg bg-pink-500 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-pink-400 hover:shadow-lg hover:shadow-pink-500/30 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                View My Work
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a
              href="#contact"
              className="group rounded-lg border-2 border-purple-500 px-8 py-4 font-medium text-purple-300 transition-all duration-300 hover:bg-purple-500 transform hover:scale-105"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="group rounded-lg border-2 border-purple-500 px-8 py-4 font-medium text-purple-300 transition-all duration-300 hover:bg-purple-500/10 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">📄 Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
