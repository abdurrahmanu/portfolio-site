<template>
    <div class="max-w-[700px] relative py-7 sm:py-12 m-auto">
        <p class="text-center font-bold font-mono text-black text-xl md:text-3xl py-5 dark:text-slate-200">SKILLS</p>
        <div
            class=" flex flex-wrap w-fit px-5 sm:px-2 justify-center screen-small:bg-transparent screen-small:shadow-none bg-white shadow-md shadow-gray-600 dark:shadow-black  rounded-full gap-3 lg:gap-6 py-3 m-auto max-w-[95%]">
            <skillComponent 
            v-for="(svg, index) in svgs" 
            :svg="svg"
            :key="index" 
            :index="index" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import skillComponent from './skillComponent.vue';
const svgs = ref(['html', 'css', 'js', 'vue', 'github', 'tailwindcss'])
</script>


