/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#030712',
          900: '#081120',
          850: '#0d1728',
          800: '#111c31',
        },
        brand: {
          50: '#edf6ff',
          100: '#d7ebff',
          200: '#b7dbff',
          300: '#86c2ff',
          400: '#4fa0ff',
          500: '#277dff',
          600: '#155ee6',
          700: '#144dca',
          800: '#1741a4',
          900: '#193985',
        },
      },
      boxShadow: {
        soft: '0 25px 80px rgba(2, 6, 23, 0.45)',
        card: '0 16px 40px rgba(2, 6, 23, 0.32)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top left, rgba(39, 125, 255, 0.34), transparent 35%), radial-gradient(circle at top right, rgba(56, 189, 248, 0.2), transparent 26%), linear-gradient(135deg, rgba(3, 7, 18, 0.98), rgba(13, 23, 40, 0.98))',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
