/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#0C0C0C',
      white: '#FFFFFF',
      gray: '#2E2E2E',
      darkM: '#081F4B',
      lightM: '#00B3F2',
      opaque: '#D9D9D9',
      alert: '#FF0000',
      active: '#00FF90',
      transparent: '#00000000'
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'authenticate': "url('/src/assets/bg-autenticacao.jpg')",
        'home1': "url('/src/assets/bg-home1.jpg')",
        'scheduling': "url('/src/assets/bg-agendamento.jpg')"
      }
    },
  },
  plugins: [],
}