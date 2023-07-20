<template>
    <div class="py-12 relative">
        <div @click="downloadResume" v-if="xtraSmall" class="text-sm font-mono text-center py-2">Download</div>
        <img width="250" class="absolute left-[50%] hover:scale-100 rotate-90 top-[65%] translate-x-[-50%] translate-y-[-50%]" src="../../public/ellipse.svg" alt="">
        <button @click="downloadResume" class="rounded-full m-auto font-bold relative hover:font-thin p-2 bg-white hover:text-white hover:bg-slate-700 sm:px-6 uppercase text-sm flex items-center gap-2">
            <img class="w-5" src="../../public/programmer.svg" v-if="!verySmall" /> 
            <span v-if="!xtraSmall">Download Resume</span> 
            <img class="w-4 -rotate-90" src="../../public/arrow.svg" /> 
        </button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { useScreenSize } from '../composables/useScreenSize';

const { verySmall, xtraSmall } = useScreenSize()

const downloadResume = () => {
    window.open('resume.pdf')
}
</script>