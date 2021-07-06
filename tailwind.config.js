const colors = require('tailwindcss/colors')
const production = !process.env.ROLLUP_WATCH

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
      "./src/**/*.svelte",
      "./src/public/global.css",
    ],
    enabled: production // disable purge in dev
  },
  darkMode: false, // or 'media' or 'class'
  plugins: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
    },
    container: {
      center: true,
      padding: '1.25rem',
    },
    fontFamily: {
      'sans': [
        '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',
        'Oxygen-Sans', 'Ubuntu', 'Cantarell', '"Helvetica Neue"', 'sans-serif',
      ],
      'display': ['"Exo 2"', 'ui-serif'],
    },
    extend: {
      colors: {
        gray: colors.coolGray,
        cyan: colors.cyan,
      },
      maxHeight: {},
    },
  },
}
