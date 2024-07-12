<template>
  <div class="prose dark:prose-invert ">
    <ContentDoc path="/" />
</div>
</template>

<script setup>
useSeoMeta({
    title: 'Home | Jessica Turner Blog', 
  description: 'The homepage for the website and blog of Jessica Turner',
  ogTitle: 'Home | Jessica Turner Blog',
  ogDescription: 'The homepage for the website and blog of Jessica Turner',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Home | Jessica Turner Blog',
  twitterDescription: 'The homepage for the website and blog of Jessica Turner',
  twitterImage: '[twitter:image]',
  twitterCard: 'This is the homepage for the website and blog of Jessica Turner'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>