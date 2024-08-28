/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding: '5vw'
      },
      spacing: {
        '54': '13.5rem',
      },
      colors: {
        inherit: 'inherit',
        current: 'currentColor',
        transparent: 'transparent',
        mediumWhite: '#FFFFFF60',
        transparentWhite: '#FFFFFF10',
        transparentBlack: '#00000050',
        radian: '#FFFF00',
        charcoal:'#36454F',
        beige: '#F5F5F5',
        violisia: '#8A2BE2',
        mediumBlack: '#1E1E1E'
      }
    },
  },
  plugins: [],
}

