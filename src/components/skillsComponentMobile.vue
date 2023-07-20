<template>
    <div class="">
        <div class="relative">
            <div class="text-center absolute top-[-30px] z-[10] text-slate-300">
            </div>
            <div class="h-7 absolute top-[-25px] bg-neutral-950 w-full"></div>
            <div :class="[changeColor ? 'shadow-blue-400' : 'shadow-slate-200']" class="h-10 bg-transparent shadow-2xl"></div>
            <h2 class="font-mono text-center pt-6 text-2xl underline text-slate-300">STACK</h2>
            <div                
                @mouseover="animateColor('enter')"
                @mouseleave="animateColor('leave')" 
                class="justify-center flex gap-6 lg:gap-20 flex-wrap py-4 w-[90%] m-auto">
                <skillComponent 
                v-for="(skill, index) in skills" 
                :skill="skill" 
                :svg="svgs[index]" 
                :key="index" 
                :index="index" />
            </div>
            <div :class="[changeColor ? 'shadow-blue-400' : 'shadow-slate-200']" class="h-10 bg-transparent shadow-2xl rotate-180"></div>
            <div class="h-7 absolute bottom-[-25px] bg-neutral-950 w-full"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import skillComponent from './skillComponent.vue';

const skills = ref(['HTML', 'CSS', 'JS', 'VueJS', 'GitHub', 'Tailwind'])
const svgs = ref(['html', 'css', 'js', 'vue', 'github', 'tailwindcss'])
const changeColor = ref(false)

const animateColor = (event) => {
    event === 'enter' ? changeColor.value = true : changeColor.value = false
}
</script>

