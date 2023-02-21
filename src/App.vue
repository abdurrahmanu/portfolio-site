<script setup>
import { ref} from 'vue'
import { projects } from '../composables/projectsList'
import projectComponent from './components/projectComponent.vue'
import footComponent from './components/footComponent.vue'
import headerComponent from './components/headerComponent.vue'
import messageComponent from './components/messageComponent.vue'
import aboutComponent from './components/aboutComponent.vue'

const stacks = ref({
  'HTML': '<p> This is Abdulrahman Ahmed, a frontend Engineer...</p>',
  'pinia': 'import {createStore} from "pinia"',
  'vue-router': 'import {createRouter, createWebHistory} from `vue-router` ', 'javaScript': 'console.log("Hello World")',
  'CSS': '<style> background: green </style>',
  'Tailwind': '<p class="bg-blue-300"> Hello World </p>',
  'vueJs': '<template><div></div></template>',
  'SASS': "",
  'NuxtJs': ''
})
</script>

<template>
  <div class="pt-40 bg-slate-900">
    <headerComponent />
    <aboutComponent :stacks="stacks" />
    <div class="p-6 pt-10 text-2xl font-bold bg-slate-800 mt-4">
        <p class="text-center text-white text-4xl">MY PROJECTS...</p>
        <div class="flex flex-wrap gap-16 pt-10 justify-center md:grid">
          <projectComponent v-for="(project, i) in projects" :key="i" :project="project"/>
        </div>
    </div>
    <footComponent />
  </div>
</template>

<style>
.v-enter-from {
  transform: translateX(-200px);
  opacity:0.4;
}

.v-enter-active {
  transition: all ease 2s;
}

.fade-enter-from {
  opacity: 0.3;
}

.fade-enter-active {
  transition: all ease 0.4s;
}
</style>






























