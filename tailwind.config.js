/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'gold': '0 0px 20px 0px #C9A750',
        'silver': '0 0px 20px 0px #C6C6C6',
        'bronze': '0 0px 20px 0px #98400F',
        'gold-filter': '0 0px 20px 10px #C9A750',
        'silver-filter': '0 0px 20px 10px #C6C6C6',
        'bronze-filter': '0 0px 20px 10px #98400F',
        'green': '0 0px 10px 0px #60D256',
        'bluegray': '0 0px 10px 0px #E2E8F0',
        'ash': '0 0px 10px 0px #1C1D1C',
        'inner-ash': 'inset 0 0px 10px 0 #2D2E2C',
        'inner-bluegray': 'inset 0 0px 10px 0 #0D1015',
        'inner-lr-black': 'inset -40px 0 20px -25px #FFFFFF, inset 40px 0 20px -25px #FFFFFF',
        'inner-banner': 'inset 0 0px 150px 150px #0D1015',
      },
      backgroundColor: {
        "footer": 'rgb(33, 33, 33, .8)',
        "danger": 'rgb(255, 0, 0, .7)',
        "debug": 'rgba(200,114,9,0.8)',
        "nav": 'rgba(8,75,131, 1)',
        "cultured": 'rgba(240,246,246, 1)',
        "grayCustom": 'rgba(61,62,73, .2)'
      },
      backgroundImage: {
        'spaceStars': "url('../public/static/space_start.jpg')",
      },
    },
  },
  plugins: [],
}
