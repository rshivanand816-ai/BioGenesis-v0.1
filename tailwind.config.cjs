module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        cyanNeon: '#00ffe7',
        neonBlue: '#44bfff',
        emerald: '#00c285',
        bioPurple: '#b17cff',
        deepBg: '#030417',
      },
      boxShadow: {
        neon: '0 0 18px rgba(68,191,255,0.18), 0 0 30px rgba(0,255,230,0.04)',
      },
    },
  },
  plugins: [],
}
