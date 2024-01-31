/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        brand: ['Bai Jamjuree']
      },
      animation: {
        sliderX : 'sliderX 4s infinite',
        sliderY : 'slider 4s infinite'
      },
      keyframes:{
        sliderX : {
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
        },
        sliderY : {
          '0%' : {
            transform : "translateY(0px)",
          },
          '25%' : {
            transform : "translateY(250px)",
          },
          '50%' : {
            transform : "translateY(400px)",
          },
          '75%' : {
            transform : "translateY(250px)",
          },
          '100%' : {
            transform : "translateY(0px)",
          }
        }
      }

    },
  },
  plugins: [],
}

