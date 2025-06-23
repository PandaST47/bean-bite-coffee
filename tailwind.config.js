// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': {
          100: '#F5EBE0',
          200: '#E6D5C1',
          300: '#D4BFA2',
          400: '#B69F7E',
          500: '#8D7B63',
          600: '#6B5E4B',
          700: '#594D3E',
          800: '#453B30',
          900: '#302821',
        },
        'cream': '#FFF8E7',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [],
}