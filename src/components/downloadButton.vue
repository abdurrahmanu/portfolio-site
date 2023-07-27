<template>
    <div id="download" :class="[animateResumeButton && !size === 'large' ? 'pt-32 animate-bounce transition-all duration-150' : 'pt-0', size === 'large' ? 'pt-0' : '']">
        <div :class="[size === 'large' ? 'py-0' : 'py-12']" class="relative">
            <div @click="downloadResume" v-if="xtraSmall" class="text-sm font-mono text-center py-2 p-2">Download</div>
            <div class="w-fit h-fit p-[3px] flex place-content-center dark:bg-gray-300 bg-black rounded-full m-auto">
                <button @click="downloadResume" class="rounded-full m-auto font-bold relative p-2 dark:bg-white bg-zinc-500 dark:text-black text-slate-200 hover:bg-zinc-400 hover:dark:bg-slate-300 sm:px-6 uppercase text-sm flex items-center gap-2">
                    <img class="w-5" src="../../public/programmer.svg" v-if="!verySmall" /> 
                    <span v-if="!xtraSmall">Download Resume</span> 
                    <img class="w-4 -rotate-90" src="../../public/arrow.svg" /> 
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, defineProps} from 'vue'
import { useScreenSize } from '../composables/useScreenSize';

const { verySmall, xtraSmall } = useScreenSize()
const props = defineProps({
    animateResumeButton: Boolean,
    size: String,
})

const downloadResume = () => {
    window.open('resume.pdf')
}
</script>