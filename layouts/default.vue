<template>
  <div class="container mx-auto max-w-2xl space-y-14 ">
    <header class = "flex justify-between" >
        <div class=""> 
            <h3 class="text-2xl hover:text-stone-600 hover:cursor-pointer">Jessica Turner</h3></div>
     <Menu/>
    </header>

    <slot />
  </div>
</template>

<script setup>


useHead({
    titleTemplate: '%s -  Jessica Turner',
})
</script>

<style>
body{
    font-family: 'Lato', sans-serif;
}
</style>