<template>

    <nav>
      <ul class="flex flex-col md:flex-row justify-center spaceu-y-1 md:space-y-0 md:gap-7 font-mono">
        <li>
          <nuxt-link class="link" to="/about">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link class="link" to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link class="link" to="/blog">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link class="link" to="/projects">Projects</nuxt-link>
        </li>
      </ul>
    </nav>
    <ClientOnly>
      <ColorModeSelector />
    </ClientOnly>

</template>

<style scoped>
.link {
  @apply hover:text-highlightLight dark:hover:text-highlightDark hover:cursor-pointer p-1 text-2xl md:text-base;
}
</style>
