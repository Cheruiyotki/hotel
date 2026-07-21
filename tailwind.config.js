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
          navy: '#1D2A42',
          light: '#F5F4F1',
          gold: '#B79A63',
        },
        golden: {
          50: '#FBF8F3',
          100: '#F5F4F1',
          400: '#B79A63',
          600: '#9D7E4F',
        },
        navy: {
          900: '#1D2A42',
          800: '#2A3850',
          700: '#3A4F6B',
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
