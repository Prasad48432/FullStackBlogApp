/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
      colors: {
        "bg-color-lt": "var(--bg-color-lt)",
        "primary-color-lt": "var(--primary-color-lt)",
        "exerpt-color-lt": "var(--exerpt-color-lt)",
        "variant-color-lt": "var(--variant-color-lt)",
        "bg-color-dk": "var(--bg-color-dk)",
        "onbg-color-dk": "var(--onbg-color-dk)",
        "primary-color-dk": "var(--primary-color-dk)",
        "variant-color-dk": "var(--variant-color-dk)",
        "excerpt-color-dk": "var(--excerpt-color-dk)",
        "border-color-dk": "var(--border-color-dk)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
