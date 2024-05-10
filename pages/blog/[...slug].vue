<template>
  <article
    class="prose dark:prose-invert prose-img:mx-auto prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300 prose-a:no-underline hover:prose-a:underline max-w-none pb-24"
  >
    <ContentDoc v-slot="{ doc }">
      {{ doc.body.toc.link }}
      <div class="grid grid-cols-6 gap-24">
        <div :class="{ 'col-span-4': doc.toc, 'col-span-5': !doc.toc }">
          <ContentRenderer :value="doc" />
        </div>
        <div v-if="doc.toc" class="col-span-2 not-prose">
          <aside class="sticky top-10">
            <h2 class="font-semibold">Table of Contents</h2>
            <toc-links :links="doc.body.toc.links" :activeId="activeId"/>
          </aside>
        </div>
      </div>
    </ContentDoc>
  </article>
</template>

<script setup>
const activeId = ref(null);
onMounted(() => {
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
        break;
      }
    }
  };
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.4,
  });
  const elements = document.querySelectorAll("h2, h3");
  for (const element of elements) {
    observer.observe(element);
  }
  onBeforeUnmount(()=>{
    for (const element of elements) {
      observer.unobserve(element);
    }
  })
});
</script>
