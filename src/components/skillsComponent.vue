<template>
    <div id="skills" class="py-5 bg-gray-900">
        <h2 class="text-white text-3xl font-mono text-center">MY SKILLS</h2>
        <div class="justify-center text-center flex gap-5 flex-wrap py-4 w-[90%] m-auto">
            <skillComponent v-for="(skill, index) in skills" :skill="skill" :key="index" :index="index" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import skillComponent from './skillComponent.vue';

const skills = ref(['HTML', 'CSS', 'JavaScript', 'VueJS', 'Git and GitHub', 'TailwindCSS', 'Responsive Design'])
</script>

<style lang="scss" scoped>

</style>