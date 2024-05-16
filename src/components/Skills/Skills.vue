<template>
    <div class="max-w-[700px] relative py-7 m-auto">
        <p class="text-center font-bold font-mono text-black text-xl md:text-3xl py-5 dark:text-slate-200">SKILLS</p>
        <div
            class=" flex flex-wrap w-fit px-5 justify-center screen-small:shadow-none shadow-md shadow-gray-600 dark:shadow-black  rounded-full gap-6 py-3 max-w-[95%] m-auto hover:shadow-sm hover:shadow-gray-500 transition-shadow duration-100 flex-col sm:flex-row">
            <Skill 
            
            :hoverIndex="hoverIndex"
            @hover="hoverIndex  = index"
            v-for="(svg, index) in svgs" 
            :svg="svg"
            :key="index" 
            :index="index" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Skill from './Skill.vue';
const svgs = ref(['html', 'css', 'js', 'vue', 'github', 'tailwindcss'])
const hoverIndex = ref(null)
</script>



