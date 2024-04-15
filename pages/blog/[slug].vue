<template>
    <div>
        We are inside a blog

    </div>
    <div> Post id is {{ slug }}</div>
</template>

<script setup>
const route = useRoute()

const slug = ref(route.params.slug)

</script>