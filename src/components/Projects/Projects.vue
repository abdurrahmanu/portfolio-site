<template>
    <div id="projects" class="py-8 sm:py-10 dark:bg-neutral-900 w-fit m-auto">
        <h1 class="text-center font-mono text-xl font-bold md:text-2xl dark:text-slate-300 pb-5 md:pb-10">PROJECTS</h1>
        <div class="flex flex-col space-y-4">
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
        name: 'learn typing',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://dorayi-typing.netlify.app/',
        code: 'https://github.com/abdurrahmanu/learn-typing',
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
        name: 'portfolio',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: window.scrollTo(0,0),
        code: 'https://github.com/abdurrahmanu/portfolio-site.git',
        openImage: false,
    },
    {
        name: 'vue-reusables',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'none',
        code: 'https://github.com/abdurrahmanu/tic-tac-toe',
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