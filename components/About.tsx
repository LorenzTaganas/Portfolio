import React from 'react'

// Custom Tech Stack SVG Icons (w-12 h-12)
const HtmlIcon = () => (
  <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059-.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.385 4.305L12 19.351l5.39-1.48.672-7.12H8.531z" />
  </svg>
)

const CssIcon = () => (
  <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.39 9.75l-.188-2.11h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.385 4.305L12 19.351l5.39-1.48.672-7.12h-9.713z" />
  </svg>
)

const JavaScriptIcon = () => (
  <svg className="w-12 h-12 text-yellow-500 rounded-sm" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.268c-.153-.783-.756-1.393-2.138-1.921l-.738-.282c-.891-.342-1.215-.621-1.215-1.044 0-.468.396-.756 1.044-.756.639 0 .99.288 1.17.756l1.962-.837c-.36-.972-1.215-1.746-2.736-1.746-2.034 0-3.474 1.251-3.474 3.024 0 1.935 1.134 2.727 2.871 3.393l.738.288c.954.369 1.278.693 1.278 1.17 0 .54-.486.909-1.278.909-.99 0-1.44-.45-1.701-1.062l-2.034.9c.477 1.116 1.485 1.944 3.51 1.944 2.223 0 3.798-1.17 3.798-3.231 0-1.899-1.071-2.61-2.934-3.321zm-10.746-2.799c-.612-.189-1.125-.306-1.71-.306-1.08 0-1.62.432-1.62 1.098 0 .684.594.99 1.287 1.197l.846.261c1.557.477 2.538 1.287 2.538 2.88 0 1.962-1.53 3.312-3.951 3.312-1.845 0-3.366-.882-3.969-2.223l1.98-.828c.36.702.936 1.152 1.764 1.152.927 0 1.548-.414 1.548-1.206 0-.711-.531-.99-1.341-1.242l-.837-.261c-1.476-.459-2.385-1.251-2.385-2.745 0-1.89 1.467-3.006 3.636-3.006 1.62 0 2.889.657 3.447 1.836l-1.881.936z" />
  </svg>
)

const ReactIcon = () => (
  <svg className="w-12 h-12 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="12" rx="11" ry="4.2" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
)

const MongoDbIcon = () => (
  <svg className="w-12 h-12 text-green-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.15 11.23c-.11-.46-.3-1.07-.63-1.74l-.13-.26c-.34-.69-.87-1.57-1.55-2.5C13.43 4.88 12.3 3.35 12 0c-.3 3.35-1.43 4.88-2.84 6.73-.68.93-1.2 1.81-1.55 2.5l-.13.26c-.33.67-.52 1.28-.63 1.74-.28 1.15-.31 2.37.1 3.51l.07.19c.14.38.35.73.61 1.05.65.81 1.72 1.42 2.84 1.73l.5.14V24h1v-6.17l.5-.14c1.12-.31 2.19-.92 2.84-1.73.26-.32.47-.67.61-1.05l.07-.19c.41-1.14.38-2.36.1-3.51zm-5.15 4.6V7.07c1.33 1.57 2.33 3.35 2.82 5.09-1.07.39-2.02.5-2.82.52z" />
  </svg>
)

const ExpressIcon = () => (
  <span className="text-xl font-black text-white tracking-wider bg-white/10 px-2.5 py-1.5 rounded border border-white/20">EX</span>
)

const NodeJsIcon = () => (
  <svg className="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L1.726 5.932v12.136L12 24l10.274-5.932V5.932L12 0zm-1.026 19.336L3.43 14.542V8.958l7.544 4.356v6.022zm0-7.391L3.43 7.589l8.57-4.948 8.57 4.948-8.57 4.948v.008zm8.57 2.597l-7.544 4.356v-6.022l7.544-4.356v5.589z" />
  </svg>
)

