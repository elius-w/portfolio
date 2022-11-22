/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
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
    extend: {
      fontFamily:{
        sans:'Montserrat, sans-serif' 
      },
    },
  },
  plugins: [],
}
