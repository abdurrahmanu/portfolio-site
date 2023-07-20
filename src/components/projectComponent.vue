<template>
  <div class="relative md:min-w-[500px]" :class="{'pb-10': !isBigScreen}">
    <div v-if="!isBigScreen">
      <img width="200" class="absolute left-[60%] top-[-60px]" src="Ellipse 40.svg" alt="">
      <img width="200" class="absolute bottom-[0] left-[20%]" src="Ellipse 40.svg" alt="">
    </div>
    <div class="w-[70%] max-w-[90%] md:w-full md:max-w-full m-auto opacity-50 h-fit relative bg-zinc-900 z-20 rounded-md p-1">

      <div class="flex items-center justify-between px-2">
        <p class="uppercase md:text-center text-xs md:text-base text-white"><span class="text-white font-mono font-black">{{ index + 1 }}. </span>{{project.name}}</p>
          <div class="uppercase text-center font-light text-white text-xs py-4">
            <a class="border-2 border-transparent p-2 hover:border-zinc-400" :href="project.link" target="_blank">link</a>
            <a class="border-2 border-transparent p-2 hover:border-zinc-400" :href="project.code" target="_blank">code</a>
          </div>
        </div>

      <div class="max-w-full w-[95%] h-[100px] p-3 text-center rounded-tl-[10px] rounded-br-[10px] rounded-md transition-all duration-75 m-auto bg-slate-200 min-h-[200px]">
      </div>

      <div class="flex flex-wrap m-auto gap-3 p-3 justify-center">
        <projectSkillComponent 
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
import { defineProps, ref } from 'vue';
import { useScreenSize } from '../composables/useScreenSize';
import projectSkillComponent from './projectSkillComponent.vue';

const { isBigScreen } = useScreenSize()

const props = defineProps({
  project: Object,
  index: Number
})

const skills = ref(['HTML', 'CSS', 'JS', 'VueJS', 'GitHub', 'Tailwind'])
const svgs = ref(['html', 'css', 'js', 'vue', 'github', 'tailwindcss'])
</script>
