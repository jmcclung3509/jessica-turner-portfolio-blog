<template>
  <div>
    <div class="button-container flex items-center justify-center gap-2" >
       <span v-show="showNextModeLabel" class="text-gray-500 text-xs">{{ nextMode}} </span> 
    <button @click="toggleColorMode" @mouseover="showNextModeLabel=true" @mouseleave="showNextModeLabel=false" class="hover:bg-gray-100 dark:hover:bg-gray-600 px-2 py-1 text-gray-500">{{nextIcons}}</button>
 
</div>
  </div>
</template>

<script setup>

const showNextModeLabel = ref(false)

const colorMode = useColorMode();

const modes = [
    'system',
    'light',
    'dark'
]
const nextModeIcons = {
  system: '🌓',
  light: '🌕',
  dark: '🌑'
}

const nextMode = computed(()=>{
    const currentModeIndex = modes.indexOf(colorMode.preference);
let nextModeIndex = null
    if(currentModeIndex + 1 === modes.length ){
        nextModeIndex = 0
    }else{
        nextModeIndex = currentModeIndex + 1
    }
    return modes[nextModeIndex]
})
const nextIcons = computed(()=>{
    return nextModeIcons[nextMode.value]

})
const toggleColorMode = () => {
  colorMode.preference = nextMode.value;
}
</script>
