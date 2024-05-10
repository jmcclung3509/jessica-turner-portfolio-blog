<template>
  <NuxtLayout>
    <section class="space-y-7">
 <h1 class="text-4xl">Uh oh... {{ error.statusCode }}! </h1>
 
 <h2 class="text-xl text-gray-500 dark:text-gray-400">
    {{ error.message || 'An error occurred' }}
 </h2>
    </section>
  </NuxtLayout>
</template>
<script setup>
defineProps({ error: Object });
</script>
