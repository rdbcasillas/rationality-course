/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Atkinson Hyperlegible', 'system-ui', 'sans-serif'],
        serif: ['Crimson Text', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Crimson Text', 'Georgia', 'serif'],
      },
      colors: {
        warm: {
          50: '#fefaf5',
          100: '#fdf2e9',
          200: '#fae5d3',
          300: '#f6d3b7',
          400: '#f1c27d',
          500: '#e9a23b',
          600: '#d88c2f',
          700: '#b4722a',
          800: '#915c28',
          900: '#774d24',
        },
        clay: {
          50: '#faf8f7',
          100: '#f2edeb',
          200: '#e8ddd6',
          300: '#d9c7ba',
          400: '#c7aa97',
          500: '#b49080',
          600: '#9d7a6b',
          700: '#826459',
          800: '#6a534c',
          900: '#564540',
        },
        sage: {
          50: '#f7f8f7',
          100: '#eef0ed',
          200: '#dde2d9',
          300: '#c4ccbd',
          400: '#a7b199',
          500: '#8d997c',
          600: '#738064',
          700: '#5c6751',
          800: '#4a5343',
          900: '#3e4539',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