const JavaIcon = () => (
  <svg className="w-12 h-12 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.923 18.067c.108-.026.2-.058.267-.097.433-.24.776-.757.863-1.3.111-.692-.128-1.428-.588-1.821a3.1 3.1 0 00-.737-.487c-.6-.285-1.173-.591-1.745-.9-.81-.437-1.59-.877-2.316-1.411-.795-.584-1.393-1.371-1.503-2.348-.124-1.1.354-2.222 1.258-2.937.584-.461 1.293-.72 2.06-.723h.276c.491.002.973.089 1.436.257a3.02 3.02 0 011.085.641l.24.238.163-.298c.18-.332.339-.675.474-1.028a7.227 7.227 0 00.32-1.332c.036-.316.036-.633.003-.948a4.996 4.996 0 00-.472-1.78l-.053-.105-.104.053c-.352.179-.678.406-.97.676-.757.702-1.127 1.635-1.01 2.56.022.17.06.342.115.512.02.062.006.129-.039.176a.168.168 0 01-.157.042c-.22-.057-.442-.1-.667-.13a4.7 4.7 0 00-1.89.096c-.732.22-1.4.63-1.921 1.18-.893.943-1.3 2.224-1.109 3.513.197 1.328 1.037 2.457 2.247 3.013.626.287 1.272.584 1.916.883.67.311 1.341.624 1.996.969.57.301 1.05.748 1.144 1.373.072.483-.169.9-.623 1.111a1.27 1.27 0 01-.762.09c-.394-.055-.773-.203-1.1-.429-.533-.37-.899-.927-.927-1.579l-.004-.085-.084.015c-.244.041-.49.09-.733.149-.24.059-.285.077-.456.24a4.11 4.11 0 00-.974 1.83 4.24 4.24 0 001.215 3.864c.854.792 2.052 1.168 3.23 1.042 1.059-.113 2.043-.63 2.766-1.455.51-.582.845-1.285.972-2.046a6.837 6.837 0 00-1.396-1.576z" />
    <path d="M19.162 13.916a4.856 4.856 0 01-1.077 1.4c-.66.586-1.488.948-2.378 1.04a7.1 7.1 0 01-.84.028c-.147.001-.264.12-.263.267.001.139.11.25.247.252h.02c.875-.015 1.73-.24 2.493-.655.776-.421 1.428-1.031 1.89-1.77.29-.464.444-.997.45-1.542a3.606 3.606 0 00-.542-1.92 5.093 5.093 0 00-2.012-1.968c-.97-.528-2.062-.777-3.16-.723-.522.026-1.038.106-1.54.24-.138.037-.221.178-.184.316.037.138.178.221.316.184.472-.126.957-.202 1.447-.226 1.026-.05 2.048.182 2.955.676a4.6 4.6 0 011.815 1.776 3.09 3.09 0 01.464 1.649c-.004.417-.123.826-.347 1.176zM13.684 21.657a16.892 16.892 0 01-4.707.697 18.064 18.064 0 01-4.734-.64 6.702 6.702 0 01-2.9-1.56 1.54 1.54 0 01-.137-2.148 2.036 2.036 0 01.442-.395c.08-.052.127-.145.122-.24a.276.276 0 00-.285-.262.332 3.32 0 00-.135.034c-.218.09-.425.2-.619.328a2.03 2.03 0 00-.814 2.115c.168.802.664 1.503 1.365 1.98.983.67 2.138 1.096 3.353 1.233 1.546.175 3.11.175 4.656 0a17.472 17.472 0 003.585-.595c.57-.16 1.127-.373 1.66-.639.127-.063.178-.219.115-.347a.263.263 0 00-.347-.115c-.502.25-1.027.452-1.57.6-.33.09-.67.164-1.011.222z" />
  </svg>
)

const NextJsIcon = () => (
  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c5.373 0 12-5.373 12-12S18.627 0 12 0zm5.836 18.172l-4.526-5.836h-.11v5.836h-1.636V9.455h1.636l4.088 5.27v-5.27h1.636v8.717h-1.088zM9.455 9.455h1.636v8.717H9.455V9.455z" />
  </svg>
)

const SalesforceIcon = () => (
  <svg className="w-12 h-12 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.847 11.238c-.378-.052-.76-.027-1.128.077a5.556 5.556 0 00-3.328-3.41 5.56 5.56 0 00-4.996.657 5.766 5.766 0 00-2.316 3.655 4.542 4.542 0 00-.637.28 4.298 4.298 0 00-2.128 3.8 4.316 4.316 0 004.303 4.314h9.91a3.882 3.882 0 003.876-3.876c0-2.036-1.57-3.702-3.557-3.507z" />
  </svg>
)

