<template>
    <div class="pb-12">
        <div v-if="xtraSmall" class="text-sm font-mono text-center py-2">Download</div>
        <div class="p-[2px] transition-all duration-75 shadow-stone-950 hover:shadow-sm shadow-md bg-black hover:bg-gray-600 w-fit m-auto hover:scale-110 rounded-full">
            <button @click="downloadResume" class="rounded-full font-bold hover:font-thin p-2 bg-white hover:text-white hover:bg-slate-700 sm:px-6 uppercase text-sm flex items-center gap-2">
                <img class="w-5" src="../../public/programmer.svg" v-if="!verySmall" /> <span v-if="!xtraSmall">Download Resume</span> <img class="w-4 -rotate-90" src="../../public/arrow.svg" /> </button>
        </div>
    </div>
</template>

<script setup>
import { useScreenSize } from '../composables/useScreenSize';
import resume from './resume.vue';
import { onMounted, watchEffect } from 'vue';

const { isBigScreen, verySmall, xtraSmall } = useScreenSize()

const downloadResume = () => {
    window.open('resume.pdf')
}
</script>

<style lang="scss" scoped>

</style>