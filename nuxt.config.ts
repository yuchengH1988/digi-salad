import path from 'node:path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const appEnv = {
  title: process.env.APP_TITLE || 'digiSalad | Digital Experiences That Matter',
  desc: process.env.APP_DESC || 'digiSalad creates thoughtful websites, digital products, and interactive experiences for ambitious brands.',
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
        { rel: 'preconnect', href: 'https://use.typekit.net' },
        { rel: 'dns-prefetch', href: 'https://use.typekit.net' },
        { rel: 'stylesheet', href: 'https://use.typekit.net/wel8ibk.css' }
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
    },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
        symbolId: '[dir]/[name]',
        customDomId: '__svg__icons__dom__'
      })
    ]
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
