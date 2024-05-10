<template>
  <div class="container mx-auto max-w-3xl space-y-14">
    <header class="flex justify-between items-center">
        <div class="flex space-between gap-24 items-center">
   
        <h3 class="text-2xl hover:text-highlightLight dark:hover:text-highlightDark hover:cursor-pointer dark:hover:text-[#44ccff]">
          Jessica Turner
        </h3>
     
      <Menu />
    </div>
    <ClientOnly>
      <ColorModeSelector /> 
    </ClientOnly>
    </header>

    <slot />
  </div>
</template>

<script setup>
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
