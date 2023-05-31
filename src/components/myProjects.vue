<template>
    <div id="projects" 
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
import {useScreenSize} from '../composables/useScreenSize'
import { ref } from 'vue';

const { isBigScreen, midScreen} = useScreenSize()

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


</script>

<style lang="scss" scoped>

</style>