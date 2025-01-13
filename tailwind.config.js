/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '25%': { transform: 'rotate(15.0deg)' },
          '50%': { transform: 'rotate(0.0deg)' },
          '75%': { transform: 'rotate(-15.0deg)' },
        },
      },
      animation: {
        'wave': 'wave 2.5s infinite ease-in-out',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

