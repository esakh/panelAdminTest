// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:['~/assets/css/bootstrap.css' , "~/assets/css/main.css" , "~/assets/materialDesignIcon/index.css"],
  app: {
    head: {
      script: [{ src: "https://kit.fontawesome.com/ee40d63b8c.js" , crossorigin:"anonymous" }],
    },
  },
})
