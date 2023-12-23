/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mb': '350px',
      },
      colors: {
        'green-cust-300': '#E0F7F0',
        'green-cust-100': '#EEF7F4',
      },
    },
  },
  plugins: [],
};
