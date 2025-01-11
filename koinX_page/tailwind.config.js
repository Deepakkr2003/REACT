/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: '#0F1629', // Replace `deepBlue` with a meaningful name
      },
    },
  },
  plugins: [],
}

