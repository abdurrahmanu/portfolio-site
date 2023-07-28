<template>
    <div class="m-auto max-w-[700px]">
        <div class="relative">
            <h2 class="font-mono dark:text-slate-400 text-black text-center pt-6 text-2xl underline">STACK</h2>
            <div
                @mouseover="animateColor('enter')"
                @mouseleave="animateColor('leave')" 
                class="justify-center flex gap-6 lg:gap-8 flex-wrap py-4 w-[90%] m-auto">
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
import { ref, defineProps } from 'vue';
import skillComponent from './skillComponent.vue';

const skills = ref(['HTML', 'CSS', 'JS', 'VueJS', 'GitHub', 'Tailwind'])
const svgs = ref(['html', 'css', 'js', 'vue', 'github', 'tailwindcss'])
const changeColor = ref(false)

const animateColor = (event) => {
    event === 'enter' ? changeColor.value = true : changeColor.value = false
}

</script>

