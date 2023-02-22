/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        'gold': '#FFD700',
        'sideBg': '#1f1d1d',
        'hoverBg': '#3d3b3b',
        'activeBg': '#2b2929',
      },
    },
  },
  plugins: [],
}
