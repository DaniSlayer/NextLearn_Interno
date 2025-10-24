export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    'vuetify-nuxt-module'
  ],

  css: [
    '@mdi/font/css/materialdesignicons.min.css'
  ]
})