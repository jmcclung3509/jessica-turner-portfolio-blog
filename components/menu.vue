<template>
     <nav>
        <ul class="flex justify-center gap-7 font-mono">
          <li>
            <nuxt-link class="link" to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link class="link" to="/about">About</nuxt-link>
          </li>
          <li>
            <nuxt-link class="link" to="/blog">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link class="link" to="/blog/projects">Projects</nuxt-link>
          </li>
        </ul>
      </nav>
</template>

<style scoped>
.link {
    @apply hover:bg-stone-200 hover:cursor-pointer p-1;
}
</style>