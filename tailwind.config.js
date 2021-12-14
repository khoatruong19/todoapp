module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "lightGray" : 'hsl(0, 0%, 98%)',
        "lightGrayBlueL" : {
          300 : "hsl(236, 33%, 92%)",
          500 : "hsl(233, 11%, 84%)"
        },
        "darkGrayBlueL" : {
          300: "hsl(236, 9%, 61%)",
          500: "hsl(235, 19%, 35%)"
        },
        "darkBlue": {
          500: "hsl(235, 21%, 11%)",
          300: "hsl(235, 24%, 19%)"
        },
        "lightGrayBlueD" : {
          300 : "hsl(234, 39%, 85%)",
          h : "hsl(236, 33%, 92%)"
        },
        "darkGrayBlueD" : {
          300: "hsl(234, 11%, 52%)",
          500: "hsl(233, 14%, 35%)",
          700: "hsl(237, 14%, 26%)"
        },
        "check":{
          200: "hsl(192, 100%, 67%)",
          300: "hsl(280, 87%, 65%)"
        },
      },
      letterSpacing: {
        widest: '.25em',
      },
      maxHeight: {
        '128': '32rem',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
