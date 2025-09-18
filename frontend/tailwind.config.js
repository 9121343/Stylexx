/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './contexts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
        'orbitron': ['"Orbitron"', 'sans-serif'],
      },
      colors: {
        primary: '#16213e',
        secondary: '#1a1a2e',
        accent: '#0f3460',
        highlight: '#e94560',
        neon: '#00dbde',
      },
      backgroundImage: {
        'gradient-nav': 'linear-gradient(to right, #2c3e50, #1a1a2e)',
        'gradient-logo': 'linear-gradient(to right, #ff9a9e, #fad0c4)',
        'gradient-underline': 'linear-gradient(to right, #ff9a9e, #fad0c4)',
        'gradient-primary': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        'gradient-neon': 'linear-gradient(90deg, #00dbde, #fc00ff)',
      },
    },
  },
  plugins: [],
}
