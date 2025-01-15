/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#364f6b',
      secondary: '#3fc1c9',
      ternary: '#fc5185',
      quaternary: '#f5f5f5',
      quinary: '#dee2e6'
    },
    textColor: {
      primary: '#364f6b',
      secondary: '#3fc1c9',
      ternary: '#fc5185',
      white: "#f5f5f5",
      black: "#000",
    },
    fontFamily: {
      sans: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      serif: ["Georgia", "Times New Roman", "serif"]
    },
    extend: {},
  },
  plugins: [],
}

