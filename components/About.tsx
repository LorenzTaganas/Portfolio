import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-purple-500 mb-4">Who I Am</h3>
            <p className="text-gray-400 mb-4">
              I'm a Full Stack Developer and Quality Assurance specialist. During my 3rd and 4th year, 
              I built several applications using various technologies. Currently, my OJT focuses on 
              quality assurance, where I ensure software reliability through testing.
            </p>
            <p className="text-gray-400">
              I combine my development background with QA expertise to understand both building 
              and testing perspectives, delivering high-quality applications.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-purple-500 mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {['MongoDB', 'Express.js', 'React', 'Node.js', 'Java', 'Django', 'Jira', 'Postman', 'Git', 'Android Studio'].map((skill) => (
                <div key={skill} className="bg-gray-900 p-4 rounded-lg text-center text-gray-300">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
