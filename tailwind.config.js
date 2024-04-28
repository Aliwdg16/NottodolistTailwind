/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://wallpapercave.com/wp/wp4673203.jpg')",
      }
    },
  },
  plugins: [],
}


