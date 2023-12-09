/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1751FF',
      },
      backgroundColor: {
        'blue': '#1751FF',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}