<template>
    <div class="z-[9999] fixed top-0 w-full max-w-[1200px] m-auto bg-zinc-100 dark:bg-zinc-800">
        <div v-if="!isScrollingDown" class="flex justify-between pr-4 items-center border-b border-b-zinc-700 transition-all duration-100">
            <FullName />
            <BackgroundButton />
        </div>
        <div class="flex justify-between items-center pl-5 pr-4">
            <Navbar 
            @currentNav="currentNavigation = $event"
            :currentNavigation="currentNavigation"/>
            <DownloadButton />
        </div>
    </div>
</template>

<script setup>
import { ref, onUnmounted, watch, watchEffect } from 'vue' 
import Navbar from './Navbar.vue';
import BackgroundButton from './BackgroundButton.vue';
import DownloadButton from './DownloadButton.vue'
import FullName from './FullName.vue'

const currentNavigation = ref('Home')
const previousScrollTop = ref()
const isScrollingDown = ref(false)
const scrollTimeout = ref(null)

const scrollEvent = () => {
    previousScrollTop.value = scrollY
}

window.addEventListener('scroll', scrollEvent, 100);

watch(previousScrollTop, (newVal, oldVal) => {
    if (newVal > oldVal) {
        isScrollingDown.value = true
    } 
    if (newVal < oldVal) {
        isScrollingDown.value = false
    }
})
</script>