<template>
  <div class="container min-h-[100vh] relative mx-auto max-w-5xl space-y-14 py-7 px-5 md:unset md:py-24" :class="`page-${$route.name}`">
    <header class="flex justify-between items-start md:items-center">
     
   <nuxt-link  class="md:whitespace-nowrap hidden md:block text-2xl hover:text-defaultText hover:no-unerline" to="/">
       
       Jessica Turner
   </nuxt-link>
     
      <Menu />
  

    </header>

    <slot />

  <Footer />
  </div>   
 
</template>

<script setup>
const route=useRoute()

useHead({
  titleTemplate: "%s -  Jessica Turner",
});

</script>

<style>
body {
  font-family: "Lato", sans-serif;
}

body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 ;
}
h1,
h2,
h3,
a {
  font-family: "Roboto", sans-serif;
}
</style>
