/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      boxShadow: {
        custom: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      },
      colors: {
        "--clr-primary": "#B88E2F",
        "--clr-primar-light": "#FFF3E3",
        "--clr-secondary": "#1e1611",
        "--clr-light-gray-v1": "#B0B0B0",
        "--clr-light-gray": "#898989",
      },
      // backgroundImage: {
      //   'bg1': "url('/images/bgImage.jpg')",
      // }
    },
  },
  plugins: [],
}

