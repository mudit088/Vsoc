/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
     keyframes:{
      slidein:{
        from:{
          opacity:'0',
          transform:"translateY(-10px)",
        },
        to:{
          opacity:"1",
          transform:"translateY(0)",
        },
      },
     },
     animation:{
      slidein300:"slidein 1s ease 300ms forwards",
      slidein500:"slidein 1s ease 500ms forwards",
      slidein1200:"slidein 1s ease-out 1200ms forwards",
      slidein1800:"slidein 1s ease-out 1800ms forwards",
      slidein2200:"slidein 1s ease-out 2200ms forwards",
     },
    },
    fontFamily:{
       vsoc :["Platypi","serif"],
    },
  },
 
  plugins: [ 
    require('tailwind-scrollbar-hide')
  ],
}



