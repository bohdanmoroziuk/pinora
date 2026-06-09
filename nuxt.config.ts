// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    './layers/core',
    './layers/ui',
    './layers/pin',
    './layers/board',
    './layers/comment',
    './layers/user',
    './layers/auth',
  ],

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  devtools: {
    enabled: true,
  },

  css: [
    '~/assets/css/main.css',
  ],

  colorMode: {
    preference: 'light',
    fallback: 'light',
  },

  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI || '',
    authTokenSecret: process.env.AUTH_TOKEN_SECRET || '',
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
