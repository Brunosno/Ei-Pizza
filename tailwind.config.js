/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('/EiPizza.jpg)"
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}

