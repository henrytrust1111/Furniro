/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      boxShadow: {
        custom: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        custom1: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      colors: {
        "--clr-primary": "#B88E2F",
        "--clr-primar-light": "#FFF3E3",
        "--clr-primar-light-v1": "#f6dbb7",
        "--clr-primar-light-v2": "#FAF3EA",
        "--clr-primar-light-v3": "#F9F1E7",
        "--clr-secondary": "#1e1611",
        "--clr-light-gray-v1": "#B0B0B0",
        "--clr-light-gray-v2": "#9f9f9f",
        "--clr-light-gray": "#898989",
        "--clr-black-shade-v1": "#3A3A3A",
      },
      backgroundImage: {
        'room': "url('/images/room.png')",
        'room1': "url('/images/room1.png')",
      }
    },
  },
  plugins: [],
}

