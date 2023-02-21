<template>
  <div class="max-w-[80%] md:max-w-[600px] min-w-[400px] text-sm bg-zinc-100 rounded-xl md:min-h-[350px] md:flex">
    <div class="md:w-[45%] p-5 md:border-r-2 md:border-r-black">
      <div class="flex justify-between items-center md:h-[20%]">
        <p class="uppercase text-base text-gray-500 pb-1">{{ project.name }}</p>
        <div class="flex gap-3">
          <div class="font-light uppercase"><a class="text-xs" target="_blank" :href="'https://' + project.link">link</a></div>
          <div class="font-light uppercase"><a class="text-xs" target="_blank" :href="project.code">code</a></div>
        </div>
      </div>
  
      <div class="bg-gray-500 w-full h-44 md:h-[80%]"></div>
    </div>

    <div class="md:w-[55%] p-5">
      <div class="py-5">
        <p class="font-light text-lg"><span>Description: </span>{{ project.description }}</p>
      </div>
  
      <div class="py-5">
        <p class="py-2">Tools/Languages</p>
        <ul class="flex gap-3 flex-wrap">
          <li v-for="i in 4" :key="i" class="border-2 border-zinc-300 p-2 rounded-md">JAVASCRIPT</li>
        </ul>
      </div>
  
      <div class="flex">
        <div class="bg-gray-300 w-fit p-1 border-r-2 border-black shadow-sm shadow-black">FEEDBACK</div>
        <input type="text" class="outline-none w-[60%] inline-block font-mono bg-white p-1 shadow-sm shadow-black font-light">
        <button class="bg-blue-400 px-3 w-fit rounded-r-full p-1 shadow-sm shadow-black">SEND</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    project: Object,
})

</script>

<style>

</style>