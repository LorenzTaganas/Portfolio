import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          About <span className="bg-linear-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Me</span>
        </h2>
        <p className="text-center text-gray-500 mb-12">Get to know me better</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Who I Am Card */}
          <div className="group bg-linear-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-2xl">
                👨‍💻
              </div>
              <h3 className="text-2xl font-semibold bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Who I Am
              </h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I'm a Full Stack Developer and Quality Assurance specialist with Salesforce experience. 
              During my 3rd and 4th year, I built several applications using various technologies. 
              Currently, my OJT focuses on quality assurance, where I ensure software reliability through testing.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I combine my development background with QA and Salesforce expertise to understand both building 
              and testing perspectives, delivering high-quality applications.
            </p>
          </div>

          {/* Skills Card */}
          <div className="group bg-linear-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl">
                🛠️
              </div>
              <h3 className="text-2xl font-semibold bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Skills
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['MongoDB', 'Express.js', 'React', 'Node.js', 'Java', 'Django', 'Salesforce', 'Jira', 'Postman', 'Git', 'Android Studio', 'Playwright'].map((skill, index) => (
                <div 
                  key={skill} 
                  className="group/skill bg-gray-950 p-4 rounded-xl text-center text-gray-300 border border-gray-800 hover:border-purple-500/50 hover:bg-linear-to-br hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 cursor-pointer transform hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="group-hover/skill:text-white transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="bg-linear-to-br from-purple-500/10 to-transparent p-6 rounded-xl border border-purple-500/20 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-gray-500 text-sm">Projects Completed</div>
          </div>
          <div className="bg-linear-to-br from-blue-500/10 to-transparent p-6 rounded-xl border border-blue-500/20 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
            <div className="text-gray-500 text-sm">Technologies</div>
          </div>
          <div className="bg-linear-to-br from-pink-500/10 to-transparent p-6 rounded-xl border border-pink-500/20 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
            <div className="text-gray-500 text-sm">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
