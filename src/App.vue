<script setup>
import { onBeforeMount } from 'vue'
import { useDarkMode } from '../src/store/useDarkMode'
import {storeToRefs} from 'pinia'
import Skills from './components/Skills/Skills.vue';
import AboutMe from './components/Base/AboutMe.vue';
import SendAMessage from './components/SendAMessage.vue'
import Projects from './components/Projects/Projects.vue';
import Header from './components/Base/Header.vue'
import Footer from './components/Base/Footer.vue';

const darkMode = useDarkMode()
const {checkLocalStorageForSavedBackground} = darkMode
const {toggleDarkMode} = storeToRefs(darkMode)

onBeforeMount(() => {
    checkLocalStorageForSavedBackground()
})
</script>

<template>
    <div :class="[toggleDarkMode]" class="bg-neutral-800">
        <div class="bg-slate-200 dark:bg-neutral-900 max-w-[1200px] mx-auto selection:bg-inherit relative">
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <SendAMessage />
            <Footer />
        </div>
    </div>
</template>


























