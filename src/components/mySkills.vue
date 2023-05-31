<template>
    <div id="skills" class="py-5 bg-gray-900">
        <h2 class="text-white text-5xl font-mono text-center">MY SKILLS</h2>
        <div class="justify-center text-center flex flex-wrap py-4 gap-2 w-[90%] m-auto">
            <div class="p-[5px] rounded-md w-fit hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-500 hover:to-white transition-all duration-200 " v-for="(skill, index) in skills" :key="index">
                <div class="p-2 text-xl text-center bg-white rounded-md">{{ skill }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const skills = ref(['HTML', 'CSS', 'JavaScript', 'VueJS', 'Git and GitHub', 'TailwindCSS', 'Responsive Design'])

</script>

<style lang="scss" scoped>

</style>