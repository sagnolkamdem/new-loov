/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#FEF7FE",
          "100": "#EEDDEE",
          "200": "#E5CCE5",
          "300": "#DCBCDD",
          "400": "#D4ABD4",
          "500": "#CB9ACC",
          "600": "#C289C3",
          "700": "#BA79BA",
          "800": "#B168B2",
          "900": "#984E99",
        },
        secondary: {
          default: "#583E91",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}