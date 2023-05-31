<template>
  <div :class="{'bg-gray-900 pb-5': !isBigScreen}">
    <div 
    @mouseenter.passive="animateProject($event, index)"
    :class="{
      'py-2 bg-white w-fit rounded-lg shadow-md shadow-blue-500 hover:shadow-sm hover:shadow-blue-500 transition-all duration-200' : isBigScreen,
      'py-4 bg-white w-fit m-auto grid gap-6 rounded-md': !isBigScreen,
      'mt-16' : index % 2 !== 0 && isBigScreen,
      'mb-16' : index % 2 === 0 && isBigScreen}"
      class="text-sm p-3">
  
      <div class="grid gap-3">
        <div :class="{'flex justify-between items-center': !isBigScreen}">
          <p class="uppercase md:text-center text-xl text-gray-500"><span class="text-black">#{{ index + 1 }}. </span>{{project.name}}</p>
          <div class="uppercase text-center font-light text-xs">
            <a class="border-2 border-transparent p-2 hover:border-zinc-600" :href="project.link" target="_blank">link</a>
            <a class="border-2 border-transparent p-2 hover:border-zinc-600" :href="project.code" target="_blank">code</a>
          </div>
        </div>

        <codeComponent v-if="isBigScreen" />
        <div v-else class="w-full h-[100px] m-auto bg-gray-500"></div>

      </div>
      <div class="grid gap-3 pt-3">
        <div class="flex flex-wrap text-sm gap-2 justify-center"> 
          <div v-for="(stack, index) in project.stack" :key="index" class="border-2 rounded-sm uppercase hover:text-white hover:bg-gray-700 hover:border-black border-gray-400 text-xs p-2">{{ stack }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { useScreenSize } from '../composables/useScreenSize';
import codeComponent from '../components/codeComponent.vue'

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
