<template>
    <h1 class="text-center font-mono text-3xl font-bold md:text-5xl bg-gray-900 text-white p-4 ">PROJECTS</h1>
    <div ref="container" id="projects" 
    class=""
    :class="{'flex py-10 p-3 flex-wrap gap-5 gap-y-9 justify-center': isBigScreen,
    'grid justify-center' : midScreen}">
        <projectComponent  
        v-for="(project, index) in projects" 
        :index="index" 
        :key="index" 
        :project="project" />
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

const projects = ref([
    {
        name: 'Instagram',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: '',
        code: ''
    },
    {
        name: 'Calculator',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: '',
        code: ''
    },
    {
        name: 'Tic-tac-toe',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: '',
        code: ''
    },
    {
        name: 'Instagram',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: '',
        code: ''
    },
    {
        name: 'Instagram',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: '',
        code: ''
    },
    {
        name: 'Instagram',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: '',
        code: ''
    },
    {
        name: 'Instagram',
        stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS', 'VueJS'],
        link: '',
        code: ''
    }
])

const emit = defineEmits(['inView'])

onMounted(() => {
    const { emitBoolean } = useOverlapNavBar(container.value)
    window.addEventListener('scroll', event => {
        if (emitBoolean.value) {
            emit('inView', 'gray')
        }
    })
})


</script>

<style lang="scss" scoped>

</style>