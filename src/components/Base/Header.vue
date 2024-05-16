<template>
    <div class="flex justify-between pr-4 items-center border-b border-b-zinc-700 dark:text-slate-100 transition-all duration-100 bg-zinc-100 dark:bg-zinc-800 z-[999]">
        <div class="flex gap-2 items-center px-4">
            <FullName />
        </div>
        <BackgroundButton />
    </div>
    <div class="z-[999] sticky top-0 w-full max-w-[1200px] m-auto bg-zinc-100 dark:bg-zinc-800">
        <div class="flex justify-between items-center pl-5 pr-4">
            <Navbar />
            <DownloadButton />
        </div>
        <div class="h-1 bg-white">
            <div ref="scroll" class="h-1 bg-gradient-to-tr from-blue-400 via-green-400 to-green-200"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue' 
import Navbar from './Navbar.vue';
import BackgroundButton from './BackgroundButton.vue';
import DownloadButton from './DownloadButton.vue'
import FullName from './FullName.vue'
import {useScrollBar} from '../../store/scrollBar'
import { storeToRefs } from 'pinia';

const scroll = ref(null)
const scrollbar = useScrollBar()
const {scrollPercent} = storeToRefs(scrollbar)

onMounted(() => {
    watchEffect(() => {
        scroll.value.style.width = `${scrollPercent.value}%`
    })
})
</script>