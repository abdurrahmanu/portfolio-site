<template>
    <div ref="container" id="skills" class="py-5 bg-gray-900">
        <h2 class="text-white text-3xl font-mono text-center">MY SKILLS</h2>
        <div class="justify-center text-center flex gap-5 flex-wrap py-4 w-[90%] m-auto">
            <skillComponent v-for="(skill, index) in skills" :skill="skill" :svg="svgs[index]" :colour="colours[index]" :key="index" :index="index" />
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits, onMounted, watchEffect } from 'vue';
import skillComponent from './skillComponent.vue';
import { useOverlapNavBar } from '../composables/topOverlapsNavBar'

const container = ref(null)
const emit = defineEmits(['inView'])

onMounted(() => {
    const { emitBoolean } = useOverlapNavBar(container.value)
    window.addEventListener('scroll', event => {
        if (emitBoolean.value) {
            emit('inView', 'gray')
        }
    })
})

const skills = ref(['HTML', 'CSS', 'JavaScript', 'VueJS', 'Git and GitHub', 'TailwindCSS', 'Responsive Design'])
const svgs = ref(['html', 'html', 'javascript', 'vue', 'vue', 'vue', 'vue'])
const colours = ref(['red', 'blue', 'yellow', 'teal', 'gray', 'blue', 'blue'])
</script>

