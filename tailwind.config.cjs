/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/**/*.tsx', "./public/index.html", 
  ],
  theme: {
    fontSize:{
      xs: 14,
      sm:16,
      md:18,
      lg:20,
      xl:24,
      '2xl':32,
      '3xl':42,
      '4xl':80,

    },
    colors:{

      transparent: 'transparent',

      'black': '#000000',
      'white': '#ffffff',

      gray:{        
        700: '#202024',
        500: '#252525',
        400: '#7c7c8a',
      },
    },
    extend: {
      fontFamily:{
        sans:'Montserrat, sans-serif' 
      },
    },
  },
  plugins: [],
}
