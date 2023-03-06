<template>
    <div class="py-10">
        <p class="text-center font-bold text-3xl p-10">MY PROJECTS</p>
        <div class="relative">
            <div id="projects" ref="scroll_container" :class="[is_big_screen ? 'flex-wrap justify-center gap-24' : 'overflow-x-scroll', scroll_complete ? 'scroll-auto' : 'scroll-smooth']" class="flex md:gap-32 gap-10 top-[50%]">
                <projectComponent v-for="(project, index) in projects" :key="index" :project="project"/>
            </div>
            <div v-if="!is_big_screen" class="flex justify-around p-10 gap-2">
                <div @click="scroll((scroll_container_width + 40) * (i - 1))" :class="[scroll_value.right == (scroll_container_width + 40) * (i - 1) ? 'bg-blue-500 after:bg-black after:w-6 after:h-6 after:rounded-full' : 'bg-blue-300' ]" v-for="i in projects.length" class="w-7 h-7 rounded-full"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import projectComponent from './projectComponent.vue';
import { defineProps, ref, onMounted, watchEffect } from 'vue';
import {projects} from '../../composables/projectsList'

const scroll_container_width = ref(0)
const scroll_container = ref(null)
const scroll_complete = ref(false)
const scroll_value = ref({ left: 0, right: 0 })
const props = defineProps({
    is_big_screen: Boolean,
})

onMounted(() => {
    watchEffect(() => {
        scroll_container_width.value = scroll_container.value.clientWidth
    })
})

const scroll_project = (event) => {
    let padding = 40
        console.log(scroll_value.value.right + scroll_container.value.clientWidth + padding, (scroll_container.value.clientWidth + padding) * (projects.length - 1))


    if (scroll_value.value.right + scroll_container.value.clientWidth + padding == (scroll_container.value.clientWidth + padding) * (projects.length - 1)) {
        console.log('yes');
        scroll_complete.value = true
        scroll_value.value.right = 0
        scroll_container.value.scroll(0, 0)
        scroll_complete.value = false
    }

    console.log('no');
    scroll_container.value.scroll(scroll_value.value.right += scroll_container.value.clientWidth + padding, 0)
}

watchEffect(() => {
    if (!props.is_big_screen) {
        setInterval(() => {
            scroll_project('right')  
        }, 3000)
    }
})




const scroll = (e) => {
    scroll_container.value.style.scrollBehaviour = 'auto'
    scroll_container.value.scroll(e, 0)
    scroll_value.value.right = e
}

</script>




<style scoped>
    
</style>


