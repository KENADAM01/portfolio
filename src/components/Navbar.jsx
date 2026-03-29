import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiCode } from 'react-icons/fi'

const navLinks = [
  { label: 'Home',     to: 'home'     },
  { label: 'About',    to: 'about'    },
  { label: 'Skills',   to: 'skills'   },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact',  to: 'contact'  },
]

export default function Navbar() {
  const [isOpen,    setIsOpen]    = useState(false)
  const [scrolled,  setScrolled]  = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkProps = {
    smooth:   true,
    duration: 600,
    spy:      true,
    offset:   -70,
    onSetActive: (to) => setActiveSection(to),
  }

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-800/90 backdrop-blur-md border-b border-white/[0.06] shadow-xl shadow-dark-900/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo */}
          <Link to="home" smooth duration={600} className="flex items-center gap-2 cursor-pointer group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center shadow-lg shadow-primary-600/30 group-hover:shadow-primary-600/50 transition-shadow duration-300">
              <FiCode className="text-white text-lg" />
            </div>
            <span className="text-lg font-bold gradient-text">Dev Portfolio</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  {...linkProps}
                  className={`nav-link cursor-pointer text-sm ${activeSection === to ? 'text-white after:w-full' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              download
              id="navbar-resume-btn"
              className="btn-primary text-sm py-2 px-5"
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(o => !o)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-card mt-2 p-4 flex flex-col gap-1">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                {...linkProps}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/[0.06] cursor-pointer transition-all duration-200 font-medium"
              >
                {label}
              </Link>
            ))}
            <div className="border-t border-white/[0.06] mt-2 pt-3">
              <a href="/resume.pdf" download className="btn-primary w-full justify-center text-sm">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
