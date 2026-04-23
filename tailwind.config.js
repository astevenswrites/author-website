/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'crimson-dark': '#8B0000',
        'crimson': '#DC143C',
        'crimson-light': '#FF4444',
        'purple-dark': '#2d1b4e',
        'purple-deeper': '#1a0f2e',
        'gold-accent': '#c9a961',
        'dark-bg': '#0f0f0f',
        'dark-secondary': '#1a1a1a',
        'dark-tertiary': '#2a2a2a',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-crimson': 'linear-gradient(135deg, #8B0000 0%, #DC143C 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f0f0f 0%, #2d1b4e 100%)',
      },
    },
  },
  plugins: [],
}