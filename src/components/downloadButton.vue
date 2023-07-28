<template>
    <div id="download" :class="[size === 'large' ? 'pt-0' : '']">
        <div :class="[size === 'large' ? 'py-0' : '']" class="relative">
            <div @click="downloadResume" v-if="xtraSmall" class="text-sm text-center py-2 p-2">Download</div>
            <div class="w-fit h-fit hover:dark:bg-green-400 hover:bg-blue-400 p-[3px] top-[50%] md:top-0 md:translate-y-0 translate-y-[50%] flex place-content-center dark:bg-gray-300 bg-black rounded-full m-auto">
                <button @click="downloadResume" class="rounded-full dark:lg:bg-black lg:bg-white m-auto relative p-2 dark:text-black text-slate-200 sm:px-6 uppercase text-sm flex items-center gap-2">
                    <div class="w-full md:hidden h-[50%] absolute dark:bg-neutral-900 bg-slate-200 rounded-t-full left-0 top-0"></div>
                    <div class="w-full md:hidden h-[50%] absolute dark:bg-[url('../public/black-with-white-crack.png')] bg-[url('../public/white-with-black-crack.png')] rounded-b-full left-0 bottom-0"></div>
                    <img class="w-5 z-10" src="../../public/programmer.svg" v-if="!verySmall" /> 
                    <span class="z-10 text-black dark:text-white" v-if="!xtraSmall">Download Resume</span> 
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
    size: String,
})

const downloadResume = () => {
    window.open('resume.pdf')
}
</script>