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
    ],
    enabled: production // disable purge in dev
  },
  darkMode: false, // or 'media' or 'class'
  plugins: [],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    fontFamily: {},
    extend: {
      colors: {
        gray: colors.coolGray,
        cyan: colors.cyan,
      },
      fontSize: {
        xxs: '0.625rem',
      },
      maxHeight: {},
    },
  },
}
