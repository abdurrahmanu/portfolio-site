<template>
    <div id="projects" class="py-8 sm:py-10 dark:bg-neutral-900 w-fit m-auto">
        <h1 class="text-center font-mono text-xl font-bold md:text-2xl dark:text-slate-300 pb-5 md:pb-10">PROJECTS</h1>
        <div class="md:grid-cols-2 grid gap-6">
            <Project
            @closeProjectImage="closeProject"
            @openProjectImage="projects[index].openImage = true"
            v-for="(project, index) in projects" 
            :openImage="project.openImage"
            :index="index" 
            :key="index" 
            :project="project" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Project from './Project.vue';

const projects = ref([
    {
        name: 'vue-reusables',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: '',
        code: 'https://github.com/abdurrahmanu/tic-tac-toe',
        openImage: false,
    },
    {
        name: 'tic-tac-toe',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://myxando.netlify.app',
        code: 'https://github.com/abdurrahmanu/tic-tac-toe',
        openImage: false,
    },
    {
        name: 'learn typing',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://app-speed-typing.netlify.app/',
        code: 'https://github.com/abdurrahmanu/learn-typing',
        openImage: false,
    },
    {
        name: 'instagram-ui',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://cloned-insta.netlify.app/',
        code: 'https://github.com/abdurrahmanu/instagram-clone',
        openImage: false,
    },
    {
        name: 'vue-otp',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://otp-comp.netlify.app',
        code: 'https://github.com/abdurrahmanu/otp-vue',
        openImage: false,
    },
])

const closeProject = () => {
    projects.value.map(project => {
        project.openImage = false
    })
}

</script>