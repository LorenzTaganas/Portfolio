import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative w-full px-4 pt-28 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-6xl items-center justify-center">
        <div className="grid md:grid-cols-12 gap-12 items-center w-full">
          
          {/* Text Content */}
          <div className="md:col-span-7 text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1">
            <div className="mb-5 animate-fade-in">
              <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white light:text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up leading-tight">
              Hi, I&apos;m <span className="text-pink-500">Lorenz</span>
            </h1>

            <p className="mt-4 text-xl text-gray-300 md:text-2xl animate-slide-up font-medium">
              Quality Assurance Specialist & Developer
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2 max-w-md">
              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs sm:text-sm text-purple-300">
                🧪 QA Testing
              </span>
              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs sm:text-sm text-purple-300">
                💻 Full Stack
              </span>
              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs sm:text-sm text-purple-300">
                📱 Mobile Dev
              </span>
              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs sm:text-sm text-purple-300">
                ☁️ Salesforce
              </span>
            </div>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-400 light:text-gray-600 max-w-xl">
              Building full-stack applications and ensuring software quality through comprehensive testing.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in w-full">
              <a
                href="#projects"
                className="group rounded-lg bg-pink-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-pink-400 hover:shadow-lg hover:shadow-pink-500/30 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
              <a
                href="#contact"
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
      </div>
    </section>
  )
}

export default Hero

