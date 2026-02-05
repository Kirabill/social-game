/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      // Mobile-first breakpoints
      screens: {
        sm: '480px',
        md: '768px',
      },
      colors: {
        // Couleurs principales ChallengO
        background: '#1b2934',
        surface: '#243038',
        cream: {
          DEFAULT: '#fdf4e5',
          50: 'rgba(253, 244, 229, 0.06)',
          100: 'rgba(253, 244, 229, 0.12)',
          200: 'rgba(253, 244, 229, 0.25)',
          300: 'rgba(253, 244, 229, 0.35)',
          400: 'rgba(253, 244, 229, 0.45)',
          500: 'rgba(253, 244, 229, 0.55)',
          600: 'rgba(253, 244, 229, 0.6)',
          700: 'rgba(253, 244, 229, 0.8)',
          800: 'rgba(253, 244, 229, 0.9)',
        },
        terracotta: {
          DEFAULT: '#b55447',
          light: '#d4746a',
          dark: '#8a3f35',
          50: 'rgba(181, 84, 71, 0.12)',
          100: 'rgba(181, 84, 71, 0.3)',
          200: 'rgba(181, 84, 71, 0.4)',
          300: 'rgba(181, 84, 71, 0.5)',
        },
        // Semantic colors
        success: {
          DEFAULT: '#22c55e',
          light: '#4ade80',
          dark: '#16a34a',
          50: 'rgba(34, 197, 94, 0.12)',
          100: 'rgba(34, 197, 94, 0.25)',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
          50: 'rgba(245, 158, 11, 0.12)',
          100: 'rgba(245, 158, 11, 0.25)',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#f87171',
          dark: '#dc2626',
          50: 'rgba(239, 68, 68, 0.12)',
          100: 'rgba(239, 68, 68, 0.25)',
        },
        info: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb',
          50: 'rgba(59, 130, 246, 0.12)',
          100: 'rgba(59, 130, 246, 0.25)',
        },
      },
      fontFamily: {
        sans: ['System', 'sans-serif'],
      },
      // Typography scale
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
      },
      // Spacing scale
      spacing: {
        4.5: '18px',
        5.5: '22px',
        7: '28px',
        11: '44px', // Min touch target
        13: '52px',
        15: '60px',
        18: '72px',
        22: '88px',
      },
      // Border radius scale
      borderRadius: {
        none: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
        full: '9999px',
      },
      // Min dimensions for touch targets
      minWidth: {
        touch: '44px',
      },
      minHeight: {
        touch: '44px',
      },
    },
  },
  plugins: [],
};
