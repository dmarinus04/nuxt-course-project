export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL,
    public: {
      apiBaseUrl: process.env.API_BASE_URL_PUBLIC,
    }
  },
  routeRules: {
    '/api/*': { prerender: true },
  },
})
