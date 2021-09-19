module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      game: '16.25rem',
    },
    minWidth: {
      gameinfo: '11.875rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
