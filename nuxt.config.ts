// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon'],
  pages: true,
  css: [
    '@/assets/scss/default.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/utils.scss";'
        }
      }
    }
  },
  imports: {
    dirs: ['utils', 'animations']
  }
})
