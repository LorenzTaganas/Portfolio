import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "ArtHub",
      description: "Full-featured e-commerce platform for art selling with shopping cart, user authentication, and payment integration",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/LorenzTaganas/Arthubb",
      demo: "#",
      icon: "🎨",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Jam Master",
      description: "Interactive mobile game application with engaging gameplay mechanics and smooth user experience",
      tech: ["Java", "Android Studio", "Mobile Dev"],
      github: "https://github.com/LorenzTaganas/Jam-Master-Mobile-app",
      demo: "#",
      icon: "🎮",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Student Management System",
      description: "Comprehensive system for managing student records, grades, and administrative tasks",
      tech: ["Python", "Django", "SQLite"],
      github: "https://github.com/LorenzTaganas/StudentManagementSystem",
      demo: "#",
      icon: "📚",
      color: "from-green-500 to-emerald-600"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-linear-to-b from-black to-gray-950 light:from-white light:to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white light:text-gray-900 mb-4">
            My <span className="bg-linear-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Projects</span>
          </h2>
          <p className="text-gray-500 light:text-gray-600">Here are some of my recent works</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-linear-to-br from-gray-900 to-gray-800 light:from-gray-100 light:to-gray-50 rounded-2xl p-6 border border-gray-800 light:border-gray-200 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2"
            >
              {/* Project Icon */}
              <div className={`absolute -top-6 left-6 w-14 h-14 bg-linear-to-br ${project.color} rounded-xl flex items-center justify-center text-3xl shadow-lg`}>
                {project.icon}
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-white light:text-gray-900 mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 light:text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs bg-purple-500/10 text-purple-400 px-3 py-1.5 rounded-full border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 text-center px-4 py-2 bg-linear-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                  >
                    GitHub →
                  </a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
