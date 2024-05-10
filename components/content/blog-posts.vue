<template>
  <section class="not-prose font-mono">
    <div class="column text-gray-400 text-sm">
      <div class="date">Date</div>
      <div class="title">Title</div>
    </div>
    <ul>
      <li v-for="post in formattedData" :key="post._path">
        <nuxt-link
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
          :to="post._path"
        >
          <div class="date">{{ post.date }}</div>
          <div class="title">{{ post.title }}</div>
          </nuxt-link >
      </li>
    </ul>
  </section>
</template>

<script setup>
const {data: posts } = await useAsyncData("blog-list", () =>
  queryContent("/blog")
    .where({ _path: { $ne: "/blog" } })
    .only(["_path", "title", "publishedAt"])
    .sort({publishedAt:-1})
    .find()
   
);

const formattedData = computed(()=>{
return posts.value.map((post)=>{
    let year = new Date(post.publishedAt).getFullYear()
    year = year.toString().slice(2)
    let month = new Date(post.publishedAt).getMonth() + 1
    if(month < 10){
        month = `0${month}`
    }else{
        month = `${month}`
    }
    const day= new Date(post.publishedAt).getDate()

    const date = `${month}/${day}/${year}`
 
return {...post, date}

})

})




</script>
<style scoped>
.column {
  @apply font-mono flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
