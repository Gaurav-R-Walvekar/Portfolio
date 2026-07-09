import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import ScrollAnimation from './components/ScrollAnimation'
import BackgroundAnimation from './components/BackgroundAnimation'
import ProjectCard from './components/ProjectCard'
import rainbetLogo from './img/rainbet-logo.png'
import sonyLogo from './img/Sony.png'
import prsLogo from './img/PRS_logo.png'
import hotelLogo from './img/Hotel_logo.png'
import garageLogo from './img/garage-logo.png'
import krushvelLogo from './img/krushvel-logo.png'
import webProjects from './data/webProjects.json'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const imageMap: Record<string, string> = {
    'hotel-logo.png': hotelLogo,
    'rainbet-logo.png': rainbetLogo,
    'Sony.png': sonyLogo,
    'PRS_logo.png': prsLogo,
    'garage-logo.png': garageLogo,
    'krushvel-logo.png': krushvelLogo,
  }

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen relative bg-space-gradient">
      <BackgroundAnimation />
      
      {/* Navigation */}
      <nav className="fixed w-full bg-primary/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold text-tertiary relative group">
              <span className="relative z-10">AiSoft</span>
              <span className="absolute inset-0 bg-tertiary/20 blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-textPrimary hover:text-tertiary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 bg-secondary/80 backdrop-blur-md rounded-lg p-4 border border-white/10"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="floating"
          >
            <ScrollAnimation direction="down" threshold={0.2}>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-tertiary via-accent to-tertiary animate-gradient-x">
                AiSoft CREATIVE SOLUTIONS
              </h1>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.2} threshold={0.2}>
              <p className="text-xl md:text-2xl text-textSecondary mb-8 font-light tracking-wide">
                Innovative Web & Software Development
              </p>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4} threshold={0.2}>
              <p className="text-lg text-textSecondary max-w-2xl mx-auto mb-12 leading-relaxed">
                Where code meets creativity. We craft immersive web experiences and stunning visual narratives that push the boundaries of digital art.
              </p>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6} threshold={0.2}>
              <div className="flex gap-6 justify-center">
                <a href="#portfolio" className="btn btn-primary group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Our Work
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <span className="absolute inset-0 bg-tertiary/20 blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </a>
                <a href="#contact" className="btn border border-tertiary text-tertiary hover:bg-tertiary/10 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Get In Touch
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <span className="absolute inset-0 bg-tertiary/10 blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </a>
              </div>
            </ScrollAnimation>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container relative z-10">
          <ScrollAnimation direction="down" threshold={0.2}>
            <h2 className="section-title text-center">About Us</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2} threshold={0.2}>
            <p className="text-textSecondary text-center max-w-3xl mx-auto mb-12">
              We are a passionate team of developers and designers who love turning ideas into interactive,
              high-performing digital experiences. With a strong foundation in both frontend and backend technologies,
              we specialize in building responsive, scalable, and user-centric web applications from the ground up.
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation direction="left" delay={0.3} threshold={0.2}>
              <div className="card group h-[200px] flex flex-col">
                <div className="relative flex-none">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">💻 Web Development</span>
                  <div className="absolute inset-0 bg-tertiary/10 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
                <p className="text-textSecondary flex-grow">
                  Modern frameworks, responsive design, and cutting-edge technologies to create seamless user experiences.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4} threshold={0.2}>
              <div className="card group h-[200px] flex flex-col">
                <div className="relative flex-none">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🎨 Creative Design</span>
                  <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
                <p className="text-textSecondary flex-grow">
                  UI/UX design, branding, and visual aesthetics that make lasting impressions.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.5} threshold={0.2}>
              <div className="card group h-[200px] flex flex-col">
                <div className="relative flex-none">
                  <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🚀 Performance</span>
                  <div className="absolute inset-0 bg-tertiary/10 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
                <p className="text-textSecondary flex-grow">
                  Optimized applications with blazing fast load times and smooth interactions.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative">
        <div className="container relative z-10">
          <ScrollAnimation direction="down" threshold={0.2}>
            <h2 className="section-title text-center">Our Portfolio</h2>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.2} threshold={0.2}>
            <h3 className="text-2xl font-bold mb-8 text-center">💻 Web Development</h3>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
            {webProjects
              .filter((project) => project.show !== false)
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageSrc={imageMap[project.image]}
                  link={project.link}
                  skills={project.skills}
                  index={index}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-2xl mx-auto">
          <ScrollAnimation direction="down" threshold={0.2}>
            <h2 className="section-title text-center">Get In Touch</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2} threshold={0.2}>
            <p className="text-textSecondary text-center max-w-xl mx-auto mb-12">
              Ready to create something extraordinary? Let's connect!
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.4} threshold={0.2}>
            <div className="card text-center p-8 hover:scale-105 transition-transform duration-300">
              <span className="text-5xl mb-6 block">💻</span>
              <h3 className="text-2xl font-bold mb-3">AiSoft</h3>
              <p className="text-textSecondary text-lg mb-4">Creative Solutions</p>
              <p className="text-textSecondary mb-8">
                Let's discuss your next project and create something amazing together.
              </p>
              <div className="flex flex-col space-y-4 items-center">
                <a
                  href="tel:+918888308567"
                  className="flex items-center space-x-2 text-tertiary hover:text-accent transition-colors duration-300 group"
                >
                  <FiPhone className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span>+91 8888308567</span>
                </a>
                <a
                  href="mailto:aisoftservice@gmail.com"
                  className="flex items-center space-x-2 text-tertiary hover:text-accent transition-colors duration-300 group"
                >
                  <FiMail className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span>aisoftservice@gmail.com</span>
                </a>
                <div className="flex space-x-4 mt-2">
                  {/* <a
                    href="https://github.com/aisoft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-tertiary transition-colors duration-300 group"
                  >
                    <FiGithub className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                  </a> */}
                  <a
                    href="https://www.linkedin.com/in/gaurav-walvekar-323166211/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-tertiary transition-colors duration-300 group"
                  >
                    <FiLinkedin className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black/60 border-t border-white/10 py-8 mt-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4 px-4">
          <div className="text-center text-textSecondary text-sm">
            © {new Date().getFullYear()} AiSoft | Creative Solutions. Pushing the boundaries of creativity.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 