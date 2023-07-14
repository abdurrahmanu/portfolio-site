<template>
    <div class="bg-white">
        <div class="h-[70px] w-full"></div>
        <h1 class="text-center font-mono text-3xl font-bold md:text-5xl p-4">PROJECTS</h1>
        <div ref="container" id="projects" 
        :class="{'flex py-10 flex-wrap gap-5 gap-y-9 justify-center': isBigScreen,
        'grid justify-center' : midScreen}">
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
import { useOverlapNavBar } from '../composables/topOverlapsNavBar';
import { ref, defineEmits, onMounted, watchEffect } from 'vue';

const { isBigScreen, midScreen } = useScreenSize()
const container = ref(null)
const containerTop = ref(null)
const containerBottom = ref(null)

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

const emit = defineEmits(['inView'])

onMounted(() => {
    const { emitBoolean } = useOverlapNavBar(container.value)
    window.addEventListener('scroll', event => {
        if (emitBoolean.value) {
            emit('inView', 'white')
        }
    })
})


</script>

<style lang="scss" scoped>

</style>