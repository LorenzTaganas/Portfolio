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
      period: "2026",
      icon: "🎓",
      highlights: ["Full Stack Development", "Game Developer", "Quality Assurance"]
    }
  ]

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="telemetry-pill mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
            <span>CHRONOLOGY · CAREER ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Professional <span className="text-sky-600 dark:text-sky-400">Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm sm:text-base font-light">
            Verified milestones across industry internships, academic projects, and engineering education.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 font-mono text-sm tracking-wider text-slate-900 dark:text-white">
            <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
            <span className="uppercase font-semibold">DEV & QA EXPERIENCES</span>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="horizon-panel group rounded-2xl p-6 md:p-8 border border-slate-200/80 dark:border-white/[0.08]"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Icon Frame */}
                  <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.1] flex items-center justify-center text-2xl shrink-0 group-hover:border-sky-500/40 dark:group-hover:border-sky-400/40 transition-colors shadow-inner">
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors tracking-tight">
                        {exp.title}
                      </h4>
                      <span className="font-mono text-xs text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-400/10 px-2.5 py-0.5 rounded border border-sky-200 dark:border-sky-400/20 w-fit font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <p className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      {exp.company}
                    </p>
                    <p className="text-slate-700 dark:text-gray-300 mb-5 leading-relaxed text-sm font-light">
                      {exp.description}
                    </p>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] rounded-md text-slate-700 dark:text-gray-300 font-mono text-[11px]"
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

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 font-mono text-sm tracking-wider text-slate-900 dark:text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            <span className="uppercase font-semibold">ACADEMIC CREDENTIALS</span>
          </div>

          {education.map((edu, index) => (
            <div
              key={index}
              className="horizon-panel rounded-2xl p-6 md:p-8 border border-slate-200/80 dark:border-white/[0.08]"
            >
              <div className="flex flex-col md:flex-row items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.1] flex items-center justify-center text-2xl shrink-0 shadow-inner">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{edu.degree}</h4>
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10 px-2.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-400/20 w-fit font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">
                    {edu.school}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] rounded-md text-slate-700 dark:text-gray-300 font-mono text-[11px]"
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
