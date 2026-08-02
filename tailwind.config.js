/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vedic: {
          dark: '#0A0D14',
          card: '#121824',
          accent: '#D97706',
          gold: '#F59E0B',
          saffron: '#EA580C',
          light: '#F8FAFC',
          muted: '#94A3B8'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Marcellus', 'Georgia', 'serif'],
        sanskrit: ['"Noto Serif Devanagari"', 'Samarkan', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'divine-gradient': 'radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.15) 0%, rgba(18, 24, 36, 0.95) 70%)',
        'gold-shimmer': 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)',
        'sacred-glow': 'radial-gradient(circle, rgba(234, 88, 12, 0.25) 0%, rgba(10, 13, 20, 0) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(245, 158, 11, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(245, 158, 11, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
