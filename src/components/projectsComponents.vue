<template>
    <div id="projects" class="md:pb-20">
        <div class="h-24 w-full"></div>
        <h1 class="text-center font-mono text-3xl text-white font-bold md:text-5xl pb-5 md:pb-10">PROJECTS</h1>


        <div
        :class="{'max-w-[90%] w-fit flex flex-wrap justify-center gap-10 m-auto': isBigScreen,
        'grid justify-center' : midScreen}" class="">
            <projectComponent
            v-for="(project, index) in projects" 
            :index="index" 
            :key="index" 
            :project="project" />
        </div>

    </div>
</template>

<script setup>
import projectComponent from './projectComponent.vue';
import { useScreenSize } from '../composables/useScreenSize'

const { isBigScreen, midScreen } = useScreenSize()
const projects = [
    {
        name: 'instagram-ui',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://cloned-insta.netlify.app/',
        code: 'https://github.com/abdurrahmanu/instagram-clone',
    },
    {
        name: 'vue-otp',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://otp-comp.netlify.app',
        code: 'https://github.com/abdurrahmanu/otp-vue',
    },
    {
        name: 'tic-tac-toe',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://myxando.netlify.app',
        code: 'https://github.com/abdurrahmanu/tic-tac-toe',
    },
    {
        name: 'advice generator',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://advicegent.netlify.app',
        code: 'https://github.com/abdurrahmanu/Frontend-mentor-Advice-generator',
    },
    {
        name: 'expense chart',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://chartt.netlify.app',
        code: 'https://github.com/abdurrahmanu/Frontend-mentor-expenses-chart',
    },
    {
        name: 'job filter',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://jobfilters.netlify.app',
        code: 'https://github.com/abdurrahmanu/Frontend-mentor-job-filter',
    },
    {
        name: 'learn typing',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: 'http://app-speed-typing.netlify.app/',
        code: 'https://github.com/abdurrahmanu/learn-typing',
    },
]

</script>