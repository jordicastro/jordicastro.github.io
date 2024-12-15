/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 8s linear infinite',
        spinTranslate: 'spinTranslate 8s linear infinite',
        shapeChange: 'shapeChange 10s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': {transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(90deg) skewX(4deg) skewY(4deg) scale(1.2) translateX(0.5rem)' },
          '50%': { transform: 'rotate(180deg) skewX(8deg) skewY(8deg) scale(1)' },
          '75%': { transform: 'rotate(270deg) skewX(4deg) skewY(4deg) scale(1.2) translateX(0.5rem)' },
          '100%': { transform: 'rotate(360deg)  scale(1)' },
        },
        spinTranslate: {
          '0%': {transform: 'rotate(0deg) translateX(0rem) translateY(0rem)' },
          '25%': { transform: 'rotate(90deg) translateX(0.5rem) translateY(0.5rem)' },
          '50%': { transform: 'rotate(180deg) translateX(0rem) translateY(0rem)' },
          '75%': { transform: 'rotate(270deg) translateX(0.5rem) translateY(0.5rem)' },
          '100%': { transform: 'rotate(360deg) translateX(0rem) translateY(0rem)' },
        },
        shapeChange: {
          '0%': { height: '8rem', width: '4rem', borderRadius: '100%', transform: 'rotate(0deg) translateX(0rem) translateY(0rem)' },
          '25%': { height: '4rem', width: '8rem', borderRadius: '100%', transform: 'rotate(180deg) translateX(2rem) translateY(0rem)' },
          '50%': { height: '8rem', width: '4rem', borderRadius: '100%', transform: 'rotate(300deg) translateX(0rem) translateY(2rem)' },
          '75%': { height: '4rem', width: '8rem', borderRadius: '100%', transform: 'rotate(270deg) translateX(2rem) translateY(0rem)' },
          '100%': { height: '8rem', width: '4rem', borderRadius: '100%', transform: 'rotate(0deg) translateX(0rem) translateY(0rem)'},
        },

      }
    },
  },
  plugins: [],
}