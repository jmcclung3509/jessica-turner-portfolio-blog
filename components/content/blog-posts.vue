<template>
  <template v-if="props.limit">
    <section class="not-prose font-mono">
      <div class="post-container space-y-4">
        <div v-for="post in posts" :key="post.title">
          <nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
        </div>
      </div>
    </section>
  </template>
  <template v-else>
    <section class="not-prose font-mono">
      <div class="column text-gray-400 text-sm">
        <div class="date">Date</div>
        <div class="title pl-7">Title</div>
      </div>
      <ul>
        <li v-for="post in posts" :key="post._path">
          <nuxt-link
            class="column hover:bg-gray-100 dark:hover:bg-gray-800"
            :to="post._path"
          >
            <div class="date">{{ post.date }}</div>
            <div class="title">{{ post.title }}</div>
          </nuxt-link>
        </li>
      </ul>
    </section>
  </template>
</template>

<script setup>
const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
});
const { data: postData } = await useAsyncData("blog-list", () => {
  const query = queryContent("/blog")
    .where({ _path: { $ne: "/blog" } })
    .only(["_path", "title", "publishedAt", "keywords"])
    .sort({ publishedAt: -1 });
  if (props.limit) {
    query.limit(props.limit);
  }
  return query.find();
});

const posts = computed(() => {
  return postData.value.map((post) => {
    let year = new Date(post.publishedAt).getFullYear();
    year = year.toString().slice(2);
    let month = new Date(post.publishedAt).getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    } else {
      month = `${month}`;
    }
    let day = new Date(post.publishedAt).getDate();
    if (day < 10) {
      day = `0${day}`;
    } else {
      day = `${day}`;
    }

    const date = `${month}/${day}/${year}`;
    return { ...post, date };
  });
});
</script>
<style scoped>
.column {
  @apply font-mono flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
