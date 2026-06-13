/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#C9A96E', light: '#E8D5A3', muted: 'rgba(201,169,110,0.2)' },
        dark: { bg: '#0A0A0A', surface: '#141414', card: '#1C1C1C' },
        offwhite: '#F0EDE6',
        muted: '#8A8A8A',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: { borderRadius: false },
}
