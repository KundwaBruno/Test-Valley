module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A96637',
        background: '#111010',
        background_light: '#FAFAFA',
        background_dark: '#111111',
        custom_gray: '#A1A1A1',
        custom_black: 'black',
        custom_white: '#EDEDED',
        custom_border_dark: '#282828',
        custom_blue: '#00B2FF',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
