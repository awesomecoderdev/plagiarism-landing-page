/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
      screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
      },
      container: {
          center: true,
          // padding: '1rem',
      },
      extend: {
          colors: {
            //   primary: {
            //       50: "rgb(240, 249, 255)",
            //       100: "rgb(224, 242, 254)",
            //       200: "rgb(186, 230, 253)",
            //       300: "rgb(125, 211, 252)",
            //       400: "rgb(56, 189, 248)",
            //       500: "rgb(14, 165, 233)",
            //       600: "rgb(2, 132, 199)",
            //       700: "rgb(3, 105, 161)",
            //       800: "rgb(7, 89, 133)",
            //       900: "rgb(12, 74, 110)",
            //   },
            primary: {
              50: "rgb(248,252,242)",
              100: "rgb(224, 242, 254)",
              200: "rgb(186, 230, 253)",
              300: "rgb(125, 211, 252)",
              400: "rgb(56, 189, 248)",
              500: "rgb(216,235,181)",
              600: "rgb(2, 132, 199)",
              700: "rgb(3, 105, 161)",
              800: "rgb(7, 89, 133)",
              900: "rgb(12, 74, 110)",
            },
            secondary:{
              50: "rgb(186,221,122)"
            }


          },
          fontFamily: {
              poppins: "'Poppins', sans-serif",
              roboto: "'Roboto', sans-serif",
          },
      },
  },
  variants: {
      extend: {
          visibility: ["group-hover"],
          display: ["group-hover"],
      },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}