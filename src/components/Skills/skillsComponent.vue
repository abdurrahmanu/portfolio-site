<template>
    <div class="max-w-[700px] relative py-6 sm:py-12 m-auto">
        <p class="text-center font-bold font-mono text-white text-lg py-5">SKILLS</p>
        <div
            class="skills">
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

<style scoped>
.skills {
    @apply flex flex-wrap w-fit px-5 sm:px-2 justify-center bg-white shadow-md shadow-gray-600 rounded-full gap-6 lg:gap-8 py-3 m-auto screen-small:grid max-w-[95%]
}
</style>

