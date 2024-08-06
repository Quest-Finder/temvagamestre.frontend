import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        neutral: {
          50: '#FFFFFF',
          100: '#EFEFEF',
          200: '#DCDCDC',
          300: '#BDBDBD',
          400: '#989898',
          500: '#7C7C7C',
          600: '#656565',
          700: '#525252',
          800: '#464646',
          900: '#3D3D3D',
          950: '#292929',
        },
        primary: {
          50: '#EEFFFD',
          100: '#C4FFFB',
          200: '#8AFFF8',
          300: '#47FFF6',
          400: '#0EDAD4',
          500: '#00D3CF',
          600: '#00AAAA',
          700: '#008587',
          800: '#04686B',
          900: '#095658',
          950: '#003236',
        },
        secondary: {
          50: '#FCF7F0',
          100: '#F7ECDD',
          200: '#EED6BA',
          300: '#E3BA8E',
          400: '#D79760',
          500: '#CF7C40',
          600: '#C16635',
          700: '#A0502E',
          800: '#81422B',
          900: '#663625',
          950: '#381A12',
        },
        accent: {
          50: '#FCF4FF',
          100: '#F8E5FF',
          200: '#F3D0FF',
          300: '#E9ACFF',
          400: '#DC77FF',
          500: '#CF43FF',
          600: '#C21FFE',
          700: '#9E0ED0',
          800: '#8E12B7',
          900: '#741093',
          950: '#53006E',
        },
        bland: {
          50: '#F9F7F7',
          100: '#F2EEEE',
          200: '#E8E0E0',
          300: '#D1C2C1',
          400: '#BFABAA',
          500: '#A78E8C',
          600: '#8F7573',
          700: '#77605E',
          800: '#645150',
          900: '#564746',
          950: '#2C2423',
        },
      },
      fontFamily: {
        mono: ['var(--font-roboto)'],
        notoSans: ['var(--font-notoSans)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      screens: {
        tablet: '860px',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config