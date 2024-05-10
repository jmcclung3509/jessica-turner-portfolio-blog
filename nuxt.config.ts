// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap",
          crossorigin: "",
        },
     
        
        
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/358c1a754d.js", 
          crossorigin: "anonymous"
        }
      ],
    

      noscript: [{ children: "This website requires JavaScript." }],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    }
  },
  devtools: {
    enabled: true,
    timeline:{
      enabled: true
    }
  },

  css: ['~/assets/style.css'],
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  modules: [
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    '@nuxtjs/mdc',
  ],
 
  mdc: {
    highlight: {
      langs: ['console', 'javascript', 'css', 'html']
    }
  },

  colorMode: {
    classSuffix: "",
  },
  content: {
    highlight: {
      theme: {
        dark: "github-dark",
        default: "min-light",
        system: "github-light",
      },
    },
  },
});
