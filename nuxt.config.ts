const appEnv = {
  title: process.env.APP_TITLE || 'digiSalad Interview',
  desc: process.env.APP_DESC || 'digiSalad single-page interview project built with Nuxt, Tailwind CSS, and GSAP.',
  lang: process.env.APP_DEFAULT_LANG || 'zh-TW',
  url: process.env.APP_URL || 'http://localhost:3000',
  baseURL: process.env.APP_BASE_URL || '/'
}

export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: appEnv.title,
      htmlAttrs: {
        lang: appEnv.lang
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'description',
          content: appEnv.desc
        },
        {
          property: 'og:locale',
          content: appEnv.lang
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'robots',
          content: `${
                process.env.WEB_SEARCH === 'YES'
                  ? 'index, follow'
                  : 'noindex, nofollow'
              }`
        },
        {
          name: 'google-site-verification',
          content: `${
            process.env.GOOGLE_SITE_VERIFICATION
              ? process.env.GOOGLE_SITE_VERIFICATION
              : ''
          }`
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${appEnv.baseURL}favicon.svg` },
        { rel: 'manifest', href: `${appEnv.baseURL}manifest.webmanifest` },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+TC:wght@400;500;700;900&display=swap'
        }
      ],
      noscript: [{ innerHTML: '此網站需要開啟JavaScript<br>JavaScript is required' }]
    },
    baseURL: appEnv.baseURL
  },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  runtimeConfig: {
    public: {
      APP_TITLE: appEnv.title,
      APP_DESC: appEnv.desc,
      APP_URL: appEnv.url,
      APP_BASE_URL: appEnv.baseURL
    }
  },

  css: ['@/assets/css/tailwind.css'],

  vite: {
    server: {
      watch: {
        usePolling: true // set here to enable hot reload
      },
      hmr: {
        protocol: 'ws',
        host: 'localhost'
      }
    }
  },

  postcss: require('./postcss.config.js'),

  nitro: {
    preset: 'github-pages',
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      '/**': { isr: false }
    }
  },

  build: {
    transpile: ['gsap'],
    analyze: process.env.ANALYZE === 'true'
  },

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    asyncContext: true
  },

  compatibilityDate: '2025-05-30'
})
