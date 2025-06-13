import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  // Transform scroll position to various animation values
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 100])
  const orb1Y = useTransform(scrollY, [0, 1000], [0, -150])
  const orb2Y = useTransform(scrollY, [0, 1000], [0, 150])
  const orb1Scale = useTransform(scrollY, [0, 1000], [1, 1.2])
  const orb2Scale = useTransform(scrollY, [0, 1000], [1, 0.8])
  const gridOpacity = useTransform(scrollY, [0, 500], [0.03, 0.06])
  const particleOpacity = useTransform(scrollY, [0, 500], [0.3, 0.5])

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      baseY: number // Store original Y position for scroll effect
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        baseY: Math.random() * canvas.height
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX
        // Add scroll-based movement to particles
        const scrollOffset = window.scrollY * 0.1
        particle.y = particle.baseY + scrollOffset

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background with scroll effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a]"
        style={{ y: backgroundY }}
      />
      
      {/* Grid pattern with scroll-based opacity */}
      <motion.div 
        className="absolute inset-0"
        style={{
          opacity: gridOpacity,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated gradient orbs with scroll effects */}
      <motion.div
        className="absolute -left-1/4 top-1/4 h-[800px] w-[800px] rounded-full bg-blue-500/5 blur-3xl"
        style={{
          y: orb1Y,
          scale: orb1Scale
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-1/4 h-[800px] w-[800px] rounded-full bg-purple-500/5 blur-3xl"
        style={{
          y: orb2Y,
          scale: orb2Scale
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.1, 0.15],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating elements with scroll-based movement */}
      <motion.div
        className="absolute left-1/4 top-1/3 h-32 w-32 rounded-full bg-blue-500/5 blur-xl"
        style={{ y: orb1Y }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/3 h-24 w-24 rounded-full bg-purple-500/5 blur-xl"
        style={{ y: orb2Y }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Interactive particles canvas with scroll-based opacity */}
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: particleOpacity }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0 bg-radial-gradient opacity-50" 
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
        }}
      />
    </div>
  )
}

export default BackgroundAnimation 