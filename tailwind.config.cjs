module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'didim-green': {
          50: '#F8F6F1', // Light ivory background, for light theme
          100: '#E0E3D6', // Lighter ivory
          200: '#BEC9BD', // Light border/accent
          300: '#98C1A5', // Accent green (light)
          400: '#6B8E7D', // Secondary green
          500: '#4A7C59', // Primary green (main accent in light)
          600: '#34493F', // Dark text color (light theme)
          700: '#2E4237', // Medium dark (dark theme background accent)
          800: '#1F2D25', // Dark background (dark theme)
          900: '#10201A', // Very dark for deep contrast
        },
        'didim-yellow': {
          300: '#FBF5E0', // Lightest yellow
          400: '#F4E08B', // Muted yellow (for chip/highlights in light mode)
          500: '#D4AF37', // Stronger yellow (for chip/highlights in dark mode)
        },
      }    }
  },
  plugins: [],
};
