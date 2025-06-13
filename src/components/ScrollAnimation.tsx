import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const ScrollAnimation = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}: ScrollAnimationProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 50 }
      case 'down':
        return { y: -50 }
      case 'left':
        return { x: 50 }
      case 'right':
        return { x: -50 }
      default:
        return { y: 50 }
    }
  }

  const offset = getDirectionOffset()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimation 