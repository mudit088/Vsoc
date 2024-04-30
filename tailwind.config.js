/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      transform: {
        'skew-10-20': 'skew(10deg, 20deg)', // Define custom skew transform
      },
    },
    fontFamily :{
      Vsoc :["Protest Revolution","sans-serif"],
    },
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     extend: {
//       transform: {
//         'skew-10-20': 'skew(10deg, 20deg)', // Define custom skew transform
//       },
//     },
//   },
// }
