import { useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

const SOCIAL = [
  { icon: FiGithub,   href: 'https://github.com/KENADAM01', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/arun-kumar-175b58279', label: 'LinkedIn' },
  { icon: FiTwitter,  href: 'https://twitter.com/',   label: 'Twitter'  },
]

const CODE_SNIPPET = `const developer = {
  name: "Your Name",
  role: "Frontend Developer",
  skills: ["React", "JS", "CSS"],
  passion: "Building the Web"
};`

export default function Hero() {
  const codeRef = useRef(null)

  useEffect(() => {
    // Typewriter effect for code snippet
    const el = codeRef.current
    if (!el) return
    const text = CODE_SNIPPET
    el.textContent = ''
    let i = 0
    const timer = setInterval(() => {
      el.textContent += text[i]
      i++
      if (i >= text.length) clearInterval(timer)
    }, 28)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900 bg-hero-pattern" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 section-container py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Hi, I&apos;m{' '}
              <span className="gradient-text">ArunKumar</span>
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-primary-600/0 via-primary-500/50 to-primary-600/0 max-w-[60px]" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-300">
                Frontend Developer
              </h2>
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              I craft beautiful, performant web experiences with modern technologies.
              Passionate about clean code, thoughtful UI, and delivering real value through
              every line I write.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="projects" smooth duration={600} offset={-70}>
                <button id="hero-view-projects-btn" className="btn-primary">
                  View Projects
                  <HiArrowDown className="w-4 h-4" />
                </button>
              </Link>
              <a href="/resume.pdf" download id="hero-download-resume-btn" className="btn-outline">
                Download Resume
                <HiDownload className="w-4 h-4" />
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-5">
              <span className="text-gray-500 text-sm">Find me on</span>
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:scale-110 transform"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Code card */}
          <div className="hidden lg:flex items-center justify-center animate-slide-up">
            <div className="relative w-full max-w-md">
              {/* Glow behind card */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600/20 to-purple-600/20 blur-2xl" />

              <div className="relative glass-card p-0 overflow-hidden shadow-2xl">
                {/* Terminal bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-dark-900/60 border-b border-white/[0.06]">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-gray-500 text-xs font-mono">developer.js</span>
                </div>

                <div className="p-5">
                  <pre
                    ref={codeRef}
                    className="text-sm font-mono text-green-400 leading-relaxed whitespace-pre-wrap"
                  />
                  <span className="inline-block w-2 h-5 bg-primary-500 animate-pulse ml-0.5 align-middle" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-px bg-white/[0.06]">
                  {[
                    { val: '0.5', label: 'Years Exp.' },
                    { val: '4+', label: 'Projects'  },
                    { val: '100%', label: 'Passion'   },
                  ].map(({ val, label }) => (
                    <div key={label} className="bg-dark-800/80 py-4 text-center">
                      <p className="text-xl font-bold gradient-text">{val}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs font-mono">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
