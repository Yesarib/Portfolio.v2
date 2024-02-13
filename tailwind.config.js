/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
      },
      backgroundColor: {
        'custom': 'rgb(15 23 42/var(--tw-bg-opacity))',
      },
      fontSize:{
        'one':"3rem",
        'two':'1.5rem',
        'three':'1rem',
        'four':'0.75rem'
      },
      textColor:{
        'primary':'',
        'secondary':'#dcdcdc'
      }
    },
  },
  plugins: [],
}
