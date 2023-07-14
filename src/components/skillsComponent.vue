<template>
    <div ref="container" class="bg-gray-800">
        <div id="skills">
            <div class="h-[70px] w-full"></div>
            <h2 class="text-white text-3xl font-mono text-center">MY SKILLS</h2>
            <div class="justify-center flex gap-10 lg:gap-20 flex-wrap py-4 w-[90%] m-auto">
                <skillComponent 
                v-for="(skill, index) in skills" 
                :skill="skill" 
                :svg="svgs[index]" 
                :key="index" 
                :index="index" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits, onMounted, watchEffect } from 'vue';
import skillComponent from './skillComponent.vue';
import { useOverlapNavBar } from '../composables/topOverlapsNavBar'

const container = ref(null)
const emit = defineEmits(['inView'])


const skills = ref(['HTML', 'CSS', 'JS', 'VueJS', 'GitHub', 'Tailwind'])
const svgs = ref(['html', 'css', 'js', 'vue', 'github', 'tailwindcss'])
</script>

