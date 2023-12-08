/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F2AF5C"
      },
      fontFamily: {
        heading: "Kaushan Script",
        body: "Open Sans"
      }
    },
  },
  plugins: [],
}

