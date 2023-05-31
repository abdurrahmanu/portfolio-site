<template>
  <div 
  @mouseenter.passive="animateProject($event, index)"
  :class="{
    'py-2 bg-white w-fit rounded-lg shadow-md shadow-blue-500 hover:shadow-sm hover:shadow-blue-500 transition-all duration-200' : isBigScreen,
    'py-12 bg-gray-300 grid gap-6': !isBigScreen,
    'mt-0 mb-16' : index % 2 !== 0 && isBigScreen && (hoverIndex === index || hoverIndexNextSibling === index + 1),
    'mb-0 mt-16' : index % 2 === 0 && isBigScreen && (hoverIndex === index || hoverIndexNextSibling === index + 1),
    'mt-16' : index % 2 !== 0 && isBigScreen,
    'mb-16' : index % 2 === 0 && isBigScreen}"
    class="text-sm p-3">

    <div class="grid gap-3">
        <p class="uppercase text-center text-xl text-gray-500">{{project.name}}</p>
        <div class="uppercase text-center font-light text-xs">
          <a class="border-2 border-transparent p-2 hover:border-zinc-600" :href="project.link" target="_blank">link</a>
          <a class="border-2 border-transparent p-2 hover:border-zinc-600" :href="project.code" target="_blank">code</a>
        </div>

      <div v-if="!midScreen" class="bg-gray-900 p-2 w-fit text-xs m-auto">
        <code class="grid gap-2">
          <div>
            <span class="text-[#ffcb6b]">$ npm</span>
            <span class="text-[#a6accd]"></span>
            <span class="text-[#c3e88d]"> create </span>
            <span class="text-[#A6ACCD]"> </span>
            <span class="text-[#c3e88d]">vite@latest</span>
            <span class="text-[#A6ACCD]"> </span>
            <span class="text-[#c3e88d]"> instagram-ui </span>
            <span class="text-[#A6ACCD]"> </span>
            <span class="text-[#c3e88d]">--template </span>
            <span class="text-[#A6ACCD]"> </span>
            <span class="text-[#c3e88d]">vue</span>
          </div>
          <div><span class="text-[#676e95] italic">import { createApp } from 'vue'</span></div>
          <div><span class="text-[#676e95] italic">import App from './App.vue'</span></div>
          <div><span class="text-[#676e95] italic">import './assets/base.css'</span></div>
          <div><span class="text-[#676e95] italic">import router from './router'</span></div>
          <div><span class="text-[#676e95] italic">app.use(router)</span></div>
          <div><span class="text-[#676e95] italic">createApp(App).use(router).use(createPinia()).mount('#app')</span></div>
        </code >
      </div>

    </div>
    <div class="grid gap-3">
      <p class="font-light text-center">STACK</p>
      <div class="flex flex-wrap text-sm gap-2 justify-center"> 
        <div v-for="(stack, index) in project.stack" :key="index" class="border-2 rounded-sm uppercase hover:text-white hover:bg-gray-700 hover:border-black border-gray-400 text-xs p-2">{{ stack }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { useScreenSize } from '../composables/useScreenSize';

const { midScreen, isBigScreen } = useScreenSize()

const hoverIndex = ref(null)
const hoverIndexNextSibling = ref(null)
const props = defineProps({
  project: Object,
  index: Number
})


const animateProject = (event, index) => {

  if (isBigScreen.value) {
      hoverIndex.value = index
      hoverIndexNextSibling.value = index + 1
    }
    return
}


</script>
