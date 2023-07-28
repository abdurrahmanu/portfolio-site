<template>
  <div class="relative w-fit m-auto">
    <div class="w-[320px] px-2 m-auto h-fit relative bg-slate-700 dark:bg-zinc-900 rounded-md p-1">
      <div class="flex items-center justify-between px-2">
        <p class="uppercase md:text-center text-xs md:text-base text-white"><span class="text-white font-mono font-black">{{ index + 1 }}. </span>{{project.name}}</p>
          <div class="uppercase text-center font-light text-white text-xs py-4">
            <a class="border-2 border-transparent p-2 hover:border-zinc-400" :href="project.link" target="_blank">link</a>
            <a class="border-2 border-transparent p-2 hover:border-zinc-400" :href="project.code" target="_blank">code</a>
          </div>
        </div>

      <div class="max-w-full w-[95%] p-3 text-center rounded-md m-auto bg-slate-200 min-h-[200px]">
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
