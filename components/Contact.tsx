import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Get In Touch
        </h2>
        <div className="bg-gray-900 rounded-lg p-8">
          <p className="text-gray-400 text-center mb-8">
            I'm currently open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-purple-500 text-2xl mb-2">📧</div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                taganaslorenz81@gmail.com
              </a>
            </div>
            <div className="p-6">
              <div className="text-purple-500 text-2xl mb-2">💼</div>
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/lorenz-taganas-bb4b25292/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                Linked In Profile
              </a>
            </div>
            <div className="p-6">
              <div className="text-purple-500 text-2xl mb-2">🐙</div>
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <a href="https://github.com/LorenzTaganas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
                Github Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
