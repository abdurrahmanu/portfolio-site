<template>    
    <div class="button-container">
        <div  @click="toggle" class="toggle-container">
            <div class="toggle-circle"></div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useDarkMode } from '../../store/useDarkMode'

const darkmodeStore = useDarkMode()

const toggle = () => {
    darkmodeStore.darkMode = !darkmodeStore.darkMode
    localStorage.setItem('portfolioBgMode', darkmodeStore.darkMode)
}

onBeforeMount(() => {
    darkmodeStore.checkLocalStorageForSavedBackground()
})
</script>

<style scoped>
.button-container {
    @apply p-[2px] w-fit md:scale-95 scale-90 lg:scale-100 dark:bg-white bg-black absolute top-[50%] translate-y-[-50%] right-1 lg:right-4 z-[99999] rounded-full
}

.toggle-container {
    @apply w-14 px-[2px] rounded-full dark:justify-end dark:bg-black justify-start bg-slate-200 flex items-center h-6
}

.toggle-circle {
    @apply w-5 h-5 transition-all duration-[300ms] inline-block dark:bg-slate-300 bg-black rounded-full
}

</style>



