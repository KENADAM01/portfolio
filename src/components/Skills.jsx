import { useEffect, useRef, useState } from 'react'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs,
} from 'react-icons/fa'
import { MdDevices } from 'react-icons/md'
import { SiTailwindcss } from 'react-icons/si'

const SKILLS = [
  { icon: FaHtml5,       name: 'HTML5',              color: '#E44D26', level: 95, category: 'core'    },
  { icon: FaCss3Alt,     name: 'CSS3',               color: '#1572B6', level: 90, category: 'core'    },
  { icon: FaJs,          name: 'JavaScript',         color: '#F7DF1E', level: 60, category: 'core'    },
  { icon: FaReact,       name: 'React',              color: '#61DAFB', level: 60, category: 'framework'},
  { icon: SiTailwindcss, name: 'Tailwind CSS',       color: '#38B2AC', level: 60, category: 'framework'},
  { icon: FaGitAlt,      name: 'Git',                color: '#F05032', level: 60, category: 'tools'   },
  { icon: MdDevices,     name: 'Responsive Design',  color: '#A78BFA', level: 60, category: 'design'  },
  { icon: FaNodeJs,      name: 'Node.js',            color: '#6cc24a', level: 60, category: 'backend' },
]

function SkillCard({ skill, visible, index }) {
  return (
    <div
      className="glass-card p-5 hover:border-white/[0.12] group transition-all duration-300"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`,
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${skill.color}18`, color: skill.color }}
        >
          <skill.icon />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-gray-100 truncate">{skill.name}</p>
          <p className="text-gray-500 text-xs">{skill.level}%</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-dark-900/60 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width:      visible ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
            transitionDelay: `${index * 80 + 300}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900 pointer-events-none" />

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 text-sm font-mono mb-2 tracking-widest uppercase">What I work with</p>
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            A curated toolbox I use to turn designs into fast, accessible, and delightful web experiences.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} visible={visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
