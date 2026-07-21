/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#263044',
          light: '#E9E8E5',
          gold: '#8A785D',
        },
        golden: {
          50: '#F7F6F3',
          100: '#E9E8E5',
          400: '#8A785D',
          600: '#6F604B',
        },
        navy: {
          900: '#263044',
          800: '#303A4F',
          700: '#465166',
        }
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'heading-xl': ['3.5rem', { lineHeight: '1.1' }],
        'heading-lg': ['2.5rem', { lineHeight: '1.2' }],
        'heading-md': ['2rem', { lineHeight: '1.3' }],
        'heading-sm': ['1.5rem', { lineHeight: '1.4' }],
      },
      spacing: {
        section: '5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
