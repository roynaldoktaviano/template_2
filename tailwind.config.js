/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'prata': ["Prata"],
      'script': ["Parisienne"],

    },
    extend: {
      keyframes: {
        'move' : {
          '0%' : {transform: 'translate(-30vw, 0vw)'},
          '25%' : {transform: 'translate(6vw, -3vw)'},
          '50%' : {transform: 'translate(30vw, -1vw)'},
          '75%' : {transform: 'translate(6vw, -3vw)'},
          '100%' : {transform: 'translate(-30vw, 0vw)'},

        }
      },
      animation:{
        move: 'move 16s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

