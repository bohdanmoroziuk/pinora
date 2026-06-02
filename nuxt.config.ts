// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    './layers/core',
    './layers/ui',
    './layers/pin',
    './layers/user',
    './layers/auth',
  ],

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
  ],

  devtools: {
    enabled: true,
  },

  css: [
    '~/assets/css/main.css',
  ],

  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI || '',
    public: {
      imagekitUrlEndpoint: '',
    },
  },

  routeRules: {
    '/': {
      redirect: '/pins',
    },
  },

  compatibilityDate: '2025-07-15',

  vite: {
    optimizeDeps: {
      include: [
        '@imagekit/vue',
        'vue3-emoji-picker',
      ],
    },
  },

  typescript: {
    typeCheck: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
