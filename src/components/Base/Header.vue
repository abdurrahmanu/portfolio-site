<template>
    <div class="flex justify-between pr-4 items-center border-b border-b-zinc-700 transition-all duration-100">
        <div class="flex gap-2 items-center px-4">
            <FullName />
        </div>
        <BackgroundButton />
    </div>
    <div class="z-[999] sticky top-0 w-full max-w-[1200px] m-auto bg-zinc-100 dark:bg-zinc-800">
        <div class="flex justify-between items-center pl-5 pr-4">
            <Navbar 
            @currentNav="currentNavigation = $event"
            :currentNavigation="currentNavigation"/>
            <DownloadButton />
        </div>
        <div class="h-[2px] bg-white">
            <div ref="scroll" class="h-[2px] bg-gradient-to-tr from-blue-500 via-green-800 to-green-200"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, watchEffect, onMounted } from 'vue' 
import Navbar from './Navbar.vue';
import BackgroundButton from './BackgroundButton.vue';
import DownloadButton from './DownloadButton.vue'
import FullName from './FullName.vue'

const currentNavigation = ref('Home')
const scrollPercent = ref(0)
const scroll = ref(null)

const scrollEvent = () => {
    scrollPercent.value = (scrollY / document.body.scrollHeight) * 100
}

window.addEventListener('scroll', scrollEvent);

onMounted(() => {
    watchEffect(() => {
        scroll.value.style.width = `${scrollPercent.value}%`
    })
})
</script>