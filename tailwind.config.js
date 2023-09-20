/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/components/HeroSections/HeroSection3/assets/Hero.png')"
      }
    },
  },
  plugins: [],
}

