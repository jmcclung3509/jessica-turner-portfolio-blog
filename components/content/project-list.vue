<template>
  <div class="not-prose">
    <section v-if="pending">Loading...</section>
    <section v-else-if="error">Something went wrong... Try again!</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="repo in repos"
          :key="repo.id"
          class="border border-gray-200 dark:border-gray-600 rounded-sm p-4 hover:bg-gray-100 font-mono dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <div class="flex items-center justify-between">
            <a
              :href="repo.html_url"
              target="_blank"
              class="text-xl font-semibold"
              >{{ repo.name }}</a
            >
            <span class=""> {{ formatDate(repo.created_at) }}</span>
          </div>
          <p class="text-sm">{{ repo.description }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const { error, pending, data } = await useFetch(
  "https://api.github.com/users/jmcclung3509/repos"
);

const repos = computed(() => {
  return data.value
    .filter((repo) => repo.description)
    .filter((repo) => repo.private === false)
    .filter((repo) => repo.stargazers_count > 0)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "long", day: "numeric", year: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
</script>
