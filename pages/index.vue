<template>
    <div>
        <h1>Home Page</h1>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Homepage',
  description: 'This is the homepage',
  ogTitle: 'Homepage',
  ogDescription: 'This is the homepage',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Homepage',
  twitterDescription: 'This is the homepage',
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