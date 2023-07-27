<template>
    <div class="m-auto max-w-[700px]">
        <div class="relative">
            <div class="h-7 dark:bg-neutral-900 bg-white absolute top-[-25px] w-full"></div>
            <div class="h-full dark:bg-neutral-900 bg-white absolute hidden md:block left-[-30px]  z-[99] w-[35px]"></div>
            <div class="h-full dark:bg-neutral-900 bg-white absolute hidden md:block right-[-30px] z-[99]  w-[35px]"></div>
            <div :class="[changeColor ? 'shadow-black' : '']" class="h-10 dark:shadow-white shadow-black bg-transparent shadow-2xl"></div>

            <h2 class="font-mono dark:text-black text-slate-300 text-center pt-6 text-2xl underline">STACK</h2>
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

            <div :class="[changeColor ? 'shadow-black' : '']" class="h-10 transition-all duration-300 bg-transparent dark:shadow-white shadow-black shadow-2xl rotate-180"></div>
            <div class="h-7 dark:bg-neutral-900 transition-all duration-300 bg-white absolute bottom-[-25px] w-full"></div>

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

