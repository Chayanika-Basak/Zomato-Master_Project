module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4xxl': '2.5rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
     },
    extend: {

      colors: {
        coral: 
        {
          50: '#ffe5e7',
          100: '#fabac0',
          200: '#f18f96',
          300: '#e9626d',
          400: '#e23744',
          500: '#c81d2a',
          600: '#9d1520',
          700: '#700d16',
          800: '#46060c',
          900: '#1e0002',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
