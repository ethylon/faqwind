const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    './index.html', './src/**/*.vue'
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: '80rem',
      },
      padding: {
        DEFAULT: '3rem',
        sm: '4rem',
        md: '6rem'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
        mono: ['Cascadia Code', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        tailwind: '#06B6D4',
        neutral: colors.blueGray
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: 'inherit',
            h2: {
              color: 'inherit',
              a: {
                '&:hover': { textDecoration: 'none' }
              }
            },
            strong: { color: 'inherit' },
            code: {
              color: 'inherit',
              class: { color: theme('colors.purple.800') },
              keyword: { color: theme('colors.blue.800') },
              symbol: { color: theme('colors.red.600') },
            },
            a: {
              color: theme('colors.tailwind'),
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' }
            },
          }
        }
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addBase, theme }) {
      addBase({
        '*[actions]': {
          color: theme('colors.neutral.400'),
          cursor: theme('cursor.pointer'),
          '&:hover': { color: theme('colors.neutral.500') }
        },
        '*::-webkit-scrollbar': {
          width: theme('width.2'),
          height: theme('height.2')
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: theme('colors.neutral.300'),
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: theme('colors.neutral.400'),
          borderRadius: theme('borderRadius.DEFAULT')
        }
      })
    }),
  ],
}