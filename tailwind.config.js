/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors:{
        "SC-Grayish-blue":' hsl(237, 18%, 59%)',
        'SC-Soft-red': "hsl(345, 95%, 68%)",

        "SC-White": "hsl(0, 0%, 100%)",
        "SC-Dark-desaturated-blue": "hsl(236, 21%, 26%)",
        "SC-Very-dark-blue": "hsl(235, 16%, 14%)",
        "SC-Very-dark-(mostly-black)-blue":" hsl(234, 17%, 12%)",
      }
    },
    
  },
  plugins: [],
}

