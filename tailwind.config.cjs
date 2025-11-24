/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6c7cff',
        accent: '#19b67a',
        surface: '#0f1724',
        card: '#0b1220'
      }
    }
  },
  plugins: []
}
