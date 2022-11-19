/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        inputs: '100%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