const PostmanIcon = () => (
  <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.275 8.167c.725.688 1.085 1.575 1.085 2.66 0 1.083-.36 1.97-1.085 2.658-.725.688-1.597 1.031-2.617 1.031s-1.892-.343-2.617-1.03c-.725-.688-1.088-1.575-1.088-2.66 0-1.084.363-1.972 1.088-2.66.725-.687 1.597-1.03 2.617-1.03s1.892.343 2.617 1.03z"/>
  </svg>
)

const GitIcon = () => (
  <svg className="w-12 h-12 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.2 10.85L13.15.8a2.44 2.44 0 0 0-3.45 0L7.9 2.6l3.75 3.75a2.5 2.5 0 1 1-3.52 3.52L4.4 6.1 1.15 9.35a2.44 2.44 0 0 0 0 3.45l10.05 10.05c.48.48 1.11.7 1.73.7.62 0 1.25-.22 1.73-.7L23.2 12.6a2.44 2.44 0 0 0 0-3.75z" />
  </svg>
)

const PlaywrightIcon = () => (
  <svg className="w-12 h-12 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
  </svg>
)

const GeminiIcon = () => (
  <img
    src="https://cdn.simpleicons.org/googlegemini"
    alt=""
    className="w-12 h-12"
  />
)

const ClaudeIcon = () => (
  <img
    src="https://cdn.simpleicons.org/anthropic"
    alt=""
    className="w-12 h-12"
  />
)

const PythonIcon = () => (
  <img
    src="https://cdn.simpleicons.org/python"
    alt=""
    className="w-12 h-12"
  />
)

const AntigravityIcon = () => (
  <img
    src="https://antigravity.google/favicon.ico"
    alt=""
    className="w-12 h-12 rounded-lg"
  />
)

