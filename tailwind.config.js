/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainHeading: 'hsl(271, 36%, 24%)',
        paragraph: 'hsl(270, 7%, 64%)',
        magenta: 'hsl(293, 100%, 63%)',
        violet: 'hsl(264, 100%, 61%)',
        appBackground: 'hsl(270, 20%, 96%)',
        placeholderText: 'hsl(206, 6%, 79%)',
        button: 'hsl(271, 36%, 24%)',
        subHeading: 'hsl(276, 100%, 81%)',
        chatLeft: 'hsl(276, 55%, 52%)',
        chatRight: 'hsl(271, 15%, 43%)',
        buttonOutline: 'hsl(289, 100%, 72%)',
      },
      fontFamily: {
        primaryFont: 'Rubik',
      }
    },
  },
  plugins: [],
}


