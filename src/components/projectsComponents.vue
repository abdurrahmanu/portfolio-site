<template>
    <div id="projects" class="dark:bg-[url('../../public/black-with-white-crack.png')] bg-repeat bg-[url('../../public/white-with-black-crack.png')] py-3" :class="[!flexContainer ? 'md:pb-20' : '']">
        <div class="h-24 w-full"></div>
        <h1 class="text-center font-mono text-3xl font-bold md:text-5xl dark:text-white pb-5 md:pb-10">PROJECTS</h1>
        <div class="flex w-fit m-auto items-center p-3 gap-8">
            <div>
                <button @click="flexProjects" class="dark:bg-black opacity-80 dark:text-white bg-white border dark:border-white border-black p-3 hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white rounded-full px-10 text-xs">{{ flexContainer ? 'COLUMN' : 'ROW' }} VIEW</button>
            </div>
        </div>
        <div
        class="m-auto relative"
        :class="[flexContainer ? 'flex gap-3 overflow-x-scroll dark:bg-black bg-slate-200 py-2 px-3' : '', !flexContainer && !isBigScreen ? 'grid gap-4' : '', flexContainer && isBigScreen ? 'w-[80%]' : '',  !flexContainer && isBigScreen ? 'grid md:grid-cols-[repeat(2,minmax(290px,400px))] lg:grid-cols-[repeat(3,minmax(300px,400px))] gap-y-4 justify-center' : '',]">
            <projectComponent
            v-for="(project, index) in projects" 
            :index="index" 
            :key="index" 
            :project="project" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import projectComponent from './projectComponent.vue';
import { useScreenSize } from '../composables/useScreenSize'

const flexContainer = ref(false)
const { isBigScreen, midScreen } = useScreenSize()

const flexProjects = () => {
    flexContainer.value = !flexContainer.value
}

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