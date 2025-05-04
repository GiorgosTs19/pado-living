import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'bg-overlay': 'rgba(0, 0, 0, 0.7)', // Optional overlay color

        primary: '#DAC5A7',
        subtitle: '#BFAD93',
        border: '#3C3933',
        secondary: '#22201E',
        highlight: '#ffffff',
        silent: 'rgba(218, 197, 167, .6)',
        chill: 'rgb(156 163 175)',
        input: '#22201E',
      },
      keyframes: {
        'border-expand': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        rotate90: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'flag-wave': {
          '0%': { transform: 'translateY(0px)' },
          '25%': { transform: 'translateY(-2px)' },
          '50%': { transform: 'translateY(2px)' },
          '75%': { transform: 'translateY(-1px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        dots: {
          '0%, 20%': { content: "' '" },
          '40%': { content: "'.'" },
          '60%': { content: "'. .'" },
          '80%, 100%': { content: "'. . .'" },
        },
        pulseShadow: {
          '0%, 100%': {
            boxShadow: '0 0 0px #3D3D3D, 0 0 0px #1A1A1A',
          },
          '50%': {
            boxShadow: '0 0 20px #3D3D3D, 0 0 40px #1A1A1A',
          },
        },
        pulseBright: {
          '0%, 100%': {
            boxShadow: '0 0 0px #FFD369, 0 0 0px #F6C90E',
          },
          '50%': {
            boxShadow: '0 0 20px #FFD369, 0 0 40px #F6C90E',
          },
        },
      },
      animation: {
        'border-expand': 'border-expand 0.5s ease-out forwards',
        'spin-90': 'rotate90 8s linear infinite',
        'flag-wave': 'flag-wave 2s ease-in-out infinite',
        'pulse-shadow': 'pulseShadow 3s ease-in-out infinite',
        'pulse-bright': 'pulseBright 3s ease-in-out infinite',
        dots: 'dots 1.5s steps(4, end) infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.pre-sticky': {
          position: 'relative',
        },
        '.sticky': {
          position: 'fixed',
          top: '0',
          bottom: 'auto',
        },
        '.post-sticky': {
          position: 'absolute',
          top: 'auto',
          bottom: '0',
        },
      });
    }),
  ],
};
