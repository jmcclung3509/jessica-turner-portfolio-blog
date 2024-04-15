// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
        crossorigin: ''
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" ,
        crossorigin: ''
      },
    ],
      noscript: [{ children: "This website requires JavaScript." }],
     
    },
  },
  devtools: {
    enabled: true,
  },
  modules: ["@nuxt/devtools", "@nuxtjs/tailwindcss"],
});
