// Tailwind CSS configuration (https://tailwindcss.com/docs/configuration)
/* eslint-disable @typescript-eslint/no-var-requires */
const breakpoints = {
  'mob-s': '320px',
  'mob-m': '425px',
  'mob-l': '576px',
  'tab-s': '640px',
  'tab-m': '768px',
  'tab-l': '992px',
  'lap-s': '1024px',
  'lap-m': '1280px',
  'lap-l': '1366px',
  'lap-xl': '1440px',
  'lap-2xl': '1680px',
  'lap-3xl': '1920px',
}

module.exports = {
  // mode: 'jit',
  purge: ['./components/**/*'],
  prefix: 'maz-',
  theme: {
    fontFamily: false,
    screens: breakpoints,
    maxWidth: breakpoints,
    // colors: {},
    borderWidth: {
      0: '0',
      1: '1px',
      DEFAULT: '2px',
      2: '2px',
      3: '3px',
      4: '4px',
    },
  },
  // variants: {},
  plugins: [
    require('tailwind-css-variables')({
      colors: false,
      screens: 'screen',
      fontFamily: false,
      fontSize: false,
      fontWeight: false,
      lineHeight: false,
      letterSpacing: false,
      backgroundSize: false,
      borderWidth: false,
      borderRadius: false,
      width: false,
      height: false,
      minWidth: false,
      minHeight: false,
      maxWidth: false,
      maxHeight: false,
      padding: false,
      margin: false,
      boxShadow: false,
      zIndex: false,
      opacity: false,
    }),
  ],
  corePlugins: {
    container: false,
  },
}

/* eslint-enable @typescript-eslint/no-var-requires */
