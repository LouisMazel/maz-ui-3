// Tailwind CSS configuration (https://tailwindcss.com/docs/configuration)

module.exports = {
  presets: [require('./../lib/tailwind.config')],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
