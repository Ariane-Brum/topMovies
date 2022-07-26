/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1645px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1025px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '688px' },
      // => @media (max-width: 639px) { ... }
      xs: { max: '450px' }
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        source: 'Source Sans Pro, sans-serif'
      },
      colors: {
        blue: {
          300: '#4452A1',
          400: '#122469',
          500: '#081548',
          600: '#132050',
          700: '#14183E',
          800: '#070A33',
          900: '#070A25'
        },
        cyan: {
          400: '#22CABE'
        }
      }
    }
  },
  plugins: []
}
