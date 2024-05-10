<template>

  <div>
    <NuxtLayout> 
        <NuxtPage />
    </NuxtLayout>
  
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
transition: all .5 ease-in-out;

}
.page-enter-from,
.page-leave-to{
  opacity: 0.5;
  filter:grayscale(1);

}

</style>