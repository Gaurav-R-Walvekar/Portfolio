import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const BackgroundAnimation = () => {
  const [stars, setStars] = useState<Star[]>([])
  const [shootingStars, setShootingStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate regular stars
    const regularStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.5,
    }))

    // Generate shooting stars
    const shootingStarsArray = Array.from({ length: 5 }, (_, i) => ({
      id: i + 100,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 10,
      opacity: 1,
    }))

    setStars(regularStars)
    setShootingStars(shootingStarsArray)

    // Update shooting stars periodically
    const interval = setInterval(() => {
      setShootingStars(prev => 
        prev.map(star => ({
          ...star,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 10,
        }))
      )
    }, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Regular twinkling stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          initial={{ 
            opacity: 0,
            x: 0,
            y: 0,
            rotate: -45,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, 100],
            y: [0, 100],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeOut",
            delay: star.delay,
          }}
        >
          <div 
            className="h-0.5 bg-white rounded-full"
            style={{
              width: `${star.size * 20}px`,
              boxShadow: '0 0 4px 1px rgba(255,255,255,0.5)',
            }}
          />
        </motion.div>
      ))}

      {/* Nebula effect */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-tertiary rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Cosmic dust */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
    </div>
  )
}

export default BackgroundAnimation