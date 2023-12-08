<template>
    <div class="max-w-[700px] relative py-6 sm:py-12 m-auto">
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
    @apply flex flex-wrap w-fit px-5 justify-center bg-white shadow-md shadow-gray-600 scale-[70%] sm:scale-[80%] md:scale-[100%] rounded-full gap-6 lg:gap-8 py-3 m-auto screen-small:grid
}
</style>

