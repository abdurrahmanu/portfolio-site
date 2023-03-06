<template>
  <div class="bg-zinc-200 p-2 px-0 grid md:shadow-sm hover:shadow-none transition md:shadow-zinc-500 md:min-w-[300px] min-w-[100%] gap-5 text-sm rounded-lg">

    <div class="grid gap-3">
        <p class="uppercase text-center text-xl text-gray-500">{{ project.name }}</p>
        <div class="uppercase text-center font-light text-xs">
          <a class="border-2 border-transparent p-2 hover:border-zinc-600" target="_blank" :href="'https://' + project.link">link</a>
          <a class="border-2 border-transparent p-2 hover:border-zinc-600" target="_blank" :href="project.code">code</a>
        </div>

      <div class="bg-gray-900 p-2 w-fit text-xs m-auto">
        <code class="grid gap-2">
          <div><span style="color:#FFCB6B;">$ npm</span><span style="color:#A6ACCD;"></span><span style="color:#C3E88D;"> create </span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite@latest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;"> instagram-ui </span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--template </span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue</span></div>
          <div><span style="color:#676E95;font-style:italic;">import { createApp } from 'vue'</span></div>
          <div><span style="color:#676E95;font-style:italic;">import App from './App.vue'</span></div>
          <div><span style="color:#676E95;font-style:italic;">import './assets/base.css'</span></div>
          <div><span style="color:#676E95;font-style:italic;">import router from './router'</span></div>
          <div><span style="color:#676E95;font-style:italic;">app.use(router)</span></div>
          <div><span style="color:#676E95;font-style:italic;">createApp(App).use(router).use(createPinia()).mount('#app')</span></div>
        </code >
      </div>

    </div>
    <div class="grid gap-3">
      <p class="font-light text-center">{{ project.description }}</p>
      <div class="flex flex-wrap text-sm gap-1 justify-center"> 
        <div v-for="language in languages_used" :key="language" class="border-2 uppercase hover:text-white hover:bg-black border-gray-300 text-xs p-2">{{ language }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  project: Object,
})

const languages_used = ['JS', 'VueJS', 'Pinia', 'vue-router', 'Tailwind CSS']

</script>

<style>

</style>