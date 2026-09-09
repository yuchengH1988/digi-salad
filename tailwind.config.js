/** @type {import('tailwindcss').Config} */
module.exports = {
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
      display: ['proxima-nova', 'sans-serif'],
      default: ['proxima-nova', 'sans-serif']
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
          DEFAULT: '#26C6D0',
          dark: '#006073'
        },
        page: '#F2F2F2',
        ink: '#262626',
        purple: '#585880',
        coral: '#EE6C8A',
        yellow: '#FFBC58',
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
      fontSize: {
        'mb/display/1': ['30px', { lineHeight: '54px', letterSpacing: '5px', fontWeight: '700' }],
        'dt/display/1': ['38px', { lineHeight: '70px', letterSpacing: '9.17px', fontWeight: '700' }],
        'mb/h/1': ['24px', { lineHeight: '1', letterSpacing: '3.64px', fontWeight: '700' }],
        'dt/h/1': ['28px', { lineHeight: '1', letterSpacing: '3.64px', fontWeight: '700' }],
        'mb/h/2': ['28px', { lineHeight: '34px', letterSpacing: '3px', fontWeight: '700' }],
        'dt/h/2': ['32px', { lineHeight: '39px', letterSpacing: '3.64px', fontWeight: '700' }],
        'mb/h/3': ['20px', { lineHeight: '1', letterSpacing: '2px', fontWeight: '700' }],
        'dt/h/3': ['20px', { lineHeight: '1', letterSpacing: '2px', fontWeight: '700' }],
        'mb/mini/1': ['14px', { lineHeight: '1.5', letterSpacing: '1.8px', fontWeight: '700' }],
        'dt/mini/1': ['16px', { lineHeight: '1.5', letterSpacing: '2.22px', fontWeight: '700' }],
        'mb/mini/2': ['14px', { lineHeight: '1.5', letterSpacing: '1.4px', fontWeight: '400' }],
        'dt/mini/2': ['16px', { lineHeight: '1.5', letterSpacing: '1.8px', fontWeight: '400' }],
        'mb/body/1': ['15px', { lineHeight: '26px', letterSpacing: '0.8px', fontWeight: '400' }],
        'dt/body/1': ['16px', { lineHeight: '28px', letterSpacing: '1px', fontWeight: '400' }],
        'mb/body/2': ['15px', { lineHeight: '24px', letterSpacing: '0.8px', fontWeight: '400' }],
        'dt/body/2': ['16px', { lineHeight: '24px', letterSpacing: '1px', fontWeight: '400' }],
        'mb/btn/1': ['14px', { lineHeight: '1.5', letterSpacing: '1.8px', fontWeight: '700' }],
        'dt/btn/1': ['16px', { lineHeight: '1.5', letterSpacing: '2.22px', fontWeight: '700' }],
        'dt/btn/2': ['14px', { lineHeight: '1.5', letterSpacing: '1.14px', fontWeight: '700' }],
        'mb/mini/3': ['14px', { lineHeight: '1', letterSpacing: '1.8px', fontWeight: '600' }],
        'dt/mini/3': ['16px', { lineHeight: '1', letterSpacing: '2.22px', fontWeight: '600' }],
        'mb/quote/1': ['18px', { lineHeight: '36px', letterSpacing: '1.4px', fontWeight: '400' }],
        'dt/quote/1': ['22px', { lineHeight: '48px', letterSpacing: '2px', fontWeight: '400' }],
        'mb/body/3': ['15px', { lineHeight: '1.5', letterSpacing: '1.6px', fontWeight: '400' }],
        'dt/body/3': ['16px', { lineHeight: '1.5', letterSpacing: '2px', fontWeight: '400' }]
      }
    }
  },
  plugins: []
}
