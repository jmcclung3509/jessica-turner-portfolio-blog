<template>
  <section class="not-prose font-mono">
    <template v-if="!results.length">
      <p class="flex items-center">Sorry, your search did not return any results.</p>
    </template>
    <template v-else>
      <ul class="space-y-4 flex flex-col justify-start">
        <li class="text-center">No results found</li>
        <li v-for="result in results" :key="result.title">
          <nuxt-link
            class="result flex flex-col space-y-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            :to="result._path"
          >
            <span class="date text-xs">{{ result.date }}</span>
            <h3 class="title text-xl">{{ result.title }}</h3>
            <p class="description text-sm">{{ result.description }}</p>
          </nuxt-link>
        </li>
      </ul>
    </template>
  </section>
</template>

<script setup>
const route = useRoute();

const { data } = await useAsyncData("search-results", () => {
  const searchTerm = route.query.q || "";
  const query = queryContent("/blog")
    .where({ keywords: { $in: searchTerm } })
    .only(["_path", "title", "publishedAt", "description", "keywords"])
    .sort({ publishedAt: -1 });

  return query.find();
});

const results = computed(() => {
  if (data.value === undefined) {
    return [];
  }
  return data.value.map((result) => {
    console.log(result);
    let year = new Date(result.publishedAt).getFullYear();
    year = year.toString().slice(2);
    let month = new Date(result.publishedAt).getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    } else {
      month = `${month}`;
    }
    const day = new Date(result.publishedAt).getDate();

    const date = `${month}/${day}/${year}`;

    return { ...result, date };
  });
});

watch(
  () => route.query.q,
  async (newQuery) => {
    if (newQuery !== undefined) {
      // Fetch new data when the search query changes
      const newData = await useAsyncData("search-results", () => {
        let searchTerm = newQuery || "";
        const query = queryContent("/blog")
          .where({ keywords: { $in: searchTerm } })
          .only(["_path", "title", "publishedAt", "description", "keywords"])
          .sort({ publishedAt: -1 });

        return query.find();
      });
      data.value = newData;
    }
  }
);
</script>
<style scoped>
.result {
  @apply font-mono flex   py-2;
}
</style>
