<template>
  <div>This page is about me</div>
  <div>
    <!-- <button @click ="enableCustomLayout"> Update layout</button> -->
  </div>
</template>

<script setup>



// const enableCustomLayout=()=>{
//     console.log('click')
//     setPageLayout('another');
// }
// definePageMeta({
//     layout:false
// })
useSeoMeta({
    title: 'About page',
  description: 'This is the about page',
  ogTitle: 'About page',
  ogDescription: 'This is the about page',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'About page',
  twitterDescription: 'This is the  about page',
  twitterImage: '[twitter:image]',
  twitterCard: 'This is the about page for the website and blog of Jessica Turner'
})
useHead({
    title: 'About',
})
</script>
