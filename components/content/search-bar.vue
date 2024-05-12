<template>
   <div class="search-bar relative">
        <label for="search" class="sr-only">Search</label>
        <transition name="show">
        <input type="search" id="search" v-model="searchTerm"  placeholder="Search posts" class="search-input absolute  right-10 md:right-5"  v-show="showSearch" @keydown.enter="searchPosts"/>
        </transition>
      
          <i class="fa-solid fa-magnifying-glass text-2xl md:text-base"  @click="handleSearchBar"></i>
         
      </div>
    
</template>

<script setup>
const router = useRouter()

const searchTerm = ref(null)
const showSearch = ref(false)

const handleSearchBar = () => {
  if (showSearch.value && searchTerm.value.trim() !== '') {
    searchPosts();
  } else {
    showSearch.value = !showSearch.value;
  }
};


const searchPosts = () => {
searchTerm.value= searchTerm.value.toLowerCase().trim()
    router.push({ path: "/search-results", query: { q: searchTerm.value } })
  
}



</script>

<style>
input {
    @apply rounded-sm dark:bg-gray-400 text-gray-900 px-2;
  }
  input:placeholder-shown {
    @apply text-gray-500;
  }

.show-enter-active, .show-leave-active {
  transition: opacity 0.5s;
}
.show-leave-to, .show-enter-from {
  opacity: 0;
}
</style>