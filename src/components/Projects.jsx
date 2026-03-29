import { useEffect, useRef, useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { HiTag } from 'react-icons/hi'

const PROJECTS = [
  {
    id:          'todo-app',
    title:       'Todo App',
    description: 'A feature-rich task management app built with React. Supports adding, completing, filtering, and deleting tasks. Data is stored in localStorage.',
    image:       '/project_todo.png',
    tags:        ['React', 'Hooks', 'localStorage', 'CSS'],
    github:      'https://github.com/',
    demo:        'https://KENADAM01.github.io/todo-app/',
    featured:    true,
  },
  {
    id:          'weather-app',
    title:       'Weather App',
    description: 'Real-time weather dashboard using OpenWeatherMap API. Shows temperature, humidity, wind speed, and a 5-day forecast.',
    image:       '/project_weather.png',
    tags:        ['React', 'REST API', 'Axios', 'Responsive'],
    github:      'https://github.com/',
    demo:        'https://KENADAM01.github.io/weather-app/',
    featured:    true,
  },
  {
    id:          'movie-app',
    title:       'Movie App',
    description: 'A movie browsing app using API. Users can search movies, view ratings, and see details like posters, release date, and overview.',
    image:       '/project_movie.png',
    tags:        ['React', 'API', 'Axios', 'CSS'],
    github:      'https://github.com/',
    demo:        'https://kenadam01.github.io/movie-app',
    featured:    true,
  },
]

function ProjectCard({ project, index, visible }) {
  return (
    <article
      className="project-card glass-card overflow-hidden group"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
      }}
      id={`project-card-${project.id}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-${project.id}-demo-link`}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            <FiExternalLink size={14} /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-${project.id}-github-link`}
            className="flex items-center gap-2 px-4 py-2 bg-dark-600/80 border border-white/10 hover:border-white/30 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            <FiGithub size={14} /> Code
          </a>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold bg-primary-600/90 backdrop-blur-sm text-white rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-white mb-2 group-hover:text-primary-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-primary-600/10 text-primary-300 border border-primary-500/20 rounded-md"
            >
              <HiTag size={10} /> {tag}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors duration-200"
          >
            <FiGithub size={15} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200 ml-auto"
          >
            Live Demo <FiExternalLink size={13} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.05 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/20 to-dark-900 pointer-events-none" />

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 text-sm font-mono mb-2 tracking-widest uppercase">What I&apos;ve Built</p>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            A selection of projects I&apos;ve built — from React apps to API integrations.
            Each one taught me something new.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} visible={visible} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            id="view-all-projects-btn"
            className="btn-outline"
          >
            <FiGithub size={16} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
