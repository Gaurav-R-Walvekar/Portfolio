import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation, Variants } from 'framer-motion'

interface ScrollAnimationProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
  threshold?: number
}

const ScrollAnimation = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  threshold = 0.1
}: ScrollAnimationProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    amount: threshold,
    once: false 
  })
  const controls = useAnimation()

  const getDirectionVariants = (): Variants => {
    const distance = 100
    const directions = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance }
    }

    return {
      hidden: {
        opacity: 0,
        ...directions[direction],
        scale: 0.95,
        filter: 'blur(10px)',
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
          type: 'spring',
          duration: 1.2,
          bounce: 0.3,
          delay: delay,
        }
      },
      exit: {
        opacity: 0,
        ...directions[direction],
        scale: 0.95,
        filter: 'blur(10px)',
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      }
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('exit')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getDirectionVariants()}
      className={className}
      viewport={{ once: false, amount: threshold }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimation 