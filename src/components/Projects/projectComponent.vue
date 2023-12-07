<template>
  <div 
  ref="projectElement"
  class="relative w-fit mx-auto hover:scale-[98%]">
    <div
    :class="[openImage ? 'rounded-b-none' : '']"
    class="w-[320px] px-2 text-xs m-auto h-fit relative bg-zinc-700 dark:bg-zinc-700 rounded-md">
      <div class="flex items-center justify-between px-2">
        <p class="uppercase md:text-center text-white text-[10px] flex items-center gap-3">
          <div @click="toggleProject" class="rotate-90 text-white font-mono">></div>
          <div>{{ project.name }}</div>
        </p>
          <div class="uppercase text-center font-light text-[10px] text-white py-4">
            <a class="border border-transparent rounded-md p-[6px] hover:border-zinc-400" :href="project.link" target="_blank">link</a>
            <a class="border border-transparent rounded-md p-[6px] hover:border-zinc-400" :href="project.code" target="_blank">code</a>
          </div>
        </div>
    </div>
    <Transition name="open">
      <div v-if="openImage" class=" z-[99] bg-white shadow rounded-md rounded-t-none p-2">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit cupiditate assumenda sunt culpa eligendi quia placeat ullam, cumque nesciunt quae?
        </div>
        <div class="flex justify-around p-2">
          <ProjectSkill
          v-for="(skill, index) of project.stack"
          :key="index"
          :skill="skill" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProjectSkill from './ProjectSkill.vue'

const emit = defineEmits(['closeProjectImage', 'openProjectImage'])
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

const toggleProject = () => {
  if (props.openImage) {
    emit('closeProjectImage');
  }
  else {
    emit('openProjectImage');
  }
}

</script>

<style scoped>
.open-enter-from {
  height: 0;
  background: rgb(198, 230, 233)
}

.open-enter-active {
  transition: all 500ms ease;
}

.open-leave-to {
  height: 0;
}
</style>