const About = () => {
  const skills = [
    { name: 'HTML', icon: <HtmlIcon />, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: <CssIcon />, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', icon: <JavaScriptIcon />, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', icon: <ReactIcon />, url: 'https://react.dev' },
    { name: 'Next.js', icon: <NextJsIcon />, url: 'https://nextjs.org' },
    { name: 'Node.js', icon: <NodeJsIcon />, url: 'https://nodejs.org' },
    { name: 'Express.js', icon: <ExpressIcon />, url: 'https://expressjs.com' },
    { name: 'MongoDB', icon: <MongoDbIcon />, url: 'https://www.mongodb.com' },
    { name: 'Java', icon: <JavaIcon />, url: 'https://www.java.com' },
    { name: 'Salesforce', icon: <SalesforceIcon />, url: 'https://www.salesforce.com' },
    { name: 'Postman', icon: <PostmanIcon />, url: 'https://www.postman.com' },
    { name: 'Git', icon: <GitIcon />, url: 'https://git-scm.com' },
    { name: 'Playwright', icon: <PlaywrightIcon />, url: 'https://playwright.dev' },
    { name: 'Gemini', icon: <GeminiIcon />, url: 'https://gemini.google.com' },
    { name: 'Claude', icon: <ClaudeIcon />, url: 'https://claude.ai' },
    { name: 'Python', icon: <PythonIcon />, url: 'https://www.python.org' },
    { name: 'Antigravity', icon: <AntigravityIcon />, url: 'https://antigravity.google' }
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="telemetry-pill mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
            <span>OPERATOR PROFILE · DOSSIER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            About <span className="text-sky-600 dark:text-sky-400">Lorenz</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm sm:text-base font-light">
            Bridging robust software development and end-to-end quality engineering.
          </p>
        </div>

        {/* Who I Am & Key Strengths Grid */}
        <div className="grid md:grid-cols-12 gap-7 items-stretch mb-14">
          {/* Who I Am Card */}
          <div className="md:col-span-7 horizon-panel rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-slate-200/80 dark:border-white/[0.08]">
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] text-gray-500 tracking-wider mb-5">
                <span className="uppercase text-gray-500 dark:text-gray-400">BIOGRAPHY · DOSSIER</span>
                <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 beacon-online" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                Engineering with Rigor & Precision
              </h3>
              <p className="text-slate-700 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base font-light">
                I am a <span className="text-slate-900 dark:text-white font-medium">Full Stack Developer</span> and <span className="text-slate-900 dark:text-white font-medium">Quality Assurance Specialist</span> with hands-on enterprise Salesforce development experience.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm font-light">
                Throughout my 3rd and 4th academic years at Bulacan State University, I architected diverse web, mobile, and backend systems utilizing modern component-driven patterns and clean REST architectures.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-light">
                During my on-the-job training (OJT), I specialized in software quality assurance—designing test plans, executing automated scripts, and verifying application resilience from the very first commit to production deployment.
              </p>
            </div>
          </div>

          {/* Key Strengths Card */}
          <div className="md:col-span-5 horizon-panel rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-slate-200/80 dark:border-white/[0.08]">
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] text-gray-500 tracking-wider mb-5">
                <span className="uppercase text-gray-500 dark:text-gray-400">CORE COMPETENCIES</span>
                <span className="text-sky-600 dark:text-sky-400">3 DISCIPLINES</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
                Focus Areas
              </h3>

              <div className="space-y-3.5">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08] hover:border-sky-400/40 dark:hover:border-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Full Stack Development</h4>
                    <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400">REACT / NODE / PYTHON</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 font-light">
                    Building responsive, scalable web and mobile software with component design systems and microservices.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08] hover:border-sky-400/40 dark:hover:border-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Quality Assurance & Testing</h4>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">PLAYWRIGHT / JIRA</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 font-light">
                    Authoring structured test matrices, defect reproduction, and end-to-end regression test automation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08] hover:border-sky-400/40 dark:hover:border-white/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Salesforce CRM</h4>
                    <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400">APEX / CLOUD</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 font-light">
                    Custom business logic automation, triggers, and integrations on the Salesforce enterprise cloud platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section (Infinite Marquee) */}
        <div className="horizon-panel rounded-2xl p-7 sm:p-8 mb-14 border border-slate-200/80 dark:border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Technical Arsenal</h3>
              <p className="text-gray-500 dark:text-gray-400 font-mono text-xs">Frameworks, platforms, verification & AI workflows</p>
            </div>
            <div className="telemetry-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              <span>17 ACTIVE TECHNOLOGIES</span>
            </div>
          </div>

          <div className="marquee-container w-full overflow-hidden relative pt-6 pb-2">
            <div className="animate-marquee-ltr flex gap-6 whitespace-nowrap">
              {/* Set 1 */}
              <div className="flex gap-6 shrink-0 items-center">
                {skills.map((skill, index) => (
                  <a
                    key={`skill-1-${index}`}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group/tooltip flex flex-col items-center justify-center bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-200 dark:border-white/[0.08] hover:border-sky-500/40 dark:hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer w-24 h-24 shrink-0 shadow-sm dark:shadow-lg"
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="mt-1.5 font-mono text-[10px] text-slate-600 dark:text-gray-400 group-hover/tooltip:text-slate-900 dark:group-hover/tooltip:text-white">
                      {skill.name}
                    </span>
                  </a>
                ))}
              </div>
              {/* Set 2 (Duplicate for seamless loop) */}
              <div className="flex gap-6 shrink-0 items-center">
                {skills.map((skill, index) => (
                  <a
                    key={`skill-2-${index}`}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group/tooltip flex flex-col items-center justify-center bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-200 dark:border-white/[0.08] hover:border-sky-500/40 dark:hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer w-24 h-24 shrink-0 shadow-sm dark:shadow-lg"
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="mt-1.5 font-mono text-[10px] text-slate-600 dark:text-gray-400 group-hover/tooltip:text-slate-900 dark:group-hover/tooltip:text-white">
                      {skill.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="horizon-panel rounded-xl p-6 text-center border border-slate-200/80 dark:border-white/[0.08]">
            <div className="text-3xl font-mono font-bold text-slate-900 dark:text-white mb-1">4+</div>
            <div className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">Production Specimens</div>
          </div>
          <div className="horizon-panel rounded-xl p-6 text-center border border-slate-200/80 dark:border-white/[0.08]">
            <div className="text-3xl font-mono font-bold text-sky-600 dark:text-sky-400 mb-1">13</div>
            <div className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">Core Technologies</div>
          </div>
          <div className="horizon-panel rounded-xl p-6 text-center border border-slate-200/80 dark:border-white/[0.08]">
            <div className="text-3xl font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-1">100%</div>
            <div className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">QA Commitment</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
