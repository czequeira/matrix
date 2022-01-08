const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.ts']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#336699',
        'secundary': '#86BBD8',
        'success': '#94FBAB',
        'warning': '#EFCA08',
        'danger': '#E07A5F'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      const newBorders = {
        '.border-t-primary': {
          borderTopColor: theme('colors.primary'),
        },
      }
      addComponents(newBorders)
    })
  ]
}
