<template>
  <article :class="`article-${cleanPath}`" 
    class="prose dark:prose-invert prose-img:mx-auto prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300 prose-a:no-underline hover:prose-a:underline max-w-none pb-24"
  >
    <ContentDoc v-slot="{ doc }">
      {{ doc.body.toc.link }}
      <div class="grid grid-cols-6 gap-24">
        <div :class="{ '  col-span-6 md:col-span-4': doc.toc, 'col-span-6': !doc.toc }">
          <ContentRenderer :value="doc" />
        </div>
        <div v-if="doc.toc" class="hidden md:block col-span-2 not-prose">
          <aside class="sticky top-10">
            <h2 class="font-semibold">Table of Contents</h2>
            <toc-links :links="doc.body.toc.links" :activeId="activeId" />
          </aside>
        </div>
      </div>
    </ContentDoc>
  </article>
</template>
<script setup>



const activeId = ref(null);

const route = useRoute();

const cleanPath = computed(()=>{
return route.fullPath.replace(/\//g, "");
})


onMounted(() => {
  let observer;
  let elements =[]


  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        console.log(entry.isIntersecting)
        activeId.value = entry.target.id;
        break;
      }
    }
  };

  observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  });

setTimeout(()=>{
    elements = document.querySelectorAll("h2, h3");
  

     for (const element of elements) {
    observer.observe(element);
  
  } 
}, 200)

const slug = computed(() => {
  const path = route.fullPath.split('/');
  return path[path.length - 1];
});

const pageTitle = computed(() => `${slug.value.charAt(0).toUpperCase() + slug.value.slice(1)} | Jessica Turner Blog`);
const pageDescription = computed(() => `Learn about ${slug.value} in this detailed blog post by Jessica Turner.`);
const ogTitle = computed(() => `${slug.value.charAt(0).toUpperCase() + slug.value.slice(1)} | Jessica Turner Blog`);
const ogDescription = computed(() => `Learn about ${slug.value} in this detailed blog post by Jessica Turner.`);
const ogUrl = computed(() => `https://jessica-turner-portfolio-blog.vercel.app${route.fullPath}`);
const twitterTitle = computed(() => `${slug.value.charAt(0).toUpperCase() + slug.value.slice(1)} | Jessica Turner Blog`);
const twitterDescription = computed(() => `Learn about ${slug.value} in this detailed blog post by Jessica Turner.`);
const ogImage = computed(() => doc.value.image || '/images/default-meta-image.png');

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: ogTitle,
  ogDescription: ogDescription,
  ogImage: ogImage,
  ogUrl: ogUrl,
  twitterTitle: twitterTitle,
  twitterDescription: twitterDescription,
 twitterImage: ogImage,

});



  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element);
    }
  });
});
</script>
