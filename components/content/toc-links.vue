<template>
<ul>
    <li  v-for="link in links" :key="link.id" class=" whitespace-nowrap w-fit" >
        <nuxt-link :to="{path: route.path, hash: `#${link.id}`}"  class=" py-2 px-1 text-sm hover:no-underline  hover:bg-gray-200 dark:hover:bg-gray-700" :class="{'ml-4': level, 'text-highlightLight dark:text-highlightDark' : activeId === link.id}">{{ link.text }}</nuxt-link>
<TocLinks :links="link.children" :level="level + 1" :activeId="activeId"/>
    </li>
</ul>
</template>
<script setup>
const route = useRoute()

defineProps({
    links: Array,
    level: {
        type: Number,
        default: 0
    },
    activeId:{
    type: String,
    default: null
    }
})
</script>

<style setup scoped>
a{
    text-decoration: none;
}
 a:hover{
        text-decoration: none;
    }

</style>