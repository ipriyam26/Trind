/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'head': ['Bebas Neue', 'cursive'],
        'poppins':['Poppins', 'sans-serif']
      },
      colors:{
        'navbar-bg-dark': '#242222',
      }
    },
  },
  plugins: [],
}
