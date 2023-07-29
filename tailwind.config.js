/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js}",
    "./dist/**/*.html",
    "./dist/**/*.js"
    // Add more file paths or patterns as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};