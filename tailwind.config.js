/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // Include the pages directory if it exists
    "./src/**/*.{js,ts,jsx,tsx}", // Include the src directory if it exists
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
