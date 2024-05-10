<template>
  <div class="flex justify-center items-center gap-7">
    <nav>
      <ul class="flex justify-center gap-7 font-mono">
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
  </div>
</template>

<style scoped>
.link {
  @apply hover:text-highlightLight dark:hover:text-highlightDark hover:cursor-pointer p-1;
}
</style>
