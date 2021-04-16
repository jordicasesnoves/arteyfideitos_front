/* const colors = require('tailwindcss/colors') */

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px', // Extra addition
      md: '976px',
      lg: '1080px',
      xl: '1200px'
    },
    extend: {
      transitionProperty: {
        width: 'width'
      }
    }
  },

  plugins: [require('tailwind-plugin-line-clamp')]
}
