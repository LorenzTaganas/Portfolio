import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-linear-to-b from-gray-950 to-black light:from-white light:to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white light:text-gray-900 mb-4">
            Get In <span className="bg-linear-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Touch</span>
          </h2>
          <p className="text-gray-500 light:text-gray-600">Let's work together on your next project</p>
        </div>

        <div className="bg-linear-to-br from-gray-900 to-gray-800 light:from-gray-100 light:to-gray-50 rounded-2xl p-8 border border-gray-800 light:border-gray-200 shadow-2xl">
          <p className="text-gray-400 light:text-gray-600 text-center mb-10 leading-relaxed">
            I'm currently open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <a 
              href="mailto:taganaslorenz81@gmail.com"
              className="group bg-linear-to-br from-purple-500/10 to-transparent light:from-purple-100 light:to-transparent p-6 rounded-xl border border-purple-500/20 light:border-purple-300 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📧</div>
              <h3 className="text-white light:text-gray-900 font-semibold mb-2 text-lg">Email</h3>
              <p className="text-gray-400 light:text-gray-600 group-hover:text-purple-400 transition-colors text-sm break-all">
                taganaslorenz81@gmail.com
              </p>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/lorenz-taganas-bb4b25292/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-linear-to-br from-blue-500/10 to-transparent light:from-blue-100 light:to-transparent p-6 rounded-xl border border-blue-500/20 light:border-blue-300 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">💼</div>
              <h3 className="text-white light:text-gray-900 font-semibold mb-2 text-lg">LinkedIn</h3>
              <p className="text-gray-400 light:text-gray-600 group-hover:text-blue-400 transition-colors text-sm">
                Lorenz Taganas
              </p>
            </a>

            {/* GitHub Card */}
            <a 
              href="https://github.com/LorenzTaganas" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-linear-to-br from-pink-500/10 to-transparent light:from-pink-100 light:to-transparent p-6 rounded-xl border border-pink-500/20 light:border-pink-300 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🐙</div>
              <h3 className="text-white light:text-gray-900 font-semibold mb-2 text-lg">GitHub</h3>
              <p className="text-gray-400 light:text-gray-600 group-hover:text-pink-400 transition-colors text-sm">
                @LorenzTaganas
              </p>
            </a>
          </div>

          {/* Call to Action */}
          <div className="mt-10 text-center">
            <a 
              href="mailto:taganaslorenz81@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Send me an email
              <span className="text-xl">✉️</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-600 light:text-gray-500">
        <p>© 2026 Lorenz Taganas. Built with Next.js & Tailwind CSS</p>
      </div>
    </section>
  )
}

export default Contact
