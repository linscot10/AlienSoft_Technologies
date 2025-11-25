/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000080' // primary color for the app
      },
      borderRadius: {
        'xl': '14px'
      }
    }
  },
  plugins: [],
}