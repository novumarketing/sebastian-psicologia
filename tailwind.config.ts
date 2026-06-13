import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f5f1',
          100: '#dfe8db',
          200: '#c0d4b7',
          300: '#9ab88e',
          400: '#7a9d6a',
          500: '#608250',
          600: '#4c6840',
          700: '#3d5434',
          800: '#2e3f26',
          900: '#1e2a19',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
