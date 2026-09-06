/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1680px',
      '4xl': '1920px'
    },
    fontFamily: {
      display: ['Inter', 'Noto Sans TC', 'sans-serif'],
      default: ['Inter', 'Noto Sans TC', 'sans-serif']
    },
    fontWeight: {
      thin: 100,
      'extra-light': 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      'extra-bold': 800,
      black: 900
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '32px',
        xl: '40px'
      },
      screens: {
        sm: '100%',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1680px',
        '3xl': '1920px'
      }
    },
    zIndex: {
      '-10': '-10',
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: 'auto'
    },
    transitionTimingFunction: {
      easeInCubic: 'cubic-bezier(0.32, 0, 0.67, 0)',
      easeOutQuint: 'cubic-bezier(0.33, 1, 0.68, 1)'
    },
    extend: {
      height: {
        sh: 'var(--sh)'
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        brand: {
          light: '#EAF7B1',
          DEFAULT: '#B8D935',
          dark: '#4F6416'
        },
        secondary: {
          light: '#FFE1D6',
          DEFAULT: '#FF6B3D',
          dark: '#A83818'
        },
        accent: {
          light: '#DDF7FF',
          DEFAULT: '#00A7C8',
          dark: '#006073'
        },
        success: {
          DEFAULT: '#ABE06D',
          dark: '#61A035'
        },
        alert: {
          light: '#F0923E',
          DEFAULT: '#E34E1F'
        },
        bgc: {
          paper: '#F7F7F2',
          DEFAULT: '#10120F'
        },
        ad: {
          DEFAULT: '#5A78FF',
          light: '#8CD3F8'
        },
        gray: {
          100: '#F2F4F7',
          200: '#E4E7EC',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#1D2939',
          800: '#101828'
        },
        txt: {
          white: '#FFFFFF',
          'super-light': '#98A2B3',
          light: '#667085',
          DEFAULT: '#475467', // 預設文字顏色
          dark: '#101828',
          black: '#000000'
        }
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        15: '3.75rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem'
      },
      boxShadow: {
        btn: '0px 4px 25px rgba(46, 46, 46, 0.1)',
        card: '0px 4px 10px rgba(57, 87, 132, 0.2)',
        filter: '0px 4px 25px rgba(12, 12, 12, 0.1)'
      },
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.25rem',
        lg: '.5rem',
        full: '9999px'
      },
      // display-1←old/2, display-2←old/3, display-3←old/4
      // head-1←old head/1 (merged with old head/3), head-2←old head/4
      // body-1–3 only; link uses body-3 + underline
      fontSize: {
        'mb/display/1': ['3rem', { lineHeight: '1', letterSpacing: '0px', fontWeight: '800' }],
        'dt/display/1': ['4rem', { lineHeight: '1', letterSpacing: '0px', fontWeight: '800' }],
        'mb/display/2': ['2rem', { lineHeight: '1', letterSpacing: '0px', fontWeight: '500' }],
        'dt/display/2': ['2.5rem', { lineHeight: '1', letterSpacing: '0px', fontWeight: '500' }],
        'mb/display/3': ['1.5rem', { lineHeight: '1.05', letterSpacing: '0px', fontWeight: '500' }],
        'sm/display/4': ['1rem', { lineHeight: '1.05', letterSpacing: '0px', fontWeight: '500' }],
        'mb/head/1': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0px', fontWeight: '600' }],
        'dt/head/1': ['1.5rem', { lineHeight: '1.5', letterSpacing: '0px', fontWeight: '600' }],
        'mb/head/2': ['1rem', { lineHeight: '1.5', letterSpacing: '0px', fontWeight: '600' }],
        'dt/head/2': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0px', fontWeight: '600' }],
        'mb/body/1': ['1.25rem', { lineHeight: '1.25', letterSpacing: '0px', fontWeight: '400' }],
        'dt/body/1': ['1.5rem', { lineHeight: '1.25', letterSpacing: '0px', fontWeight: '400' }],
        'mb/body/2': ['0.875rem', { lineHeight: '1.25', letterSpacing: '0px', fontWeight: '400' }],
        'dt/body/2': ['1.25rem', { lineHeight: '1.25', letterSpacing: '0px', fontWeight: '400' }],
        'mb/body/3': ['0.875rem', { lineHeight: '1.25', letterSpacing: '0px', fontWeight: '400' }],
        'dt/body/3': ['1rem', { lineHeight: '1.25', letterSpacing: '0px', fontWeight: '400' }],
        'mb/button/1': ['1rem', { lineHeight: '1.5', letterSpacing: '0px', fontWeight: '700' }],
        'dt/button/1': ['1rem', { lineHeight: '1.5', letterSpacing: '0px', fontWeight: '700' }],
        'mb/button/2': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.28px', fontWeight: '700' }],
        'dt/button/2': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.28px', fontWeight: '700' }]
      }
    }
  },
  plugins: []
}
