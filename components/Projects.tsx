import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "ArtHub",
      description: "Full-featured e-commerce platform for art selling with shopping cart, user authentication, and payment integration",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/LorenzTaganas/Arthubb",
      demo: "#"
    },
    {
      title: "Jam Master",
      description: "Interactive mobile game application with engaging gameplay mechanics and smooth user experience",
      tech: ["Java", "Android Studio", "Mobile Dev"],
      github: "https://github.com/LorenzTaganas/Jam-Master-Mobile-app",
      demo: "#"
    },
    {
      title: "Student Management System",
      description: "Comprehensive system for managing student records, grades, and administrative tasks",
      tech: ["Python", "Django", "SQLite"],
      github: "https://github.com/LorenzTaganas/StudentManagementSystem",
      demo: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition">
              <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-400">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
