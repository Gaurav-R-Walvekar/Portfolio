import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter, FiExternalLink, FiMail } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import ScrollAnimation from './components/ScrollAnimation'
import BackgroundAnimation from './components/BackgroundAnimation'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      
      {/* Navigation */}
      <nav className="fixed w-full bg-primary/90 backdrop-blur-sm z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold text-tertiary">Portfolio</a>
            
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
              className="md:hidden text-textPrimary"
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
              className="md:hidden mt-4"
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
      <section className="h-screen flex items-center">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              CREATIVE DEVELOPER
            </h1>
            <p className="text-xl md:text-2xl text-textSecondary mb-8">
              Code Crafter
            </p>
            <p className="text-lg text-textSecondary max-w-2xl mx-auto mb-12">
              Where code meets creativity. I craft immersive web experiences and stunning visual narratives that push the boundaries of digital art.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#portfolio" className="btn btn-primary">
                Explore My Work
              </a>
              <a href="#contact" className="btn border border-tertiary text-tertiary hover:bg-tertiary/10">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title text-center">About Me</h2>
          </ScrollAnimation>
          <ScrollAnimation>
            <p className="text-textSecondary text-center max-w-3xl mx-auto mb-12">
              I am a passionate digital creator, specializing in both web development and video editing. 
              I transform ideas into extraordinary digital experiences, crafting responsive and interactive 
              websites that captivate users.
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation>
              <div className="card text-center">
                <span className="text-4xl mb-4">💻</span>
                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                <p className="text-textSecondary">
                  Modern frameworks, responsive design, and cutting-edge technologies to create seamless user experiences.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <div className="card text-center">
                <span className="text-4xl mb-4">🎨</span>
                <h3 className="text-xl font-bold mb-4">Creative Design</h3>
                <p className="text-textSecondary">
                  UI/UX design, branding, and visual aesthetics that make lasting impressions.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container">
          <ScrollAnimation>
            <h2 className="section-title text-center">My Portfolio</h2>
          </ScrollAnimation>
          
          {/* Web Development Projects */}
          <ScrollAnimation>
            <h3 className="text-2xl font-bold mb-8 text-center">💻 Web Development</h3>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <ScrollAnimation>
              <div className="card group shadow-lg rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 transition-transform duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src="./src/img/rainbet-logo.png" 
                    alt="Lucky Roller Reward Platform" 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a 
                      href="https://www.luckyrollerreward.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Visit Live Site
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Lucky Roller Reward</h3>
                  <p className="text-textSecondary mb-4">
                    An interactive gaming platform featuring smooth animations, engaging user interfaces, and seamless user experience. Built with modern web technologies and optimized for performance across all devices.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">CSS3</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Responsive Design</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Animations</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="card group shadow-lg rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 transition-transform duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src="./src/img/Sony.png" 
                    alt="Sony Crusher Engineering Website" 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a 
                      href="https://sony-crusher.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Visit Live Site
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Sony Crusher Engineering</h3>
                  <p className="text-textSecondary mb-4">
                    A professional business website for a leading stone crusher and wiremesh manufacturing company. Features a modern design, responsive layout, and comprehensive product showcase with enquiry system.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Node JS</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">HTML/CSS</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Responsive Design</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Business Website</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="card group shadow-lg rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 transition-transform duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="./src/img/PRS_logo.png"
                    alt="PRS Stock Platform"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href="https://prs-stock.x02.me/stock"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Visit Live Site
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">PRS Stock Platform</h3>
                  <p className="text-textSecondary mb-4">
                    A comprehensive stock tracking and analysis platform with real-time data visualization,
                    intuitive dashboard design, and advanced trading features for modern investors.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Data Visualization</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Real-time Updates</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Dashboard UI</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Analytics</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-2xl mx-auto">
          <ScrollAnimation>
            <h2 className="section-title text-center">Get In Touch</h2>
          </ScrollAnimation>
          <ScrollAnimation>
            <p className="text-textSecondary text-center max-w-xl mx-auto mb-12">
              Ready to create something extraordinary? Connect with me on Discord!
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation>
            <div className="card text-center p-8 hover:scale-105 transition-transform duration-300">
              <span className="text-5xl mb-6 block">💻</span>
              <h3 className="text-2xl font-bold mb-3">Gaurav</h3>
              <p className="text-textSecondary text-lg mb-4">Software Development</p>
              <p className="text-textSecondary mb-8">
                Creating stunning web experiences with cutting-edge technology and innovative design solutions.
              </p>
              <div className="flex gap-6 justify-center mt-8">
              <a
                href="https://github.com/Gaurav-R-Walvekar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-accent/20 text-base text-textSecondary hover:text-accent transition-colors duration-200 shadow"
              >
                <FiGithub className="text-xl" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-walvekar-323166211/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-accent/20 text-base text-textSecondary hover:text-accent transition-colors duration-200 shadow"
              >
                <FiLinkedin className="text-xl" />
                LinkedIn
              </a>
              <a
                href="mailto:gauravwalvekarr@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-accent/20 text-base text-textSecondary hover:text-accent transition-colors duration-200 shadow"
              >
                <FiMail className="text-xl" />
                Email
              </a>
            </div>
            </div>
          </ScrollAnimation>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black/60 border-t border-white/10 py-8 mt-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4 px-4">
          <div className="text-center text-textSecondary text-sm">
            © {new Date().getFullYear()} Gaurav | Digital Craftsman. Pushing the boundaries of creativity.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 