/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        brand: ['Bai Jamjuree']
      },
      animation: {
        slider : 'slider 4s infinite'
      },
      keyframes:{
        slider : {
          '0%' : {
            transform : "translateX(0px)",
          },
          '25%' : {
            transform : "translateX(250px)",
          },
          '50%' : {
            transform : "translateX(400px)",
          },
          '75%' : {
            transform : "translateX(250px)",
          },
          '100%' : {
            transform : "translateX(0px)",
          }
        }
      }

    },
  },
  plugins: [],
}

