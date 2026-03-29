import { useEffect, useRef, useState } from 'react'
import { FiUser, FiCode, FiZap, FiStar } from 'react-icons/fi'

const HIGHLIGHTS = [
  { icon: FiCode,  label: 'React Developer'     },
  { icon: FiZap,   label: 'Performance-First'   },
  { icon: FiStar,  label: 'Clean Code Advocate' },
  { icon: FiUser,  label: 'Team Player'         },
]

function useInView(ref) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref])
  return visible
}

export default function About() {
  const ref = useRef(null)
  const visible = useInView(ref)

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900 pointer-events-none" />

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 text-sm font-mono mb-2 tracking-widest uppercase">Get to know me</p>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent rounded-full mx-auto mt-4" />
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left — Avatar card */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-600/20 to-accent/20 blur-xl" />
              <div className="relative glass-card p-6 flex flex-col items-center gap-4 shadow-2xl max-w-xs">
                {/* Avatar placeholder */}
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center text-5xl shadow-lg shadow-primary-600/30">
                  👋
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">Arun Kumar</h3>
                  <p className="text-primary-400 text-sm font-mono">Frontend Developer</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'Git'].map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary-600/15 text-primary-300 border border-primary-500/20 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="w-full border-t border-white/[0.06] pt-4 grid grid-cols-2 gap-3 text-center text-sm">
                  <div>
                    <p className="font-bold text-white">0.5 </p>
                    <p className="text-gray-500 text-xs">Years exp.</p>
                  </div>
                  <div>
                    <p className="font-bold text-white">4+</p>
                    <p className="text-gray-500 text-xs">Projects done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Bio */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              I&apos;m a passionate{' '}
              <span className="gradient-text">Frontend Developer</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Hello! I&apos;m a Frontend Developer with a deep love for building clean,
              intuitive, and visually compelling web experiences. I specialize in crafting
              modern UIs with <strong className="text-gray-200">HTML</strong>,{' '}
              <strong className="text-gray-200">CSS</strong>,{' '}
              <strong className="text-gray-200">JavaScript</strong>, and{' '}
              <strong className="text-gray-200">React</strong>.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I believe that great code is not just about functionality — it&apos;s about
              readability, maintainability, and creating something that both users and
              developers love. I&apos;m always learning, always building, and always
              looking for the next challenge to tackle.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 glass-card px-4 py-3 hover:border-primary-500/30 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-lg bg-primary-600/15 flex items-center justify-center text-primary-400 flex-shrink-0">
                    <Icon size={16} />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            <a href="/resume.pdf" download id="about-download-resume-btn" className="btn-primary">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
