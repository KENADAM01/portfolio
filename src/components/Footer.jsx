import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiCode, FiHeart } from 'react-icons/fi'
import { Link } from 'react-scroll'

const NAV_LINKS = [
  { label: 'Home',     to: 'home'     },
  { label: 'About',    to: 'about'    },
  { label: 'Skills',   to: 'skills'   },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact',  to: 'contact'  },
]

const SOCIAL = [
  { icon: FiGithub,   href: 'https://github.com/KENADAM01', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/arun-kumar-175b58279', label: 'LinkedIn' },
  { icon: FiTwitter,  href: 'https://twitter.com/',   label: 'Twitter'  },
  { icon: FiMail,     href: 'mailto:adamarun530@gmail.com', label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] bg-dark-800/40 backdrop-blur-sm">
      {/* Gradient bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-600/50 to-transparent" />

      <div className="section-container py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center shadow-lg shadow-primary-600/30">
                <FiCode className="text-white text-sm" />
              </div>
              <span className="font-bold gradient-text text-lg">Dev Portfolio</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Frontend Developer crafting modern, performant web experiences.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-semibold text-gray-300 text-sm mb-4">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={600}
                    offset={-70}
                    className="text-gray-500 text-sm hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-gray-300 text-sm mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  id={`footer-${label.toLowerCase()}-link`}
                  className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/40 transition-all duration-200 hover:scale-110"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-600 text-xs">
          <p>© {year} Your Name. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <FiHeart className="text-red-500" /> using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
