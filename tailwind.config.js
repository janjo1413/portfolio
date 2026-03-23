/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#050816',
        },
        brand: {
          50: '#effcf8',
          100: '#d6f6ec',
          200: '#afead7',
          300: '#7fd9be',
          400: '#43c19f',
          500: '#22a884',
          600: '#17876b',
          700: '#156c58',
          800: '#155647',
          900: '#15483d',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.12)',
        card: '0 12px 30px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top left, rgba(34, 168, 132, 0.22), transparent 35%), radial-gradient(circle at top right, rgba(148, 163, 184, 0.18), transparent 28%), linear-gradient(135deg, rgba(248, 250, 252, 0.98), rgba(241, 245, 249, 0.95))',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
