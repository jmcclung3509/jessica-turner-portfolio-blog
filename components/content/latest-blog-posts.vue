<template>
    <BlogPosts v-slot="{posts}" :limit="limit">
        <div class="post-container space-y-4">
        <div v-for="post in posts" :key="post.title">
<nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
            </div>
        </div>

    </BlogPosts>
</template>

<script setup>
defineProps({
    limit: {
        default: null,
        type: Number
    }
})
</script>