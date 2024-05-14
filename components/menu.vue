<template>

    <nav>
      <ul class="flex flex-col md:flex-row justify-center spaceu-y-1 md:space-y-0 md:gap-7 font-mono">
        <li>
          <nuxt-link  class="link" to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link  class="link" to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link  class="link" to="/blog">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link class="link" to="/projects">Projects</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="right flex justify-center items-center gap-4">
    <ClientOnly>
      <SearchBar/>

      <ColorModeSelector />
    </ClientOnly>
  </div>

</template>

<style scoped>
.link {
  @apply hover:text-highlight hover:cursor-pointer p-1 text-2xl md:text-base;
}
</style>
