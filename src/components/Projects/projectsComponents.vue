<template>
    <div id="projects" class="py-8 sm:py-10 dark:bg-neutral-900 w-fit m-auto">
        <h1 class="heading">PROJECTS</h1>
        <div class="projects">
            <projectComponent
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
import projectComponent from './projectComponent.vue';

const projects = ref([
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
    {
        name: 'tic-tac-toe',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://myxando.netlify.app',
        code: 'https://github.com/abdurrahmanu/tic-tac-toe',
        openImage: false,
    },
    {
        name: 'advice generator',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://advicegent.netlify.app',
        code: 'https://github.com/abdurrahmanu/Frontend-mentor-Advice-generator',
        openImage: false,
    },
    {
        name: 'expense chart',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://chartt.netlify.app',
        code: 'https://github.com/abdurrahmanu/Frontend-mentor-expenses-chart',
        openImage: false,
    },
    {
        name: 'job filter',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://jobfilters.netlify.app',
        code: 'https://github.com/abdurrahmanu/Frontend-mentor-job-filter',
        openImage: false,
    },
    {
        name: 'learn typing',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://app-speed-typing.netlify.app/',
        code: 'https://github.com/abdurrahmanu/learn-typing',
        openImage: false,
    },
])

const closeProject = () => {
    projects.value.map(project => {
        project.openImage = false
    })
}

</script>

<style scoped>
.heading {
    @apply text-center font-mono text-3xl font-bold md:text-5xl dark:text-slate-300 pb-5 md:pb-10
}

.projects {
    @apply md:grid-cols-3 grid gap-6 
}
</style>