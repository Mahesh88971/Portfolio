import { useEffect, useState } from 'react'
import './App.css'

const profilePhoto = `${import.meta.env.BASE_URL}profile-photo.jpeg`
const currentYear = new Date().getFullYear()

const projects = [
  {
    number: '01',
    title: 'Clinic Queue & Patient Flow',
    category: 'AI-powered web solution',
    description: 'A real-world patient management experience that combines responsive interfaces with intelligent workflow automation for faster service delivery.',
    tags: ['React', 'Node.js', 'REST APIs', 'AI workflows'],
    link: 'https://mahesh88971.github.io/clinic-queue-and-patient-flow-management/',
  },
  {
    number: '02',
    title: 'RESQFLOW',
    category: 'Ideathon · RK College of Engineering',
    description: 'RESQFLOW is a smart emergency response dashboard designed to improve ambulance dispatch, emergency prioritization, route optimization, hospital matching, and live operational visibility. It brings together real-time emergency coordination, simulated traffic intelligence, and hospital capacity awareness into a single command-center experience.',
    tags: ['Emergency Tech', 'Route Optimization', 'Dashboard', 'AI workflows'],
    link: 'https://mahesh88971.github.io/RESQFLOW/',
  },
  {
    number: '03',
    title: 'Inclusive Digital Culture',
    category: 'Cultathon · VIT-AP University',
    description: 'A digital storytelling platform celebrating culture, language, and identity through literature, design, and accessible online experiences.',
    tags: ['JavaScript', 'Responsive UI', 'Digital culture'],
    link: 'https://mahesh88971.github.io/sign/',
  },
]

const skillGroups = [
  ['Frontend', 'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
  ['Backend', 'Node.js', 'Express.js', 'RESTful APIs', 'Python', 'FastAPI / Flask'],
  ['AI & Data', 'NumPy', 'Pandas', 'OpenAI API', 'LLM integration', 'Prompt engineering'],
  ['Tools', 'MongoDB', 'MySQL', 'Git', 'GitHub', 'Postman'],
]

const contactLinks = [
  {
    icon: '@',
    label: 'Email',
    value: 'lucky9595812@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=lucky9595812@gmail.com&su=Project%20idea%20for%20Mahesh%20Babu%20Sanka&body=Hi%20Mahesh%2C%0A%0AI%20would%20like%20to%20discuss%20an%20idea%20with%20you.%0A%0A',
  },
  { icon: 'in', label: 'LinkedIn', value: 'mahesh-babu-sanka', href: 'https://linkedin.com/in/mahesh-babu-sanka' },
  { icon: '⌘', label: 'GitHub', value: 'Mahesh88971', href: 'https://github.com/Mahesh88971' },
  { icon: '◎', label: 'Instagram', value: '@ft.lucky_27', href: 'https://www.instagram.com/ft.lucky_27' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    )

    const revealTargets = document.querySelectorAll('.reveal-item, .project-card, .contact-card')
    revealTargets.forEach((element) => revealObserver.observe(element))

    return () => revealObserver.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Mahesh Babu Sanka home">
          MBS<span>.</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="/Mahesh-Babu-Sanka-Resume-2026.pdf" className="nav-resume" download>
            Resume <span>↓</span>
          </a>
          <a href="#contact" className="nav-contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow hero-load-item">
              <span className="status-dot" /> Available for meaningful work
            </p>
            <h1 className="hero-load-item">
              Building digital
              <br />
              <em>experiences</em> with
              <br />
              intelligent systems.
            </h1>
            <p className="hero-intro hero-load-item">
              I&apos;m Mahesh, a full-stack developer and AI-focused engineer who builds thoughtful digital products from idea to impact.
            </p>
            <a className="text-link hero-load-item" href="#projects">
              Explore my work <span>↓</span>
            </a>
          </div>

          <div className="hero-visual hero-load-item">
            <div className="portrait-frame">
              <img
                src={profilePhoto}
                alt="Mahesh Babu Sanka"
                loading="eager"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                  event.currentTarget.nextElementSibling.style.display = 'grid'
                }}
              />
              <div className="portrait-fallback">MBS</div>
            </div>
            <div className="visual-note note-top">
              01
              <br />
              <small>
                curious
                <br />
                by nature
              </small>
            </div>
            <div className="visual-note note-bottom">
              Scroll to
              <br />
              discover <span>↓</span>
            </div>
          </div>
        </section>

        <section className="intro-section reveal" id="about">
          <div className="section-index reveal-item">01 / 04</div>
          <div className="intro-content">
            <p className="eyebrow reveal-item">A little about me</p>
            <h2 className="reveal-item">
              I like the space
              <br />
              where <em>technology</em>
              <br />
              meets empathy.
            </h2>
            <p className="body-copy reveal-item">
              I&apos;m a goal-driven B.Tech Computer Science student at R K College of Engineering, Vijayawada. I build scalable full-stack applications,
              experiment with LLM-powered workflows, and care about the details that make software useful, clear, and human.
            </p>
            <div className="about-stats reveal-item">
              <span>
                <strong>3rd</strong> year student
              </span>
              <span>
                <strong>03</strong> certifications
              </span>
              <span>
                <strong>∞</strong> things to learn
              </span>
            </div>
          </div>
        </section>

        <section className="skills-section reveal" id="skills">
          <div className="section-heading">
            <div className="section-index reveal-item">02 / 04</div>
            <p className="eyebrow reveal-item">My toolkit</p>
            <h2 className="reveal-item">
              Built to move
              <br />
              <em>between worlds.</em>
            </h2>
          </div>

          <div className="skill-list">
            {skillGroups.map(([label, ...skills], groupIndex) => (
              <div className="skill-row reveal-item" key={label}>
                <span className="skill-label">
                  0{groupIndex + 1} / {label}
                </span>
                <div className="skill-tags">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section reveal" id="projects">
          <div className="section-heading projects-heading">
            <div className="section-index reveal-item">03 / 04</div>
            <p className="eyebrow reveal-item">Selected work</p>
            <h2 className="reveal-item">
              Ideas, made
              <br />
              <em>interactive.</em>
            </h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <a className="project-card reveal-item" href={project.link} target="_blank" rel="noreferrer" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="project-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-section reveal" id="contact">
          <div className="section-index reveal-item">04 / 04</div>
          <p className="eyebrow reveal-item">Have a good idea?</p>
          <h2 className="reveal-item">
            Let&apos;s make
            <br />
            <em>something useful.</em>
          </h2>

          <div className="contact-grid">
            {contactLinks.map((contact) => (
              <a className="contact-card reveal-item" href={contact.href} target="_blank" rel="noreferrer" key={contact.label}>
                <span className="contact-icon">{contact.icon}</span>
                <span>
                  <small>{contact.label}</small>
                  <strong>{contact.value}</strong>
                </span>
                <span className="contact-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <span>© {currentYear} Mahesh Babu Sanka</span>
        <div>
          <a href="https://github.com/Mahesh88971" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/mahesh-babu-sanka" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/ft.lucky_27" target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <span>Made with curiosity</span>
      </footer>
    </div>
  )
}

export default App