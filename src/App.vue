<script setup>
import { onBeforeMount } from 'vue'
import HomeView from './Views/HomeView.vue';
import { useDarkMode } from '../src/store/useDarkMode'
import {storeToRefs} from 'pinia'

const darkMode = useDarkMode()
const {checkLocalStorageForSavedBackground} = darkMode
const {toggleDarkMode} = storeToRefs(darkMode)

onBeforeMount(() => {
    checkLocalStorageForSavedBackground()
})
</script>

<template>
    <div 
    :class="[toggleDarkMode]" 
    class="bg-neutral-600">
        <HomeView />
    </div>
</template>


























