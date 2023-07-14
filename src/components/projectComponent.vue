<template>
  <div class="m-auto max-w-[80%]" :class="{'pb-5': !isBigScreen}">
    <div 
    @mouseenter.passive="animateProject($event, index)"
    :class="{
      'py-2 bg-white w-fit rounded-lg shadow-md shadow-blue-500 hover:shadow-sm hover:shadow-blue-500 transition-all duration-200' : isBigScreen,
      'py-4 bg-white w-fit m-auto grid gap-6 rounded-md': !isBigScreen,
      'mt-16' : index % 2 !== 0 && isBigScreen}"
      class="text-sm p-2 shadow-sm shadow-black">
  
      <div class="grid gap-3">
        <div :class="{'flex justify-between items-center': !isBigScreen}">
          <p class="uppercase md:text-center text-gray-500"><span class="text-black font-mono font-black">{{ index + 1 }}. </span>{{project.name}}</p>
          <div class="uppercase text-center font-light text-xs py-4">
            <a class="border-2 border-transparent p-2 hover:border-zinc-600" :href="project.link" target="_blank">link</a>
            <a class="border-2 border-transparent p-2 hover:border-zinc-600" :href="project.code" target="_blank">code</a>
          </div>
        </div>

        <codeComponent v-if="isBigScreen" />
        <div v-else class="w-full hover:scale-[103%] h-[100px] rounded-tl-[30px] rounded-br-[40px] rounded-md transition-all duration-75 hover:shadow-sm hover:shadow-blue-600 m-auto bg-blue-200"></div>

      </div>
      <div class="grid gap-3 pt-3">
        <div class="flex flex-wrap text-sm gap-2 justify-center"> 
          <div v-for="(stack, index) in project.stack" :key="index" class="border-2 rounded-full text-[10px] uppercase hover:text-white hover:bg-blue-500 hover:border-white border-blue-400 p-1">{{ stack }}</div>
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
