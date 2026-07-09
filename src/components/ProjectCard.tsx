import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  link: string
  skills: string[]
  index: number
}

const ProjectCard = ({ title, description, imageSrc, link, skills, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="card group shadow-lg rounded-xl bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-tertiary/20 hover:border-tertiary/30"
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={imageSrc}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm px-6 py-2.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            Visit Live Site
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-tertiary group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-textSecondary text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
