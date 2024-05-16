<template>
  <div ref="projectElement" class="relative w-fit mx-auto hover:scale-[98%] hover:bg-blue-300 p-[1px] rounded-md">
    <div
    :class="[openImage ? 'rounded-b-none' : '']"
    class="w-[300px] screen-mid-small:w-[200px] px-1 m-auto h-fit md:text-lg relative bg-zinc-700 dark:bg-zinc-700 rounded-md">
      <div class="flex items-center justify-between px-3 text-sm font-mono sm:text-base">
        <p class="uppercase md:text-center text-white flex items-center gap-3">{{ project.name }}</p>
          <div class="uppercase text-center font-light text-white py-4">
            <a :class="[project.link !== 'none' ? 'text-white' : 'text-gray-500 cursor-not-allowed']" class="border border-transparent rounded-md p-[6px] hover:border-zinc-400" :href="project.link" target="_blank">link</a>
            <a class="border border-transparent rounded-md p-[6px] hover:border-zinc-400" :href="project.code" target="_blank">repo</a>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  project: Object,
  index: Number,
  openImage: Boolean
})

const projectElement = ref(null)

onMounted(() => {
  let width = projectElement.value.getBoundingClientRect().width
  projectElement.value.style.width = width + 'px'
})

</script>
