// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', '"Noto Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#7f13eb',
        dark: '#141118',
        light: '#f2f0f4',
        accent: '#756189',
      },
    },
  },
  plugins: [],
}