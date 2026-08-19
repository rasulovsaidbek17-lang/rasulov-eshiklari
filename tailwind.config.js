/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#171512',
          50: '#f6f5f4',
          100: '#e8e5e2',
          400: '#6b625a',
          600: '#3a3530',
          700: '#2a2622',
          800: '#201d1a',
          900: '#171512',
        },
        bronze: {
          DEFAULT: '#A8793E',
          50: '#faf6ef',
          100: '#f1e6d2',
          300: '#cba76a',
          400: '#b98c52',
          500: '#A8793E',
          600: '#8f6431',
          700: '#734f27',
        },
        sand: {
          DEFAULT: '#D8C7AD',
          light: '#F5F2EC',
        },
        ivory: '#F5F2EC',
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        heroZoom: {
          '0%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        heroLine: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        heroZoom: 'heroZoom 1.8s cubic-bezier(0.16,1,0.3,1) forwards',
        heroLine: 'heroLine 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
}
