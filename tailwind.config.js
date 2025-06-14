/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0E17', // Deep space black
        secondary: '#1A1F2E', // Dark cosmic blue
        tertiary: '#6C63FF', // Nebula purple
        accent: '#00F5FF', // Cosmic cyan
        textPrimary: '#FFFFFF', // Pure white
        textSecondary: '#A0AEC0', // Cosmic gray
        spaceBlue: '#1E3A8A', // Deep space blue
        starYellow: '#FFD700', // Star color
        nebulaPink: '#FF69B4', // Nebula accent
        cosmicPurple: '#4B0082', // Deep cosmic purple
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #0A0E17, #1A1F2E)',
        'star-pattern': 'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)',
      },
      animation: {
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
} 