<template>
    <div class="border-2 border-white rounded-md">
        <div 
        :class="[`hover:bg-gradient-to-br hover:from-${colour}-700 hover:via-${colour}-400 hover:to-white`]"
        class="p-[5px] rounded-md w-fit transition-all duration-200 ">
            <div class="grid justify-center p-5">
                <img class="w-16" :src="'../../public/' + svg + '.svg'" alt="">
            </div>
            <div ref="skillEl" class="p-2 md:text-xl font-bold text-center rounded-md">{{ skill }}</div>
        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref, defineProps, onBeforeMount, onMounted } from 'vue';

const skillEl = ref(null)
onMounted(() => {
    skillEl.value.style.background = color.value
})


const props = defineProps({
    index: Number,
    skill: String,
    svg: String,
    colour: String
})

const color = computed(() => {
    if (props.colour === 'red') {
        return 'red'
    } else if (props.colour === 'blue') {
        return 'blue'
    } else if (props.colour === 'gray') {
        return 'yellow'
    } else if (props.colour === 'teal') {
        return 'pink'
    } else if (props.colour === 'yellow') {
        return 'green'
    }
})

const projects = [
    {
        name: 'instagram-ui',
        description: 'cloned the ui of instagram mobile web app using vue-router for pages routing.',
        link: 'cloned-insta.netlify.app/',
        code: 'https://github/abdurrahmanu/',
    },
    {
        name: 'vue-otp',
        description: 'cloned the ui of instagram mobile web app using vue-router for pages routing.',
        link: 'otp-comp.netlify.app',
        code: 'https://github/abdurrahmanu/',
    },
    {
        name: 'login authentication',
        description: 'cloned the ui of instagram mobile web app using vue-router for pages routing.',
        link: '',
        code: 'https://github/abdurrahmanu/',
    },
    {
        name: 'tic-tac-toe',
        description: 'cloned the ui of instagram mobile web app using vue-router for pages routing.',
        link: '',
        code: 'https://github/abdurrahmanu/',
    },
    {
        name: 'dictionary',
        description: 'cloned the ui of instagram mobile web app using vue-router for pages routing.',
        link: 'vue-dictionary-app.netlify.app/',
        code: 'https://github/abdurrahmanu/',
    },
    {
        name: 'advice generator',
        description: 'cloned the ui of instagram mobile web app using vue-router for pages routing.',
        link: 'advicegent.netlify.app',
        code: 'https://github/abdurrahmanu/',
    },
    {
        name: 'expense chart',
        description: 'cloned the ui of instagram mobile web app using vue-router for pages routing.',
        link: 'chartt.netlify.app',
        code: 'https://github/abdurrahmanu/',
    },
    {
        name: 'job filter',
        description: 'cloned the ui of instagram mobile web app using vue-router for pages routing.',
        link: 'jobfilters.netlify.app',
        code: 'https://github/abdurrahmanu/',
    },
    {
        name: 'learn typing',
        description: 'cloned the ui of instagram mobile web app using vue-router for pages routing.',
        link: 'app-speed-typing.netlify.app/',
        code: 'https://github/abdurrahmanu/',
    },
]

</script>
