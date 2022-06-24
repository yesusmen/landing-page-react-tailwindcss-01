/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EE9789',
      }
    },
    fontFamily: {
      sans: ['Montserrad', 'sans-serif'],
    }
  },
  plugins: [],
}
