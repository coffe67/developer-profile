module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
      extend: {
        colors: {
          oxford_blue: {
            200: '#0B2545'
          },
  
          prussian_blue: {
            200: '#13315C'
          },
  
          dark_cerulean_blue: {
            200: '#134074'
          },
          pewter_blue: {
            200: '#8DA9C4'
          },
          isabel_line: {
            200: '#eef4ed'
          },
        },
  
        boxShadow: {
          'sm-gray': '0 1px 2px 0 #e5e5e5',
        },
  
        animation: {
          'pulse-fast': 'pulse .5s linear infinite',
         }
      },
    },
    plugins: [],
  }
  