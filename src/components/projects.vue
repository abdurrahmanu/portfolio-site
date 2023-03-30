<template>
    <div class="py-10">
        <p class="text-center font-bold text-3xl p-10">MY PROJECTS</p>
        <div class="relative">
            <div id="projects" ref="scroll_container" :class="[is_big_screen ? 'flex-wrap justify-center gap-24' : 'overflow-x-scroll']" class="flex md:gap-32 gap-10 top-[50%]">
                <projectComponent v-for="(project, index) in projects" :key="index" :project="project"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import projectComponent from './projectComponent.vue';
import { defineProps, ref, onMounted, watchEffect } from 'vue';
import {projects} from '../../composables/projectsList'

const props = defineProps({
    is_big_screen: Boolean,
})

</script>




<style scoped>
    
</style>

