import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: "Quality Assurance Tester",
      company: "OJT Program",
      period: "2026",
      description: "Focusing on software quality assurance, conducting comprehensive testing, and ensuring application reliability using industry-standard tools.",
      skills: ["QA Testing", "Jira", "Postman", "Bug Tracking"],
      icon: "🧪",
      color: "bg-pink-500 text-[var(--accent-text)]"
    },
    {
      title: "Full Stack Developer",
      company: "University Projects",
      period: "3rd & 4th Year",
      description: "Built multiple full-stack applications including e-commerce platforms, mobile games, and management systems using modern technologies.",
      skills: ["MERN Stack", "Python", "Java", "Android Development"],
      icon: "💻",
      color: "bg-pink-500 text-[var(--accent-text)]"
    },
    {
      title: "Salesforce Developer",
      company: "Training & Certification",
      period: "3rd Year College",
      description: "Gained hands-on experience with Salesforce platform, developing custom solutions and understanding CRM workflows.",
      skills: ["Salesforce", "CRM", "Apex", "Cloud Platform"],
      icon: "☁️",
      color: "bg-pink-500 text-[var(--accent-text)]"
    }
  ]

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Bulacan State University",
      period: "Expected 2026",
      icon: "🎓",
      highlights: ["Full Stack Development", "Game Developer", "Quality Assurance"]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-pink-400">Journey</span>
          </h2>
          <p className="text-gray-500">Experience & Education</p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="text-3xl">💼</span>
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-8 w-6 h-6 bg-pink-500 rounded-full border-4 border-gray-950 hidden md:block"></div>

                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform ${exp.color}`}>
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-white group-hover:text-pink-400 transition-colors">
                        {exp.title}
                      </h4>
                      <span className="text-purple-400 text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="text-3xl">🎓</span>
            Education
          </h3>
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center text-3xl shrink-0 text-[var(--accent-text)]">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <span className="text-purple-400 text-sm font-medium">{edu.period}</span>
                  </div>
                  <p className="text-gray-400 font-medium mb-3">{edu.school}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
