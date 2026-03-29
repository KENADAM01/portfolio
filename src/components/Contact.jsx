import { useState, useRef } from 'react'
import { FiMail, FiLinkedin, FiGithub, FiSend, FiMapPin } from 'react-icons/fi'

const CONTACT_INFO = [
  {
    icon:  FiMail,
    label: 'Email',
    value: 'adamarun530@gmail.com',
    href:  'mailto:adamarun530@gmail.com',
    id:    'contact-email-link',
  },
  {
    icon:  FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/arun-kumar-175b58279',
    href:  'https://www.linkedin.com/in/arun-kumar-175b58279',
    id:    'contact-linkedin-link',
  },
  {
    icon:  FiGithub,
    label: 'GitHub',
    value: 'github.com/KENADAM01',
    href:  'https://github.com/KENADAM01',
    id:    'contact-github-link',
  },
  {
    icon:  FiMapPin,
    label: 'Location',
    value: '10-99, P.K.Garden St, Thyagarajapuram, Mylapore, Chennai, Tamil Nadu 600004',
    href:  null,
    id:    'contact-location',
  },
]

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' })
  const [status,  setStatus]  = useState(null) // 'sending' | 'success' | 'error'
  const formRef = useRef(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate sending (replace with your backend / EmailJS / Formspree)
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className="py-24 relative">
      {/* Orb */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-600/10 blur-3xl pointer-events-none" />

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 text-sm font-mono mb-2 tracking-widest uppercase">Let&apos;s talk</p>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-accent rounded-full mx-auto mt-4" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Have a project in mind or just want to say hello? My inbox is always open —
            I&apos;ll get back to you as soon as possible!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Let&apos;s work together</h3>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              Whether you have a question, a project idea, or just want to connect — feel free to
              reach out through any of the channels below.
            </p>

            <div className="flex flex-col gap-4">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href, id }) => (
                <div key={label} className="flex items-center gap-4 glass-card p-4 group hover:border-primary-500/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-primary-600/15 flex items-center justify-center text-primary-400 flex-shrink-0 group-hover:bg-primary-600/25 transition-colors duration-300">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-xs">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        id={id}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-200 text-sm font-medium hover:text-primary-400 transition-colors duration-200 truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p id={id} className="text-gray-200 text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            id="contact-form"
            className="glass-card p-6 sm:p-8 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-1.5">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-300 mb-1.5">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="Project inquiry / Hello"
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hi..."
                className="input-field resize-none"
              />
            </div>

            <button
              type="submit"
              id="contact-submit-btn"
              disabled={status === 'sending'}
              className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  <FiSend size={15} /> Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 border border-green-400/20 rounded-xl px-4 py-3">
                ✓ Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
