'use client'

import React, { useState } from 'react'

const FacebookIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <title>Facebook</title>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const LinkedInIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GitHubIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

type FormState = 'idle' | 'loading' | 'success' | 'error'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.')
      }

      setFormState('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err: unknown) {
      setFormState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message.')
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-pink-400">Touch</span>
          </h2>
          <p className="text-gray-500">Let&apos;s work together on your next project</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-2xl">
          <p className="text-gray-400 text-center mb-10 leading-relaxed">
            I&apos;m currently open to new opportunities and collaborations.
            Feel free to reach out if you&apos;d like to work together!
          </p>

          {/* Social Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Facebook Card */}
            <a
              href="https://www.facebook.com/Lelstrike1"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-purple-500/10 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="text-purple-300 mb-3 group-hover:scale-110 transition-transform">
                <FacebookIcon className="w-10 h-10" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">Facebook</h3>
              <p className="text-gray-400 group-hover:text-pink-400 transition-colors text-sm">
                Lorenz Taganas
              </p>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/lorenz-taganas-bb4b25292/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-purple-500/10 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="text-purple-300 mb-3 group-hover:scale-110 transition-transform">
                <LinkedInIcon className="w-10 h-10" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">LinkedIn</h3>
              <p className="text-gray-400 group-hover:text-pink-400 transition-colors text-sm">
                Lorenz Taganas
              </p>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/LorenzTaganas"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-purple-500/10 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="text-purple-300 mb-3 group-hover:scale-110 transition-transform">
                <GitHubIcon className="w-10 h-10" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">GitHub</h3>
              <p className="text-gray-400 group-hover:text-pink-400 transition-colors text-sm">
                @LorenzTaganas
              </p>
            </a>
          </div>

          {/* Contact Form */}
          <div className="border-t border-gray-800 pt-10">
            <h3 className="text-white font-semibold text-xl text-center mb-6">
              Send me an email ✉️
            </h3>

            {formState === 'success' ? (
              <div className="flex flex-col items-center gap-4 py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-3xl">
                  ✅
                </div>
                <p className="text-green-400 font-semibold text-lg">Message sent!</p>
                <p className="text-gray-400 text-sm text-center">
                  Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-2 text-pink-400 hover:text-pink-300 text-sm underline underline-offset-4 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="text-gray-400 text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                      className="bg-gray-800 border border-gray-700 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/40 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="text-gray-400 text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      required
                      className="bg-gray-800 border border-gray-700 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-gray-400 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="bg-gray-800 border border-gray-700 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/40 transition-colors resize-none"
                  />
                </div>

                {formState === 'error' && (
                  <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                <div className="text-center pt-2">
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={formState === 'loading'}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-pink-500 text-white rounded-lg hover:bg-pink-400 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 font-medium disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {formState === 'loading' ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="text-xl">✉️</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
