/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    fontFamily: {
      'main': ['LFT-Etica-Book', 'sans-serif'],
      'main-italic': ['LFT-Etica-Book-Italic', 'sans-serif'],
      'main-light': ['LFT-Etica-Light', 'sans-serif'],
      'main-light-italic': ['LFT-Etica-Light-Italic', 'sans-serif'],
      'main-semibold': ['LFT-Etica-SemiBold', 'sans-serif'],
      'main-semibold-italic': ['LFT-Etica-SemiBold-Italic', 'sans-serif'],
      'main-bold': ['LFT-Etica-Bold', 'sans-serif'],
      'main-bold-italic': ['LFT-Etica-Bold-Italic', 'sans-serif'],
    },
    colors: {
      base: {
        100: '#FFFFFF',
        200: '#F4F4F5',
        300: '#989899',
        400: '#4D4D4F',
      },
      primary: {
        100: '#78407D',
        200: '#58355E',
        300: '#44344F',
        400: '#22223B',
      },
      violet: {
        100: '#E1D4FA',
        200: '#937CBF'
      },
      salmon: {
        100: '#FF9880',
        200: '#FA7E61',
      },
      blue: '#3A6BAE',
      red: '#BF0D0D',
      green: '#008E88',
      orange: '#ED7203',
    },
    extend: {
      backgroundImage: {
        lines: 'url(/src/assets/lines.svg)',
        form: 'url(/src/assets/form-background.svg)'
      },
      dropShadow: {
        'primary': '0 10px 20px rgba(88, 53, 94, 0.6)',
        'secondary': '0 10px 20px rgba(88, 53, 94, 1)',
        'tertiary': '0 3px 6px rgba(225, 212, 250, 1)',
        'form': '0 3px 10px rgba(34, 34, 59, 1)',
        'register': '0 3px 10px rgba(147, 124, 191, 0.4)',
      }
    },
  },
  plugins: [],
}
