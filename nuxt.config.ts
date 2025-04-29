// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'A Daily Board',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport',    content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A Daily  Board' },
      ],
    },
  }
})
